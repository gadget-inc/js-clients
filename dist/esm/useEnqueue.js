import { BackgroundActionHandle, disambiguateActionVariables, disambiguateBulkActionVariables, enqueueActionOperation, get, graphqlizeBackgroundOptions, } from "@gadgetinc/api-client-core";
import { useCallback, useContext, useMemo } from "react";
import { GadgetUrqlClientContext, useConnection } from "./GadgetProvider.js";
import { useGadgetMutation } from "./useGadgetMutation.js";
import { ErrorWrapper, noProviderErrorMessage } from "./utils.js";
/**
 * React hook to enqueue a Gadget action in the background. `useEnqueue` must be passed an action function from an instance of your generated API client library, like `useEnqueue(api.user.create)` or `useEnqueue(api.someGlobalAction)`. `useEnqueue` doesn't actually submit the background action when invoked, but instead returns a function for enqueuing the action in response to an event.
 *
 * @param action a model action or global action in your application's client, like `api.user.create` or api.someGlobalAction`
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * export function CreateUserButton(props: { name: string; email: string }) {
 *   const [{error, fetching, handle}, runEnqueue] = useEnqueue(api.user.create));
 *
 *   const onClick = () => runEnqueue(
 *     {
 *       name: props.name,
 *       email: props.email,
 *     }, {
 *       id: "my-custom-id"
 *     }
 *   );
 *
 *   return (
 *     <>
 *       {error && <>Failed to enqueue user create: {error.toString()}</>}
 *       {fetching && <>Enqueuing action...</>}
 *       {data && <>Enqueued action with background action id={handle.id}</>}
 *       <button onClick={onClick}>Create user</button>
 *     </>
 *   );
 * }
 */
export const useEnqueue = (action, baseBackgroundOptions) => {
    if (!useContext(GadgetUrqlClientContext))
        throw new Error(noProviderErrorMessage);
    const plan = useMemo(() => enqueueActionOperation(action.operationName, action.variables, action.namespace), [action]);
    const connection = useConnection();
    const [rawState, runMutation] = useGadgetMutation(plan.query);
    const state = useMemo(() => processResult(connection, rawState, action), [rawState, action]);
    return [
        state,
        useCallback(async (input, backgroundOptions, context) => {
            const variables = "isBulk" in action && action.isBulk ? disambiguateBulkActionVariables(action, input) : disambiguateActionVariables(action, input);
            variables.backgroundOptions = graphqlizeBackgroundOptions({ ...baseBackgroundOptions, ...backgroundOptions });
            const rawState = await runMutation(variables, context);
            return processResult(connection, { fetching: false, ...rawState }, action);
        }, [action, connection, runMutation]),
    ];
};
/** Processes urql's result object into the fancier Gadget result object */
const processResult = (connection, rawResult, action) => {
    const { data, ...result } = rawResult;
    let error = ErrorWrapper.forMaybeCombinedError(result.error);
    let handle = null;
    if (data) {
        const dataPath = ["background", action.operationName];
        if (action.namespace) {
            dataPath.unshift(action.namespace);
        }
        const mutationData = get(data, dataPath);
        if (mutationData) {
            const errors = mutationData["errors"];
            if (errors && errors[0]) {
                error = ErrorWrapper.forErrorsResponse(errors, error?.response);
            }
            else {
                handle = new BackgroundActionHandle(connection, mutationData.backgroundAction.id, {});
            }
        }
    }
    return { ...result, error, handle };
};
//# sourceMappingURL=useEnqueue.js.map