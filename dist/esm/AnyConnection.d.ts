import type { Client, ClientOptions } from "@urql/core";
import type { ClientOptions as SubscriptionClientOptions, createClient as createSubscriptionClient } from "graphql-ws";
import type { AuthenticationModeOptions, Exchanges } from "./ClientOptions.js";
import { GadgetTransaction } from "./GadgetTransaction.js";
export interface GadgetSubscriptionClientOptions extends Partial<SubscriptionClientOptions> {
    urlParams?: Record<string, string | null | undefined>;
    connectionAttempts?: number;
    connectionGlobalTimeoutMs?: number;
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
    Internal = "internal",
    InternalAuthToken = "internal-auth-token",
    Anonymous = "anonymous",
    Custom = "custom"
}
export interface GadgetConnectionOptions {
    endpoint: string;
    authenticationMode?: AuthenticationModeOptions;
    websocketsEndpoint?: string;
    subscriptionClientOptions?: GadgetSubscriptionClientOptions;
    websocketImplementation?: typeof globalThis.WebSocket;
    fetchImplementation?: typeof globalThis.fetch;
    environment?: string;
    requestPolicy?: ClientOptions["requestPolicy"];
    applicationId?: string;
    baseRouteURL?: string;
    exchanges?: Exchanges;
    createSubscriptionClient?: typeof createSubscriptionClient;
}
export type TransactionRun<T> = (transaction: GadgetTransaction) => Promise<T>;
export interface AnyConnection {
    endpoint: string;
    authenticationMode: AuthenticationMode;
    createSubscriptionClient: typeof createSubscriptionClient;
    options: GadgetConnectionOptions;
    get currentClient(): Client;
    transaction: {
        <T>(options: GadgetSubscriptionClientOptions, run: TransactionRun<T>): Promise<T>;
        <T>(run: TransactionRun<T>): Promise<T>;
    };
    close(): void;
    fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
}
