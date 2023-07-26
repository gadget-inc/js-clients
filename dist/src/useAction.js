"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAction = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const GadgetProvider_1 = require("./GadgetProvider");
const useGadgetMutation_1 = require("./useGadgetMutation");
const useStructuralMemo_1 = require("./useStructuralMemo");
const utils_1 = require("./utils");
/**
 * React hook to run a Gadget model action. `useAction` must be passed an action function from an instance of your generated API client library, like `api.user.create` or `api.blogPost.publish`. `useAction` doesn't actually run the action when invoked, but instead returns an action function as the second result for running the action in response to an event.
 *
 * @param action an action function from a model manager in your application's client, like `api.user.create`
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
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
const useAction = (action, options) => {
    if (!(0, react_1.useContext)(GadgetProvider_1.GadgetUrqlClientContext))
        throw new Error(utils_1.noProviderErrorMessage);
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.actionOperation)(action.operationName, action.defaultSelection, action.modelApiIdentifier, action.modelSelectionField, action.variables, memoizedOptions, action.namespace);
    }, [action, memoizedOptions]);
    const [result, runMutation] = (0, useGadgetMutation_1.useGadgetMutation)(plan.query);
    const transformedResult = (0, react_1.useMemo)(() => processResult(result, action), [result, action]);
    return [
        transformedResult,
        (0, react_1.useCallback)(async (variables, context) => {
            if (action.hasAmbiguousIdentifier) {
                if (Object.keys(variables).some((key) => !action.paramOnlyVariables?.includes(key) && key !== action.modelApiIdentifier)) {
                    throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${action.modelApiIdentifier}: { ... } })?`);
                }
            }
            let newVariables;
            const idVariable = Object.entries(action.variables).find(([key, value]) => key === "id" && value.type === "GadgetID");
            if (action.hasCreateOrUpdateEffect) {
                if (action.modelApiIdentifier in variables &&
                    typeof variables[action.modelApiIdentifier] === "object" &&
                    variables[action.modelApiIdentifier] !== null) {
                    newVariables = variables;
                }
                else {
                    newVariables = {
                        [action.modelApiIdentifier]: {},
                    };
                    for (const [key, value] of Object.entries(variables)) {
                        if (action.paramOnlyVariables?.includes(key)) {
                            newVariables[key] = value;
                        }
                        else {
                            if (idVariable && key === idVariable[0]) {
                                newVariables.id = value;
                            }
                            else {
                                newVariables[action.modelApiIdentifier][key] = value;
                            }
                        }
                    }
                }
            }
            else {
                newVariables = variables;
            }
            // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was
            // selected (and sometimes we can't even select it, like delete actions!)
            const result = await runMutation(newVariables, {
                ...context,
                additionalTypenames: [...(context?.additionalTypenames ?? []), (0, api_client_core_1.capitalizeIdentifier)(action.modelApiIdentifier)],
            });
            return processResult({ fetching: false, ...result }, action);
        }, [action, runMutation]),
    ];
};
exports.useAction = useAction;
/** Processes urql's result object into the fancier Gadget result object */
const processResult = (result, action) => {
    let error = utils_1.ErrorWrapper.forMaybeCombinedError(result.error);
    let data = null;
    if (result.data) {
        const dataPath = [action.operationName];
        if (action.namespace) {
            dataPath.unshift(action.namespace);
        }
        const mutationData = (0, api_client_core_1.get)(result.data, dataPath);
        if (mutationData) {
            const errors = mutationData["errors"];
            if (errors && errors[0]) {
                error = utils_1.ErrorWrapper.forErrorsResponse(errors, error?.response);
            }
            else {
                data = (0, api_client_core_1.hydrateRecord)(result, mutationData[action.modelSelectionField]);
            }
        }
    }
    return { ...result, error, data };
};
//# sourceMappingURL=useAction.js.map