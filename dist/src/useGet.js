"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGet = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const urql_1 = require("urql");
const useStructuralMemo_1 = require("./useStructuralMemo");
/**
 * React hook to fetch a Gadget record using the `get` method of a given "singleton" manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function CurrentSession(props: { id: string }) {
 *   const [result, refresh] = useGet(Client.currentSession, {
 *     select: {
 *       userId: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No current session found</>;
 *
 *   return <div>Current session user id: {result.data.userId}</div>;
 * }
 * ```
 */
const useGet = (manager, options) => {
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.findOneOperation)(manager.get.operationName, undefined, manager.get.defaultSelection, manager.get.modelApiIdentifier, memoizedOptions);
    }, [manager, memoizedOptions]);
    const [result, refresh] = (0, urql_1.useQuery)({ query: plan.query, variables: plan.variables });
    let data = result.data;
    if (data) {
        data = (0, api_client_core_1.hydrateRecord)(result, (0, api_client_core_1.get)(result.data, [manager.get.operationName]));
    }
    return [
        {
            ...result,
            data,
        },
        refresh,
    ];
};
exports.useGet = useGet;
//# sourceMappingURL=useGet.js.map