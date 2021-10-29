"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindMany = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const urql_1 = require("urql");
const useStructuralMemo_1 = require("./useStructuralMemo");
/**
 * React hook to fetch many Gadget records using the `findMany` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * export function Users() {
 *   const [result, refresh] = useFindMany(Client.user, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No users found</>;
 *
 *   return <>{result.data.map((user) => <div>{user.name}</div>)}</>;
 * }
 * ```
 */
const useFindMany = (manager, options) => {
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.findManyOperation)(manager.findMany.operationName, manager.findMany.defaultSelection, manager.findMany.modelApiIdentifier, memoizedOptions);
    }, [manager, memoizedOptions]);
    const [result, refresh] = (0, urql_1.useQuery)({
        query: plan.query,
        variables: plan.variables,
        context: options?.context,
        pause: options?.pause,
        requestPolicy: options?.requestPolicy,
    });
    let data = result.data;
    if (data) {
        const connection = (0, api_client_core_1.get)(result.data, [manager.findMany.operationName]);
        if (connection) {
            data = (0, api_client_core_1.hydrateConnection)(result, connection);
        }
    }
    return [{ ...result, data }, refresh];
};
exports.useFindMany = useFindMany;
//# sourceMappingURL=useFindMany.js.map