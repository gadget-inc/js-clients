import type { DefaultSelection, FindOneFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { UseQueryArgs } from "urql";
import type { OptionsType } from "./OptionsType";
import type { ReadHookResult } from "./utils";
/**
 * React hook to fetch a Gadget record using the `findByXYZ` method of a given model manager. Useful for finding records by key fields which are used for looking up records by. Gadget autogenerates the `findByXYZ` methods on your model managers, and `useFindBy` can only be used with models that have these generated finder functions.
 *
 * @param finder `findByXYZ` function from a Gadget manager that will be used
 * @param value field value of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function UserByEmail(props: { email: string }) {
 *   const [result, refresh] = useFindBy(api.user.findByEmail, props.email, {
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
 */
export declare const useFindBy: <GivenOptions extends OptionsType, SchemaT, F extends FindOneFunction<GivenOptions, any, SchemaT, any>, Options extends F["optionsType"] & Omit<UseQueryArgs, "variables" | "query">>(finder: F, value: string, options?: (LimitToKnownKeys<Options, F["optionsType"]> & Omit<UseQueryArgs, "variables" | "query">) | undefined) => ReadHookResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>>;
