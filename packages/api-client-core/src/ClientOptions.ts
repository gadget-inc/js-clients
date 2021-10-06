import type fetch from "cross-fetch";

// Describes how to authenticate an instance of the client with the Gadget platform
export interface AuthenticationModeOptions {
  // Use an API key to authenticate with Gadget.
  // Not strictly required, but without this the client might be useless depending on the app's permissions.
  apiKey?: string;

  // Use a session cookie for authentication.
  // This is primarily useful in a browser context, where a user can log in and their cookie (containing their credentials) will be sent.
  sessionCookie?: boolean;

  // @private Use an internal platform auth token for authentication
  // This is used to communicate within Gadget itself and shouldn't be used to connect to Gadget from other systems
  internalAuthToken?: string;
}

export interface ClientOptions {
  endpoint?: string; // The Gadget API endpoint this client should connect to, default "<%= defaultEndpoint %>"
  authenticationMode?: AuthenticationModeOptions; // The way in which we will authenticate with Gadget
  websocketsEndpoint?: string; // The Gadget API endpoint this client should connect to for batched websocket operations, default "<%= defaultEndpoint %>-ws"
  websocketImplementation?: any; // What object to use as `WebSocket`, useful for overriding in tests
  fetchImplementation?: typeof fetch; // What object to use to fetch, useful for overriding in tests
  environment?: "Development" | "Production";
}
