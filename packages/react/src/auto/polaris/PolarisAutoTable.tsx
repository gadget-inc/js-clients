import type { FindManyFunction } from "@gadgetinc/api-client-core";
import type { DataTableProps } from "@shopify/polaris";
import { DataTable, Pagination, SkeletonBodyText } from "@shopify/polaris";
import type { ReactNode } from "react";
import React, { useMemo } from "react";
import { FieldType } from "../../metadata.js";
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
    const columnContentTypes: DataTableProps["columnContentTypes"] = Array(columns?.length ?? 0);
    const headings: ReactNode[] = Array(columns?.length ?? 0);
    const sortable: boolean[] = Array(columns?.length ?? 0);

    if (columns) {
      for (const column of columns) {
        columnContentTypes.push(column.fieldType == FieldType.Number ? "numeric" : "text");
        headings.push(column.name);
        sortable.push(column.sortable);
      }
    }

    return { columnContentTypes, headings, sortable };
  }, [metadata]);

  if (fetching && !rows) {
    return <PolarisSkeletonTable columns={polarisTableProps.headings.length} />;
  }

  if (error) {
    return <PolarisErrorDisplay error={error} retry={refresh} />;
  }
  const rowsArray = rows && columns ? rows.map((row) => columns.map((column) => row[column.apiIdentifier])) : [];

  return (
    <DataTable
      {...polarisTableProps}
      rows={rowsArray}
      footerContent={
        <Pagination
          hasNext={page.hasNextPage}
          hasPrevious={page.hasPreviousPage}
          onNext={page.goToNextPage}
          onPrevious={page.goToPreviousPage}
        />
      }
    />
  );
};
