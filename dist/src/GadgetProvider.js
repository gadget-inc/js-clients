"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApi = exports.useConnection = exports.Provider = exports.GadgetConfigurationContext = exports.GadgetUrqlClientContext = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = __importStar(require("react"));
const urql_1 = require("urql");
/**
 * React context that stores the current urql client
 *
 * urql doesn't have its own useClient hook, so we store it on our own context to get at the client object later
 **/
exports.GadgetUrqlClientContext = react_1.default.createContext(undefined);
/**
 * React context that stores an instance of the JS Client for an app (AKA the `api` object)
 */
exports.GadgetConfigurationContext = react_1.default.createContext(undefined);
const defaultSignInPath = "/";
const defaultSignOutApiIdentifier = "signOut";
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
 * <Provider api={api.connection.currentClient}>
 *   <MyApp />
 * </Provider>
 *
 * @example the Provider accepts option sign in and sign out paths.
 * <Provider api={api.connection.currentClient} signInPath="/auth/signin" signOutActionApiIdentifier="signOut">
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
    if ("auth" in props) {
        const { auth } = props;
        if (auth?.signInPath)
            signInPath = auth.signInPath;
        if (auth?.signOutActionApiIdentifier)
            signOutActionApiIdentifier = auth.signOutActionApiIdentifier;
    }
    return (react_1.default.createElement(exports.GadgetUrqlClientContext.Provider, { value: urqlClient },
        react_1.default.createElement(exports.GadgetConfigurationContext.Provider, { value: {
                api: gadgetClient,
                auth: {
                    signInPath,
                    signOutActionApiIdentifier,
                },
            } },
            react_1.default.createElement(urql_1.Provider, { value: urqlClient }, props.children))));
}
exports.Provider = Provider;
/**
 * Get the current `GadgetConnection` object from React context.
 * Must be called within a component wrapped by the `<Provider api={...} />` component.
 **/
const useConnection = () => {
    const urqlClient = (0, react_1.useContext)(exports.GadgetUrqlClientContext);
    if (!urqlClient) {
        throw new Error("No urql client object in React context, have you added the <Provider/> wrapper component from @gadgetinc/react?");
    }
    const connection = urqlClient[api_client_core_1.$gadgetConnection];
    if (!connection) {
        throw new Error(`urql client found in context was not set up by the Gadget API client. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react.

      Possible remedies:
       - ensuring you have the <Provider/> component wrapped around your hook invocation
       - ensuring you are passing a value to the provider, usually <Provider api={api}>
       - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    }
    return connection;
};
exports.useConnection = useConnection;
/**
 * Get the current `api` object from React context
 * Must be called within a component wrapped by the `<Provider api={...} />` component.
 **/
const useApi = () => {
    const gadgetContext = (0, react_1.useContext)(exports.GadgetConfigurationContext);
    const urqlClient = (0, react_1.useContext)(exports.GadgetUrqlClientContext);
    if (!gadgetContext || !gadgetContext.api) {
        if (urqlClient) {
            throw new Error(`useApi hook called in context with deprecated <Provider/> convention. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react and passing it an instance of your api client, like <Provider api={api} />.

        The <Provider /> component is currently being passed a value, like <Provider value={api.connection.currentClient}/>. Please update this to <Provider api={api} />.`);
        }
        else {
            throw new Error(`useApi hook called in context where no Gadget API client is available. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react.

      Possible remedies:
       - ensuring you have the <Provider/> component wrapped around your hook invocation
       - ensuring you are passing an api client instance to the provider, usually <Provider api={api}>
       - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
        }
    }
    return gadgetContext.api;
};
exports.useApi = useApi;
//# sourceMappingURL=GadgetProvider.js.map