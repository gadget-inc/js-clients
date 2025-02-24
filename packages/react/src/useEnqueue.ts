import type { AnyActionFunction, EnqueueBackgroundActionOptions, GadgetConnection } from "@gadgetinc/api-client-core";
import {
  BackgroundActionHandle,
  disambiguateActionVariables,
  disambiguateBulkActionVariables,
  enqueueActionOperation,
  get,
  graphqlizeBackgroundOptions,
  namespaceDataPath,
} from "@gadgetinc/api-client-core";
import { useCallback, useContext, useMemo } from "react";
import type { UseMutationState } from "urql";
import { GadgetUrqlClientContext, useConnection } from "./GadgetProvider.js";
import { useGadgetMutation } from "./useGadgetMutation.js";
import type { EnqueueHookResult, EnqueueHookState } from "./utils.js";
import { ErrorWrapper, noProviderErrorMessage } from "./utils.js";

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
export const useEnqueue = <SchemaT, Action extends AnyActionFunction>(
  action: Action,
  baseBackgroundOptions?: EnqueueBackgroundActionOptions<Action>
): EnqueueHookResult<SchemaT, Action> => {
  if (!useContext(GadgetUrqlClientContext)) throw new Error(noProviderErrorMessage);

  const plan = useMemo(
    () => enqueueActionOperation(action.operationName, action.variables, action.namespace, null, action.isBulk),
    [action]
  );
  const connection = useConnection();

  const [rawState, runMutation] = useGadgetMutation(plan.query);

  const state: EnqueueHookState<SchemaT, Action> = useMemo(() => processResult(connection, rawState, action), [rawState, action]);

  return [
    state,
    useCallback(
      async (input: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>) => {
        const variables = action.isBulk ? disambiguateBulkActionVariables(action, input) : disambiguateActionVariables(action, input);

        const fullContext = { ...baseBackgroundOptions, ...options };
        variables.backgroundOptions = graphqlizeBackgroundOptions(fullContext);

        const rawState = await runMutation(variables, fullContext);

        return processResult(connection, { fetching: false, ...rawState }, action);
      },
      [action, connection, runMutation]
    ),
  ];
};

/** Processes urql's result object into the fancier Gadget result object */
const processResult = <SchemaT, Action extends AnyActionFunction>(
  connection: GadgetConnection,
  rawResult: UseMutationState<any, any>,
  action: Action
): EnqueueHookState<SchemaT, Action> => {
  const { data, ...result } = rawResult;
  let error = ErrorWrapper.forMaybeCombinedError(result.error);
  let handle: BackgroundActionHandle<SchemaT, Action> | null = null;
  let handles: BackgroundActionHandle<SchemaT, Action>[] | null = null;
  const isBulk = action.isBulk;

  if (data) {
    const dataPath = ["background", ...namespaceDataPath([action.operationName], action.namespace)];

    const mutationData = get(data, dataPath);
    if (mutationData) {
      const errors = mutationData["errors"];
      if (errors && errors[0]) {
        error = ErrorWrapper.forErrorsResponse(errors, error?.response);
      } else {
        if (isBulk) {
          handles = mutationData.backgroundActions.map(
            (result: { id: string }) => new BackgroundActionHandle<SchemaT, Action>(connection, action, result.id)
          );
        } else {
          handle = new BackgroundActionHandle<SchemaT, Action>(connection, action, mutationData.backgroundAction.id);
        }
      }
    }
  }

  if (isBulk) {
    return { ...result, error, handles } as EnqueueHookState<SchemaT, Action>;
  } else {
    return { ...result, error, handle } as EnqueueHookState<SchemaT, Action>;
  }
};
