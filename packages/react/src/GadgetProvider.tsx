import type { AnyClient, GadgetConnection } from "@gadgetinc/api-client-core";
import { $gadgetConnection, isGadgetClient } from "@gadgetinc/api-client-core";
import type { ReactNode } from "react";
import React, { useContext } from "react";
import type { Client as UrqlClient } from "urql";
import { Provider as UrqlProvider } from "urql";

/**
 * React context that stores the current urql client
 *
 * urql doesn't have its own useClient hook, so we store it on our own context to get at the client object later
 **/
export const GadgetUrqlClientContext = React.createContext<UrqlClient | undefined>(undefined);

/** Provides the Gadget auth configuration used in the auth hooks */
export interface GadgetAuthConfiguration {
  /** The path that should be used for all Sign In buttons, and redirected to when the `User` is signed out */
  signInPath: string;
  /** The path that should be POSTed to to make sign the user out of their current `Session` */
  signOutPath: string;
}

/** Provides the api client instance, if present, as well as the Gadget auth configuration for the application. */
export interface GadgetConfigurationContext {
  api: AnyClient | undefined;
  auth: GadgetAuthConfiguration;
}

/**
 * React context that stores an instance of the JS Client for an app (AKA the `api` object)
 */
export const GadgetConfigurationContext = React.createContext<GadgetConfigurationContext | undefined>(undefined);

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
  auth?: Partial<GadgetAuthConfiguration>;
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

// default Gadget auth signIn and signOut paths
const defaultSignInPath = "/";
const defaultSignOutPath = "/signed-in";

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
 * <Provider api={api.connection.currentClient} signInPath="/auth/signin" signOutPath="/auth/signout">
 *   <MyApp />
 * </Provider>
 */
export function Provider(props: ProviderProps | DeprecatedProviderProps) {
  let gadgetClient: AnyClient | undefined = undefined;

  let urqlClient: UrqlClient;
  if ("api" in props) {
    if (!isGadgetClient(props.api)) {
      throw new Error(
        "Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!"
      );
    }
    gadgetClient = props.api;
    urqlClient = props.api.connection.currentClient;
  } else if (props.value) {
    urqlClient = props.value;
  } else {
    throw new Error(
      "No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!"
    );
  }
  // hack: make the client support suspending some queries when used by the react provider
  // this flag is safe to mutably set here because it just serves as a flag for the urql react hooks, and doesn't affect imperative api client functioning
  urqlClient.suspense = true;

  let signInPath = defaultSignInPath;
  let signOutPath = defaultSignOutPath;

  if ("auth" in props) {
    const { auth } = props;
    if (auth?.signInPath) signInPath = auth.signInPath;
    if (auth?.signOutPath) signOutPath = auth.signOutPath;
  }

  return (
    <GadgetUrqlClientContext.Provider value={urqlClient}>
      <GadgetConfigurationContext.Provider
        value={{
          api: gadgetClient,
          auth: {
            signInPath,
            signOutPath,
          },
        }}
      >
        <UrqlProvider value={urqlClient}>{props.children}</UrqlProvider>
      </GadgetConfigurationContext.Provider>
    </GadgetUrqlClientContext.Provider>
  );
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
  const connection = (urqlClient as any)[$gadgetConnection] as unknown as GadgetConnection | undefined;
  if (!connection) {
    throw new Error(
      `urql client found in context was not set up by the Gadget API client. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react.

      Possible remedies:
       - ensuring you have the <Provider/> component wrapped around your hook invocation
       - ensuring you are passing a value to the provider, usually <Provider api={api}>
       - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`
    );
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
      throw new Error(
        `useApi hook called in context with deprecated <Provider/> convention. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react and passing it an instance of your api client, like <Provider api={api} />.

        The <Provider /> component is currently being passed a value, like <Provider value={api.connection.currentClient}/>. Please update this to <Provider api={api} />.`
      );
    } else {
      throw new Error(
        `useApi hook called in context where no Gadget API client is available. Please ensure you are wrapping this hook with the <Provider/> component from @gadgetinc/react.

      Possible remedies:
       - ensuring you have the <Provider/> component wrapped around your hook invocation
       - ensuring you are passing an api client instance to the provider, usually <Provider api={api}>
       - ensuring your @gadget-client/<your-app> package and your @gadgetinc/react package are up to date`
      );
    }
  }
  return gadgetContext.api;
};
