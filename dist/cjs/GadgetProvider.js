"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.GadgetUrqlClientContext = exports.GadgetConfigurationContext = void 0;
const tslib_1 = require("tslib");
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = tslib_1.__importDefault(require("react"));
const urql_1 = require("urql");
const adaptor_js_1 = require("./adaptor.js");
const contexts = (0, api_client_core_1.createContexts)(adaptor_js_1.reactAdapter);
const GadgetUrqlClientContext = contexts.GadgetUrqlClientContext;
exports.GadgetUrqlClientContext = GadgetUrqlClientContext;
const GadgetConfigurationContext = contexts.GadgetConfigurationContext;
exports.GadgetConfigurationContext = GadgetConfigurationContext;
const defaultSignInPath = "/";
const defaultSignOutApiIdentifier = "signOut";
const defaultRedirectOnSuccessfulSignInPath = "/";
/**
 * Provider wrapper component that passes an api client instance to the other hooks.
 *
 * This component is __required__ as a wrapper around any React components using the other hooks in this library, like `useFindMany` or `useAction`.
 *
 * Pass an instance of your app's api client to the `api` prop.
 *
 * @example
 * <Provider api={api}>
 *   <MyApp />
 * </Provider>
 *
 * @example the Provider accepts the deprecated form of passing an urql client object right in -- this is deprecated and will be removed in a future version. Instead, just pass the whole api instance.
 * <Provider value={api.connection.currentClient}>
 *   <MyApp />
 * </Provider>
 *
 * @example the Provider accepts option sign in and sign out paths.
 * <Provider api={api} signInPath="/auth/signin" signOutActionApiIdentifier="signOut">
 *   <MyApp />
 * </Provider>
 */
function Provider(props) {
    let gadgetClient = undefined;
    let urqlClient;
    if ("api" in props) {
        if (!(0, api_client_core_1.isGadgetClient)(props.api)) {
            throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
        }
        gadgetClient = props.api;
        urqlClient = props.api.connection.currentClient;
    }
    else if (props.value) {
        urqlClient = props.value;
    }
    else {
        throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    }
    // hack: make the client support suspending some queries when used by the react provider
    // this flag is safe to mutably set here because it just serves as a flag for the urql react hooks, and doesn't affect imperative api client functioning
    urqlClient.suspense = true;
    let signInPath = defaultSignInPath;
    let signOutActionApiIdentifier = defaultSignOutApiIdentifier;
    let redirectOnSuccessfulSignInPath = defaultRedirectOnSuccessfulSignInPath;
    if ("auth" in props) {
        const { auth } = props;
        if (auth?.signInPath)
            signInPath = auth.signInPath;
        if (auth?.signOutActionApiIdentifier)
            signOutActionApiIdentifier = auth.signOutActionApiIdentifier;
        if (auth?.redirectOnSuccessfulSignInPath)
            redirectOnSuccessfulSignInPath = auth.redirectOnSuccessfulSignInPath;
    }
    return (react_1.default.createElement(GadgetUrqlClientContext.Provider, { value: urqlClient },
        react_1.default.createElement(GadgetConfigurationContext.Provider, { value: {
                api: gadgetClient,
                navigate: props.navigate,
                auth: {
                    signInPath,
                    signOutActionApiIdentifier,
                    redirectOnSuccessfulSignInPath,
                },
            } },
            react_1.default.createElement(urql_1.Provider, { value: urqlClient }, props.children))));
}
exports.Provider = Provider;
//# sourceMappingURL=GadgetProvider.js.map