import { type DefaultSelection, type FindManyFunction, type GadgetRecord, type LimitToKnownKeys, type Select } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import type { ReactNode } from "react";
import { GadgetFieldType } from "./internal/gql/graphql.js";
import type { ModelMetadata } from "./metadata.js";
import type { SearchResult } from "./useDebouncedSearch.js";
import type { PaginationResult } from "./useList.js";
import { RecordSelection } from "./useSelectedRecordsController.js";
import type { CustomCellColumn, RelatedFieldColumn } from "./utils.js";
import { type ColumnValueType, type ErrorWrapper, type OptionsType, type ReadOperationOptions } from "./utils.js";
type BaseTableColumn = {
    name: string;
    apiIdentifier: string;
};
type NonCustomCellColumn = BaseTableColumn & {
    fieldType: GadgetFieldType;
    sortable: boolean;
    relatedField?: NonCustomCellColumn;
    getValue: (record: GadgetRecord<any>) => ColumnValueType;
    isCustomCell: false;
};
type CustomCellTableColumn = BaseTableColumn & {
    getValue: (record: GadgetRecord<any>) => ReactNode;
    isCustomCell: true;
    sortable: false;
};
export type TableColumn = NonCustomCellColumn | CustomCellTableColumn;
export type TableRow = Record<string, ColumnValueType | ReactNode>;
export interface TableOptions {
    pageSize?: number;
    initialCursor?: string;
    initialDirection?: "forward" | "backward";
    columns?: (string | RelatedFieldColumn | CustomCellColumn)[];
}
export type TableData<Data> = {
    columns: TableColumn[];
    rows: TableRow[];
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
        sort: (colName: string, direction: "Ascending" | "Descending" | undefined) => void;
        selection: RecordSelection;
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
export {};
