import type { ActionFunction, DefaultSelection, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { ActionHookResult, OptionsType } from "./utils";
/**
 * React hook to run a Gadget model action. `useAction` must be passed an action function from an instance of your generated API client library, like `api.user.create` or `api.blogPost.publish`. `useAction` doesn't actually run the action when invoked, but instead returns an action function as the second result for running the action in response to an event.
 *
 * @param action an action function from a model manager in your application's client, like `api.user.create`
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function CreateUserButton(props: { name: string; email: string }) {
 *   const [{error, fetching, data}, createUser] = useAction(api.user.create, {
 *     select: {
 *       id: true,
 *     },
 *   });
 *
 *   const onClick = () => createUser({
 *     name: props.name,
 *     email: props.email,
 *   });
 *
 *   return (
 *     <>
 *       {error && <>Failed to create user: {error.toString()}</>}
 *       {fetching && <>Creating user...</>}
 *       {data && <>Created user with id={data.id}</>}
 *       <button onClick={onClick}>Create user</button>
 *     </>
 *   );
 * }
 */
export declare const useAction: <GivenOptions extends OptionsType, SchemaT, F extends ActionFunction<GivenOptions, any, any, SchemaT, any>, Options extends F["optionsType"]>(action: F, options?: LimitToKnownKeys<Options, F["optionsType"]> | undefined) => ActionHookResult<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>, Exclude<F["variablesType"], null | undefined>>;
