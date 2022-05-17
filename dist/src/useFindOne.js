"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindOne = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const urql_1 = require("urql");
const useStructuralMemo_1 = require("./useStructuralMemo");
/**
 * React hook to fetch a Gadget record using the `findOne` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function User(props: { id: string }) {
 *   const [result, refresh] = useFindOne(Client.user, props.id, {
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
    const [result, refresh] = (0, urql_1.useQuery)((0, api_client_core_1.getQueryArgs)(plan, options));
    const dataPath = [manager.findOne.operationName];
    let data = result.data;
    if (data) {
        data = (0, api_client_core_1.hydrateRecord)(result, (0, api_client_core_1.get)(result.data, dataPath));
    }
    const nonNullableError = (0, api_client_core_1.getNonNullableError)(result, dataPath);
    let error = result.error;
    if (!error && nonNullableError) {
        error = new urql_1.CombinedError({
            graphQLErrors: [nonNullableError],
        });
    }
    return [{ ...result, data, error }, refresh];
};
exports.useFindOne = useFindOne;
//# sourceMappingURL=useFindOne.js.map