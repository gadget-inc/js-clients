import { GraphQLError } from "@0no-co/graphql.web";
import { gadgetErrorFor, getNonNullableError, namespaceDataPath } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
export const noProviderErrorMessage = `Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>`;
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
        return new GraphQLError(error);
    }
    else if (error?.message && !error.code) {
        return new GraphQLError(error.message, error.nodes, error.source, error.positions, error.path, error, error.extensions || {});
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
export class ErrorWrapper extends Error {
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
            executionErrors: errors.map(gadgetErrorFor),
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
        const nonNullableError = getNonNullableError(result, dataPath);
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
/**
 * Generate the args for an `urql` useQuery hook, applying Gadget's defaults
 *
 * Gadget's React hooks support using the `suspense: true` option to enable React Suspense selectively per query. This means suspense is on at the client level, and then disabled by default for each hook until you opt in with `suspense: true`. This differs from urql, which has suspense on for hooks by default when it is enabled at the client level. So, this hook applies Gadget's (we think better) default to turn suspense off for each hook until you opt in, even when enabled at the client level.
 */
export const useMemoizedQueryOptions = (options) => {
    const { context: _context, suspense: _suspense, ...rest } = options ?? {};
    // use a memo as urql rerenders on context identity changes
    const context = useMemo(() => {
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
/**
 * Given a plan from a gadget query plan generator, create the query options object to pass to `urql`'s `useQuery` hook
 **/
export const useQueryArgs = (plan, options) => ({
    query: plan.query,
    variables: plan.variables,
    ...options,
});
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
export const get = (obj, path) => {
    if (!path)
        return undefined;
    return pathToPathArray(path).reduce((prevObj, key) => prevObj && prevObj[key], obj);
};
/**
 * Set a dot-separated path to a value on an object
 * From https://youmightnotneed.com/lodash
 */
export const set = (obj, path, value) => {
    const pathArray = pathToPathArray(path);
    pathArray.reduce((acc, key, i) => {
        if (acc[key] === undefined)
            acc[key] = {};
        if (i === pathArray.length - 1)
            acc[key] = value;
        return acc[key];
    }, obj);
};
/**
 * Based on Lodash uniqBy to ensure all array elements are unique by a property
 * https://youmightnotneed.com/lodash
 */
export const uniqByProperty = (arr, property) => {
    const getPropertyValue = (item) => item[property];
    return arr.filter((x, i, self) => i === self.findIndex((y) => getPropertyValue(x) === getPropertyValue(y)));
};
/**
 * Based on Lodash uniq to ensure all array elements are unique
 * https://youmightnotneed.com/lodash
 */
export const uniq = (arr) => [...new Set(arr)];
/**
 * Based on Lodash compact to ensure all array elements are truthy
 * https://youmightnotneed.com/lodash
 */
export const compact = (arr) => arr.filter((x) => !!x);
/**
 * Removes the property at path of object.
 * From https://youmightnotneed.com/lodash
 */
export const unset = (obj, path) => {
    const pathArray = pathToPathArray(path);
    pathArray.reduce((acc, key, i) => {
        if (i === pathArray.length - 1)
            delete acc[key];
        return acc[key];
    }, obj);
};
/**
 * Omits the given properties from an object
 * From https://youmightnotneed.com/lodash
 */
export const omit = (obj, omittedProperties) => {
    obj = { ...obj };
    omittedProperties.forEach((prop) => delete obj[prop]);
    return obj;
};
/**
 * Wrapper to make a debounced function
 * NOTE: When using this within a React component, make sure to wrap this in a `useCallback` so that the previous timeoutId is preserved between renders.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (fn, delayInMs = 300) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delayInMs);
    };
};
export const getModelManager = (apiClient, apiIdentifier, namespace) => {
    return get(apiClient, namespaceDataPath([apiIdentifier], namespace).join("."));
};
export const sortByProperty = (arr, property, order = "asc") => {
    return arr.sort((a, b) => {
        if (a[property] < b[property]) {
            return order === "asc" ? -1 : 1;
        }
        if (a[property] > b[property]) {
            return order === "asc" ? 1 : -1;
        }
        return 0;
    });
};
/**
 * In some cases, we need to exclude the `ref` property from the original object (e.g. input controllers) to prevent from showing up a warning message from React.
 * This function helps to get the object without the `ref` property.
 *
 * Check out https://github.com/gadget-inc/js-clients/pull/466 for more details.
 */
export const getPropsWithoutRef = (props) => {
    const { ref: _ref, ...rest } = props;
    return rest;
};
export const isRoleAssignmentsArray = (value) => {
    if (!Array.isArray(value) || value.length === 0)
        return false;
    if (!value.every((item) => item !== null && typeof item === "object" && "__typename" in item && item.__typename === "Role"))
        return false;
    return true;
};
/**
 * Humanizes a camelCase string by adding spaces between words and capitalizing the first letter
 * Examples
 *    humanizeCamelCase("createNewWidget") => "Create New Widget"
 *    humanizeCamelCase("do99Things") => "Do 99 Things"
 */
export const humanizeCamelCase = (camelCaseString) => {
    // Regular expression to find sequences of lowercase letters or digits followed by uppercase letters
    const uppercaseAfterLowercaseRegex = /([a-z\d])([A-Z])/g;
    // Add a space between the lowercase letter or digit and the uppercase letter
    let humanized = camelCaseString.replace(uppercaseAfterLowercaseRegex, "$1 $2");
    // Adjust to keep sequential numbers together with spaces around them
    humanized = humanized.replace(/([a-zA-Z])(\d)/g, "$1 $2");
    humanized = humanized.replace(/(\d)([a-zA-Z])/g, "$1 $2");
    // Capitalize the first letter
    return humanized.replace(/^./, (str) => str.toUpperCase());
};
export const deepMerge = (obj1, obj2) => {
    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
                obj1[key] = deepMerge(obj1[key], obj2[key]);
            }
            else {
                obj1[key] = obj2[key];
            }
        }
    }
    return obj1;
};
//# sourceMappingURL=utils.js.map