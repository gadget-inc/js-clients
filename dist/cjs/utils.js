"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDataRedux = exports.hasNested = exports.set = exports.get = exports.disambiguateActionVariables = exports.useQueryArgs = exports.useMemoizedQueryOptions = exports.ErrorWrapper = exports.noProviderErrorMessage = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const graphql_1 = require("graphql");
const react_1 = require("react");
exports.noProviderErrorMessage = `Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>`;
const generateErrorMessage = (networkErr, graphQlErrs) => {
    let error = "";
    if (networkErr !== undefined) {
        error = `[Network] ${networkErr.message}`;
    }
    else if (graphQlErrs !== undefined) {
        graphQlErrs.forEach((err) => {
            error += `[GraphQL] ${err.message}\n`;
        });
    }
    else {
        error = "Unknown error";
    }
    return error.trim();
};
const rehydrateGraphQlError = (error) => {
    if (typeof error === "string") {
        return new graphql_1.GraphQLError(error);
    }
    else if (error?.message && !error.code) {
        return new graphql_1.GraphQLError(error.message, error.nodes, error.source, error.positions, error.path, error, error.extensions || {});
    }
    else {
        return error;
    }
};
/**
 * An error returned by any of the Gadget react hooks.
 * Always has a message, but can be inspected to retrieve more detailed errors from either the network, the raw GraphQL layer, or Gadget specific errors like validation errors.
 * Not intended for creating outside of Gadget-owned code.
 **/
class ErrorWrapper extends Error {
    /** @private */
    static forClientSideError(error, response) {
        return new ErrorWrapper({
            executionErrors: [error],
            response,
        });
    }
    /** @private */
    static forErrorsResponse(errors, response) {
        return new ErrorWrapper({
            executionErrors: errors.map(api_client_core_1.gadgetErrorFor),
            response,
        });
    }
    /** @private */
    static forMaybeCombinedError(error) {
        if (!error)
            return undefined;
        return new ErrorWrapper({
            networkError: error.networkError,
            executionErrors: error.graphQLErrors,
            response: error.response,
        });
    }
    /** @private */
    static errorIfDataAbsent(result, dataPath, paused = false) {
        const nonNullableError = (0, api_client_core_1.getNonNullableError)(result, dataPath);
        let error = ErrorWrapper.forMaybeCombinedError(result.error);
        if (!error && nonNullableError && !paused) {
            error = ErrorWrapper.forClientSideError(nonNullableError);
        }
        return error;
    }
    constructor({ networkError, executionErrors, response, }) {
        const normalizedExecutionErrors = (executionErrors || []).map(rehydrateGraphQlError);
        const message = generateErrorMessage(networkError, normalizedExecutionErrors);
        super(message);
        /** Error message for this error. Derived from the other errors this wraps. */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * A list of errors encountered by the backend when processing a request. Populated if the client successfully communicated with the backend, but the backend was unable to process the request and rejected it with an error.
         * Includes GraphQL syntax errors, missing or invalid argument errors, data validation errors, or unexpected errors encountered when running backend logic.
         **/
        Object.defineProperty(this, "executionErrors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * An error encountered when trying to communicate with the backend from the client. Includes things like connection timeouts, connection interrupts, or no internet connection errors
         **/
        Object.defineProperty(this, "networkError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * A list of errors encountered by the backend when processing a request. Populated if the client successfully communicated with the backend, but the backend was unable to process the request and rejected it with an error.
         * Includes GraphQL syntax errors, missing or invalid argument errors, data validation errors, or unexpected errors encountered when running backend logic.
         *
         * This property allows this object to match the interface of urql's `CombinedError` object.
         *
         * @deprecated use `executionErrors` instead for a list of the errors that the GraphQL backend API returned *and* client side errors from unexpected responses.
         **/
        Object.defineProperty(this, "graphQLErrors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The response from the server, if any was retrieved.
         */
        Object.defineProperty(this, "response", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.message = message;
        this.executionErrors = normalizedExecutionErrors;
        this.graphQLErrors = normalizedExecutionErrors;
        this.networkError = networkError;
        this.response = response;
    }
    /** Class name of this error -- always `ErrorWrapper` */
    get name() {
        return "ErrorWrapper";
    }
    toString() {
        return this.message;
    }
    /**
     * A list of errors the backend reported for specific fields being invalid for the records touched by an action. Is a shortcut for accessing the validation errors of a `GadgetInvalidRecordError` if that's what is in the `executionErrors`.
     **/
    get validationErrors() {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        const firstInvalidRecordError = this.executionErrors.find((err) => err.code == "GGT_INVALID_RECORD");
        return firstInvalidRecordError?.validationErrors ?? null;
    }
}
exports.ErrorWrapper = ErrorWrapper;
/**
 * Generate the args for an `urql` useQuery hook, applying Gadget's defaults
 *
 * Gadget's React hooks support using the `suspense: true` option to enable React Suspense selectively per query. This means suspense is on at the client level, and then disabled by default for each hook until you opt in with `suspense: true`. This differs from urql, which has suspense on for hooks by default when it is enabled at the client level. So, this hook applies Gadget's (we think better) default to turn suspense off for each hook until you opt in, even when enabled at the client level.
 */
const useMemoizedQueryOptions = (options) => {
    const { context: _context, suspense: _suspense, ...rest } = options ?? {};
    // use a memo as urql rerenders on context identity changes
    const context = (0, react_1.useMemo)(() => {
        return {
            suspense: !!options?.suspense,
            ...options?.context,
        };
    }, [options?.suspense, options?.context]);
    return {
        ...rest,
        context,
    };
};
exports.useMemoizedQueryOptions = useMemoizedQueryOptions;
/**
 * Given a plan from a gadget query plan generator, create the query options object to pass to `urql`'s `useQuery` hook
 **/
const useQueryArgs = (plan, options) => ({
    query: plan.query,
    variables: plan.variables,
    ...options,
});
exports.useQueryArgs = useQueryArgs;
/**
 * Processes the flexible, convenient JS-land inputs for an action to the fully qualified GraphQL API inputs
 * @internal */
const disambiguateActionVariables = (action, variables) => {
    variables ?? (variables = {});
    if (action.hasAmbiguousIdentifier) {
        if (Object.keys(variables).some((key) => key !== "id" && !action.paramOnlyVariables?.includes(key) && key !== action.modelApiIdentifier)) {
            throw Error(`Invalid arguments found in variables. Did you mean to use ({ ${action.modelApiIdentifier}: { ... } })?`);
        }
    }
    let newVariables;
    if (action.acceptsModelInput ?? action.hasCreateOrUpdateEffect) {
        if (action.modelApiIdentifier in variables &&
            typeof variables[action.modelApiIdentifier] === "object" &&
            variables[action.modelApiIdentifier] != null) {
            newVariables = variables;
        }
        else {
            newVariables = {
                [action.modelApiIdentifier]: {},
            };
            for (const [key, value] of Object.entries(variables)) {
                if (action.paramOnlyVariables?.includes(key)) {
                    newVariables[key] = value;
                }
                else {
                    if (key == "id") {
                        newVariables.id = value;
                    }
                    else {
                        newVariables[action.modelApiIdentifier][key] = value;
                    }
                }
            }
        }
    }
    else {
        newVariables = variables;
    }
    return newVariables;
};
exports.disambiguateActionVariables = disambiguateActionVariables;
/**
 * Get a list of path segments from a dot-separated path
 */
const pathToPathArray = (path) => {
    // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
    // Regex explained: https://regexr.com/58j0k
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
};
/**
 * Get a dot-separated path from an object
 * From https://youmightnotneed.com/lodash
 */
const get = (obj, path) => {
    if (!path)
        return undefined;
    return pathToPathArray(path).reduce((prevObj, key) => prevObj && prevObj[key], obj);
};
exports.get = get;
/**
 * Set a dot-separated path to a value on an object
 * From https://youmightnotneed.com/lodash
 */
const set = (obj, path, value) => {
    const pathArray = pathToPathArray(path);
    pathArray.reduce((acc, key, i) => {
        if (acc[key] === undefined)
            acc[key] = {};
        if (i === pathArray.length - 1)
            acc[key] = value;
        return acc[key];
    }, obj);
};
exports.set = set;
function hasNested(data) {
    if (data == null) {
        return false;
    }
    return Object.values(data).some((value) => {
        return typeof value === "object" && value !== undefined && Array.isArray(value);
    });
}
exports.hasNested = hasNested;
async function transformDataRedux(modelManager, defaultValues, data) {
    const referencedTypes = await modelManager?.connection.getCurrentModels();
    console.log("referencedTypes", JSON.stringify(referencedTypes, null, 2));
    if (!referencedTypes) {
        throw new Error("No referenced types found");
    }
    console.log("defaultValues", JSON.stringify(defaultValues, null, 2));
    console.log("data", JSON.stringify(data, null, 2));
    const updates = getUpdates(defaultValues);
    function transform(input, depth = 0, path = undefined, fieldType = null, fieldRelationships = null) {
        if (Array.isArray(input)) {
            const results = [];
            const edge = updates[path];
            const handled = [];
            if (edge) {
                results.push(edge.map((nodeId, nodeIndex) => {
                    const item = input.find((item) => item.id == nodeId);
                    if (!item) {
                        const updateEntries = Object.entries(updates);
                        const updateEntry = updateEntries.find(([key, _ids]) => key.includes(path + "." + nodeIndex));
                        if (updateEntry) {
                            const { 0: updatePath, 1: _ } = updateEntry;
                            delete updates[updatePath];
                        }
                        return { delete: { id: nodeId } };
                    }
                    else {
                        const index = input.findIndex((item) => item.id == nodeId);
                        delete updates[path][nodeIndex];
                        handled.push(index);
                        const currentPath = path ? `${path}.${index}` : index.toString();
                        return transform(item, depth + 1, currentPath, fieldType, fieldRelationships);
                    }
                }));
            }
            // handle the rest of the array
            results.push(input
                .filter((_item, index) => !handled.includes(index))
                .map((item, index) => {
                const currentPath = path ? `${path}.${index}` : index.toString();
                return transform(item, depth + 1, currentPath, fieldType, fieldRelationships);
            }));
            return results.flatMap((result) => result);
        }
        else if (input != null && typeof input === "object") {
            const result = {};
            for (const key of Object.keys(input)) {
                const currentPath = path ? `${path}.${key}` : key;
                const fieldType = fieldRelationships ? fieldRelationships[key] : null;
                const relationships = fieldType ? referencedTypes?.[fieldType.model] : referencedTypes?.[key];
                result[key] = transform(input[key], depth + 1, currentPath, fieldType, relationships);
            }
            const { __typename, ...rest } = result;
            let belongsTo = null;
            const belongsToRelationships = fieldRelationships
                ? Object.entries(fieldRelationships)
                    .filter(([_key, value]) => value.type === "BelongsTo")
                    .reduce((obj, [key, value]) => {
                    obj[key] = value;
                    return obj;
                }, {})
                : null;
            for (const key of Object.keys(belongsToRelationships ?? {})) {
                // TODO - handle multiple ambiguous identifiers
                if (`${key}Id` in input) {
                    if (belongsTo == null) {
                        belongsTo = {};
                    }
                    belongsTo = { ...belongsTo, [key]: { _link: input[`${key}Id`] } };
                    delete rest[`${key}Id`];
                }
            }
            if (belongsTo) {
                return depth <= 1 ? { ...rest, ...belongsTo } : { ...rest, create: { ...belongsTo } };
            }
            if (depth <= 1) {
                return { ...rest };
            }
            if (fieldType == null) {
                throw new Error(`Can't transform input, no field type found. ${JSON.stringify({
                    input,
                    path,
                    referencedTypes,
                }, null, 2)}`);
            }
            const inputHasId = "id" in input;
            switch (fieldType.type) {
                case "HasMany":
                case "HasOne":
                    return inputHasId ? { update: { ...rest } } : { create: { ...rest } };
                case "BelongsTo":
                    return inputHasId ? { _link: input["id"] } : { create: { ...rest } };
                default:
                    throw new Error(`Can't transform input, Unknown field type ${fieldType}. ${JSON.stringify({
                        input,
                        path,
                        referencedTypes,
                    }, null, 2)}`);
            }
        }
        return input;
    }
    const result = transform(data);
    // console.log("transformedData", JSON.stringify(result, null, 2));
    return result;
}
exports.transformDataRedux = transformDataRedux;
function getUpdates(data) {
    const updateList = {};
    function go(input, path = undefined, depth = 0) {
        if (Array.isArray(input)) {
            return input.map((item, index) => {
                const currentPath = path ? `${path}.${index}` : index.toString();
                return go(item, currentPath, depth + 1);
            });
        }
        else if (input !== undefined && input !== null && typeof input === "object") {
            const result = {};
            for (const key of Object.keys(input)) {
                const currentPath = path ? `${path}.${key}` : key;
                result[key] = go(input[key], currentPath, depth + 1);
            }
            if (depth > 1) {
                const newPath = path?.substring(0, path.length - 2);
                if ("id" in input) {
                    if (!updateList[newPath]) {
                        updateList[newPath] = [];
                    }
                    updateList[newPath].push(input["id"]);
                }
            }
            return result;
        }
        return input;
    }
    go(data);
    return updateList;
}
//# sourceMappingURL=utils.js.map