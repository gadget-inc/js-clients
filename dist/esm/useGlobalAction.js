import { createHookStub } from "./createHooks.js";
let useGlobalActionImpl = createHookStub("useGlobalAction");
createHookStub("useGlobalAction", (adapter, coreHooks) => {
    useGlobalActionImpl = (action) => {
        adapter.framework.useEffect(() => {
            if (action.type === "stubbedAction") {
                const stubbedAction = action;
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
            adapter.framework.useCallback(async (variables, context) => {
                const result = await runMutation(variables ?? {}, context);
                return processResult({ fetching: false, ...result }, action);
            }, [action, runMutation]),
        ];
    };
});
export const useGlobalAction = (action) => useGlobalActionImpl(action);
const processResult = (result, action) => {
    return { ...result, ...action.processResult(result) };
};
//# sourceMappingURL=useGlobalAction.js.map