import { type FindManyFunction, type GadgetRecord } from "@gadgetinc/api-client-core";
import * as React from "react";
import { useCallback, useMemo } from "react";
import type { SortState, TableColumn, TableRow } from "../../use-table/types.js";
import { SelectionType, type RecordSelection } from "../../useSelectedRecordsController.js";
import { useTable } from "../../useTable.js";
import { type ColumnValueType, type OptionsType } from "../../utils.js";
import { type AutoTableProps } from "../AutoTable.js";
import { validateAutoTableProps } from "../AutoTableValidators.js";
import { useHover } from "../hooks/useHover.js";
import { useTableBulkActions } from "../hooks/useTableBulkActions.js";
import type { ShadcnElements } from "./elements.js";
import { makeShadcnAutoLoadingIndicator } from "./table/ShadcnAutoLoadingIndicator.js";
import { makeShadcnAutoTableBulkActionModal } from "./table/ShadcnAutoTableBulkActionModal.js";
import { makeShadcnAutoTableBulkActionSelector } from "./table/ShadcnAutoTableBulkActionSelector.js";
import { makeShadcnAutoTableColumnSortIndicator } from "./table/ShadcnAutoTableColumnSortIndicator.js";
import { makeShadcnAutoTablePagination } from "./table/ShadcnAutoTablePagination.js";
import { makeShadcnAutoTableSearch } from "./table/ShadcnAutoTableSearch.js";
import { makeShadcnAutoTableCellRenderer } from "./table/cells/ShadcnAutoTableCellRenderer.js";

export type ShadcnAutoTableProps<
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"]
> = AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>;

/**
 * Renders a table for a model automatically using Shadcn
 */
export const makeAutoTable = (elements: ShadcnElements) => {
  const { Alert, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Label, Checkbox, Button } = elements;

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
          checked={
            selection.recordIds.length === rows?.length && rows?.length > 0
              ? true
              : selection.recordIds.length > 0
              ? "indeterminate"
              : false
          }
          onCheckedChange={(value) => selection.onSelectionChange(SelectionType.Page, !!value)}
          onClick={(e) => e.stopPropagation()}
        />
      </>
    );
  }

  function AutoTableColumnHeaders(props: {
    columns: TableColumn[];
    sort: SortState;
    canSelectRecords?: boolean;
    selection: RecordSelection;
    rows: TableRow[];
  }) {
    const { columns, sort, canSelectRecords, selection, rows } = props;

    const [isHovered, hoverProps] = useHover();
    return (
      <>
        <TableRow {...hoverProps} className="bg-background hover:bg-muted">
          {canSelectRecords && (
            <TableHead className={`sticky left-0 z-30 bg-${isHovered ? "muted" : "background"}`}>
              <AutoTableSelectAllCheckbox selection={selection} rows={rows} />
            </TableHead>
          )}

          {columns.map((column, i) => (
            <AutoTableColumnHeader
              key={column.identifier}
              column={column}
              sort={sort}
              canSelectRecords={canSelectRecords}
              isRowHovered={isHovered}
              shouldBeSticky={i === 0}
            />
          ))}
        </TableRow>
      </>
    );
  }
  function AutoTableColumnHeader(props: {
    column: TableColumn;
    sort: SortState;
    canSelectRecords?: boolean;
    shouldBeSticky?: boolean;
    isRowHovered: boolean;
  }) {
    const { column, sort, canSelectRecords, shouldBeSticky, isRowHovered } = props;

    const [isHovered, hoverProps] = useHover();
    const ColumnHeaderLabel = (
      <>
        <Label>{column.header}</Label>
        <ShadcnAutoTableColumnSortIndicator column={column} sortState={sort} isHovered={isHovered} />
      </>
    );

    const stickyClass = shouldBeSticky ? `sticky left-${canSelectRecords ? "6" : "0"} z-10` : "";

    return (
      <>
        <TableHead key={column.identifier} className={`${stickyClass} bg-${isRowHovered ? "muted" : "background"}`}>
          <div className={`flex flex-row items-center gap-2 z-10 `}>
            {column.sortable ? (
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer"
                onClick={() => sort.handleColumnSort(column.field)}
                {...hoverProps}
              >
                {ColumnHeaderLabel}
              </Button>
            ) : (
              ColumnHeaderLabel
            )}
          </div>
        </TableHead>
      </>
    );
  }
  const getCellBackgroundColor = (isSticky: boolean, isSelected: boolean, isHovered: boolean) => {
    if (isSticky) {
      // unselected sticky gets regular background regardless of hover. Since the hover is partial opacity, we need to overlay it over the normal BG color to make it match the rest of the cell
      return isSelected ? "bg-muted" : "bg-background";
    }
    return isSelected ? "bg-muted" : isHovered ? "bg-muted/50" : "bg-background";
  };

  function AutoTableSingleRowCheckbox(props: {
    row: TableRow;
    isSelected: boolean;
    toggleRecordSelection: (rowId: string) => void;
    isHovered: boolean;
  }) {
    const { row, isSelected, toggleRecordSelection, isHovered } = props;

    return (
      <TableCell className={`sticky left-0 ${getCellBackgroundColor(true, isSelected, isHovered)}`}>
        <Checkbox
          id={`AutoTableSingleRowCheckbox-${row.id as string}`}
          checked={isSelected}
          className="z-100"
          onClick={(e) => {
            toggleRecordSelection(row.id as string);
            e.stopPropagation();
          }}
        />
        {!isSelected && isHovered && <div className={`absolute inset-0 bg-muted/50 z-0`} />}
      </TableCell>
    );
  }

  function AutoTableRowData(props: {
    row: TableRow;
    columns: TableColumn[];
    canSelectRecords?: boolean;
    isSelected: boolean;
    isHovered: boolean;
  }) {
    const { row, columns, canSelectRecords, isSelected, isHovered } = props;

    const rowComponent = useMemo(() => {
      return (
        <>
          {columns.map((column, i) => {
            const isSticky = i === 0;
            return (
              <TableCell
                key={column.identifier}
                style={column.style}
                className={`${
                  isSticky ? `sticky left-${canSelectRecords ? "6" : "0"} z-10` : ``
                } max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap ${getCellBackgroundColor(isSticky, isSelected, isHovered)}`}
              >
                {isSticky && !isSelected && isHovered && <div className={`absolute inset-0 bg-muted/50`} />}
                {column.type == "CustomRenderer" ? (
                  (row[column.identifier] as React.ReactNode)
                ) : (
                  <ShadcnAutoTableCellRenderer column={column} value={row[column.identifier] as ColumnValueType} />
                )}
              </TableCell>
            );
          })}
        </>
      );
    }, [canSelectRecords, columns.map((c) => c.identifier).join(","), Object.values(row).join(","), isSelected, isHovered]);
    return rowComponent;
  }

  function ShadcnAutoTableComponent<
    GivenOptions extends OptionsType,
    SchemaT,
    FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
    Options extends FinderFunction["optionsType"]
  >(props: ShadcnAutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>) {
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

    const { bulkActionOptions, selectedModelActionDetails } = useTableBulkActions({
      model: props.model,
      actions: props.actions,
      excludeActions: props.excludeActions,
    });
    const canSelectRecords = props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable;
    const hasSelectedRecords = selection.recordIds.length > 0;

    const toggleRecordSelection = useCallback(
      (rowId: string) => {
        if (!canSelectRecords) {
          return;
        }
        selection.onSelectionChange(SelectionType.Single, !selection.recordIds.includes(rowId), rowId);
      },
      [selection, canSelectRecords]
    );

    if (error) {
      return <Alert>Error</Alert>;
    }
    if ((fetching && !rows) || !columns) {
      return <Skeleton />;
    }

    return (
      <>
        <ShadcnAutoTableBulkActionModal
          model={props.model}
          modelActionDetails={selectedModelActionDetails}
          ids={selection.recordIds}
          clearSelection={selection.clearAll}
        />

        <div className="flex flex-row gap-2 items-center mb-2">
          {searchable && <ShadcnAutoTableSearch search={search} />}
          {hasSelectedRecords && (
            <div className="ml-auto">
              <div className="flex flex-row ml-auto gap-2 items-center">
                <Label className="ml-2">{`${selection.recordIds.length} selected`}</Label>
                <ShadcnAutoTableBulkActionSelector bulkActionOptions={bulkActionOptions} selection={selection} rows={rows} />
              </div>
            </div>
          )}
        </div>
        <Table className="w-full border-collapse">
          <TableHeader className="sticky top-0 bg-background z-20">
            <AutoTableColumnHeaders columns={columns} sort={sort} canSelectRecords={canSelectRecords} selection={selection} rows={rows} />
          </TableHeader>
          <TableBody className="bg-background">
            {rows?.length > 0 &&
              rows.map((row, index) => (
                <AutoTableRow
                  key={row.id as string}
                  row={row}
                  columns={columns}
                  canSelectRecords={canSelectRecords}
                  toggleRecordSelection={toggleRecordSelection}
                  onClick={onClick ? onClickCallback(row, rawRecords?.[index]) : () => toggleRecordSelection(row.id as string)}
                  isSelected={selection.recordIds.includes(row.id as string)}
                />
              ))}
          </TableBody>
        </Table>

        {rows?.length === 0 && (
          <>{props.emptyState ?? <div className="h-24 text-center flex items-center justify-center">{`No results`}</div>}</>
        )}
        {paginate && <ShadcnAutoTablePagination page={page} />}
      </>
    );
  }

  const AutoTableRow = (props: {
    row: TableRow;
    columns: TableColumn[];
    canSelectRecords?: boolean;
    onClick?: () => void;
    toggleRecordSelection: (rowId: string) => void;
    isSelected: boolean;
  }) => {
    const { row, columns, canSelectRecords, onClick, toggleRecordSelection, isSelected } = props;
    const [isHovered, hoverProps] = useHover();

    return (
      <TableRow
        key={row.id as string}
        className={`${canSelectRecords || onClick ? "cursor-pointer" : ""} `}
        data-state={isSelected ? "selected" : undefined}
        onClick={onClick}
        {...hoverProps}
      >
        {canSelectRecords && (
          <AutoTableSingleRowCheckbox
            row={row}
            isSelected={isSelected}
            toggleRecordSelection={toggleRecordSelection}
            isHovered={isHovered}
          />
        )}
        <AutoTableRowData row={row} columns={columns} canSelectRecords={canSelectRecords} isSelected={isSelected} isHovered={isHovered} />
      </TableRow>
    );
  };

  return <
    GivenOptions extends OptionsType,
    SchemaT,
    FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
    Options extends FinderFunction["optionsType"]
  >(
    props: ShadcnAutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
  ) => {
    const { model } = props;
    validateAutoTableProps(model);
    const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;

    return <ShadcnAutoTableComponent key={componentKey} {...props} />;
  };
};
