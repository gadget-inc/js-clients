"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.ErrorWrapper = exports.noProviderErrorMessage = exports.useQueryArgs = void 0;
const graphql_web_1 = require("@0no-co/graphql.web");
const support_js_1 = require("../support.js");
/**
 * Given a plan from a gadget query plan generator, create the query options object to pass to `urql`'s `useQuery` hook
 **/
const useQueryArgs = (plan, options) => ({
    query: plan.query,
    variables: plan.variables,
    ...options,
});
exports.useQueryArgs = useQueryArgs;
exports.noProviderErrorMessage = `Could not find a client in the context of Provider. Please ensure you wrap the root component in a <Provider>`;
const rehydrateGraphQlError = (error) => {
    if (typeof error === "string") {
        return new graphql_web_1.GraphQLError(error);
    }
    else if ((error === null || error === void 0 ? void 0 : error.message) && !error.code) {
        return new graphql_web_1.GraphQLError(error.message, error.nodes, error.source, error.positions, error.path, error, error.extensions || {});
    }
    else {
        return error;
    }
};
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
/**
 * An error returned by any of the Gadget hooks.
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
            executionErrors: errors.map(support_js_1.gadgetErrorFor),
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
        const nonNullableError = (0, support_js_1.getNonNullableError)(result, dataPath);
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
        var _a;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        const firstInvalidRecordError = this.executionErrors.find((err) => err.code == "GGT_INVALID_RECORD");
        return (_a = firstInvalidRecordError === null || firstInvalidRecordError === void 0 ? void 0 : firstInvalidRecordError.validationErrors) !== null && _a !== void 0 ? _a : null;
    }
}
exports.ErrorWrapper = ErrorWrapper;
/**
 * Wrapper to make a debounced function
 * NOTE: When using this within a component, make sure to wrap this in a `useCallback` so that the previous timeoutId is preserved between renders.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const debounce = (fn, delayInMs = 300) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delayInMs);
    };
};
exports.debounce = debounce;
//# sourceMappingURL=utils.js.map