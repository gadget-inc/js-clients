"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMaybeFindFirst = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useGadgetQuery_1 = require("./useGadgetQuery");
const useStructuralMemo_1 = require("./useStructuralMemo");
const utils_1 = require("./utils");
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
    const [rawResult, refresh] = (0, useGadgetQuery_1.useGadgetQuery)((0, utils_1.useQueryArgs)(plan, firstOptions));
    const result = (0, react_1.useMemo)(() => {
        const dataPath = [manager.findFirst.operationName];
        let data = rawResult.data ?? null;
        if (data) {
            const connection = (0, api_client_core_1.get)(rawResult.data, dataPath);
            if (connection) {
                data = (0, api_client_core_1.hydrateConnection)(rawResult, connection)[0] ?? null;
            }
            else {
                data = data[0] ?? null;
            }
        }
        const error = utils_1.ErrorWrapper.forMaybeCombinedError(rawResult.error);
        return {
            ...rawResult,
            error,
            data,
        };
    }, [rawResult, manager]);
    return [result, refresh];
};
exports.useMaybeFindFirst = useMaybeFindFirst;
//# sourceMappingURL=useMaybeFindFirst.js.map