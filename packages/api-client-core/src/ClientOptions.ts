import type { Exchange } from "@urql/core";
import type { GadgetSubscriptionClientOptions } from "./GadgetConnection.js";

type BaseClientOptions = {
  /**
   *  The HTTP GraphQL endpoint this connection should connect to
   **/
  endpoint?: string;
  /**
   * The Websockets GraphQL endpoint this connection should connect to for transactional processing
   **/
  websocketsEndpoint?: string;
  /**
   * Custom options to pass along to the WS clients when creating them
   **/
  subscriptionClientOptions?: GadgetSubscriptionClientOptions;
  /**
   * The `WebSocket` constructor to use for building websockets. Defaults to `globalThis.WebSocket`.
   **/
  websocketImplementation?: any;
  /**
   * The `fetch` function to use for making HTTP requests. Defaults to `globalThis.fetch`.
   **/
  fetchImplementation?: typeof fetch;
  /**
   * Which of the Gadget application's environments this connection should connect to
   **/
  environment?: string;
  /**
   * The ID of the application. Not required -- only used for emitting telemetry
   **/
  applicationId?: string;
  /**
   * The root URL of the app's public HTTP surface. Used for building fully-qualified URLs when `api.fetch` is called with relative paths.
   *
   * This only needs to be passed if you are overriding the `endpoint` parameter to something that can't be used for building fully-qualified URLs from relative imports.
   **/
  baseRouteURL?: string;
  /**
   * A list of exchanges to merge into the default exchanges used by the client.
   */
  exchanges?: Exchanges;
};

/** All the options for a Gadget client */
export type ClientOptions = BaseClientOptions &
  (
    | {
        /**
         * The authentication strategy for connecting to the upstream API.
         *
         * Note: you can only declare authentication modes at the top level, or under the `authenticationMode` key.
         * If you declare them at the top level and under the `authenticationMode` key at the same time, an error will be thrown.
         **/
        authenticationMode?: AuthenticationModeOptions;
      }
    | ({
        authenticationMode?: never;
      } & AuthenticationModeOptions)
  );

/** Options to configure a specific browser-based authentication mode */
export interface BrowserSessionAuthenticationModeOptions {
  /**
   * The initial token to set for browser authentication.
   * This is useful when your session is initialized by some external authentication system, like OAuth.
   */
  initialToken?: string;

  /**
   * Configures how the authentication token is persisted. See `BrowserSessionStorageType`.
   */
  storageType?: BrowserSessionStorageType;
  /**
   * The shop ID to set shop tenant. Useful for fetching shop-specific data.
   */
  shopId?: string;
}

/**
 * If using the `browserSession` authentication mode, sets how long the stored authentication information will last for for each user.
 */
export enum BrowserSessionStorageType {
  /**
   * `Durable` authentications ask the browser to keep the user's authentication information around for as long as it can, like the "Remember Me" button on a lot of webpages. Uses `window.localStorage` to store authentication tokens.
   */
  Durable = "Durable",
  /**
   * `Session` authentications ask the browser to keep the user's authentication information around for a given browser tab, and then remove it when the tab is closed. Useful for high security scenarios where authenticated sessions are sensitive and should be forgotten quickly, or where the user's identity is temporary and only needs to last a short while. Uses `window.sessionStorage` to store authentication tokens.
   */
  Session = "session",
  /**
   * `Temporary` authentications don't ask the browser to keep the user's authentication information around at all, such that refreshing the page will result in the user having no saved authentication state and likely being logged out. Useful for high security scenarios where authenticated sessions are sensitive and should be forgotten quickly.
   */
  Temporary = "temporary",
}

/** Describes how to authenticate an instance of the client with the Gadget platform. */
export interface AuthenticationModeOptions {
  /**
   * Use an API key to authenticate with Gadget.
   * It's not strictly required, but without this the client might be useless depending on the app's permissions.
   */
  apiKey?: string;

  /**
   * Use a web browser's `localStorage` or `sessionStorage` to persist authentication information.
   * This allows the browser to have a persistent identity as the user navigates around and logs in and out.
   */
  browserSession?: boolean | BrowserSessionAuthenticationModeOptions;

  /**
   * Use no authentication at all, and get access only to the data that the Unauthenticated backend role has access to.
   */
  anonymous?: true;

  /**
   * @deprecated Use internal instead.
   */
  internalAuthToken?: string;

  /**
   * Use an internal platform auth token for authentication
   * This is used to communicate within Gadget itself and shouldn't be used to connect to Gadget from other systems.
   * @private
   */
  internal?: {
    authToken: string;
    actAsSession?: boolean;
    getSessionId?: () => Promise<string | undefined>;
  };

  /**
   * Use a passed custom function for managing authentication.
   * For some fancy integrations that the API client supports, like embedded Shopify apps, we use platform native features to authenticate with the Gadget backend.
   * @private
   */
  custom?: {
    processFetch(input: RequestInfo | URL, init: RequestInit): Promise<void>;
    processTransactionConnectionParams(params: Record<string, any>): Promise<void>;
  };
}

export interface Exchanges {
  /**
   * Exchanges to add before all other exchanges.
   */
  beforeAll?: Exchange[];
  /**
   * Exchanges to add before any async exchanges.
   */
  beforeAsync?: Exchange[];
  /**
   * Exchanges to add after all other exchanges.
   */
  afterAll?: Exchange[];
}
