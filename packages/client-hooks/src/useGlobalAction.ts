import type { GlobalActionFunction, StubbedActionFunction } from "@gadgetinc/core";
import type { OperationContext } from "@urql/core";
import type { RuntimeAdapter, UseMutationState } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { CoreHooks, UseGlobalAction } from "./types.js";

let useGlobalActionImpl: UseGlobalAction = createHookStub("useGlobalAction");

createHookStub("useGlobalAction", (adapter: RuntimeAdapter, coreHooks: CoreHooks) => {
  useGlobalActionImpl = (action) => {
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
      return action.plan();
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

export const useGlobalAction: UseGlobalAction = (action) => useGlobalActionImpl(action);

const processResult = (result: UseMutationState<any, any>, action: GlobalActionFunction<any>) => {
  return { ...result, ...action.processResult(result) };
};
