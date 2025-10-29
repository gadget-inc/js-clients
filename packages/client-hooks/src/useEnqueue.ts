import type { AnyActionFunction, AnyConnection, EnqueueBackgroundActionOptions } from "@gadgetinc/core";
import type { UseMutationState } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { EnqueueHookState, UseEnqueue } from "./types.js";

export let useEnqueue: UseEnqueue = createHookStub("useEnqueue", (adapter, coreHooks) => {
  useEnqueue = (action, baseBackgroundOptions) => {
    const coreImplementation = coreHooks.useCoreImplementation();
    const connection = coreHooks.useConnection();
    const plan = adapter.framework.useMemo(() => connection.enqueue.plan(action), [action]);

    const [rawState, runMutation] = coreHooks.useGadgetMutation(plan.query);

    const state = adapter.framework.useMemo(() => processResult(connection, rawState, action), [rawState, action]);

    return [
      state,
      adapter.framework.useCallback(
        async (input: (typeof action)["variablesType"], options?: EnqueueBackgroundActionOptions<typeof action>) => {
          const variables = action.isBulk
            ? coreImplementation.disambiguateBulkActionVariables(action, input)
            : coreImplementation.disambiguateActionVariables(action, input);

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
const processResult = <Action extends AnyActionFunction>(
  connection: AnyConnection,
  rawResult: UseMutationState<any, any>,
  action: Action
): EnqueueHookState<Action> => {
  const { data, ...result } = rawResult;
  if (action.isBulk) {
    const { handles, error } = connection.enqueue.processResult(action, rawResult);
    return { ...result, handles, error } as EnqueueHookState<Action>;
  } else {
    const { handle, error } = connection.enqueue.processResult(action, rawResult);
    return { ...result, handle, error } as EnqueueHookState<Action>;
  }
};
