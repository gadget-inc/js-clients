/** All the options for a Gadget client */
export interface ClientOptions {
    endpoint?: string;
    authenticationMode?: AuthenticationModeOptions;
    websocketsEndpoint?: string;
    websocketImplementation?: any;
    fetchImplementation?: typeof fetch;
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
