"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMaybeFindFirst = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const urql_1 = require("urql");
const useStructuralMemo_1 = require("./useStructuralMemo");
/**
 * React hook to fetch many Gadget records using the `maybeFindFirst` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param options options for filtering and searching records, and selecting the fields in each record of the result
 *
 * @example
 *
 * ```
 * export function Users() {
 *   const [result, refresh] = useMaybeFindFirst(Client.user, {
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
const useMaybeFindFirst = (manager, options) => {
    const firstOptions = { ...options, first: 1 };
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(firstOptions);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.findManyOperation)(manager.findFirst.operationName, manager.findFirst.defaultSelection, manager.findFirst.modelApiIdentifier, memoizedOptions);
    }, [manager, memoizedOptions]);
    const [result, refresh] = (0, urql_1.useQuery)((0, api_client_core_1.getQueryArgs)(plan, firstOptions));
    const dataPath = [manager.findFirst.operationName];
    let data = result.data ?? null;
    if (data) {
        const connection = (0, api_client_core_1.get)(result.data, dataPath);
        if (connection) {
            data = (0, api_client_core_1.hydrateConnection)(result, connection)[0] ?? null;
        }
        else {
            data = data[0] ?? null;
        }
    }
    return [{ ...result, data }, refresh];
};
exports.useMaybeFindFirst = useMaybeFindFirst;
//# sourceMappingURL=useMaybeFindFirst.js.map