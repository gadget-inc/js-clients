import { type DefaultSelection, type FindManyFunction, type GadgetRecord, type LimitToKnownKeys, type OptionsType, type ReadOperationOptions, type Select } from "@gadgetinc/api-client-core";
import type { TableOptions, TableResult } from "./use-table/types.js";
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
}, options?: LimitToKnownKeys<Options, Omit<F["optionsType"], "sort" | "first" | "last" | "after" | "before"> & ReadOperationOptions & TableOptions>) => TableResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>[]>;
