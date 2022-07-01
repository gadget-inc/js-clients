/** All the options for a Gadget client */
export interface ClientOptions {
  endpoint?: string; // The Gadget API endpoint this client should connect to, default "<%= defaultEndpoint %>"
  authenticationMode?: AuthenticationModeOptions; // The way in which we will authenticate with Gadget
  websocketsEndpoint?: string; // The Gadget API endpoint this client should connect to for batched websocket operations, default "<%= defaultEndpoint %>-ws"
  websocketImplementation?: any; // What object to use as `WebSocket`, useful for overriding in tests
  fetchImplementation?: typeof fetch; // What object to use to fetch, useful for overriding in tests
  environment?: "Development" | "Production";
}

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
  storageType: BrowserSessionStorageType;
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

/** Describes how to authenticate an instance of the client with the Gadget platform */
export interface AuthenticationModeOptions {
  // Use an API key to authenticate with Gadget.
  // Not strictly required, but without this the client might be useless depending on the app's permissions.
  apiKey?: string;

  // Use a web browser's `localStorage` or `sessionStorage` to persist authentication information.
  // This allows the browser to have a persistent identity as the user navigates around and logs in and out.
  browserSession?: boolean | BrowserSessionAuthenticationModeOptions;

  // Use no authentication at all, and get access only to the data that the Unauthenticated backend role has access to.
  anonymous?: true;

  // @private Use an internal platform auth token for authentication
  // This is used to communicate within Gadget itself and shouldn't be used to connect to Gadget from other systems
  internalAuthToken?: string;

  // @private Use a passed custom function for managing authentication. For some fancy integrations that the API client supports, like embedded Shopify apps, we use platform native features to authenticate with the Gadget backend.
  custom?: {
    processFetch(input: RequestInfo, init: RequestInit): Promise<void>;
    processTransactionConnectionParams(params: Record<string, any>): Promise<void>;
  };
}
