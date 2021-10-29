"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFindBy = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = require("react");
const urql_1 = require("urql");
const useStructuralMemo_1 = require("./useStructuralMemo");
/**
 * React hook to fetch a Gadget record using the `findByXYZ` method of a given manager.
 *
 * @param finder `findByXYZ` function from a Gadget manager that will be used
 * @param value field value of the record to fetch
 * @param options options for selecting the fields in the result
 *
 * @example
 * ```
 * export function UserByEmail(props: { email: string }) {
 *   const [result, refresh] = useFindBy(Client.user.findByEmail, props.email, {
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
    const [result, refresh] = (0, urql_1.useQuery)({
        query: plan.query,
        variables: plan.variables,
        context: options?.context,
        pause: options?.pause,
        requestPolicy: options?.requestPolicy,
    });
    let records = [];
    let data = result.data;
    if (data) {
        const connection = (0, api_client_core_1.get)(result.data, [finder.operationName]);
        if (connection) {
            records = (0, api_client_core_1.hydrateConnection)(result, connection);
            data = records[0];
        }
    }
    let error = result.error;
    if (!error && records.length > 1) {
        error = new urql_1.CombinedError({
            graphQLErrors: [
                new api_client_core_1.GadgetNonUniqueDataError(`More than one record found for ${finder.modelApiIdentifier}.${finder.findByVariableName} = ${value}. Please confirm your unique validation is not reporting an error.`),
            ],
        });
    }
    return [{ ...result, error, data }, refresh];
};
exports.useFindBy = useFindBy;
//# sourceMappingURL=useFindBy.js.map