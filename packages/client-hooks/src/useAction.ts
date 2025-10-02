import type { ActionFunction, GadgetConnection, StubbedActionFunction } from "@gadgetinc/api-client-core";
import { ErrorWrapper, capitalizeIdentifier, disambiguateActionVariables, get, namespaceDataPath } from "@gadgetinc/utils";
import { AnyVariables, OperationContext } from "@urql/core";
import { UseMutationState } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { ActionHookState, UseAction } from "./types.js";

export let useAction: UseAction = createHookStub("useAction", (adapter, coreHooks) => {
  useAction = (action, options) => {
    const connection = coreHooks.useConnection();

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
      return connection.actionOperation(
        action.operationName,
        action.defaultSelection,
        action.modelApiIdentifier,
        action.modelSelectionField,
        action.variables,
        memoizedOptions,
        action.namespace,
        action.isBulk,
        action.hasReturnType
      );
    }, [action, memoizedOptions]);

    const [result, runMutation] = coreHooks.useGadgetMutation(plan.query);

    const transformedResult = adapter.framework.useMemo(() => processResult(connection, result, action), [result, action]);

    return [
      transformedResult,
      adapter.framework.useCallback(
        async (input: (typeof action)["variablesType"], context?: Partial<OperationContext>) => {
          const variables = disambiguateActionVariables(action, input);

          const result = await runMutation(variables, {
            ...context,
            // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was selected (and sometimes we can't even select it, like delete actions!)
            additionalTypenames: [...(context?.additionalTypenames ?? []), capitalizeIdentifier(action.modelApiIdentifier)],
          });

          return processResult(connection, { fetching: false, ...result }, action);
        },
        [action, runMutation]
      ),
    ];
  };
});

const processResult = <Data, Variables extends AnyVariables>(
  connection: GadgetConnection,
  result: UseMutationState<Data, Variables>,
  action: ActionFunction<any, any, any, any, any>
): ActionHookState<any, any> => {
  let error = ErrorWrapper.forMaybeCombinedError(result.error);
  let data = null;
  if (result.data) {
    const dataPath = namespaceDataPath([action.operationName], action.namespace);
    const mutationData = get(result.data, dataPath);
    if (mutationData) {
      const errors = mutationData["errors"];
      if (errors && errors[0]) {
        error = ErrorWrapper.forErrorsResponse(errors, error?.response);
      } else {
        data = connection.processActionResponse(
          action.defaultSelection,
          result,
          mutationData,
          action.modelSelectionField,
          action.hasReturnType
        );
      }
    }
  }

  return { ...result, error, data };
};
