"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindOne = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useGadgetQuery_1 = require("./useGadgetQuery");
const useStructuralMemo_1 = require("./useStructuralMemo");
const utils_1 = require("./utils");
/**
 * React hook to fetch one Gadget record by `id` from the backend. Returns a standard hook result set with a tuple of the result object with `data`, `fetching`, and `error` keys, and a `refetch` function. `data` will be the record if it was found, and `null` otherwise.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function User(props: { id: string }) {
 *   const [result, refresh] = useFindOne(api.user, props.id, {
 *     select: {
 *       name: true,
 *     },
 *   });
 *
 *   if (result.error) return <>Error: {result.error.toString()}</>;
 *   if (result.fetching && !result.data) return <>Fetching...</>;
 *   if (!result.data) return <>No user found with id={props.id}</>;
 *
 *   return <div>{result.data.name}</div>;
 * }
 * ```
 */
const useFindOne = (manager, id, options) => {
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.findOneOperation)(manager.findOne.operationName, id, manager.findOne.defaultSelection, manager.findOne.modelApiIdentifier, memoizedOptions);
    }, [manager, id, memoizedOptions]);
    const [rawResult, refresh] = (0, useGadgetQuery_1.useGadgetQuery)((0, utils_1.useQueryArgs)(plan, options));
    const result = (0, react_1.useMemo)(() => {
        const dataPath = [manager.findOne.operationName];
        let data = rawResult.data && (0, api_client_core_1.get)(rawResult.data, dataPath);
        if (data) {
            data = (0, api_client_core_1.hydrateRecord)(rawResult, data);
        }
        const error = utils_1.ErrorWrapper.errorIfDataAbsent(rawResult, dataPath);
        return { ...rawResult, data, error };
    }, [rawResult, manager]);
    return [result, refresh];
};
exports.useFindOne = useFindOne;
//# sourceMappingURL=useFindOne.js.map