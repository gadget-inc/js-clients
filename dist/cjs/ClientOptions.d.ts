import type { Exchange } from "@urql/core";
import type { GadgetSubscriptionClientOptions } from "./GadgetConnection";
/** All the options for a Gadget client */
export interface ClientOptions {
    /**
     *  The HTTP GraphQL endpoint this connection should connect to
     **/
    endpoint?: string;
    /**
     * The authentication strategy for connecting to the upstream API
     **/
    authenticationMode?: AuthenticationModeOptions;
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
export declare enum BrowserSessionStorageType {
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
    Temporary = "temporary"
}
/** Describes how to authenticate an instance of the client with the Gadget platform */
export interface AuthenticationModeOptions {
    apiKey?: string;
    browserSession?: boolean | BrowserSessionAuthenticationModeOptions;
    anonymous?: true;
    internalAuthToken?: string;
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
