import { GadgetNotFoundError, findOneByFieldOperation, get, getNonUniqueDataError, hydrateConnection } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";
/**
 * React hook to fetch a Gadget record using the `findByXYZ` method of a given model manager. Useful for finding records by key fields which are used for looking up records by. Gadget autogenerates the `findByXYZ` methods on your model managers, and `useFindBy` can only be used with models that have these generated finder functions.
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
export const useFindBy = (finder, value, options) => {
    const memoizedOptions = useStructuralMemo(options);
    const plan = useMemo(() => {
        return findOneByFieldOperation(finder.operationName, finder.findByVariableName, value, finder.defaultSelection, finder.modelApiIdentifier, memoizedOptions);
    }, [finder, value, memoizedOptions]);
    const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, options));
    const result = useMemo(() => {
        const dataPath = [finder.operationName];
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
//# sourceMappingURL=useFindBy.js.map