import { findOneOperation, namespaceDataPath } from "../index.js";
import { get, hydrateRecord } from "../support.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";
export const createUseGet = (adapter, coreHooks) => {
    const useGet = (manager, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return findOneOperation(manager.get.operationName, undefined, manager.get.defaultSelection, manager.get.modelApiIdentifier, memoizedOptions);
        }, [manager, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));
        const dataPath = namespaceDataPath([manager.get.operationName], manager.get.namespace);
        const result = adapter.framework.useMemo(() => {
            let data = null;
            const rawRecord = rawResult.data && get(rawResult.data, dataPath);
            if (rawRecord) {
                data = hydrateRecord(rawResult, rawRecord);
            }
            const error = ErrorWrapper.forMaybeCombinedError(rawResult.error);
            return {
                ...rawResult,
                error,
                data,
            };
        }, [rawResult, manager]);
        return [result, refresh];
    };
    return {
        /**
         * Hook that fetches a singleton record for an `api.currentSomething` style model manager. `useGet` fetches one global record, which is most often the current session. `useGet` doesn't require knowing the record's ID in order to fetch it, and instead returns the one current record for the current context.
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
        useGet,
    };
};
//# sourceMappingURL=useGet.js.map