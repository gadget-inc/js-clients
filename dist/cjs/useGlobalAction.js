"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalAction = void 0;
const createHooks_js_1 = require("./createHooks.js");
exports.useGlobalAction = (0, createHooks_js_1.createHookStub)("useGlobalAction", (adapter, coreHooks) => {
    exports.useGlobalAction = (action) => {
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
const processResult = (result, action) => {
    return { ...result, ...action.processResult(result) };
};
//# sourceMappingURL=useGlobalAction.js.map