import type { GadgetApiContext as CoreGadgetApiContext } from "@gadgetinc/client-hooks";
import { registerClientHooks } from "@gadgetinc/client-hooks";
import type { AnyClient } from "@gadgetinc/core";
import type { ReactNode } from "react";
import React from "react";
import { Provider as UrqlProvider } from "urql";
import { reactAdapter } from "./adapter.js";

/** Provides the Gadget auth configuration used in the auth hooks */
export interface GadgetAuthConfiguration {
  /** The path that should be used for all Sign In buttons, and redirected to when the `User` is signed out */
  signInPath: string;
  /** The API identifier of the `User` `signOut` action. Defaults to `signOut` */
  signOutActionApiIdentifier: string;
  /** The path that users are redirected to after they sign in successfully. */
  redirectOnSuccessfulSignInPath: string;
}

/** Provides the api client instance, if present, as well as the Gadget auth configuration for the application. */
export interface GadgetApiContext extends CoreGadgetApiContext {
  auth: GadgetAuthConfiguration;
  navigate?: (path: string) => void;
}

export const GadgetApiContext = React.createContext<GadgetApiContext>(null as unknown as GadgetApiContext);

interface BaseProviderProps {
  children: ReactNode;
  /** By default components/hooks will use `window.location` to load new URLs. If you have your own routing provider, the `navigate` prop can be used to push new routes.  */
  navigate?: (path: string) => void;
}

export interface ProviderProps extends BaseProviderProps {
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
}

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
export function Provider(props: ProviderProps) {
  const { gadgetClient, gadgetConnection, urqlClient } = registerClientHooks(props.api, { ...reactAdapter, GadgetApiContext });
  // hack: make the client support suspending some queries when used by the react provider
  // this flag is safe to mutably set here because it just serves as a flag for the urql react hooks, and doesn't affect imperative api client functioning
  urqlClient.suspense = true;

  let signInPath = defaultSignInPath;
  let signOutActionApiIdentifier = defaultSignOutApiIdentifier;
  let redirectOnSuccessfulSignInPath = defaultRedirectOnSuccessfulSignInPath;

  if ("auth" in props) {
    const { auth } = props;
    if (auth?.signInPath) signInPath = auth.signInPath;
    if (auth?.signOutActionApiIdentifier) signOutActionApiIdentifier = auth.signOutActionApiIdentifier;
    if (auth?.redirectOnSuccessfulSignInPath) redirectOnSuccessfulSignInPath = auth.redirectOnSuccessfulSignInPath;
  }

  return (
    <GadgetApiContext.Provider
      value={{
        api: gadgetClient,
        connection: gadgetConnection,
        navigate: props.navigate,
        auth: {
          signInPath,
          signOutActionApiIdentifier,
          redirectOnSuccessfulSignInPath,
        },
      }}
    >
      <UrqlProvider value={urqlClient}>{props.children}</UrqlProvider>
    </GadgetApiContext.Provider>
  );
}
