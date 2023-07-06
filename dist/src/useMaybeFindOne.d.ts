import type { DefaultSelection, FindOneFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { OptionsType, ReadHookResult, ReadOperationOptions } from "./utils";
/**
 * React hook to fetch a Gadget record using the `maybeFindOne` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function User(props: { id: string }) {
 *   const [result, refresh] = useMaybeFindOne(Client.user, props.id, {
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
export declare const useMaybeFindOne: <GivenOptions extends OptionsType, SchemaT, F extends FindOneFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & ReadOperationOptions>(manager: {
    findOne: F;
}, id: string, options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions> | undefined) => ReadHookResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>> | null>;
