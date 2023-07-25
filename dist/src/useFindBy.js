"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindBy = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const useGadgetQuery_1 = require("./useGadgetQuery");
const useStructuralMemo_1 = require("./useStructuralMemo");
const utils_1 = require("./utils");
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
const useFindBy = (finder, value, options) => {
    const memoizedOptions = (0, useStructuralMemo_1.useStructuralMemo)(options);
    const plan = (0, react_1.useMemo)(() => {
        return (0, api_client_core_1.findOneByFieldOperation)(finder.operationName, finder.findByVariableName, value, finder.defaultSelection, finder.modelApiIdentifier, memoizedOptions);
    }, [finder, value, memoizedOptions]);
    const [rawResult, refresh] = (0, useGadgetQuery_1.useGadgetQuery)((0, utils_1.useQueryArgs)(plan, options));
    const result = (0, react_1.useMemo)(() => {
        const dataPath = [finder.operationName];
        let data = rawResult.data;
        let records = [];
        if (data) {
            const connection = (0, api_client_core_1.get)(rawResult.data, dataPath);
            if (connection) {
                records = (0, api_client_core_1.hydrateConnection)(rawResult, connection);
                data = records[0];
            }
        }
        let error = utils_1.ErrorWrapper.forMaybeCombinedError(rawResult.error);
        if (!error) {
            if (records.length > 1) {
                error = utils_1.ErrorWrapper.forClientSideError((0, api_client_core_1.getNonUniqueDataError)(finder.modelApiIdentifier, finder.findByVariableName, value));
            }
            else if (rawResult.data && !records[0]) {
                error = utils_1.ErrorWrapper.forClientSideError(new api_client_core_1.GadgetNotFoundError(`${finder.modelApiIdentifier} record with ${finder.findByVariableName}=${value} not found`));
            }
        }
        return { ...rawResult, data, error };
    }, [rawResult, finder, value]);
    return [result, refresh];
};
exports.useFindBy = useFindBy;
//# sourceMappingURL=useFindBy.js.map