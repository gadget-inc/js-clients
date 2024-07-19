import type { FieldSelection } from "@gadgetinc/api-client-core";
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
import { GadgetFieldType } from "./internal/gql/graphql.js";
import type { ModelMetadata } from "./metadata.js";
import { filterAutoTableFieldList, useModelMetadata } from "./metadata.js";
import { useDebouncedSearch } from "./useDebouncedSearch.js";
import { useFindMany } from "./useFindMany.js";
import type { RelatedFieldColumn } from "./utils.js";
import { isRelatedFieldColumn, type ColumnValueType, type ErrorWrapper, type OptionsType, type ReadOperationOptions } from "./utils.js";

export interface TableColumn {
  name: string;
  apiIdentifier: string;
  fieldType: GadgetFieldType;
  getValue: (record: GadgetRecord<any>) => ColumnValueType;
  sortable: boolean;
  relatedField?: TableColumn;
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
  columns?: (string | RelatedFieldColumn)[];
}

export type TableData<Data> =
  | {
      columns: TableColumn[];
      rows: Record<string, ColumnValueType>[];
      data: Data;
      metadata: ModelMetadata;
    }
  | {
      columns: null;
      rows: null;
      data: null;
      metadata: null;
    };

export type TableResult<Data> = [
  TableData<Data> & {
    page: TablePagination;
    fetching: boolean;
    error?: ErrorWrapper;
  } & {
    search: {
      value: string;
      set: (value: string) => void;
      clear: () => void;
    };
  },
  refresh: (opts?: Partial<OperationContext>) => void
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
  const pageSize = options?.pageSize ?? 50;

  const [cursor, setCursor] = useState<string | undefined>(options?.initialCursor);
  const [direction, setDirection] = useState<"forward" | "backward">(options?.initialDirection ?? "forward");

  const clearCursor = useCallback(() => setCursor(undefined), []);

  const { debouncedValue: debouncedSearchValue, ...search } = useDebouncedSearch({ clearCursor });

  const namespace = manager.findMany.namespace;
  const namespaceAsArray: string[] = namespace ? (Array.isArray(namespace) ? namespace : [namespace]) : [];
  const {
    metadata,
    fetching: fetchingMetadata,
    error: metadataError,
  } = useModelMetadata(manager.findMany.modelApiIdentifier, namespaceAsArray);

  const fieldSelectionMap = useMemo(() => {
    if (options?.select) return options.select;

    if (!options?.columns) return undefined; // Use the default selection

    const selectionMap: FieldSelection = {};
    if (!metadata) return selectionMap;

    for (const column of options.columns) {
      if (typeof column === "string") {
        selectionMap[column] = true;
        continue;
      }

      if (isRelatedFieldColumn(column)) {
        // We need to find the related model field from the metadata
        // to determine whether the field is a has-one or has-many relationship,
        // and build the correct selection map for it.
        const fieldMetadata = metadata.fields.find((field) => field.apiIdentifier === column.field);
        if (!fieldMetadata) {
          throw new Error(`Field '${column.field}' not found in metadata`);
        }

        if (
          fieldMetadata.configuration.__typename === "GadgetHasOneConfig" ||
          fieldMetadata.configuration.__typename === "GadgetBelongsToConfig"
        ) {
          selectionMap[column.field] = {
            [column.relatedField]: true,
          };
        } else {
          selectionMap[column.field] = {
            edges: {
              node: {
                [column.relatedField]: true,
              },
            },
          };
        }
      }
    }

    return {
      ...selectionMap,
      id: true,
    };
  }, [metadata, options?.columns, options?.select]);

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

  const [{ data, fetching: dataFetching, error: dataError }, refresh] = useFindMany(manager, {
    ...options,
    ...(variables as any),
    ...(debouncedSearchValue && { search: debouncedSearchValue }),
    select: fieldSelectionMap,
    pause: !metadata, // Don't fetch data until metadata is loaded
  });

  const fields = useMemo(
    () =>
      filterAutoTableFieldList(metadata?.fields, {
        ...options,
        include: fieldSelectionMap && Object.keys(fieldSelectionMap),
      }),
    [fieldSelectionMap, metadata?.fields, options]
  );

  const columns: TableColumn[] = useMemo(() => {
    const columnsMap =
      options?.columns &&
      new Map(
        options.columns.map((column) => {
          if (isRelatedFieldColumn(column)) {
            return [column.field, column.relatedField];
          } else {
            return [column, undefined];
          }
        })
      );

    return fields.map((field) => {
      let relatedField: TableColumn | undefined;
      const relatedFieldColumn = columnsMap?.get(field.apiIdentifier);

      if (relatedFieldColumn) {
        if (
          field.fieldType !== GadgetFieldType.HasOne &&
          field.fieldType !== GadgetFieldType.BelongsTo &&
          field.fieldType !== GadgetFieldType.HasMany
        ) {
          throw new Error(`Field '${field.apiIdentifier}' is not a relationship field`);
        }

        const relatedFieldMetadata =
          field.configuration.__typename === "GadgetHasOneConfig" ||
          field.configuration.__typename === "GadgetBelongsToConfig" ||
          field.configuration.__typename === "GadgetHasManyConfig"
            ? field.configuration.relatedModel?.fields?.find((relatedField) => relatedField.apiIdentifier === relatedFieldColumn)
            : undefined;

        if (!relatedFieldMetadata) {
          throw new Error(`Related field '${relatedFieldColumn}' not found in metadata`);
        }

        relatedField = {
          name: relatedFieldMetadata.name,
          apiIdentifier: relatedFieldMetadata.apiIdentifier,
          fieldType: relatedFieldMetadata.fieldType,
          getValue: (record: GadgetRecord<any>) => {
            return record[field.apiIdentifier]?.[relatedFieldMetadata.apiIdentifier];
          },
          sortable: false,
        };
      }

      return {
        name: field.name,
        apiIdentifier: field.apiIdentifier,
        fieldType: field.fieldType,
        getValue: (record: GadgetRecord<any>) => {
          return record[field.apiIdentifier];
        },
        sortable: "sortable" in field && field.sortable,
        relatedField,
      } as TableColumn;
    });
  }, [fields, options?.columns]);

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

  const isAwaitingDebouncedSearchValue = search.value != debouncedSearchValue;
  const fetching = dataFetching || fetchingMetadata || isAwaitingDebouncedSearchValue;
  const error = dataError || metadataError;
  const page: TablePagination = {
    goToNextPage,
    goToPreviousPage,
    variables,
    pageSize,
    hasNextPage: data?.hasNextPage,
    hasPreviousPage: data?.hasPreviousPage,
  };

  return [
    {
      ...getTableData({ metadata, data, columns }),
      page,
      fetching,
      error,
      search,
    },
    refresh,
  ];
};

const getTableData = (props: { columns?: TableColumn[]; data?: GadgetRecordList<any>; metadata?: ModelMetadata }) => {
  const { columns, data, metadata } = props;

  return metadata && data && columns
    ? {
        rows: getRows({ data, columns }),
        columns,
        data,
        metadata,
      }
    : {
        rows: null,
        columns: null,

        data: null,
        metadata: null,
      };
};

const getRows = (props: { data: GadgetRecordList<any>; columns: TableColumn[] }) => {
  const { columns, data } = props;

  return data.map((record) => {
    const row: Record<string, ColumnValueType> = { id: record.id };
    for (const { apiIdentifier, getValue } of columns) {
      row[apiIdentifier] = getValue(record);
    }
    return row;
  });
};
