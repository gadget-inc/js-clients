"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindMany = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useGadgetQuery_1 = require("./useGadgetQuery");
const useStructuralMemo_1 = require("./useStructuralMemo");
const utils_1 = require("./utils");
/**
 * React hook to fetch a page of Gadget records from the backend, optionally sorted, filtered, searched, and selected from. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be a `GadgetRecordList` object holding the list of returned records and pagination info.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * export function Users() {
 *   const [result, refresh] = useFindMany(api.user, {
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
    const [rawResult, refresh] = (0, useGadgetQuery_1.useGadgetQuery)((0, utils_1.useQueryArgs)(plan, options));
    const result = (0, react_1.useMemo)(() => {
        const dataPath = [manager.findMany.operationName];
        let data = rawResult.data;
        if (data) {
            const connection = (0, api_client_core_1.get)(rawResult.data, dataPath);
            if (connection) {
                const records = (0, api_client_core_1.hydrateConnection)(rawResult, connection);
                data = api_client_core_1.GadgetRecordList.boot(manager, records, connection);
            }
        }
        const error = utils_1.ErrorWrapper.errorIfDataAbsent(rawResult, dataPath);
        return { ...rawResult, data, error };
    }, [manager, rawResult]);
    return [result, refresh];
};
exports.useFindMany = useFindMany;
//# sourceMappingURL=useFindMany.js.map