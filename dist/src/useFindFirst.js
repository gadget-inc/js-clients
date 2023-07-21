"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindFirst = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useGadgetQuery_1 = require("./useGadgetQuery");
const useStructuralMemo_1 = require("./useStructuralMemo");
const utils_1 = require("./utils");
/**
 * React hook to fetch the first backend record matching a given filter and sort. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the first record found if there is one, and null otherwise.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * export function Users() {
 *   const [result, refresh] = useFindFirst(api.user, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 * ```
 */
const useFindFirst = (manager, options) => {
    const firstOptions = { ...options, first: 1 };
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(firstOptions);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.findManyOperation)(manager.findFirst.operationName, manager.findFirst.defaultSelection, manager.findFirst.modelApiIdentifier, memoizedOptions);
    }, [manager, memoizedOptions]);
    const [rawResult, refresh] = (0, useGadgetQuery_1.useGadgetQuery)((0, utils_1.useQueryArgs)(plan, firstOptions));
    const result = (0, react_1.useMemo)(() => {
        const dataPath = [manager.findFirst.operationName];
        let data = rawResult.data;
        if (data) {
            const connection = (0, api_client_core_1.get)(rawResult.data, dataPath);
            if (connection) {
                data = (0, api_client_core_1.hydrateConnection)(rawResult, connection)[0];
            }
            else {
                data = data[0];
            }
        }
        const error = utils_1.ErrorWrapper.errorIfDataAbsent(rawResult, dataPath);
        return { ...rawResult, data, error };
    }, [manager, rawResult]);
    return [result, refresh];
};
exports.useFindFirst = useFindFirst;
//# sourceMappingURL=useFindFirst.js.map