"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.GadgetApiContext = void 0;
const tslib_1 = require("tslib");
const client_hooks_1 = require("@gadgetinc/client-hooks");
const react_1 = tslib_1.__importDefault(require("react"));
const urql_1 = require("urql");
const adapter_js_1 = require("./adapter.js");
exports.GadgetApiContext = react_1.default.createContext(null);
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
    const { gadgetClient, gadgetConnection, urqlClient } = (0, client_hooks_1.registerClientHooks)(props.api, { ...adapter_js_1.reactAdapter, GadgetApiContext: exports.GadgetApiContext });
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
    return (react_1.default.createElement(exports.GadgetApiContext.Provider, { value: {
            api: gadgetClient,
            connection: gadgetConnection,
            navigate: props.navigate,
            auth: {
                signInPath,
                signOutActionApiIdentifier,
                redirectOnSuccessfulSignInPath,
            },
        } },
        react_1.default.createElement(urql_1.Provider, { value: urqlClient }, props.children)));
}
exports.Provider = Provider;
//# sourceMappingURL=GadgetProvider.js.map