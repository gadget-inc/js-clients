import { get, globalActionOperation, namespaceDataPath } from "@gadgetinc/api-client-core";
import { useCallback, useEffect, useMemo } from "react";
import { useGadgetMutation } from "./useGadgetMutation.js";
import { ErrorWrapper } from "./utils.js";
/**
 * ARE YOU MAKING IT TO CODE MIRROR DUDE
 * React hook to run a Gadget model action.
 *
 * @param action any action function from a Gadget manager
 * @param options action options, like selecting the fields in the result
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
export const useGlobalAction = (action) => {
    useEffect(() => {
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
    const plan = useMemo(() => {
        return globalActionOperation(action.operationName, action.variables, action.namespace);
    }, [action]);
    const [result, runMutation] = useGadgetMutation(plan.query);
    const transformedResult = useMemo(() => processResult(result, action), [result, action]);
    return [
        transformedResult,
        useCallback(async (variables, context) => {
            const result = await runMutation(variables ?? {}, context);
            return processResult({ fetching: false, ...result }, action);
        }, [action, runMutation]),
    ];
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