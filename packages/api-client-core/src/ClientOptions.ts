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
  // This allows a web user to log in and keep their sessiontheir cookie (containing their credentials) will be sent.
  browserSession?: boolean | BrowserSessionAuthenticationModeOptions;

  // @private Use an internal platform auth token for authentication
  // This is used to communicate within Gadget itself and shouldn't be used to connect to Gadget from other systems
  internalAuthToken?: string;
}
