import type { FindManyFunction } from "@gadgetinc/api-client-core";
import { BlockStack, DataTable, EmptySearchResult, IndexTable, IndexTableProps, Pagination, SkeletonBodyText } from "@shopify/polaris";
import pluralize from "pluralize";
import React, { useMemo } from "react";
import { useTable } from "../../useTable.js";
import type { OptionsType } from "../../utils";
import type { AutoTableProps } from "../AutoTable";
import { PolarisErrorDisplay } from "./PolarisErrorDisplay.js";

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
  const [{ rows, columns, metadata, fetching, page, error }, refresh] = useTable<GivenOptions, SchemaT, FinderFunction, Options>(
    props.model,
    {
      select: props.select,
    } as any
  );

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

  if (error) {
    return <PolarisErrorDisplay error={error} retry={refresh} />;
  }

  if ((fetching && !rows) || !columns) {
    return <PolarisSkeletonTable columns={polarisTableProps.headings.length} />;
  }

  const resourceName = {
    singular: metadata?.name ?? "",
    plural: metadata ? pluralize(metadata.name) : "",
  };

  return (
    <BlockStack>
      <IndexTable
        {...polarisTableProps}
        resourceName={resourceName}
        emptyState={<EmptySearchResult title={`No ${resourceName.plural} yet`} description={""} withIllustration />}
        loading={fetching}
        hasMoreItems={page.hasNextPage}
        itemCount={rows?.length ?? 0}
      >
        {rows &&
          columns &&
          rows.map((row, index) => (
            <IndexTable.Row key={row.id as string} id={row.id as string} position={index}>
              {columns.map((column) => (
                <IndexTable.Cell key={column.apiIdentifier}>{row[column.apiIdentifier]}</IndexTable.Cell>
              ))}
            </IndexTable.Row>
          ))}
      </IndexTable>
      <Pagination
        hasNext={page.hasNextPage}
        hasPrevious={page.hasPreviousPage}
        onNext={page.goToNextPage}
        onPrevious={page.goToPreviousPage}
      />
    </BlockStack>
  );
};
