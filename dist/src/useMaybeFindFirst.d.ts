import type { DefaultSelection, FindFirstFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { OptionsType, ReadHookResult, ReadOperationOptions } from "./utils";
/**
 * React hook to fetch many Gadget records using the `maybeFindFirst` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * export function Users() {
 *   const [result, refresh] = useMaybeFindFirst(Client.user, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 * ```
 */
export declare const useMaybeFindFirst: <GivenOptions extends OptionsType, SchemaT, F extends FindFirstFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & ReadOperationOptions>(manager: {
    findFirst: F;
}, options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions> | undefined) => ReadHookResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>> | null>;
