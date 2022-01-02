"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetConnection = exports.AuthenticationMode = exports.$transaction = void 0;
const core_1 = require("@urql/core");
const exchange_multipart_fetch_1 = require("@urql/exchange-multipart-fetch");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const graphql_ws_1 = require("graphql-ws");
const isomorphic_ws_1 = __importDefault(require("isomorphic-ws"));
const _1 = require(".");
const ClientOptions_1 = require("./ClientOptions");
const GadgetTransaction_1 = require("./GadgetTransaction");
const InMemoryStorage_1 = require("./InMemoryStorage");
const support_1 = require("./support");
exports.$transaction = Symbol.for("gadget/transaction");
const sessionStorageKey = "token";
const base64 = typeof btoa !== "undefined" ? btoa : (str) => Buffer.from(str).toString("base64");
const isCloseEvent = (event) => event?.type == "close";
/**
 * Represents the current strategy for authenticating with the Gadget platform.
 * For individual users in web browsers, we authenticate using a session token stored client side, like a cookie, but with cross domain support.
 * For server to server communication, or traceable access from the browser, we use pre shared secrets called API Keys
 * And when within the Gadget platform itself, we use a private secret token called an Internal Auth Token. Internal Auth Tokens are managed by Gadget and should never be used by external developers.
 **/
var AuthenticationMode;
(function (AuthenticationMode) {
    AuthenticationMode["BrowserSession"] = "browser-session";
    AuthenticationMode["APIKey"] = "api-key";
    AuthenticationMode["InternalAuthToken"] = "internal-auth-token";
    AuthenticationMode["Anonymous"] = "anonymous";
})(AuthenticationMode = exports.AuthenticationMode || (exports.AuthenticationMode = {}));
/**
 * Root level database connection that Actions can use to mutate data in a Gadget database.
 * Manages transactions and the connection to a Gadget API
 */
class GadgetConnection {
    constructor(options) {
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        });
        // Options used when generating new GraphQL clients for the base connection and for for transactions
        Object.defineProperty(this, "endpoint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "subscriptionClientOptions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "websocketsEndpoint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "websocketImplementation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fetchImplementation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "environment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // the base client using HTTP requests that non-transactional operations will use
        Object.defineProperty(this, "baseClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "baseSubscriptionClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // the transactional websocket client that will be used inside a transaction block
        Object.defineProperty(this, "currentTransaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        // How this client will authenticate (if at all) against the Gadget backed
        Object.defineProperty(this, "authenticationMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sessionTokenStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "transaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (0, support_1.traceFunction)("api-client.transaction", async (optionsOrRun, maybeRun) => {
                let run;
                let options;
                if (maybeRun) {
                    run = maybeRun;
                    options = optionsOrRun;
                }
                else {
                    run = optionsOrRun;
                    options = {};
                }
                if (this.currentTransaction) {
                    return await run(this.currentTransaction);
                }
                const openedWatcher = new _1.ConnectionOpenAwaiter();
                // the transaction subscription client is not lazy because we know we need it immediately, and it doesn't reconnect so it is clear to calling code the transaction errored out.
                const subscriptionClient = this.newSubscriptionClient({
                    isFatalConnectionProblem(errorOrCloseEvent) {
                        // any interruption of the transaction is fatal to the transaction
                        console.warn("Transport error encountered during transaction processing", errorOrCloseEvent);
                        return true;
                    },
                    ...options,
                    on: openedWatcher.listeners,
                    lazy: false,
                    // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
                    lazyCloseTimeout: 100000,
                    retryAttempts: 0,
                });
                let transaction;
                try {
                    // The server will error if it receives any operations before the auth dance has been completed, so we block on that happening before sending our first operation. It's important that this happens synchronously after instantiating the client so we don't miss any messages
                    await openedWatcher.opened();
                    const client = new core_1.Client({
                        url: "/-",
                        exchanges: [
                            (0, core_1.subscriptionExchange)({
                                forwardSubscription(operation) {
                                    return {
                                        subscribe: (sink) => {
                                            const dispose = subscriptionClient.subscribe(operation, sink);
                                            return {
                                                unsubscribe: dispose,
                                            };
                                        },
                                    };
                                },
                                enableAllOperations: true,
                            }),
                        ],
                    });
                    transaction = new GadgetTransaction_1.GadgetTransaction(client, subscriptionClient);
                    this.currentTransaction = transaction;
                    await transaction.start();
                    const result = await run(transaction);
                    await transaction.commit();
                    return result;
                }
                catch (error) {
                    try {
                        if (transaction?.open)
                            await transaction.rollback();
                    }
                    catch (rollbackError) {
                        if (!(rollbackError instanceof GadgetTransaction_1.TransactionRolledBack)) {
                            console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", rollbackError);
                        }
                    }
                    if (isCloseEvent(error)) {
                        throw new Error(`GraphQL websocket closed unexpectedly by the server with error code ${error.code} and reason "${error.reason}"`);
                    }
                    else {
                        throw error;
                    }
                }
                finally {
                    await subscriptionClient.dispose();
                    this.currentTransaction = null;
                }
            })
        });
        /** `fetch` wrapper that applies Gadget's session token logic on the request and retrieves it from the reply */
        Object.defineProperty(this, "fetch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (0, support_1.traceFunction)("api-client.fetch", async (input, init = {}) => {
                init.headers = { ...this.requestHeaders(), ...init.headers };
                const response = await this.fetchImplementation(input, init);
                if (this.authenticationMode == AuthenticationMode.BrowserSession) {
                    const headerValue = response.headers.get("x-set-authorization");
                    const sessionToken = headerValue?.startsWith("Session ") ? headerValue.replace("Session ", "") : null;
                    if (sessionToken) {
                        this.sessionTokenStore.setItem(sessionStorageKey, sessionToken);
                    }
                }
                return response;
            })
        });
        if (!options.endpoint)
            throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
        this.endpoint = options.endpoint;
        this.fetchImplementation = options.fetchImplementation ?? cross_fetch_1.default;
        this.websocketImplementation = options.websocketImplementation ?? isomorphic_ws_1.default;
        this.websocketsEndpoint = options.websocketsEndpoint ?? options.endpoint + "/batch";
        this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws");
        this.environment = options.environment ?? "Development";
        if (options.authenticationMode) {
            if (options.authenticationMode.browserSession) {
                this.enableSessionMode(options.authenticationMode.browserSession);
            }
            else if (options.authenticationMode.internalAuthToken) {
                this.authenticationMode = AuthenticationMode.InternalAuthToken;
            }
            else if (options.authenticationMode.apiKey) {
                this.authenticationMode = AuthenticationMode.APIKey;
            }
        }
        this.authenticationMode ?? (this.authenticationMode = AuthenticationMode.Anonymous);
        // the base client for subscriptions is lazy so we don't open unnecessary connections to the backend, and it reconnects to deal with network issues
        this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: true });
        this.baseClient = this.newBaseClient();
    }
    get currentClient() {
        return this.currentTransaction?.client || this.baseClient;
    }
    enableSessionMode(options) {
        this.authenticationMode = AuthenticationMode.BrowserSession;
        if (!options || typeof options == "boolean" || options.storageType == ClientOptions_1.BrowserSessionStorageType.Durable) {
            this.sessionTokenStore = window.localStorage;
        }
        else if (options.storageType == ClientOptions_1.BrowserSessionStorageType.Session) {
            this.sessionTokenStore = window.sessionStorage;
        }
        else {
            this.sessionTokenStore = new InMemoryStorage_1.InMemoryStorage();
        }
        this.resetClients();
    }
    close() {
        void this.baseSubscriptionClient.dispose();
        if (this.currentTransaction) {
            this.currentTransaction.close();
        }
    }
    resetClients() {
        if (this.currentTransaction) {
            throw new Error("Can't reset clients while a transaction is open");
        }
        void this.baseSubscriptionClient?.dispose();
        if (this.baseClient)
            this.baseClient = this.newBaseClient();
    }
    newBaseClient() {
        return new core_1.Client({
            url: this.endpoint,
            fetch: this.fetch,
            exchanges: [
                core_1.dedupExchange,
                exchange_multipart_fetch_1.multipartFetchExchange,
                (0, core_1.subscriptionExchange)({
                    forwardSubscription: (operation) => {
                        return {
                            subscribe: (sink) => {
                                const dispose = this.baseSubscriptionClient.subscribe(operation, sink);
                                return {
                                    unsubscribe: dispose,
                                };
                            },
                        };
                    },
                }),
            ],
        });
    }
    newSubscriptionClient(overrides) {
        // In the browser, we can't set arbitrary headers on the websocket request, so we don't use the same auth mechanism that we use for normal HTTP requests. Instead we use graphql-ws' connectionParams to send the auth information in the connection setup message to the server.
        const auth = { type: this.authenticationMode };
        if (this.authenticationMode == AuthenticationMode.APIKey) {
            auth.key = this.options.authenticationMode.apiKey;
        }
        else if (this.authenticationMode == AuthenticationMode.InternalAuthToken) {
            auth.token = this.options.authenticationMode.internalAuthToken;
        }
        else if (this.authenticationMode == AuthenticationMode.BrowserSession) {
            auth.sessionToken = this.sessionTokenStore.getItem(sessionStorageKey);
        }
        let url = this.websocketsEndpoint;
        if (overrides?.urlParams) {
            const params = new URLSearchParams();
            for (const [key, value] of Object.entries(overrides.urlParams)) {
                if (value) {
                    params.set(key, value);
                }
            }
            url += "?" + params.toString();
        }
        return (0, graphql_ws_1.createClient)({
            url,
            webSocketImpl: this.websocketImplementation,
            connectionParams: { auth, environment: this.environment },
            onNonLazyError: () => {
                // we catch this outside in the runner function
            },
            on: {
                connected: (_socket, payload) => {
                    // If we're using session token authorization, we don't use request headers to exchange the session token, we use graphql-ws' ConnectionAck payload to persist the token. When the subscription client first starts, the server will send us session token identifying this client, and we persist it to the session token store
                    if (this.authenticationMode == AuthenticationMode.BrowserSession && payload?.sessionToken) {
                        this.sessionTokenStore.setItem(sessionStorageKey, payload.sessionToken);
                    }
                },
            },
            ...this.subscriptionClientOptions,
            ...overrides,
        });
    }
    requestHeaders() {
        const headers = {};
        if (this.authenticationMode == AuthenticationMode.InternalAuthToken) {
            headers.authorization = "Basic " + base64("gadget-internal" + ":" + this.options.authenticationMode.internalAuthToken);
        }
        else if (this.authenticationMode == AuthenticationMode.APIKey) {
            headers.authorization = `Bearer ${this.options.authenticationMode?.apiKey}`;
        }
        else if (this.authenticationMode == AuthenticationMode.BrowserSession) {
            const val = this.sessionTokenStore.getItem(sessionStorageKey);
            if (val) {
                headers.authorization = `Session ${val}`;
            }
        }
        headers["x-gadget-environment"] = this.environment;
        return headers;
    }
}
exports.GadgetConnection = GadgetConnection;
//# sourceMappingURL=GadgetConnection.js.map