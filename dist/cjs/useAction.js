"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAction = void 0;
const createHooks_js_1 = require("./createHooks.js");
exports.useAction = (0, createHooks_js_1.createHookStub)("useAction", (adapter, coreHooks) => {
    exports.useAction = (action, options) => {
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
            adapter.framework.useCallback(async (input, context) => {
                const variables = coreImplementation.disambiguateActionVariables(action, input);
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
//# sourceMappingURL=useAction.js.map