import { ActionFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { UseMutationResponse } from "urql";
import { OptionsType } from "./OptionsType";
/**
 * React hook to run a Gadget model action.
 *
 * @param action any action function from a Gadget manager
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function CreateUserButton(props: { name: string; email: string }) {
 *   const [result, createUser] = useAction(Client.user.create, props.email, {
 *     select: {
 *       id: true,
 *     },
 *   });
 *
 *   const onClick = () => createUser({
 *     widget: {
 *       name: props.name,
 *       email: props.email,
 *     }
 *   });
 *
 *   return (
 *     <>
 *       {result.error && <>Failed to create user: {result.error.toString()}</>}
 *       {result.fetching && <>Creating user...</>}
 *       {result.data && <>Created user with id={result.data.id}</>}
 *       <button onClick={onClick}>Create user</button>
 *     </>
 *   );
 * }
 */
export declare const useAction: <GivenOptions extends OptionsType, SchemaT, F extends ActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends F["optionsType"]>(action: F, options?: LimitToKnownKeys<Options, F["optionsType"]> | undefined) => UseMutationResponse<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>, Exclude<F["variablesType"], null | undefined>>;
