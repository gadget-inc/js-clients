"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAction = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const urql_1 = require("urql");
const useStructuralMemo_1 = require("./useStructuralMemo");
/**
 * React hook to run a Gadget model action.
 *
 * @param action any action function from a Gadget manager
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function CreateUserButton(props: { name: string; email: string }) {
 *   const [result, createUser] = useAction(Client.user.create, props.email, {
 *     select: {
 *       id: true,
 *     },
 *   });
 *
 *   const onClick = () => createUser({
 *     widget: {
 *       name: props.name,
 *       email: props.email,
 *     }
 *   });
 *
 *   return (
 *     <>
 *       {result.error && <>Failed to create user: {result.error.toString()}</>}
 *       {result.fetching && <>Creating user...</>}
 *       {result.data && <>Created user with id={result.data.id}</>}
 *       <button onClick={onClick}>Create user</button>
 *     </>
 *   );
 * }
 */
const useAction = (action, options) => {
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.actionOperation)(action.operationName, action.defaultSelection, action.modelApiIdentifier, action.modelSelectionField, action.variables, memoizedOptions, action.namespace);
    }, [action, memoizedOptions]);
    const [result, runMutation] = (0, urql_1.useMutation)(plan.query);
    let error = result.error;
    let data = result.data;
    if (data) {
        const dataPath = [action.operationName];
        if (action.namespace) {
            dataPath.unshift(action.namespace);
        }
        const mutationData = (0, api_client_core_1.get)(result.data, dataPath);
        if (mutationData) {
            const errors = mutationData["errors"];
            if (errors && errors[0]) {
                error = new urql_1.CombinedError({
                    graphQLErrors: [(0, api_client_core_1.gadgetErrorFor)(errors[0])],
                });
            }
        }
        data = (0, api_client_core_1.hydrateRecord)(result, mutationData[action.modelSelectionField]);
    }
    return [
        {
            ...result,
            error,
            data,
        },
        (variables, context) => {
            // Adding the model's additional typename ensures document cache will properly refresh, regardless of whether __typename was
            // selected (and sometimes we can't even select it, like delete actions!)
            return runMutation(variables, {
                ...context,
                additionalTypenames: [...(context?.additionalTypenames ?? []), (0, api_client_core_1.capitalize)(action.modelApiIdentifier)],
            });
        },
    ];
};
exports.useAction = useAction;
//# sourceMappingURL=useAction.js.map