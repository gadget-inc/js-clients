import { findOneByFieldOperation } from "../operationBuilders.js";
import { GadgetNotFoundError, get, getNonUniqueDataError, hydrateConnection, namespaceDataPath } from "../support.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";
export const createUseFindBy = (adapter, coreHooks) => {
    const useFindBy = (finder, value, options) => {
        const memoizedOptions = coreHooks.useStructuralMemo(options);
        const plan = adapter.framework.useMemo(() => {
            return findOneByFieldOperation(finder.operationName, finder.findByVariableName, value, finder.defaultSelection, finder.modelApiIdentifier, memoizedOptions, finder.namespace);
        }, [finder, value, memoizedOptions]);
        const [rawResult, refresh] = coreHooks.useGadgetQuery(useQueryArgs(plan, options));
        const result = adapter.framework.useMemo(() => {
            const dataPath = namespaceDataPath([finder.operationName], finder.namespace);
            let data = rawResult.data;
            let records = [];
            if (data) {
                const connection = get(rawResult.data, dataPath);
                if (connection) {
                    records = hydrateConnection(rawResult, connection);
                    data = records[0];
                }
            }
            let error = ErrorWrapper.forMaybeCombinedError(rawResult.error);
            if (!error) {
                if (records.length > 1) {
                    error = ErrorWrapper.forClientSideError(getNonUniqueDataError(finder.modelApiIdentifier, finder.findByVariableName, value));
                }
                else if (rawResult.data && !records[0]) {
                    error = ErrorWrapper.forClientSideError(new GadgetNotFoundError(`${finder.modelApiIdentifier} record with ${finder.findByVariableName}=${value} not found`));
                }
            }
            return { ...rawResult, data, error };
        }, [rawResult, finder, value]);
        return [result, refresh];
    };
    return {
        /**
         * Hook to fetch a Gadget record using the `findByXYZ` method of a given model manager. Useful for finding records by key fields which are used for looking up records by. Gadget autogenerates the `findByXYZ` methods on your model managers, and `useFindBy` can only be used with models that have these generated finder functions.
         *
         * @param finder `findByXYZ` function from a Gadget manager that will be used
         * @param value field value of the record to fetch
         * @param options options for selecting the fields in the result
         *
         * @example
         * ```
         * export function UserByEmail(props: { email: string }) {
         *   const [result, refresh] = useFindBy(api.user.findByEmail, props.email, {
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
         */
        useFindBy,
    };
};
//# sourceMappingURL=useFindBy.js.map