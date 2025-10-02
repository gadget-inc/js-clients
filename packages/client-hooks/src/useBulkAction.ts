import type { BulkActionFunction, GadgetConnection, StubbedActionFunction } from "@gadgetinc/api-client-core";
import { ErrorWrapper, capitalizeIdentifier, disambiguateBulkActionVariables, get, namespaceDataPath } from "@gadgetinc/utils";
import { OperationContext } from "@urql/core";
import { UseMutationState } from "./adapter.js";
import { createHookStub } from "./createHooks.js";
import type { UseBulkAction } from "./types.js";

export let useBulkAction: UseBulkAction = createHookStub("useBulkAction", (adapter, coreHooks) => {
  useBulkAction = (action, options) => {
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
        async (inputs: (typeof action)["variablesType"], context?: Partial<OperationContext>) => {
          const variables = disambiguateBulkActionVariables(action, inputs);

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

const processResult = (
  connection: GadgetConnection,
  result: UseMutationState<any, any>,
  action: BulkActionFunction<any, any, any, any, any>
) => {
  let error = ErrorWrapper.forMaybeCombinedError(result.error);
  let data = undefined;

  if (result.data && !error) {
    const dataPath = namespaceDataPath([action.operationName], action.namespace);
    const mutationData = get(result.data, dataPath);

    if (mutationData) {
      const isDeleteAction = (action as any).isDeleter;
      if (!isDeleteAction) {
        const errors = mutationData["errors"];
        if (errors && errors[0]) {
          error = ErrorWrapper.forErrorsResponse(errors, (error as any)?.response);
        } else {
          data = action.hasReturnType
            ? mutationData.results
            : connection.hydrateRecordArray(result, mutationData[action.modelSelectionField]);
        }
      } else {
        // Delete action
        data = mutationData;
      }
    }
  }
  return { ...result, error, data };
};
