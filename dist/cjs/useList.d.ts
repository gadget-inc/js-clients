import type { DefaultSelection, FindManyFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import type { SearchResult } from "./useDebouncedSearch.js";
import type { ErrorWrapper, OptionsType, ReadOperationOptions } from "./utils.js";
export interface PaginationResult {
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
export interface ListOptions {
    pageSize?: number;
}
export type ListResult<Data> = [
    ({
        data: Data;
        page: PaginationResult;
        search: SearchResult;
        fetching: boolean;
        error?: ErrorWrapper;
    } | {
        data: undefined;
        page: PaginationResult;
        search: SearchResult;
        fetching: boolean;
        error?: ErrorWrapper;
    }),
    (opts?: Partial<OperationContext>) => void
];
export declare const useList: <GivenOptions extends OptionsType, SchemaT, F extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & ReadOperationOptions & ListOptions>(manager: {
    findMany: F;
}, options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions & ListOptions>) => ListResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>[]>;
