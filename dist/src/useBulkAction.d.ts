import { BulkActionFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { UseMutationResponse } from "urql";
import { OptionsType } from "./OptionsType";
/**
 * React hook to run a Gadget model bulk action.
 *
 * @param action any bulk action function from a Gadget manager
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function BulkFinish(props: { ids: string[]; }) {
 *   const [result, bulkFinish] = useBulkAction(Client.todo.bulkFinish, {
 *     select: {
 *       id: true,
 *     },
 *   });
 *
 *   const onClick = () => ;
 *
 *   return (
 *     <>
 *       {result.error && <>Failed to create user: {result.error.toString()}</>}
 *       {result.fetching && <>Creating user...</>}
 *       {result.data && <>Finished TODOs with ids={props.ids}</>}
 *       <button onClick={() => bulkFinish(ids))}>Bulk finish</button>
 *     </>
 *   );
 * }
 */
export declare const useBulkAction: <GivenOptions extends OptionsType, SchemaT, F extends BulkActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends F["optionsType"]>(action: F, options?: LimitToKnownKeys<Options, F["optionsType"]> | undefined) => UseMutationResponse<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>[], Exclude<F["variablesType"], null | undefined>>;
