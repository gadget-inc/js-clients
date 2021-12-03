import { Client } from "@urql/core";
import fetch from "cross-fetch";
import { Client as SubscriptionClient, ClientOptions as SubscriptionClientOptions } from "graphql-ws";
import type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions } from "./ClientOptions";
import { GadgetTransaction } from "./GadgetTransaction";
export declare type TransactionRun<T> = (transaction: GadgetTransaction) => Promise<T>;
export interface GadgetSubscriptionClientOptions extends Partial<SubscriptionClientOptions> {
    urlParams?: Record<string, string | null | undefined>;
}
export declare const $transaction: unique symbol;
export interface GadgetConnectionOptions {
    endpoint: string;
    authenticationMode?: AuthenticationModeOptions;
    websocketsEndpoint?: string;
    subscriptionClientOptions?: GadgetSubscriptionClientOptions;
    websocketImplementation?: any;
    fetchImplementation?: typeof fetch;
    environment?: "Development" | "Production";
}
/** Helper function to await the setup dance on a graphql-ws Client object. */
export declare const connectionOpen: (subscriptionClient: SubscriptionClient, isConnected: () => boolean) => Promise<void>;
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
    Anonymous = "anonymous"
}
/**
 * Root level database connection that Actions can use to mutate data in a Gadget database.
 * Manages transactions and the connection to a Gadget API
 */
export declare class GadgetConnection {
    readonly options: GadgetConnectionOptions;
    private endpoint;
    private subscriptionClientOptions?;
    private websocketsEndpoint;
    private websocketImplementation;
    private fetchImplementation;
    private environment;
    private baseClient;
    private baseSubscriptionClient;
    private currentTransaction;
    authenticationMode: AuthenticationMode;
    private sessionTokenStore?;
    constructor(options: GadgetConnectionOptions);
    get currentClient(): Client;
    enableSessionMode(options?: true | BrowserSessionAuthenticationModeOptions): void;
    transaction: {
        <T>(options: GadgetSubscriptionClientOptions, run: TransactionRun<T>): Promise<T>;
        <T>(run: TransactionRun<T>): Promise<T>;
    };
    close(): void;
    /** `fetch` wrapper that applies Gadget's session token logic on the request and retrieves it from the reply */
    fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
    private resetClients;
    private newBaseClient;
    private newSubscriptionClient;
    private requestHeaders;
}
