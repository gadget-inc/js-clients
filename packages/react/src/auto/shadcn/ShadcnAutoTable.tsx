import { type FindManyFunction, type GadgetRecord } from "@gadgetinc/api-client-core";
import pluralize from "pluralize";
import * as React from "react";
import { useCallback, useMemo, useRef } from "react";
import type { SortState, TableColumn, TableRow } from "../../use-table/types.js";
import { SelectionType, type RecordSelection } from "../../useSelectedRecordsController.js";
import { useTable } from "../../useTable.js";
import { type ColumnValueType, type OptionsType } from "../../utils.js";
import { type AutoTableProps } from "../AutoTable.js";
import { validateAutoTableProps } from "../AutoTableValidators.js";
import { useHover } from "../hooks/useHover.js";
import { useTableBulkActions } from "../hooks/useTableBulkActions.js";
import { defaultCellStyle } from "../shared/defaultTableCellStyle.js";
import type { ShadcnElements } from "./elements.js";
import { makeShadcnAutoLoadingIndicator } from "./table/ShadcnAutoLoadingIndicator.js";
import { makeShadcnAutoTableBulkActionModal } from "./table/ShadcnAutoTableBulkActionModal.js";
import { makeShadcnAutoTableBulkActionSelector } from "./table/ShadcnAutoTableBulkActionSelector.js";
import { makeShadcnAutoTableColumnSortIndicator } from "./table/ShadcnAutoTableColumnSortIndicator.js";
import { makeShadcnAutoTablePagination } from "./table/ShadcnAutoTablePagination.js";
import { makeShadcnAutoTableSearch } from "./table/ShadcnAutoTableSearch.js";
import { makeShadcnAutoTableCellRenderer } from "./table/cells/ShadcnAutoTableCellRenderer.js";

/**
 * Renders a table for a model automatically using Shadcn
 */
export const makeAutoTable = (elements: ShadcnElements) => {
  const { Alert, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Label, Checkbox } = elements;

  const ShadcnAutoTableCellRenderer = makeShadcnAutoTableCellRenderer(elements);
  const ShadcnAutoTablePagination = makeShadcnAutoTablePagination(elements);
  const ShadcnAutoTableSearch = makeShadcnAutoTableSearch(elements);
  const ShadcnAutoTableColumnSortIndicator = makeShadcnAutoTableColumnSortIndicator(elements);
  const ShadcnAutoTableBulkActionSelector = makeShadcnAutoTableBulkActionSelector(elements);
  const ShadcnAutoTableBulkActionModal = makeShadcnAutoTableBulkActionModal(elements);
  const ShadcnAutoLoadingIndicator = makeShadcnAutoLoadingIndicator(elements);

  function AutoTableSelectAllCheckbox(props: { selection: RecordSelection; rows: TableRow[] }) {
    const { selection, rows } = props;
    return (
      <>
        <Checkbox
          id="AutoTableSelectAllCheckbox"
          checked={selection.recordIds.length === rows?.length ? true : selection.recordIds.length > 0 ? "indeterminate" : false}
          onCheckedChange={(value) => selection.onSelectionChange(SelectionType.Page, !!value)}
          onClick={(e) => e.stopPropagation()}
        />
      </>
    );
  }

  function AutoTableColumnHeaders(props: { columns: TableColumn[]; sort: SortState }) {
    const { columns, sort } = props;

    return (
      <>
        {columns.map((column) => (
          <AutoTableColumnHeader key={column.identifier} column={column} sort={sort} />
        ))}
      </>
    );
  }
  function AutoTableColumnHeader(props: { column: TableColumn; sort: SortState }) {
    const { column, sort } = props;

    const [isHovered, hoverProps] = useHover();

    return (
      <>
        <TableHead key={column.identifier} {...hoverProps}>
          <div className="flex flex-row items-center gap-2">
            <Label>{column.header}</Label>
            <ShadcnAutoTableColumnSortIndicator column={column} sortState={sort} isHovered={isHovered} />
          </div>
        </TableHead>
      </>
    );
  }

  function AutoTableSingleRowCheckbox(props: {
    row: TableRow;
    selection: RecordSelection;
    toggleRecordSelection: (rowId: string) => void;
  }) {
    const { row, selection, toggleRecordSelection } = props;
    return (
      <TableCell>
        <Checkbox
          id={`AutoTableSingleRowCheckbox-${row.id as string}`}
          checked={selection.recordIds.includes(row.id as string)}
          onClick={(e) => {
            toggleRecordSelection(row.id as string);
            e.stopPropagation();
          }}
        />
      </TableCell>
    );
  }

  function AutoTableRowData(props: { row: TableRow; columns: TableColumn[] }) {
    const { row, columns } = props;
    return (
      <>
        {columns.map((column) => (
          <TableCell key={column.identifier} style={{ ...defaultCellStyle, ...column.style }}>
            {column.type == "CustomRenderer" ? (
              (row[column.identifier] as React.ReactNode)
            ) : (
              <ShadcnAutoTableCellRenderer column={column} value={row[column.identifier] as ColumnValueType} />
            )}
          </TableCell>
        ))}
      </>
    );
  }

  function ShadcnAutoTableComponent<
    GivenOptions extends OptionsType,
    SchemaT,
    FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
    Options extends FinderFunction["optionsType"]
  >(props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>) {
    const { onClick, searchable = true, paginate = true } = props;

    const [methods, refresh] = useTable<GivenOptions, SchemaT, FinderFunction, Options>(props.model, {
      select: props.select,
      columns: props.columns,
      excludeColumns: props.excludeColumns,
      pageSize: props.pageSize,
      live: props.live,
      initialSort: props.initialSort,
      filter: props.filter,
      search: props.searchValue,
    } as any);

    const {
      columns,
      rows,

      page,
      search,
      fetching, // TODO - add a loading state
      error, // TODO - add an error state
      selection,
      sort,
      metadata,
      data: rawRecords,
    } = methods;

    const onClickCallback = useCallback(
      (row: any, rawRecord: GadgetRecord<any>) => {
        return () => onClick?.(row, rawRecord);
      },
      [onClick]
    );

    const toggleRecordSelection = useCallback(
      (rowId: string) => {
        selection.onSelectionChange(SelectionType.Single, !selection.recordIds.includes(rowId), rowId);
      },
      [selection]
    );

    const resourceName = useMemo(
      () =>
        props.resourceName ?? {
          singular: metadata?.name ?? "",
          plural: metadata ? pluralize(metadata.name) : "",
        },
      [props.resourceName, metadata]
    );
    const { bulkActionOptions, selectedModelActionDetails } = useTableBulkActions({
      model: props.model,
      actions: props.actions,
      excludeActions: props.excludeActions,
    });
    const canSelectRecords = props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable;
    const hasSelectedRecords = selection.recordIds.length > 0;
    const tableRef = useRef<HTMLDivElement>(null);

    if (error) {
      return <Alert>Error</Alert>;
    }
    if ((fetching && !rows) || !columns) {
      return <Skeleton />;
    }

    return (
      <>
        <div className="rounded-md border sticky" ref={tableRef}>
          <ShadcnAutoTableBulkActionModal
            model={props.model}
            modelActionDetails={selectedModelActionDetails}
            ids={selection.recordIds}
            clearSelection={selection.clearAll}
          />

          {searchable && <ShadcnAutoTableSearch search={search} />}
          {hasSelectedRecords && (
            <div className="absolute flex flex-row items-center w-[100%] pl-2 bg-white border-b z-10">
              <AutoTableSelectAllCheckbox selection={selection} rows={rows} />
              <Label className="ml-2">{`${selection.recordIds.length} selected`}</Label>

              <div className="flex flex-row ml-auto gap-2 items-center">
                <ShadcnAutoTableBulkActionSelector bulkActionOptions={bulkActionOptions} selection={selection} rows={rows} />
              </div>
            </div>
          )}
          <Table>
            <TableHeader>
              <TableRow className={`${hasSelectedRecords ? "opacity-0" : ""}`}>
                {canSelectRecords && (
                  <TableHead>
                    <AutoTableSelectAllCheckbox selection={selection} rows={rows} />
                  </TableHead>
                )}
                <AutoTableColumnHeaders columns={columns} sort={sort} />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows?.length ? (
                rows.map((row, index) => (
                  <TableRow
                    key={row.id as string}
                    className={`${canSelectRecords || onClick ? "cursor-pointer" : ""}`}
                    data-state={"selected"}
                    onClick={onClick ? onClickCallback(row, rawRecords?.[index]) : () => toggleRecordSelection(row.id as string)}
                  >
                    {canSelectRecords && (
                      <AutoTableSingleRowCheckbox row={row} selection={selection} toggleRecordSelection={toggleRecordSelection} />
                    )}
                    <AutoTableRowData row={row} columns={columns} />
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    {props.emptyState ?? `No ${resourceName.plural} yet`}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          {paginate && <ShadcnAutoTablePagination page={page} />}
        </div>
      </>
    );
  }

  return <
    GivenOptions extends OptionsType,
    SchemaT,
    FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
    Options extends FinderFunction["optionsType"]
  >(
    props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
  ) => {
    const { model } = props;
    validateAutoTableProps(model);
    const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;

    return (
      <>
        <ShadcnAutoTableComponent key={componentKey} {...props} />
      </>
    );
  };
};
