"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.noProviderErrorMessage = exports.useQueryArgs = void 0;
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
function assert(value, message) {
    if (!value) {
        throw new Error("assertion error" + (message ? `: ${message}` : ""));
    }
    return value;
}
exports.assert = assert;
//# sourceMappingURL=utils.js.map