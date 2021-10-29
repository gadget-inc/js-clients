"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBulkAction = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const urql_1 = require("urql");
const useStructuralMemo_1 = require("./useStructuralMemo");
/**
 * React hook to run a Gadget model bulk action.
 *
 * @param action any bulk action function from a Gadget manager
 * @param options action options, like selecting the fields in the result
 *
 * @example
 * ```
 * export function BulkFinish(props: { ids: string[]; }) {
 *   const [result, bulkFinish] = useBulkAction(Client.todo.bulkFinish, {
 *     select: {
 *       id: true,
 *     },
 *   });
 *
 *   const onClick = () => ;
 *
 *   return (
 *     <>
 *       {result.error && <>Failed to create user: {result.error.toString()}</>}
 *       {result.fetching && <>Creating user...</>}
 *       {result.data && <>Finished TODOs with ids={props.ids}</>}
 *       <button onClick={() => bulkFinish(ids))}>Bulk finish</button>
 *     </>
 *   );
 * }
 */
const useBulkAction = (action, options) => {
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.actionOperation)(action.operationName, action.defaultSelection, action.modelApiIdentifier, action.modelSelectionField, action.variables, memoizedOptions, action.namespace);
    }, [action, memoizedOptions]);
    const [result, runMutation] = (0, urql_1.useMutation)(plan.query);
    let data = result.data;
    if (data) {
        // TODO deal with deletion better than checking selectionType
        if (action.defaultSelection != null) {
            const dataPath = [action.operationName, action.modelSelectionField];
            if (action.namespace) {
                dataPath.unshift(action.namespace);
            }
            data = (0, api_client_core_1.hydrateRecordArray)(result, (0, api_client_core_1.get)(result.data, dataPath));
        }
    }
    return [
        {
            ...result,
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
exports.useBulkAction = useBulkAction;
//# sourceMappingURL=useBulkAction.js.map