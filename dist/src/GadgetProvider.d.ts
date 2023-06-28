import type { AnyClient, GadgetConnection } from "@gadgetinc/api-client-core";
import React, { ReactNode } from "react";
import type { Client as UrqlClient } from "urql";
/**
 * React context that stores the current urql client
 *
 * urql doesn't have its own useClient hook, so we store it on our own context to get at the client object later
 **/
export declare const GadgetUrqlClientContext: React.Context<UrqlClient | undefined>;
/**
 * React context that stores an instance of the JS Client for an app (AKA the `api` object)
 */
export declare const GadgetClientContext: React.Context<AnyClient | undefined>;
export interface ProviderProps {
    /**
     * An instance of your app's api client, often named `api`. This is the object that contains all of your generated query/mutation/subscription functions.
     *
     * @example
     * import { Client } from "@gadget-client/example-app"
     * const api = new Client();
     * const App = () => {
     *   return <Provider api={api}>
     *     <Routes/>
     *   </Provider>;
     * }
     */
    api: AnyClient;
    children: ReactNode;
}
/** @deprecated -- pass an instance of your app's api client instead with the `api` prop */
export interface DeprecatedProviderProps {
    /**
     * an urql client object from your current Gadget client, like `api.connection.currentClient`
     * @deprecated -- pass an instance of your app's api client instead with the `api` prop
     */
    value: UrqlClient;
    children: ReactNode;
}
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
export declare function Provider(props: ProviderProps | DeprecatedProviderProps): React.JSX.Element;
/**
 * Get the current `GadgetConnection` object from React context.
 * Must be called within a component wrapped by the `<Provider api={...} />` component.
 **/
export declare const useConnection: () => GadgetConnection;
/**
 * Get the current `api` object from React context
 * Must be called within a component wrapped by the `<Provider api={...} />` component.
 **/
export declare const useApi: () => AnyClient;
