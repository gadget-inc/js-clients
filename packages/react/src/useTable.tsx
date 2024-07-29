import type { SortOrder } from "@gadgetinc/api-client-core";
import {
  type DefaultSelection,
  type FindManyFunction,
  type GadgetRecord,
  type LimitToKnownKeys,
  type Select,
} from "@gadgetinc/api-client-core";
import { useCallback, useMemo, useState } from "react";
import { useModelMetadata } from "./metadata.js";
import { useList } from "./useList.js";
import { getTableColumns, getTableRows, getTableSelectionMap, getTableSpec } from "./useTableUtils/helpers.js";
import type { TableOptions, TableResult } from "./useTableUtils/types.js";
import { type OptionsType, type ReadOperationOptions } from "./utils.js";

/**
 * Headless React hook for powering a table showing a page of Gadget records from the backend, optionally sorted, filtered, searched, and selected from. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be a `GadgetRecordList` object holding the list of returned records and pagination info.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * TODO
 * ```
 */
export const useTable = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends F["optionsType"] & ReadOperationOptions & TableOptions
>(
  manager: { findMany: F },
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions & TableOptions>
): TableResult<
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>[]
> => {
  const namespace = manager.findMany.namespace;
  const namespaceAsArray: string[] = namespace ? (Array.isArray(namespace) ? namespace : [namespace]) : [];
  const {
    metadata,
    fetching: fetchingMetadata,
    error: metadataError,
  } = useModelMetadata(manager.findMany.modelApiIdentifier, namespaceAsArray);
  const [sort, setSort] = useState<OptionsType["sort"] | undefined>(options?.sort);

  const sortColumn = useCallback((colName: string, direction?: SortOrder) => {
    if (direction) {
      setSort({ [colName]: direction });
    } else {
      setSort(undefined);
    }
  }, []);

  const tableSpec = useMemo(
    () => metadata && getTableSpec(metadata.fields, options?.columns, options?.excludeColumns, manager.findMany.defaultSelection),
    [manager.findMany.defaultSelection, metadata, options?.columns, options?.excludeColumns]
  );

  const selectionMap = useMemo(() => tableSpec && getTableSelectionMap(tableSpec), [tableSpec]);

  const [{ data, fetching: dataFetching, error: dataError, page, search, selection }, refresh] = useList(manager, {
    ...options,
    sort: sort,
    filter: options?.filter,
    select: selectionMap,
    pause: !metadata, // Don't fetch data until metadata is loaded
  } as any);

  const tableData = useMemo(() => {
    return tableSpec && data && metadata
      ? {
          rows: getTableRows(tableSpec, data),
          columns: getTableColumns(tableSpec),
          data,
          metadata,
        }
      : {
          rows: null,
          columns: null,
          data: null,
          metadata: null,
        };
  }, [data, metadata, tableSpec]);

  const isAwaitingDebouncedSearchValue = search.value != search.debouncedValue;
  const fetching = dataFetching || fetchingMetadata || isAwaitingDebouncedSearchValue;
  const error = dataError || metadataError;

  return [
    {
      ...tableData,
      page,
      fetching,
      error,
      search,
      sort: sortColumn,
      selection,
    },
    refresh,
  ];
};
