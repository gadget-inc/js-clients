import { $gadgetConnection, isGadgetClient } from "@gadgetinc/api-client-core";
import React, { useContext } from "react";
import { Provider as UrqlProvider } from "urql";
/**
 * React context that stores the current urql client
 *
 * urql doesn't have its own useClient hook, so we store it on our own context to get at the client object later
 **/
export const GadgetUrqlClientContext = React.createContext(undefined);
/**
 * React context that stores an instance of the JS Client for an app (AKA the `api` object)
 */
export const GadgetConfigurationContext = React.createContext(undefined);
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
export function Provider(props) {
    let gadgetClient = undefined;
    let urqlClient;
    if ("api" in props) {
        if (!isGadgetClient(props.api)) {
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
    return (React.createElement(GadgetUrqlClientContext.Provider, { value: urqlClient },
        React.createElement(GadgetConfigurationContext.Provider, { value: {
                api: gadgetClient,
                navigate: props.navigate,
                auth: {
                    signInPath,
                    signOutActionApiIdentifier,
                    redirectOnSuccessfulSignInPath,
                },
            } },
            React.createElement(UrqlProvider, { value: urqlClient }, props.children))));
}
/**
 * Get the current `GadgetConnection` object from React context.
 * Must be called within a component wrapped by the `<Provider api={...} />` component.
 **/
export const useConnection = () => {
    const urqlClient = useContext(GadgetUrqlClientContext);
    if (!urqlClient) {
        throw new Error("No urql client object in React context, have you added the <Provider/> wrapper component from @gadgetinc/react?");
    }
    const connection = urqlClient[$gadgetConnection];
    if (!connection) {
        throw new Error(`urql client found in context was not set up by the Gadget API client. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react.

      Possible remedies:
       - ensuring you have the <Provider/> component wrapped around your hook invocation
       - ensuring you are passing a value to the provider, usually <Provider api={api}>
       - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`);
    }
    return connection;
};
/**
 * Get the current `api` object from React context
 * Must be called within a component wrapped by the `<Provider api={...} />` component.
 **/
export const useApi = () => {
    const gadgetContext = useContext(GadgetConfigurationContext);
    const urqlClient = useContext(GadgetUrqlClientContext);
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
//# sourceMappingURL=GadgetProvider.js.map