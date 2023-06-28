import type { AnyPublicModelManager, DefaultSelection, FindManyFunction, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { GadgetRecordList } from "@gadgetinc/api-client-core";
import type { UseQueryArgs } from "urql";
import type { OptionsType } from "./OptionsType";
import type { ReadHookResult } from "./utils";
/**
 * React hook to fetch a page of Gadget records from the backend, optionally sorted, filtered, searched, and selected from. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be a `GadgetRecordList` object holding the list of returned records and pagination info.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * export function Users() {
 *   const [result, refresh] = useFindMany(api.user, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No users found</>;
 *
 *   return <>{result.data.map((user) => <div>{user.name}</div>)}</>;
 * }
 * ```
 */
export declare const useFindMany: <GivenOptions extends OptionsType, SchemaT, F extends FindManyFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & Omit<UseQueryArgs, "query" | "variables">>(manager: {
    findMany: F;
} & AnyPublicModelManager, options?: (LimitToKnownKeys<Options, F["optionsType"]> & Omit<UseQueryArgs, "query" | "variables">) | undefined) => ReadHookResult<GadgetRecordList<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>>;
