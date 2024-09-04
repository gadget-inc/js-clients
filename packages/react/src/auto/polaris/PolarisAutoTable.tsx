import type { FindManyFunction, GadgetRecord, SortOrder } from "@gadgetinc/api-client-core";
import type { IndexTableProps } from "@shopify/polaris";
import {
  Banner,
  BlockStack,
  Box,
  DataTable,
  EmptySearchResult,
  IndexFilters,
  IndexTable,
  SkeletonBodyText,
  useSetIndexFiltersMode,
} from "@shopify/polaris";
import pluralize from "pluralize";
import type { ReactNode } from "react";
import React, { useCallback, useMemo } from "react";
import type { TableColumn, TableRow } from "../../use-table/types.js";
import { useTable } from "../../useTable.js";
import type { ColumnValueType, OptionsType } from "../../utils.js";
import type { AutoTableProps } from "../AutoTable.js";
import { AutoTableContext } from "../AutoTableContext.js";
import type { BulkActionOption } from "../hooks/useTableBulkActions.js";
import { useTableBulkActions } from "../hooks/useTableBulkActions.js";
import { PolarisAutoBulkActionModal } from "./PolarisAutoBulkActionModal.js";
import { PolarisAutoTableCellRenderer } from "./tableCells/PolarisAutoTableCellRenderer.js";

const PolarisSkeletonTable = (props: { columns: number }) => {
  const count = Array.from(Array(props.columns));
  return (
    <DataTable
      columnContentTypes={count.map(() => "text")}
      headings={count.map((i) => (
        <Box width="100px" key={i}>
          <SkeletonBodyText lines={1} />
        </Box>
      ))}
      rows={Array.from(Array(3)).map((_) => count.map((i) => <SkeletonBodyText key={i} lines={1} />))}
    />
  );
};
const gadgetToPolarisDirection = (direction?: SortOrder) => {
  if (direction === "Ascending") {
    return "ascending";
  } else if (direction === "Descending") {
    return "descending";
  }
  return undefined;
};

const getColumnIndex = (columns: TableColumn[], apiIdentifier: string | undefined) => {
  return columns.findIndex((column) => column.field === apiIdentifier);
};

/**
 * Renders a table of records from the backend automatically for a given model using Polaris
 */
export const PolarisAutoTable = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"]
>(
  props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  const { model } = props;
  const componentKey = `${[model.findMany.namespace, model.findMany.modelApiIdentifier].join("_")}AutoTable`;

  return <PolarisAutoTableComponent key={componentKey} {...props} />;
};

const PolarisAutoTableComponent = <
  GivenOptions extends OptionsType,
  SchemaT,
  FinderFunction extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends FinderFunction["optionsType"]
>(
  props: AutoTableProps<GivenOptions, SchemaT, FinderFunction, Options>
) => {
  const { onClick } = props;
  const searchable = props.searchable ?? true;
  const paginate = props.paginate ?? true;

  const [methods, refresh] = useTable<GivenOptions, SchemaT, FinderFunction, Options>(props.model, {
    select: props.select,
    columns: props.columns,
    excludeColumns: props.excludeColumns,
    pageSize: props.pageSize,
    live: props.live,
    initialSort: props.initialSort,
    filter: props.filter,
  } as any);

  const { columns, rows, page, fetching, error, search, selection, sort, metadata, data: rawRecords } = methods;

  const handleColumnSort = (headingIndex: number) => {
    if (columns) {
      const columnApiIdentifier = columns[headingIndex].field;
      sort.handleColumnSort(columnApiIdentifier);
    }
  };

  const onClickCallback = useCallback(
    (row: TableRow, rawRecord: GadgetRecord<any>) => {
      return () => onClick?.(row, rawRecord);
    },
    [onClick]
  );

  const { mode, setMode } = useSetIndexFiltersMode();

  const polarisTableProps = useMemo(() => {
    const headings = [] as unknown as IndexTableProps["headings"];
    const sortable: boolean[] = [];

    if (columns) {
      for (const column of columns) {
        headings.push({ title: column.header });
        sortable.push(column.sortable);
      }
    }

    return { headings, sortable };
  }, [columns]);

  const { bulkActionOptions, selectedModelActionDetails } = useTableBulkActions({
    model: props.model,
    actions: props.actions,
    excludeActions: props.excludeActions,
  });

  const resourceName = props.resourceName ?? {
    singular: metadata?.name ?? "",
    plural: metadata ? pluralize(metadata.name) : "",
  };

  const selectedRows = (rows ?? []).filter((row) => selection.recordIds.includes(row.id as string));

  const promotedBulkActions = useMemo(
    () => bulkActionOptions.filter((option) => option.promoted).map(bulkActionOptionMapper(selectedRows)),
    [bulkActionOptions, selectedRows]
  );

  const bulkActions = useMemo(
    () => bulkActionOptions.filter((option) => !option.promoted).map(bulkActionOptionMapper(selectedRows)),
    [bulkActionOptions, selectedRows]
  );

  if (!error && ((fetching && !rows) || !columns)) {
    return <PolarisSkeletonTable columns={3} />;
  }

  return (
    <AutoTableContext.Provider value={[methods, refresh]}>
      <BlockStack>
        <PolarisAutoBulkActionModal
          model={props.model}
          modelActionDetails={selectedModelActionDetails}
          ids={selection.recordIds}
          selectedRows={selectedRows}
        />
        {searchable && (
          <IndexFilters
            mode={mode}
            setMode={setMode}
            appliedFilters={[]}
            filters={[]}
            onClearAll={() => undefined}
            tabs={[]}
            canCreateNewView={false}
            selected={1}
            loading={fetching}
            cancelAction={{ onAction: () => search.clear() }}
            disabled={!!error}
            // Search
            queryValue={search.value}
            onQueryChange={search.set}
            onQueryClear={search.clear}
          />
        )}

        {error && (
          <Box paddingBlockStart="200" paddingBlockEnd="1000">
            <Banner title={error.message} tone="critical" />
          </Box>
        )}

        <IndexTable
          selectedItemsCount={selection.recordIds.length}
          {...disablePaginatedSelectAllButton}
          onSelectionChange={selection.onSelectionChange}
          {...polarisTableProps}
          promotedBulkActions={promotedBulkActions.length ? promotedBulkActions : undefined}
          bulkActions={bulkActions.length ? bulkActions : undefined}
          resourceName={resourceName}
          emptyState={props.emptyState ?? <EmptySearchResult title={`No ${resourceName.plural} yet`} description={""} withIllustration />}
          loading={fetching}
          hasMoreItems={page.hasNextPage}
          itemCount={
            error
              ? 1 // Don't show the empty state if there's an error
              : rows?.length ?? 0
          }
          pagination={
            paginate
              ? {
                  hasNext: page.hasNextPage,
                  hasPrevious: page.hasPreviousPage,
                  onNext: page.goToNextPage,
                  onPrevious: page.goToPreviousPage,
                }
              : undefined
          }
          sortDirection={gadgetToPolarisDirection(sort.direction)}
          sortColumnIndex={columns ? getColumnIndex(columns, sort.column) : undefined}
          onSort={(headingIndex) => handleColumnSort(headingIndex)}
          selectable={props.selectable === undefined ? bulkActionOptions.length !== 0 : props.selectable}
          lastColumnSticky={props.lastColumnSticky}
          hasZebraStriping={props.hasZebraStriping}
          condensed={props.condensed}
        >
          {rows &&
            columns &&
            rows.map((row, index) => {
              const rawRecord = rawRecords?.[index];
              return (
                <IndexTable.Row
                  key={row.id as string}
                  id={row.id as string}
                  position={index}
                  onClick={onClick ? onClickCallback(row, rawRecord) : undefined}
                  selected={selection.recordIds.includes(row.id as string)}
                >
                  {columns.map((column) => (
                    <IndexTable.Cell key={column.identifier}>
                      <div style={{ maxWidth: "200px" }}>
                        {column.type == "CustomRenderer" ? (
                          (row[column.identifier] as ReactNode)
                        ) : (
                          <PolarisAutoTableCellRenderer column={column} value={row[column.identifier] as ColumnValueType} />
                        )}
                      </div>
                    </IndexTable.Cell>
                  ))}
                </IndexTable.Row>
              );
            })}
        </IndexTable>
      </BlockStack>
    </AutoTableContext.Provider>
  );
};

const disablePaginatedSelectAllButton = {
  paginatedSelectAllActionText: "", // Empty string to hide the select all button. We only allow selection on the current page
};

const bulkActionOptionMapper = (selectedRows: TableRow[]) => {
  return (option: BulkActionOption) => ({
    id: option.humanizedName,
    content: option.humanizedName,
    onAction: option.action ? () => option.action?.(selectedRows) : option.selectModelAction ?? (() => undefined),
  });
};
