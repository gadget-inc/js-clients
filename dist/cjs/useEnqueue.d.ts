import type { EnqueueBackgroundActionOptions } from "@gadgetinc/api-client-core";
import type { AnyActionFunction } from "@gadgetinc/api-client-core/src/GadgetFunctions.js";
import type { EnqueueHookResult } from "./utils.js";
/**
 * React hook to enqueue a Gadget action in the background. `useEnqueue` must be passed an action function from an instance of your generated API client library, like `useEnqueue(api.user.create)` or `useEnqueue(api.someGlobalAction)`. `useEnqueue` doesn't actually submit the background action when invoked, but instead returns a function for enqueuing the action in response to an event.
 *
 * @param action a model action or global action in your application's client, like `api.user.create` or `api.someGlobalAction`
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * export function CreateUserButton(props: { name: string; email: string }) {
 *   const [{error, fetching, handle}, enqueue] = useEnqueue(api.user.create));
 *
 *   const onClick = () => enqueue(
 *     {
 *       name: props.name,
 *       email: props.email,
 *     }, {
 *       id: `send-email-action-${props.email}`
 *     }
 *   );
 *
 *   return (
 *     <>
 *       {error && <>Failed to enqueue user create: {error.toString()}</>}
 *       {fetching && <>Enqueuing action...</>}
 *       {data && <>Enqueued action with background action id={handle.id}</>}
 *       <button onClick={onClick}>Create user</button>
 *     </>
 *   );
 * }
 */
export declare const useEnqueue: <Action extends AnyActionFunction>(action: Action, baseBackgroundOptions?: EnqueueBackgroundActionOptions<Action_1> | undefined) => EnqueueHookResult<Action>;
