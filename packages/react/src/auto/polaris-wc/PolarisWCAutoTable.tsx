import type { OptionsType } from "@gadgetinc/client-hooks";
import type { FindManyFunction, GadgetRecord } from "@gadgetinc/core";
import pluralize from "pluralize";
import type { ReactNode } from "react";
import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import type { TableRow } from "../../use-table/types.js";
import { SelectionType } from "../../useSelectedRecordsController.js";
import { useTable } from "../../useTable.js";
import type { ColumnValueType } from "../../utils.js";
import type { AutoTableProps } from "../AutoTable.js";
import { AutoTableContext } from "../AutoTableContext.js";
import { validateAutoTableProps } from "../AutoTableValidators.js";
import { useTableBulkActions } from "../hooks/useTableBulkActions.js";
import { defaultCellStyle } from "../shared/defaultTableCellStyle.js";
import { PolarisWCAutoTableCellRenderer } from "./tableCells/PolarisWCAutoTableCellRenderer.js";
import { PolarisWCAutoBulkActionModal } from "./tableComponents/PolarisWCAutoBulkActionModal.js";
import { PolarisWCAutoTableBulkActionSelector } from "./tableComponents/PolarisWCAutoTableBulkActionSelector.js";
import { SortableTableHeader } from "./tableComponents/PolarisWCAutoTableHeaders.js";

const PolarisWCSkeletonTable = (props: { columns: number }) => {
  const count = Array.from(Array(props.columns));

  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <s-table>
      <s-table-header-row>
        {count.map((_, i) => (
          <s-table-header key={i} />
        ))}
      </s-table-header-row>
      <s-table-body>
        {Array.from(Array(3)).map((_, rowIndex) => (
          <s-table-row key={rowIndex}>
            {count.map((_, colIndex) => (
              <s-table-cell key={colIndex}>
                <div style={defaultCellStyle}>{".".repeat(dotCount)}</div>
              </s-table-cell>
            ))}
          </s-table-row>
        ))}
      </s-table-body>
    </s-table>
  );
};

export type PolarisWCAutoTableProps<
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"],
> = AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>;

/**
 * Renders a table of records from a given model using Shopify Polaris Web Components
 * @example
 * ```tsx
 * <PolarisWCAutoTable model={api.user} />
 * ```
 * @param props.model - The Gadget model displayed
 */
export const PolarisWCAutoTable = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"],
>(
  props: PolarisWCAutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  const { model } = props;

  validateAutoTableProps(model);

  const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;

  return <PolarisWCAutoTableComponent key={componentKey} {...props} />;
};

const PolarisWCAutoTableComponent = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"],
>(
  props: PolarisWCAutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  const { onClick } = props;
  const searchable = props.searchable ?? true;
  const paginate = props.paginate ?? true;
  const tableId = useId();

  const [methods, refresh] = useTable<GivenOptions, SchemaT, FinderFunction, Options>(props.model, {
    select: props.select,
    columns: props.columns,
    excludeColumns: props.excludeColumns,
    pageSize: props.pageSize,
    live: props.live,
    initialSort: props.initialSort,
    filter: props.filter,
    search: props.searchValue,
    searchable: props.searchable,
  } as any);

  const { columns, rows, page, fetching, error, search, selection, sort, metadata, data: rawRecords } = methods;

  // Search input state
  const [searchInputValue, setSearchInputValue] = useState(search?.value ?? "");
  const searchInputRef = useRef<HTMLElement>(null);

  // Sync search input value with search state
  useEffect(() => {
    if (search?.value !== undefined && search.value !== searchInputValue) {
      setSearchInputValue(search.value);
    }
  }, [search?.value]);

  // Handle search input changes
  useEffect(() => {
    const input = searchInputRef.current;
    if (!input) return;

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      setSearchInputValue(target.value);
      search?.set(target.value);
    };

    input.addEventListener("input", handleInput);
    return () => input.removeEventListener("input", handleInput);
  }, [search]);

  const onClickCallback = useCallback(
    (row: TableRow, rawRecord: GadgetRecord<any>) => {
      return () => onClick?.(row, rawRecord);
    },
    [onClick]
  );

  const { bulkActionOptions, selectedModelActionDetails } = useTableBulkActions({
    model: props.model,
    actions: props.actions,
    excludeActions: props.excludeActions,
  });

  const resourceName = props.resourceName ?? {
    singular: metadata?.name ?? "",
    plural: metadata ? pluralize(metadata.name) : "",
  };

  const selectable = props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable;

  // Track checkbox states for managing selection
  const handleSelectAll = useCallback(
    (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        selection.onSelectionChange(SelectionType.Page, true);
      } else {
        selection.clearAll();
      }
    },
    [selection]
  );

  const handleRowSelect = useCallback(
    (rowId: string) => (e: Event) => {
      const target = e.target as HTMLInputElement;
      selection.onSelectionChange(SelectionType.Single, target.checked, rowId);
    },
    [selection]
  );

  if (!error && ((fetching && !rows) || !columns)) {
    return props.loadingSkeleton ?? <PolarisWCSkeletonTable columns={3} />;
  }

  const hasSelectedRows = selection.recordIds.length > 0;
  const allRowsSelected = rows && rows.length > 0 && selection.recordIds.length === rows.length;

  const showSearch = searchable && search;
  const showBulkActions = hasSelectedRows && bulkActionOptions.length > 0;

  return (
    <AutoTableContext.Provider value={[methods, refresh]}>
      <s-section padding="none" accessibilityLabel={`${resourceName.plural} table section`}>
        {error && (
          <s-box paddingBlockStart="small" paddingBlockEnd="large">
            <s-banner tone="critical">{error.message}</s-banner>
          </s-box>
        )}

        <div style={{ position: "relative" }}>
          <s-table>
            {(showSearch || showBulkActions) && (
              <s-grid
                slot="filters" // Need to use filter slot to properly position this grid in the table container
                gap="small-200"
                gridTemplateColumns={showSearch ? "minmax(0, 420px) auto" : "auto"}
              >
                {showSearch && (
                  <s-text-field
                    ref={searchInputRef as any}
                    label={`Search ${resourceName.plural}`}
                    labelAccessibilityVisibility="exclusive"
                    icon="search"
                    placeholder={`Search ${resourceName.plural}`}
                    value={searchInputValue}
                    disabled={!!error}
                  />
                )}

                {showBulkActions && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "flex-end",
                    }}
                  >
                    <s-text tone="neutral">{selection.recordIds.length} selected</s-text>
                    <PolarisWCAutoTableBulkActionSelector
                      bulkActionOptions={bulkActionOptions}
                      selection={selection}
                      rows={rows ?? []}
                      rawRecords={rawRecords}
                    />
                  </div>
                )}
              </s-grid>
            )}

            {/* Table header */}
            <s-table-header-row>
              {selectable && (
                <s-table-header>
                  <SelectAllCheckbox
                    checked={allRowsSelected ?? false}
                    indeterminate={hasSelectedRows && !allRowsSelected}
                    onChange={handleSelectAll}
                    tableId={tableId}
                  />
                </s-table-header>
              )}
              {columns?.map((column, index) => (
                <SortableTableHeader key={column.identifier} column={column} isPrimary={index === 0} sort={sort} />
              ))}
            </s-table-header-row>

            <s-table-body>
              {rows && rows.length === 0 && !error ? (
                <EmptyStateDummyRow />
              ) : (
                rows &&
                columns &&
                rows.map((row, index) => {
                  const rawRecord = rawRecords?.[index];
                  const rowId = row.id as string;
                  const checkboxId = `row-checkbox-${tableId}-${rowId}`;
                  const isSelected = selection.recordIds.includes(rowId);

                  return (
                    <ClickableTableRow
                      key={rowId}
                      rowId={rowId}
                      checkboxId={checkboxId}
                      selectable={selectable}
                      onClick={onClick ? onClickCallback(row, rawRecord) : undefined}
                    >
                      {selectable && (
                        <s-table-cell>
                          <RowCheckbox id={checkboxId} checked={isSelected} onChange={handleRowSelect(rowId)} />
                        </s-table-cell>
                      )}
                      {columns.map((column) => (
                        <s-table-cell key={column.identifier}>
                          <div style={{ ...defaultCellStyle, ...column.style }}>
                            {column.type === "CustomRenderer" ? (
                              (row[column.identifier] as ReactNode)
                            ) : (
                              <PolarisWCAutoTableCellRenderer column={column} value={row[column.identifier] as ColumnValueType} />
                            )}
                          </div>
                        </s-table-cell>
                      ))}
                    </ClickableTableRow>
                  );
                })
              )}
            </s-table-body>
          </s-table>

          {fetching && <LoadingOverlay />}
          {rows && rows.length === 0 && !error && (
            <EmptyStateOverlay>
              {props.emptyState ?? (
                <s-box padding="large">
                  <s-stack alignItems="center" gap="small">
                    <s-text tone="neutral">No results found</s-text>
                  </s-stack>
                </s-box>
              )}
            </EmptyStateOverlay>
          )}
        </div>

        <PolarisWCAutoBulkActionModal
          model={props.model}
          modelActionDetails={selectedModelActionDetails}
          ids={selection.recordIds}
          clearSelection={selection.clearAll}
        />

        {/* Pagination */}
        {paginate && (page.hasNextPage || page.hasPreviousPage) && (
          <s-box paddingBlockStart="small">
            <s-stack direction="inline" gap="small-100" alignItems="center" justifyContent="center">
              <PaginationButton disabled={!page.hasPreviousPage} onClick={page.goToPreviousPage} direction="previous" />
              <PaginationButton disabled={!page.hasNextPage} onClick={page.goToNextPage} direction="next" />
            </s-stack>
          </s-box>
        )}
      </s-section>
    </AutoTableContext.Provider>
  );
};

/** The clickDelegate needs to be defined for the row to have hover styles. Made so that it does not match the real ID when given a row click callback. */
const DUMMY_CLICK_DELEGATE = "x";

// Clickable table row wrapper that handles onClick via ref
const ClickableTableRow = (props: {
  rowId: string;
  checkboxId: string;
  selectable: boolean;
  onClick?: () => void;
  children: ReactNode;
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !props.onClick) return;

    el.addEventListener("click", props.onClick);
    return () => el.removeEventListener("click", props.onClick!);
  }, [props.onClick]);

  return (
    <s-table-row ref={ref as any} clickDelegate={props.selectable && !props.onClick ? props.checkboxId : DUMMY_CLICK_DELEGATE}>
      {props.children}
    </s-table-row>
  );
};

// Pagination icon button with ref-based click handler (left/right arrows)
const PaginationButton = (props: { disabled: boolean; onClick: () => void; direction: "previous" | "next" }) => {
  const ref = useRef<HTMLButtonElement>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("click", props.onClick);
    return () => el.removeEventListener("click", props.onClick);
  }, [props.onClick]);

  const icon = props.direction === "previous" ? "arrow-left" : "arrow-right";
  const accessibilityLabel = props.direction === "previous" ? "Previous" : "Next";

  return (
    <s-button
      ref={ref as any}
      variant="secondary"
      icon={icon}
      accessibilityLabel={accessibilityLabel}
      disabled={props.disabled ? true : undefined}
    />
  );
};

// Checkbox components with proper event handling for web components
const SelectAllCheckbox = (props: { checked: boolean; indeterminate: boolean; onChange: (e: Event) => void; tableId: string }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("change", props.onChange);
    return () => el.removeEventListener("change", props.onChange);
  }, [props.onChange]);

  return (
    <s-checkbox
      ref={ref as any}
      id={`select-all-${props.tableId}`}
      checked={props.checked ? true : undefined}
      indeterminate={props.indeterminate ? true : undefined}
      accessibilityLabel="Select all rows"
    />
  );
};

const RowCheckbox = (props: { id: string; checked: boolean; onChange: (e: Event) => void }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("change", props.onChange);
    return () => el.removeEventListener("change", props.onChange);
  }, [props.onChange]);

  return <s-checkbox ref={ref as any} id={props.id} checked={props.checked ? true : undefined} accessibilityLabel="Select row" />;
};

const LoadingOverlay = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <s-spinner accessibilityLabel="Loading" size="large" />
    </div>
  );
};

const EmptyStateOverlay = (props: { children: ReactNode }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      {props.children}
    </div>
  );
};

const EmptyStateDummyRow = () => {
  return (
    <s-table-row>
      <s-table-cell>
        <div style={{ minHeight: "120px" }} aria-hidden />
      </s-table-cell>
    </s-table-row>
  );
};
