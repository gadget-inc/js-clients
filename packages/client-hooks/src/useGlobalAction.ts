import type { GlobalActionFunction, StubbedActionFunction } from "@gadgetinc/api-client-core";
import { ErrorWrapper, get, namespaceDataPath } from "@gadgetinc/utils";
import { OperationContext } from "@urql/core";
import { RuntimeAdapter, UseMutationState } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseGlobalAction } from "./types.js";

export let useGlobalAction: UseGlobalAction = createHookStub("useGlobalAction", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useGlobalAction = (action) => {
    const connection = coreHooks.useConnection();
    adapter.framework.useEffect(() => {
      if (action.type === ("stubbedAction" as string)) {
        const stubbedAction = action as unknown as StubbedActionFunction<any>;
        if (!("reason" in stubbedAction) || !("dataPath" in stubbedAction)) {
          // Don't dispatch an event if the generated client has not yet been updated with the updated parameters
          return;
        }

        const event = new CustomEvent("gadget:devharness:stubbedActionError", {
          detail: {
            reason: stubbedAction.reason,
            action: {
              functionName: stubbedAction.functionName,
              actionApiIdentifier: stubbedAction.actionApiIdentifier,
              dataPath: stubbedAction.dataPath,
            },
          },
        });
        globalThis.dispatchEvent(event);
      }
    }, []);

    const plan = adapter.framework.useMemo(() => {
      return connection.globalActionOperation(action.operationName, action.variables, action.namespace);
    }, [action]);

    const [result, runMutation] = coreHooks.useGadgetMutation(plan.query);

    const transformedResult = adapter.framework.useMemo(() => processResult(result, action), [result, action]);

    return [
      transformedResult,
      adapter.framework.useCallback(
        async (variables?: (typeof action)["variablesType"], context?: Partial<OperationContext>) => {
          const result = await runMutation(variables ?? {}, context);
          return processResult({ fetching: false, ...result }, action);
        },
        [action, runMutation]
      ),
    ];
  };
});

const processResult = (result: UseMutationState<any, any>, action: GlobalActionFunction<any>) => {
  let error = ErrorWrapper.forMaybeCombinedError(result.error);
  let data = undefined;
  if (result.data) {
    const dataPath = namespaceDataPath([action.operationName], action.namespace);
    data = get(result.data, dataPath);
    if (data) {
      const errors = data.errors;
      data = data.result;
      if (errors && errors[0]) {
        error = ErrorWrapper.forErrorsResponse(errors);
      }
    }
  }
  return { ...result, error, data };
};
