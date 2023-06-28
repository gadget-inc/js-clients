import type { AnyModelManager, DefaultSelection, FindOneFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { UseQueryArgs } from "urql";
import type { OptionsType } from "./OptionsType";
import type { ReadHookResult } from "./utils";
/**
 * React hook to fetch one Gadget record by `id` from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the record if it was found, and `null` otherwise.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function User(props: { id: string }) {
 *   const [result, refresh] = useFindOne(api.user, props.id, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found with id={props.id}</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 * ```
 */
export declare const useFindOne: <GivenOptions extends OptionsType, SchemaT, F extends FindOneFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & Omit<UseQueryArgs, "variables" | "query">>(manager: {
    findOne: F;
} & AnyModelManager, id: string, options?: LimitToKnownKeys<Options, F["optionsType"] & Omit<UseQueryArgs, "variables" | "query">> | undefined) => ReadHookResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>>;
