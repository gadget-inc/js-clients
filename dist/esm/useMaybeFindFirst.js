import { findManyOperation, get, hydrateConnection } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";
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
export const useMaybeFindFirst = (manager, options) => {
    const firstOptions = { ...options, first: 1 };
    const memoizedOptions = useStructuralMemo(firstOptions);
    const plan = useMemo(() => {
        return findManyOperation(manager.findFirst.operationName, manager.findFirst.defaultSelection, manager.findFirst.modelApiIdentifier, memoizedOptions);
    }, [manager, memoizedOptions]);
    const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, firstOptions));
    const result = useMemo(() => {
        const dataPath = [manager.findFirst.operationName];
        let data = rawResult.data ?? null;
        if (data) {
            const connection = get(rawResult.data, dataPath);
            if (connection) {
                data = hydrateConnection(rawResult, connection)[0] ?? null;
            }
            else {
                data = data[0] ?? null;
            }
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
//# sourceMappingURL=useMaybeFindFirst.js.map