"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConnection = exports.Provider = exports.GadgetClientContext = exports.GadgetUrqlClientContext = void 0;
const api_client_core_1 = require("@gadgetinc/api-client-core");
const react_1 = __importDefault(require("react"));
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
exports.GadgetClientContext = react_1.default.createContext(undefined);
/**
 * Provider wrapper component that passes an api client instance to the other hooks.
 *
 * This component is __required__ as a wrapper around any React components using the other hooks in this library, like `useFindMany` or `useAction`.
 *
 * Pass an instance of your app's api client to the `value` prop.
 *
 * @example
 * <Provider value={api}>
 *   <MyApp />
 * </Provider>
 *
 * @example the Provider accepts the deprecated form of passing an urql client object right in -- this is deprecated and will be removed in a future version. Instead, just pass the whole api instance.
 * <Provider value={api.connection.currentClient}>
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
    return (react_1.default.createElement(exports.GadgetUrqlClientContext.Provider, { value: urqlClient },
        react_1.default.createElement(exports.GadgetClientContext.Provider, { value: gadgetClient },
            react_1.default.createElement(urql_1.Provider, { value: urqlClient }, props.children))));
}
exports.Provider = Provider;
const useConnection = () => {
    const urqlClient = react_1.default.useContext(exports.GadgetUrqlClientContext);
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
//# sourceMappingURL=GadgetProvider.js.map