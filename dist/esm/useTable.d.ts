import type { DefaultSelection, FindManyFunction, GadgetRecord, GadgetRecordList, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import type { ReactNode } from "react";
import type { GadgetFieldType } from "./internal/gql/graphql.js";
import type { ModelMetadata } from "./metadata.js";
import type { ErrorWrapper, OptionsType, ReadOperationOptions } from "./utils.js";
export interface TableColumn {
    name: string;
    apiIdentifier: string;
    fieldType: GadgetFieldType;
    getValue: (record: GadgetRecord<any>) => ReactNode;
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
    ({
        columns: TableColumn[];
        rows: Record<string, ReactNode>[];
        data: Data;
        page: TablePagination;
        metadata: ModelMetadata;
        fetching: boolean;
        error?: ErrorWrapper;
    } | {
        columns: null;
        rows: null;
        data: null;
        metadata: null;
        page: TablePagination;
        fetching: boolean;
        error?: ErrorWrapper;
    }),
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
export declare const useTable: <GivenOptions extends OptionsType, SchemaT, F extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & ReadOperationOptions & TableOptions>(manager: {
    findMany: F;
}, options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions & TableOptions> | undefined) => TableResult<GadgetRecordList<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>>;
