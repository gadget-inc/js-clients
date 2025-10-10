import type { AnyActionFunction, AnyBackgroundActionHandle, AnyConnection, EnqueueBackgroundActionOptions } from "@gadgetinc/core";
import { ErrorWrapper, disambiguateActionVariables, disambiguateBulkActionVariables, get, namespaceDataPath } from "@gadgetinc/core";
import type { UseMutationState } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { EnqueueHookState, UseEnqueue } from "./types.js";

export let useEnqueue: UseEnqueue = createHookStub("useEnqueue", (adapter, coreHooks) => {
  useEnqueue = (action, baseBackgroundOptions) => {
    const connection = coreHooks.useConnection();
    const plan = adapter.framework.useMemo(
      () => connection.enqueue.plan(action.operationName, action.variables, action.namespace, null, action.isBulk),
      [action]
    );

    const [rawState, runMutation] = coreHooks.useGadgetMutation(plan.query);

    const state = adapter.framework.useMemo(() => processResult(connection, rawState, action), [rawState, action]);

    return [
      state,
      adapter.framework.useCallback(
        async (input: (typeof action)["variablesType"], options?: EnqueueBackgroundActionOptions<typeof action>) => {
          const variables = action.isBulk ? disambiguateBulkActionVariables(action, input) : disambiguateActionVariables(action, input);

          const fullContext = { ...baseBackgroundOptions, ...options };
          variables.backgroundOptions = connection.enqueue.processOptions(fullContext);

          const rawState = await runMutation(variables, fullContext);

          return processResult(connection, { fetching: false, ...rawState }, action);
        },
        [action, connection, runMutation]
      ),
    ];
  };
});

// /** Processes urql's result object into the fancier Gadget result object */
const processResult = <SchemaT, Action extends AnyActionFunction>(
  connection: AnyConnection,
  rawResult: UseMutationState<any, any>,
  action: Action
): EnqueueHookState<SchemaT, Action> => {
  const { data, ...result } = rawResult;
  let error = ErrorWrapper.forMaybeCombinedError(result.error);
  let handle: AnyBackgroundActionHandle<SchemaT, Action> | null = null;
  let handles: AnyBackgroundActionHandle<SchemaT, Action>[] | null = null;
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
          handles = mutationData.backgroundActions.map((result: { id: string }) => connection.enqueue.createHandle(action, result.id));
        } else {
          handle = connection.enqueue.createHandle(action, mutationData.backgroundAction.id);
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
