import { globalActionOperation } from "../operationBuilders.js";
import { get, namespaceDataPath } from "../support.js";
import { ErrorWrapper } from "./utils.js";
export const createUseGlobalAction = (adapter, coreHooks) => {
    const useGlobalAction = (action) => {
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
            return globalActionOperation(action.operationName, action.variables, action.namespace);
        }, [action]);
        const [result, runMutation] = coreHooks.useGadgetMutation(plan.query);
        const transformedResult = adapter.framework.useMemo(() => processResult(result, action), [result, action]);
        return [
            transformedResult,
            adapter.framework.useCallback(async (variables, context) => {
                const result = await runMutation(variables !== null && variables !== void 0 ? variables : {}, context);
                return processResult({ fetching: false, ...result }, action);
            }, [action, runMutation]),
        ];
    };
    return {
        /**
         * Hook to run a Gadget model action.
         *
         * @param action any action function from a Gadget manager
         *
         * @example
         * ```
         * export function FlipAllWidgets(props: { name: string; email: string }) {
         *   const [result, flipAllWidgets] = useGlobalAction(Client.flipAllWidgets);
         *
         *   return (
         *     <>
         *       {result.error && <>Failed to flip all widgets: {result.error.toString()}</>}
         *       {result.fetching && <>Flipping all widgets...</>}
         *       {result.data && <>Flipped all widgets</>}
         *       <button onClick={() => flipAllWidgets()}>Flip all widgets</button>
         *     </>
         *   );
         * }
         */
        useGlobalAction,
    };
};
const processResult = (result, action) => {
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
//# sourceMappingURL=useGlobalAction.js.map