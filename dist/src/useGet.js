"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGet = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useGadgetQuery_1 = require("./useGadgetQuery");
const useStructuralMemo_1 = require("./useStructuralMemo");
const utils_1 = require("./utils");
/**
 * React hook that fetches a singleton record for an `api.currentSomething` style model manager. `useGet` fetches one global record, which is most often the current session. `useGet` doesn't require knowing the record's ID in order to fetch it, and instead returns the one current record for the current context.
 *
 * @param manager Gadget model manager to use, like `api.currentSomething`
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function CurrentSession() {
 *   const [{error, data, fetching}, refresh] = useGet(api.currentSession, {
 *     select: {
 *       id: true,
 *       userId: true,
 *     },
 *   });
 *
 *   if (error) return <>Error: {error.toString()}</>;
 *   if (fetching && !data) return <>Fetching...</>;
 *   if (!data) return <>No current session found</>;
 *
 *   return <div>Current session ID={data.id} and userId={data.userId}</div>;
 * }
 * ```
 */
const useGet = (manager, options) => {
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.findOneOperation)(manager.get.operationName, undefined, manager.get.defaultSelection, manager.get.modelApiIdentifier, memoizedOptions);
    }, [manager, memoizedOptions]);
    const [rawResult, refresh] = (0, useGadgetQuery_1.useGadgetQuery)((0, utils_1.useQueryArgs)(plan, options));
    const result = (0, react_1.useMemo)(() => {
        let data = null;
        const rawRecord = rawResult.data && (0, api_client_core_1.get)(rawResult.data, [manager.get.operationName]);
        if (rawRecord) {
            data = (0, api_client_core_1.hydrateRecord)(rawResult, rawRecord);
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
exports.useGet = useGet;
//# sourceMappingURL=useGet.js.map