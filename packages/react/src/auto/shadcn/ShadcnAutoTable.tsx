import { type FindManyFunction, type GadgetRecord } from "@gadgetinc/api-client-core";
import * as React from "react";
import { useCallback } from "react";
import { useTable } from "../../useTable.js";
import { type ColumnValueType, type OptionsType } from "../../utils.js";
import { type AutoTableProps } from "../AutoTable.js";
import { validateAutoTableProps } from "../AutoTableValidators.js";
import { defaultCellStyle } from "../shared/defaultTableCellStyle.js";
import type { ShadcnElements } from "./elements.js";
import { makeShadcnAutoTablePagination } from "./table/ShadcnAutoTablePagination.js";
import { makeShadcnAutoTableSearch } from "./table/ShadcnAutoTableSearch.js";
import { makeShadcnAutoTableCellRenderer } from "./table/cells/ShadcnAutoTableCellRenderer.js";

/**
 * Renders a table for a model automatically using Shadcn
 */
export const makeAutoTable = (elements: ShadcnElements) => {
  const { Alert, Skeleton, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } = elements;

  const ShadcnAutoTableCellRenderer = makeShadcnAutoTableCellRenderer(elements);
  const ShadcnAutoTablePagination = makeShadcnAutoTablePagination(elements);
  const ShadcnAutoTableSearch = makeShadcnAutoTableSearch(elements);

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
      selection, // TODO - add record selection and bulk action system
      sort, // TODO - add column sorting

      data: rawRecords, // TODO - use this to get direct record access in callbacks
    } = methods;

    const handleColumnSort = (headingIndex: number) => {
      if (columns) {
        const columnApiIdentifier = columns[headingIndex].field;
        sort.handleColumnSort(columnApiIdentifier);
      }
    };

    const onClickCallback = useCallback(
      (row: any, rawRecord: GadgetRecord<any>) => {
        return () => onClick?.(row, rawRecord);
      },
      [onClick]
    );

    if (error) {
      return <Alert>Error</Alert>;
    }
    if ((fetching && !rows) || !columns) {
      return <Skeleton />;
    }

    return (
      <>
        <div className="rounded-md border">
          {searchable && <ShadcnAutoTableSearch search={search} />}
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => {
                  return <TableHead key={column.identifier}>{column.header}</TableHead>;
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows?.length ? (
                rows.map((row) => (
                  <TableRow key={row.id as string} data-state={"selected"}>
                    {columns.map((column) => (
                      <TableCell key={column.identifier} style={{ ...defaultCellStyle, ...column.style }}>
                        {column.type == "CustomRenderer" ? (
                          (row[column.identifier] as React.ReactNode)
                        ) : (
                          <ShadcnAutoTableCellRenderer column={column} value={row[column.identifier] as ColumnValueType} />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
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
