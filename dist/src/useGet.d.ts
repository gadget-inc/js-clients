import { GadgetRecord, get, GetFunction, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { UseQueryResponse } from "urql";
import { OptionsType } from "./OptionsType";
/**
 * React hook to fetch a Gadget record using the `get` method of a given "singleton" manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function CurrentSession(props: { id: string }) {
 *   const [result, refresh] = useGet(Client.currentSession, {
 *     select: {
 *       userId: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No current session found</>;
 *
 *   return <div>Current session user id: {result.data.userId}</div>;
 * }
 * ```
 */
export declare const useGet: <GivenOptions extends OptionsType, SchemaT, F extends GetFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"]>(manager: {
    get: F;
}, options?: LimitToKnownKeys<Options, F["optionsType"]> | undefined) => UseQueryResponse<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>, object>;
