import { createHookStub } from "./createHooks.js";
export let useBulkAction = createHookStub("useBulkAction", (adapter, coreHooks) => {
    useBulkAction = (action, options) => {
        const coreImplementation = coreHooks.useCoreImplementation();
        adapter.framework.useEffect(() => {
            if (action.type === "stubbedAction") {
                const stubbedAction = action;
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
            adapter.framework.useCallback(async (inputs, context) => {
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
            }, [action, runMutation]),
        ];
    };
});
const processResult = (result, action) => {
    return { ...result, ...action.processResult(result) };
};
//# sourceMappingURL=useBulkAction.js.map