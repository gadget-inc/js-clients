import {
  type DefaultSelection,
  type FindManyFunction,
  type GadgetRecord,
  type GadgetRecordList,
  type LimitToKnownKeys,
  type Select,
} from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import { useCallback, useMemo, useState } from "react";
import type { GadgetFieldType } from "./internal/gql/graphql.js";
import type { ModelMetadata } from "./metadata.js";
import { filterFieldList, useModelMetadata } from "./metadata.js";
import { useFindMany } from "./useFindMany.js";
import type { ColumnValueType, ErrorWrapper, OptionsType, ReadOperationOptions } from "./utils.js";

export interface TableColumn {
  name: string;
  apiIdentifier: string;
  fieldType: GadgetFieldType;
  getValue: (record: GadgetRecord<any>) => ColumnValueType;
  sortable: boolean;
}

export interface TablePagination {
  hasNextPage: boolean | undefined;
  hasPreviousPage: boolean | undefined;
  variables: {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
  };
  pageSize: number;
  goToNextPage(): void;
  goToPreviousPage(): void;
}

export interface TableOptions {
  pageSize?: number;
  initialCursor?: string;
  initialDirection?: "forward" | "backward";
  include?: string[];
  exclude?: string[];
  fields?: string[];
}

export type TableResult<Data> = [
  (
    | {
        columns: TableColumn[];
        rows: Record<string, ColumnValueType>[];
        data: Data;
        page: TablePagination;
        metadata: ModelMetadata;
        fetching: boolean;
        error?: ErrorWrapper;
      }
    | { columns: null; rows: null; data: null; metadata: null; page: TablePagination; fetching: boolean; error?: ErrorWrapper }
  ),
  (opts?: Partial<OperationContext>) => void
];

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
  GadgetRecordList<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
> => {
  const [cursor, setCursor] = useState<string | undefined>(options?.initialCursor);
  const [direction, setDirection] = useState<"forward" | "backward">(options?.initialDirection ?? "forward");
  const pageSize = options?.pageSize ?? 50;

  let variables;
  if (direction == "forward") {
    variables = {
      first: pageSize,
      after: cursor,
    };
  } else {
    variables = {
      last: pageSize,
      before: cursor,
    };
  }
  // we always need to select the record id for key tracking, add `id`. only add it if there's an explicit selection
  let select = options?.select ? options.select : null;
  if (select) {
    select = { ...select, id: true };
  }

  const [{ data, fetching: dataFetching, error: dataError }, refresh] = useFindMany(manager, {
    ...options,
    ...(variables as any),
    select,
  });

  const namespace = manager.findMany.namespace;
  const namespaceAsArray: string[] = namespace ? (Array.isArray(namespace) ? namespace : [namespace]) : [];
  const {
    metadata: metadata,
    fetching: fetchingMetadata,
    error: metadataError,
  } = useModelMetadata(manager.findMany.modelApiIdentifier, namespaceAsArray);
  const fields = useMemo(() => filterFieldList(metadata?.fields, options), [metadata?.fields, options]);

  const columns: TableColumn[] = useMemo(
    () =>
      fields.map((field) => ({
        name: field.name,
        apiIdentifier: field.apiIdentifier,
        fieldType: field.fieldType,
        getValue: (record: GadgetRecord<any>) => {
          return record[field.apiIdentifier];
        },
        sortable: "sortable" in field && field.sortable,
      })),
    [fields]
  );

  const goToNextPage = useCallback(() => {
    if (data && data.hasNextPage) {
      setDirection("forward");
      setCursor(data.endCursor);
    } else {
      console.warn("can't navigate to next page currently, no next page available");
    }
  }, [data]);

  const goToPreviousPage = useCallback(() => {
    if (data && data.hasPreviousPage) {
      setDirection("backward");
      setCursor(data.startCursor);
    } else {
      console.warn("can't navigate to previous page currently, no previous page available");
    }
  }, [data]);

  const fetching = dataFetching || fetchingMetadata;
  const error = dataError || metadataError;
  const page: TablePagination = {
    goToNextPage,
    goToPreviousPage,
    variables,
    pageSize,
    hasNextPage: data?.hasNextPage,
    hasPreviousPage: data?.hasPreviousPage,
  };

  if (metadata && data && columns) {
    const rows = data.map((record) => {
      const row: Record<string, ColumnValueType> = { id: (record as any).id };
      for (const { apiIdentifier, getValue } of columns) {
        row[apiIdentifier] = getValue(record);
      }
      return row;
    });
    return [{ rows, columns, data, metadata, page, fetching, error }, refresh];
  } else {
    return [{ rows: null, columns: null, data: null, metadata: null, page, fetching, error }, refresh];
  }
};
