import type { FindManyFunction, SortOrder } from "@gadgetinc/api-client-core";
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
import React, { useCallback, useMemo, useState } from "react";
import { useTable } from "../../useTable.js";
import type { TableColumn, TableRow } from "../../useTableUtils/types.js";
import type { ColumnValueType, OptionsType } from "../../utils.js";
import type { AutoTableProps } from "../AutoTable.js";
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
  return columns.findIndex((column) => column.apiIdentifier === apiIdentifier);
};

const getNextDirection = (sortDirection: SortOrder | undefined) => {
  switch (sortDirection) {
    case "Descending":
      return "Ascending";
    case "Ascending":
      return undefined;
    case undefined:
    default:
      return "Descending";
  }
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
  const { onClick } = props;

  const [{ rows, columns, metadata, fetching, error, page, search, sort, selection }, refresh] = useTable<
    GivenOptions,
    SchemaT,
    FinderFunction,
    Options
  >(props.model, {
    select: props.select,
    columns: props.columns,
    pageSize: props.pageSize,
    live: props.live,
    sort: props.defaultSort,
    filter: props.filter,
  } as any);

  const [sortColumnApiIdentifier, setSortColumnApiIdentifier] = useState<string | undefined>(
    props.defaultSort ? Object.keys(props.defaultSort)[0] : undefined
  );
  const [sortDirection, setSortDirection] = useState<SortOrder | undefined>(
    props.defaultSort ? Object.values(props.defaultSort)[0] : undefined
  );

  const handleColumnSort = (headingIndex: number) => {
    if (columns) {
      const columnApiIdentifier = columns[headingIndex].apiIdentifier;
      const nextDirection = columnApiIdentifier !== sortColumnApiIdentifier ? "Descending" : getNextDirection(sortDirection);
      setSortDirection(nextDirection);
      setSortColumnApiIdentifier(nextDirection ? columnApiIdentifier : undefined);
      sort(columnApiIdentifier, nextDirection);
    }
  };

  const onClickCallback = useCallback(
    (row: TableRow) => {
      return () => onClick?.(row);
    },
    [onClick]
  );

  const { mode, setMode } = useSetIndexFiltersMode();

  const polarisTableProps = useMemo(() => {
    const headings = [] as unknown as IndexTableProps["headings"];
    const sortable: boolean[] = [];

    if (columns) {
      for (const column of columns) {
        headings.push({ title: column.name });
        sortable.push(column.sortable);
      }
    }

    return { headings, sortable };
  }, [columns]);

  const { bulkActionOptions, selectedModelActionDetails } = useTableBulkActions({ model: props.model });

  if (!error && ((fetching && !rows) || !columns)) {
    return <PolarisSkeletonTable columns={3} />;
  }

  const resourceName = {
    singular: metadata?.name ?? "",
    plural: metadata ? pluralize(metadata.name) : "",
  };

  return (
    <BlockStack>
      <PolarisAutoBulkActionModal model={props.model} modelActionDetails={selectedModelActionDetails} ids={selection.recordIds} />
      <IndexFilters
        mode={mode}
        setMode={setMode}
        appliedFilters={[]}
        filters={[]}
        onClearAll={() => undefined}
        tabs={[]}
        selected={1}
        loading={fetching}
        cancelAction={{ onAction: () => search.clear() }}
        disabled={!!error}
        // Search
        queryValue={search.value}
        onQueryChange={search.set}
        onQueryClear={search.clear}
      />

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
        bulkActions={bulkActionOptions.map((option) => ({ content: option.humanizedName, onAction: option.selectModelAction }))}
        resourceName={resourceName}
        emptyState={<EmptySearchResult title={`No ${resourceName.plural} yet`} description={""} withIllustration />}
        loading={fetching}
        hasMoreItems={page.hasNextPage}
        itemCount={
          error
            ? 1 // Don't show the empty state if there's an error
            : rows?.length ?? 0
        }
        pagination={{
          hasNext: page.hasNextPage,
          hasPrevious: page.hasPreviousPage,
          onNext: page.goToNextPage,
          onPrevious: page.goToPreviousPage,
        }}
        sortDirection={gadgetToPolarisDirection(sortDirection)}
        sortColumnIndex={columns ? getColumnIndex(columns, sortColumnApiIdentifier) : undefined}
        onSort={(headingIndex) => handleColumnSort(headingIndex)}
      >
        {rows &&
          columns &&
          rows.map((row, index) => (
            <IndexTable.Row
              key={row.id as string}
              id={row.id as string}
              position={index}
              onClick={onClick ? onClickCallback(row) : undefined}
              selected={selection.recordIds.includes(row.id as string)}
            >
              {columns.map((column) => (
                <IndexTable.Cell key={column.apiIdentifier}>
                  <div style={{ maxWidth: "200px" }}>
                    {column.isCustomCell ? (
                      column.getValue(row)
                    ) : (
                      <PolarisAutoTableCellRenderer column={column} value={row[column.apiIdentifier] as ColumnValueType} />
                    )}
                  </div>
                </IndexTable.Cell>
              ))}
            </IndexTable.Row>
          ))}
      </IndexTable>
    </BlockStack>
  );
};

const disablePaginatedSelectAllButton = {
  paginatedSelectAllActionText: "", // Empty string to hide the select all button. We only allow selection on the current page
};
