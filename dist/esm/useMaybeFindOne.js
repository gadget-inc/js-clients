import { findOneOperation, get, hydrateRecord } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useGadgetQuery } from "./useGadgetQuery.js";
import { useStructuralMemo } from "./useStructuralMemo.js";
import { ErrorWrapper, useQueryArgs } from "./utils.js";
/**
 * React hook to fetch a Gadget record using the `maybeFindOne` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function User(props: { id: string }) {
 *   const [result, refresh] = useMaybeFindOne(Client.user, props.id, {
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
export const useMaybeFindOne = (manager, id, options) => {
    const memoizedOptions = useStructuralMemo(options);
    const plan = useMemo(() => {
        return findOneOperation(manager.findOne.operationName, id, manager.findOne.defaultSelection, manager.findOne.modelApiIdentifier, memoizedOptions);
    }, [manager, id, memoizedOptions]);
    const [rawResult, refresh] = useGadgetQuery(useQueryArgs(plan, options));
    const result = useMemo(() => {
        let data = rawResult.data ?? null;
        if (data) {
            const value = get(rawResult.data, [manager.findOne.operationName]);
            data = value && "id" in value ? hydrateRecord(rawResult, value) : null;
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
//# sourceMappingURL=useMaybeFindOne.js.map