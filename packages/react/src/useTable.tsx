import type { FieldSelection } from "@gadgetinc/api-client-core";
import {
  type DefaultSelection,
  type FindManyFunction,
  type GadgetRecord,
  type LimitToKnownKeys,
  type Select,
} from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { GadgetFieldType } from "./internal/gql/graphql.js";
import type { ModelMetadata } from "./metadata.js";
import { filterAutoTableFieldList, useModelMetadata } from "./metadata.js";
import type { SearchResult } from "./useDebouncedSearch.js";
import type { PaginationResult } from "./useList.js";
import { useList } from "./useList.js";
import type { CustomCellColumn, RelatedFieldColumn } from "./utils.js";
import {
  isCustomCellColumn,
  isRelatedFieldColumn,
  type ColumnValueType,
  type ErrorWrapper,
  type OptionsType,
  type ReadOperationOptions,
} from "./utils.js";

type BaseTableColumn = {
  name: string;
  apiIdentifier: string;
};

type RecordTableColumnValue = BaseTableColumn & {
  fieldType: GadgetFieldType;
  sortable: boolean;
  relatedField?: RecordTableColumnValue;
  getValue: (record: GadgetRecord<any>) => ColumnValueType;
  isCustomCell: false;
};

type CustomTableColumnValue = BaseTableColumn & {
  getValue: (record: GadgetRecord<any>) => ReactNode;
  isCustomCell: true;
  sortable: false;
};

export type TableColumn = RecordTableColumnValue | CustomTableColumnValue;

export type TableRow = Record<string, ColumnValueType | ReactNode>;

export interface TableOptions {
  pageSize?: number;
  initialCursor?: string;
  initialDirection?: "forward" | "backward";
  columns?: (string | RelatedFieldColumn | CustomCellColumn)[];
}

export type TableData<Data> =
  | {
      columns: TableColumn[];
      rows: TableRow[];
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
    page: PaginationResult;
    fetching: boolean;
    error?: ErrorWrapper;
    search: SearchResult;
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
  GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>[]
> => {
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

    return selectionMap;
  }, [metadata, options?.columns, options?.select]);

  const [{ data, fetching: dataFetching, error: dataError, page, search }, refresh] = useList(manager, {
    ...options,
    select: fieldSelectionMap ? { ...fieldSelectionMap, id: true } : undefined,
    pause: !metadata, // Don't fetch data until metadata is loaded
  } as any);

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

    const result: TableColumn[] = fields.map((field) => {
      let relatedField: RecordTableColumnValue | undefined;
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
          isCustomCell: false,
          sortable: false,
        } satisfies RecordTableColumnValue;
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
        isCustomCell: false,
      } satisfies RecordTableColumnValue;
    });

    if (options?.columns) {
      // Add custom cell columns
      for (const custom of options.columns) {
        if (!isCustomCellColumn(custom)) continue;
        result.push({
          name: custom.name,
          apiIdentifier: custom.name,
          isCustomCell: true,
          getValue: (record: GadgetRecord<any>) => custom.render(record),
          sortable: false,
        });
      }
    }

    return result;
  }, [fields, options?.columns]);

  const isAwaitingDebouncedSearchValue = search.value != search.debouncedValue;
  const fetching = dataFetching || fetchingMetadata || isAwaitingDebouncedSearchValue;
  const error = dataError || metadataError;

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

const getTableData = (props: { columns?: TableColumn[]; data?: GadgetRecord<any>[]; metadata?: ModelMetadata }) => {
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

const getRows = (props: { data: GadgetRecord<any>[]; columns: TableColumn[] }) => {
  const { columns, data } = props;

  return data.map((record) => {
    const row: TableRow = { id: record.id };
    for (const { apiIdentifier, getValue } of columns) {
      row[apiIdentifier] = getValue(record);
    }
    return row;
  });
};
