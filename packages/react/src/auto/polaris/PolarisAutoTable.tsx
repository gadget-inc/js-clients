import type { FindManyFunction } from "@gadgetinc/api-client-core";
import type { IndexTableProps } from "@shopify/polaris";
import {
  BlockStack,
  DataTable,
  EmptySearchResult,
  IndexFilters,
  IndexTable,
  SkeletonBodyText,
  useSetIndexFiltersMode,
} from "@shopify/polaris";
import pluralize from "pluralize";
import React, { useMemo } from "react";
import { useTable } from "../../useTable.js";
import type { OptionsType } from "../../utils.js";
import type { AutoTableProps } from "../AutoTable.js";
import { PolarisAutoTableCellRenderer } from "./tableCells/PolarisAutoTableCellRenderer.js";

const PolarisSkeletonTable = (props: { columns: number }) => {
  const count = Array.from(Array(props.columns));
  return (
    <DataTable
      columnContentTypes={count.map(() => "text")}
      headings={count.map((i) => (
        <SkeletonBodyText key={i} lines={1} />
      ))}
      rows={Array.from(Array(3)).map((_) => count.map((i) => <SkeletonBodyText key={i} lines={1} />))}
    />
  );
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
  const [
    {
      rows,
      columns,

      metadata,

      fetching,
      error,

      page,
      search,
    },
    refresh,
  ] = useTable<GivenOptions, SchemaT, FinderFunction, Options>(props.model, {
    select: props.select,
  } as any);

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

  if ((fetching && !rows) || !columns) {
    return <PolarisSkeletonTable columns={polarisTableProps.headings.length} />;
  }

  const resourceName = {
    singular: metadata?.name ?? "",
    plural: metadata ? pluralize(metadata.name) : "",
  };

  return (
    <BlockStack>
      <IndexFilters
        filteringAccessibilityTooltip="Search and filter (F)"
        mode={mode}
        setMode={setMode}
        appliedFilters={[]}
        filters={[]}
        onClearAll={() => undefined}
        tabs={[]}
        selected={1}
        loading={fetching}
        cancelAction={{
          onAction: () => search.clear(),
        }}
        // Search
        queryValue={search.value}
        onQueryChange={search.set}
        onQueryClear={search.clear}
      />
      <IndexTable
        {...polarisTableProps}
        resourceName={resourceName}
        emptyState={<EmptySearchResult title={`No ${resourceName.plural} yet`} description={""} withIllustration />}
        loading={fetching}
        hasMoreItems={page.hasNextPage}
        itemCount={rows?.length ?? 0}
        pagination={{
          hasNext: page.hasNextPage,
          hasPrevious: page.hasPreviousPage,
          onNext: page.goToNextPage,
          onPrevious: page.goToPreviousPage,
        }}
      >
        {rows &&
          columns &&
          rows.map((row, index) => (
            <IndexTable.Row key={row.id as string} id={row.id as string} position={index}>
              {columns.map((column) => (
                <IndexTable.Cell key={column.apiIdentifier}>
                  <div style={{ maxWidth: "200px" }}>
                    <PolarisAutoTableCellRenderer column={column} value={row[column.apiIdentifier]} />
                  </div>
                </IndexTable.Cell>
              ))}
            </IndexTable.Row>
          ))}
      </IndexTable>
    </BlockStack>
  );
};
