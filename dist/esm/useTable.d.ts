import { type DefaultSelection, type FindManyFunction, type GadgetRecord, type LimitToKnownKeys, type Select } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import { GadgetFieldType } from "./internal/gql/graphql.js";
import type { ModelMetadata } from "./metadata.js";
import type { SearchResult } from "./useDebouncedSearch.js";
import type { PaginationResult } from "./useList.js";
import type { RelatedFieldColumn } from "./utils.js";
import { type ColumnValueType, type ErrorWrapper, type OptionsType, type ReadOperationOptions } from "./utils.js";
export interface TableColumn {
    name: string;
    apiIdentifier: string;
    fieldType: GadgetFieldType;
    getValue: (record: GadgetRecord<any>) => ColumnValueType;
    sortable: boolean;
    relatedField?: TableColumn;
}
export interface TableOptions {
    pageSize?: number;
    initialCursor?: string;
    initialDirection?: "forward" | "backward";
    columns?: (string | RelatedFieldColumn)[];
}
export type TableData<Data> = {
    columns: TableColumn[];
    rows: Record<string, ColumnValueType>[];
    data: Data;
    metadata: ModelMetadata;
} | {
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
export declare const useTable: <GivenOptions extends OptionsType, SchemaT, F extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & ReadOperationOptions & TableOptions>(manager: {
    findMany: F;
}, options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions & TableOptions>) => TableResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>[]>;
