import type { ClientOptions } from "@urql/core";
import { Client } from "@urql/core";
import type { Client as SubscriptionClient, ClientOptions as SubscriptionClientOptions } from "graphql-ws";
import type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, Exchanges } from "./ClientOptions.js";
import { GadgetTransaction } from "./GadgetTransaction.js";
export type TransactionRun<T> = (transaction: GadgetTransaction) => Promise<T>;
export declare enum GadgetGraphQLCloseCode {
    TooManyRequests = 4294
}
export interface GadgetSubscriptionClientOptions extends Partial<SubscriptionClientOptions> {
    urlParams?: Record<string, string | null | undefined>;
    connectionAttempts?: number;
    connectionGlobalTimeoutMs?: number;
}
export declare const $transaction: unique symbol;
export declare const $gadgetConnection: unique symbol;
export interface GadgetConnectionOptions {
    endpoint: string;
    authenticationMode?: AuthenticationModeOptions;
    websocketsEndpoint?: string;
    subscriptionClientOptions?: GadgetSubscriptionClientOptions;
    websocketImplementation?: any;
    fetchImplementation?: typeof globalThis.fetch;
    environment?: string;
    requestPolicy?: ClientOptions["requestPolicy"];
    applicationId?: string;
    baseRouteURL?: string;
    exchanges?: Exchanges;
}
/**
 * Represents the current strategy for authenticating with the Gadget platform.
 * For individual users in web browsers, we authenticate using a session token stored client side, like a cookie, but with cross domain support.
 * For server to server communication, or traceable access from the browser, we use pre shared secrets called API Keys
 * And when within the Gadget platform itself, we use a private secret token called an Internal Auth Token. Internal Auth Tokens are managed by Gadget and should never be used by external developers.
 **/
export declare enum AuthenticationMode {
    BrowserSession = "browser-session",
    APIKey = "api-key",
    InternalAuthToken = "internal-auth-token",
    Anonymous = "anonymous",
    Custom = "custom"
}
/**
 * Root level database connection that Actions can use to mutate data in a Gadget database.
 * Manages transactions and the connection to a Gadget API
 */
export declare class GadgetConnection {
    readonly options: GadgetConnectionOptions;
    static version: "0.15.16";
    private endpoint;
    private subscriptionClientOptions?;
    private websocketsEndpoint;
    private websocketImplementation?;
    private _fetchImplementation;
    private environment;
    private exchanges;
    private baseClient;
    /** @private (but accessible for testing purposes) */
    baseSubscriptionClient?: SubscriptionClient;
    private currentTransaction;
    authenticationMode: AuthenticationMode;
    private sessionTokenStore?;
    private requestPolicy;
    constructor(options: GadgetConnectionOptions);
    private get sessionStorageKey();
    get currentClient(): Client;
    set fetchImplementation(implementation: typeof globalThis.fetch);
    /**
     * Change the authentication mode settings for this connection imperatively.
     * @private This function is generally not required for use by external developers, but is useful for those building integrations against the Gadget API to configure passed in `api` objects.
     */
    setAuthenticationMode(options?: AuthenticationModeOptions): void;
    enableSessionMode(options?: true | BrowserSessionAuthenticationModeOptions): void;
    transaction: {
        <T>(options: GadgetSubscriptionClientOptions, run: TransactionRun<T>): Promise<T>;
        <T>(run: TransactionRun<T>): Promise<T>;
    };
    close(): void;
    /**
     * `fetch` function that works the same as the built-in `fetch` function, but automatically passes authentication information for this API client.
     *
     * @example
     * await api.connection.fetch("https://myapp--development.gadget.app/foo/bar");
     *
     * @example
     * // fetch a relative URL from the endpoint this API client is configured to fetch from
     * await api.connection.fetch("/foo/bar");
     **/
    fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
    private isGadgetRequest;
    private resetClients;
    private newBaseClient;
    private newSubscriptionClient;
    private requestHeaders;
    private waitForOpenedConnection;
    private disposeClient;
    private getBaseSubscriptionClient;
}
