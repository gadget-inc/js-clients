import { actionOperation } from "../operationBuilders.js";
import { processActionResponse } from "../operationRunners.js";
import { capitalizeIdentifier, disambiguateActionVariables, get, namespaceDataPath } from "../support.js";
import { ErrorWrapper } from "./utils.js";
export const createUseAction = (adapter, coreHooks) => {
    const useAction = (action, options) => {
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
            return actionOperation(action.operationName, action.defaultSelection, action.modelApiIdentifier, action.modelSelectionField, action.variables, memoizedOptions, action.namespace, action.isBulk, action.hasReturnType);
        }, [action, memoizedOptions]);
        const [result, runMutation] = coreHooks.useGadgetMutation(plan.query);
        const transformedResult = adapter.framework.useMemo(() => processResult(result, action), [result, action]);
        return [
            transformedResult,
            adapter.framework.useCallback(async (input, context) => {
                var _a;
                const variables = disambiguateActionVariables(action, input);
                const result = await runMutation(variables, {
                    ...context,
                    // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was selected (and sometimes we can't even select it, like delete actions!)
                    additionalTypenames: [...((_a = context === null || context === void 0 ? void 0 : context.additionalTypenames) !== null && _a !== void 0 ? _a : []), capitalizeIdentifier(action.modelApiIdentifier)],
                });
                return processResult({ fetching: false, ...result }, action);
            }, [action, runMutation]),
        ];
    };
    return {
        /**
         * Hook to run a Gadget model action. `useAction` must be passed an action function from an instance of your generated API client library, like `api.user.create` or `api.blogPost.publish`. `useAction` doesn't actually run the action when invoked, but instead returns an action function as the second result for running the action in response to an event.
         *
         * @param action an action function from a model manager in your application's client, like `api.user.create`
         * @param options action options, like selecting the fields in the result
         *
         * @example
         * export function CreateUserButton(props: { name: string; email: string }) {
         *   const [{error, fetching, data}, createUser] = useAction(api.user.create, {
         *     select: {
         *       id: true,
         *     },
         *   });
         *
         *   const onClick = () => createUser({
         *     name: props.name,
         *     email: props.email,
         *   });
         *
         *   return (
         *     <>
         *       {error && <>Failed to create user: {error.toString()}</>}
         *       {fetching && <>Creating user...</>}
         *       {data && <>Created user with id={data.id}</>}
         *       <button onClick={onClick}>Create user</button>
         *     </>
         *   );
         * }
         */
        useAction,
    };
};
const processResult = (result, action) => {
    let error = ErrorWrapper.forMaybeCombinedError(result.error);
    let data = null;
    if (result.data) {
        const dataPath = namespaceDataPath([action.operationName], action.namespace);
        const mutationData = get(result.data, dataPath);
        if (mutationData) {
            const errors = mutationData["errors"];
            if (errors && errors[0]) {
                error = ErrorWrapper.forErrorsResponse(errors, error === null || error === void 0 ? void 0 : error.response);
            }
            else {
                data = processActionResponse(action.defaultSelection, result, mutationData, action.modelSelectionField, action.hasReturnType);
            }
        }
    }
    return { ...result, error, data };
};
//# sourceMappingURL=useAction.js.map