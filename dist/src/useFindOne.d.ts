import { FindOneFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { UseQueryArgs, UseQueryResponse } from "urql";
import { OptionsType } from "./OptionsType";
/**
 * React hook to fetch a Gadget record using the `findOne` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function User(props: { id: string }) {
 *   const [result, refresh] = useFindOne(Client.user, props.id, {
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
export declare const useFindOne: <GivenOptions extends OptionsType, SchemaT, F extends FindOneFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & Omit<UseQueryArgs<object, any>, "variables" | "query">>(manager: {
    findOne: F;
}, id: string, options?: LimitToKnownKeys<Options, F["optionsType"] & Omit<UseQueryArgs<object, any>, "variables" | "query">> | undefined) => UseQueryResponse<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>, object>;