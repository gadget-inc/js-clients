import type { OptionsType, ReadOperationOptions } from "@gadgetinc/client-hooks";
import type { AnyErrorWrapper, DefaultSelection, FindManyFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/core";
import type { OperationContext } from "@urql/core";
import type { SearchResult } from "./useDebouncedSearch.js";
import type { RecordSelection } from "./useSelectedRecordsController.js";
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
    {
        data?: Data;
        page: PaginationResult;
        search: SearchResult;
        selection: RecordSelection;
        fetching: boolean;
        error?: AnyErrorWrapper;
    },
    (opts?: Partial<OperationContext>) => void
];
export declare const useList: <GivenOptions extends OptionsType, SchemaT, F extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & ReadOperationOptions & ListOptions>(manager: {
    findMany: F;
}, options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions & ListOptions>) => ListResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>[]>;
export declare const DefaultPageSize = 50;
