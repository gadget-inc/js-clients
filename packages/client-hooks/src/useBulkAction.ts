import type { BulkActionFunction, StubbedActionFunction } from "@gadgetinc/core";
import type { OperationContext } from "@urql/core";
import type { UseMutationState } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { UseBulkAction } from "./types.js";

let useBulkActionImpl: UseBulkAction = createHookStub("useBulkAction");

createHookStub("useBulkAction", (adapter, coreHooks) => {
  useBulkActionImpl = (action, options) => {
    const coreImplementation = coreHooks.useCoreImplementation();

    adapter.framework.useEffect(() => {
      if (action.type === ("stubbedAction" as string)) {
        const stubbedAction = action as unknown as StubbedActionFunction<any>;
        if (!("reason" in stubbedAction) || !("dataPath" in stubbedAction) || !("actionApiIdentifier" in stubbedAction)) {
          // Don't dispatch an event if the generated client has not yet been updated with the updated parameters
          return;
        }

        const event = new CustomEvent("gadget:devharness:stubbedActionError", {
          detail: {
            reason: stubbedAction.reason,
            action: {
              functionName: stubbedAction.functionName,
              actionApiIdentifier: stubbedAction.actionApiIdentifier,
              modelApiIdentifier: stubbedAction.modelApiIdentifier,
              dataPath: stubbedAction.dataPath,
            },
          },
        });
        globalThis.dispatchEvent(event);
      }
    }, []);

    const memoizedOptions = coreHooks.useStructuralMemo(options);
    const plan = adapter.framework.useMemo(() => {
      if (!action.plan) {
        throw new Error(`Action ${action.operationName} does not have a plan method, is your client up to date?`);
      }
      return action.plan(memoizedOptions);
    }, [action, memoizedOptions]);

    const [result, runMutation] = coreHooks.useGadgetMutation(plan.query);

    const transformedResult = adapter.framework.useMemo(() => processResult(result, action), [result, action]);

    return [
      transformedResult,
      adapter.framework.useCallback(
        async (inputs: (typeof action)["variablesType"], context?: Partial<OperationContext>) => {
          const variables = coreImplementation.disambiguateBulkActionVariables(action, inputs);

          const result = await runMutation(variables, {
            ...context,
            // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was selected (and sometimes we can't even select it, like delete actions!)
            additionalTypenames: [
              ...(context?.additionalTypenames ?? []),
              coreImplementation.capitalizeIdentifier(action.modelApiIdentifier),
            ],
          });
          return processResult({ fetching: false, ...result }, action);
        },
        [action, runMutation]
      ),
    ];
  };
});

export const useBulkAction: UseBulkAction = (action, options) => useBulkActionImpl(action, options);

const processResult = (result: UseMutationState<any, any>, action: BulkActionFunction<any, any, any, any, any>) => {
  return { ...result, ...action.processResult(result) };
};
