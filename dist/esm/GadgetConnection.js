import { Client, cacheExchange, fetchExchange, subscriptionExchange } from "@urql/core";
import { CloseCode, createClient as createSubscriptionClient } from "graphql-ws";
import WebSocket from "isomorphic-ws";
import { BrowserSessionStorageType } from "./ClientOptions.js";
import { GadgetTransaction, TransactionRolledBack } from "./GadgetTransaction.js";
import { InMemoryStorage } from "./InMemoryStorage.js";
import { liveQueryExchange } from "./exchanges/liveQueryExchange.js";
import { operationNameExchange } from "./exchanges/operationNameExchange.js";
import { addUrlParams, urlParamExchange } from "./exchanges/urlParamExchange.js";
import { GadgetTooManyRequestsError, GadgetUnexpectedCloseError, GadgetWebsocketConnectionTimeoutError, isCloseEvent, maybeGetAuthenticationModeOptionsFromConnectionOptions, storageAvailable, } from "./support.js";
export var GadgetGraphQLCloseCode;
(function (GadgetGraphQLCloseCode) {
    GadgetGraphQLCloseCode[GadgetGraphQLCloseCode["TooManyRequests"] = 4294] = "TooManyRequests";
})(GadgetGraphQLCloseCode || (GadgetGraphQLCloseCode = {}));
const DEFAULT_CONN_ATTEMPTS = 2;
const DEFAULT_CONN_ACK_TIMEOUT = 4800;
const DEFAULT_CONN_GLOBAL_TIMEOUT = 10000;
const RETRYABLE_CLOSE_CODES = [CloseCode.ConnectionAcknowledgementTimeout, CloseCode.ConnectionInitialisationTimeout];
export const $transaction = Symbol.for("gadget/transaction");
export const $gadgetConnection = Symbol.for("gadget/connection");
const sessionStorageKey = "token";
const base64 = typeof btoa !== "undefined" ? btoa : (str) => Buffer.from(str).toString("base64");
/**
 * Represents the current strategy for authenticating with the Gadget platform.
 * For individual users in web browsers, we authenticate using a session token stored client side, like a cookie, but with cross domain support.
 * For server to server communication, or traceable access from the browser, we use pre shared secrets called API Keys
 * And when within the Gadget platform itself, we use a private secret token called an Internal Auth Token. Internal Auth Tokens are managed by Gadget and should never be used by external developers.
 **/
export var AuthenticationMode;
(function (AuthenticationMode) {
    AuthenticationMode["BrowserSession"] = "browser-session";
    AuthenticationMode["APIKey"] = "api-key";
    AuthenticationMode["Internal"] = "internal";
    AuthenticationMode["InternalAuthToken"] = "internal-auth-token";
    AuthenticationMode["Anonymous"] = "anonymous";
    AuthenticationMode["Custom"] = "custom";
})(AuthenticationMode || (AuthenticationMode = {}));
const objectForGlobals = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : undefined;
/**
 * Root level database connection that Actions can use to mutate data in a Gadget database.
 * Manages transactions and the connection to a Gadget API
 */
export class GadgetConnection {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f;
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
        Object.defineProperty(this, "_fetchImplementation", {
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
        Object.defineProperty(this, "exchanges", {
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
        /** @private (but accessible for testing purposes) */
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
            value: AuthenticationMode.Anonymous
        });
        Object.defineProperty(this, "sessionTokenStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "requestPolicy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "createSubscriptionClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The authentication mode that came from the connection options in the constructor.
         * We have two methods of setting the authentication mode, so we're storing it separately to avoid having to manually determine which method was used.
         */
        Object.defineProperty(this, "authenticationModeOptions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "transaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (optionsOrRun, maybeRun) => {
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
                let subscriptionClient = null;
                let transaction;
                try {
                    // The server will error if it receives any operations before the auth dance has been completed, so we block on that happening before sending our first operation. It's important that this happens synchronously after instantiating the client so we don't miss any messages
                    subscriptionClient = await this.waitForOpenedConnection({
                        isFatalConnectionProblem(errorOrCloseEvent) {
                            // any interruption of the transaction is fatal to the transaction
                            console.warn("Transport error encountered during transaction processing", errorOrCloseEvent);
                            return true;
                        },
                        connectionAckWaitTimeout: DEFAULT_CONN_ACK_TIMEOUT,
                        ...options,
                        lazy: false,
                        // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
                        lazyCloseTimeout: 100000,
                        retryAttempts: 0,
                    });
                    const client = new Client({
                        url: "/-", // not used because there's no fetch exchange, set for clarity
                        requestPolicy: "network-only", // skip any cached data during transactions
                        exchanges: [
                            ...this.exchanges.beforeAll,
                            operationNameExchange,
                            ...this.exchanges.beforeAsync,
                            subscriptionExchange({
                                forwardSubscription(request) {
                                    const input = { ...request, query: request.query || "" };
                                    return {
                                        subscribe: (sink) => {
                                            const dispose = subscriptionClient.subscribe(input, sink);
                                            return {
                                                unsubscribe: dispose,
                                            };
                                        },
                                    };
                                },
                                enableAllOperations: true,
                            }),
                            ...this.exchanges.afterAll,
                        ],
                    });
                    client[$gadgetConnection] = this;
                    transaction = new GadgetTransaction(client, subscriptionClient);
                    this.currentTransaction = transaction;
                    await transaction.start();
                    const result = await run(transaction);
                    await transaction.commit();
                    return result;
                }
                catch (error) {
                    try {
                        if (transaction === null || transaction === void 0 ? void 0 : transaction.open)
                            await transaction.rollback();
                    }
                    catch (rollbackError) {
                        if (!(rollbackError instanceof TransactionRolledBack)) {
                            console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", rollbackError);
                        }
                    }
                    if (isCloseEvent(error)) {
                        throw new GadgetUnexpectedCloseError(error);
                    }
                    else {
                        throw error;
                    }
                }
                finally {
                    await (subscriptionClient === null || subscriptionClient === void 0 ? void 0 : subscriptionClient.dispose());
                    this.currentTransaction = null;
                }
            }
        });
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
        Object.defineProperty(this, "fetch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (input, init = {}) => {
                var _a;
                input = processMaybeRelativeInput(input, (_a = this.options.baseRouteURL) !== null && _a !== void 0 ? _a : this.options.endpoint);
                if (this.isGadgetRequest(input)) {
                    const requestHeaders = await this.requestHeaders();
                    init.headers = { ...requestHeaders, ...init.headers };
                    if (this.authenticationMode == AuthenticationMode.Custom) {
                        await this.authenticationModeOptions.custom.processFetch(input, init);
                    }
                }
                const response = await this._fetchImplementation(input, init);
                if (this.authenticationMode == AuthenticationMode.BrowserSession) {
                    const headerValue = response.headers.get("x-set-authorization");
                    const sessionToken = (headerValue === null || headerValue === void 0 ? void 0 : headerValue.startsWith("Session ")) ? headerValue.replace("Session ", "") : null;
                    if (sessionToken) {
                        this.sessionTokenStore.setItem(this.sessionStorageKey, sessionToken);
                    }
                }
                return response;
            }
        });
        this.authenticationModeOptions = maybeGetAuthenticationModeOptionsFromConnectionOptions(options);
        console.log("where - authenticationModeOptions in constructor:", this.authenticationModeOptions, options);
        if (!options.endpoint)
            throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
        this.endpoint = options.endpoint;
        if (options.fetchImplementation) {
            this._fetchImplementation = options.fetchImplementation;
        }
        else if (typeof objectForGlobals != "undefined" && objectForGlobals.fetch) {
            this._fetchImplementation = objectForGlobals.fetch.bind(objectForGlobals);
        }
        else {
            this._fetchImplementation = async (...args) => {
                // lazily import cross-fetch to avoid bundling it in the client
                let fetch = (await import("cross-fetch"));
                // when compiled to CJS, the dynamic import above returns the default export right away. in ESM though, we need to access it ourselves
                if (fetch.default) {
                    fetch = fetch.default;
                }
                return await fetch(...args);
            };
        }
        this.websocketImplementation = (_b = (_a = options.websocketImplementation) !== null && _a !== void 0 ? _a : globalThis === null || globalThis === void 0 ? void 0 : globalThis.WebSocket) !== null && _b !== void 0 ? _b : WebSocket;
        this.websocketsEndpoint = (_c = options.websocketsEndpoint) !== null && _c !== void 0 ? _c : options.endpoint + "/batch";
        this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws");
        this.environment = (_d = options.environment) !== null && _d !== void 0 ? _d : "Development";
        this.requestPolicy = (_e = options.requestPolicy) !== null && _e !== void 0 ? _e : "cache-and-network";
        this.exchanges = {
            beforeAll: [],
            beforeAsync: [],
            afterAll: [],
            ...options.exchanges,
        };
        this.createSubscriptionClient = (_f = options.createSubscriptionClient) !== null && _f !== void 0 ? _f : createSubscriptionClient;
        this.setAuthenticationMode(this.authenticationModeOptions);
        this.baseClient = this.newBaseClient();
    }
    get sessionStorageKey() {
        return `${sessionStorageKey}-${this.endpoint}`;
    }
    get currentClient() {
        var _a;
        return ((_a = this.currentTransaction) === null || _a === void 0 ? void 0 : _a.client) || this.baseClient;
    }
    set fetchImplementation(implementation) {
        this._fetchImplementation = implementation;
        this.resetClients();
    }
    /**
     * Change the authentication mode settings for this connection imperatively.
     * @private This function is generally not required for use by external developers, but is useful for those building integrations against the Gadget API to configure passed in `api` objects.
     */
    setAuthenticationMode(options) {
        var _a;
        console.log("where - setAuthenticationMode, before, options:", options, "this.authenticationModeOptions:", this.authenticationModeOptions);
        if (options) {
            if (options.browserSession) {
                this.enableSessionMode(options.browserSession);
            }
            else if (options.internal) {
                this.authenticationMode = AuthenticationMode.Internal;
            }
            else if (options.internalAuthToken) {
                this.authenticationMode = AuthenticationMode.InternalAuthToken;
            }
            else if (options.apiKey) {
                this.authenticationMode = AuthenticationMode.APIKey;
            }
            else if (options.custom) {
                this.authenticationMode = AuthenticationMode.Custom;
            }
            this.authenticationModeOptions = options;
        }
        console.log("where - setAuthenticationMode, after, this.authenticationMode:", this.authenticationMode);
        (_a = this.authenticationMode) !== null && _a !== void 0 ? _a : (this.authenticationMode = AuthenticationMode.Anonymous);
    }
    enableSessionMode(options) {
        this.authenticationMode = AuthenticationMode.BrowserSession;
        const desiredMode = !options || typeof options == "boolean" || !("storageType" in options) ? BrowserSessionStorageType.Durable : options.storageType;
        let sessionTokenStore;
        if (desiredMode == BrowserSessionStorageType.Durable && storageAvailable("localStorage")) {
            sessionTokenStore = window.localStorage;
        }
        else if (desiredMode == BrowserSessionStorageType.Session && storageAvailable("sessionStorage")) {
            sessionTokenStore = window.sessionStorage;
        }
        else {
            sessionTokenStore = new InMemoryStorage();
        }
        if (options !== null && typeof options === "object" && "initialToken" in options && options.initialToken) {
            sessionTokenStore.setItem(this.sessionStorageKey, options.initialToken);
        }
        this.sessionTokenStore = sessionTokenStore;
        this.resetClients();
    }
    close() {
        if (this.baseSubscriptionClient)
            this.disposeClient(this.baseSubscriptionClient);
        if (this.currentTransaction) {
            this.currentTransaction.close();
        }
    }
    isGadgetRequest(input) {
        let requestUrl;
        if (typeof input === "string") {
            requestUrl = input;
        }
        else if (typeof input === "object" && "url" in input) {
            requestUrl = input.url;
        }
        else {
            requestUrl = String(input);
        }
        if (isRelativeUrl(this.options.endpoint)) {
            if (isRelativeUrl(requestUrl)) {
                return true;
            }
            else {
                return false;
            }
        }
        const host = new URL(this.options.endpoint).host;
        return requestUrl.includes(host);
    }
    resetClients() {
        if (this.currentTransaction) {
            throw new Error("Can't reset clients while a transaction is open");
        }
        if (this.baseSubscriptionClient)
            this.disposeClient(this.baseSubscriptionClient);
        if (this.baseClient)
            this.baseClient = this.newBaseClient();
    }
    newBaseClient() {
        const exchanges = [...this.exchanges.beforeAll, operationNameExchange, urlParamExchange];
        // apply urql's default caching behaviour when client side (but skip it server side)
        if (typeof window != "undefined") {
            exchanges.push(cacheExchange);
            exchanges.push(liveQueryExchange);
        }
        exchanges.push(...this.exchanges.beforeAsync, 
        // standard subscriptions for normal GraphQL subscriptions
        subscriptionExchange({
            forwardSubscription: (request) => {
                return {
                    subscribe: (sink) => {
                        const input = { ...request, query: request.query || "" };
                        const dispose = this.getBaseSubscriptionClient().subscribe(input, sink);
                        return {
                            unsubscribe: dispose,
                        };
                    },
                };
            },
        }), 
        // another subscription exchange for live queries
        // live queries pass through the same WS client, but use jsondiffs for patching in results
        subscriptionExchange({
            isSubscriptionOperation: (request) => {
                return request.query.definitions.some((definition) => isLiveQueryOperationDefinitionNode(definition));
            },
            forwardSubscription: (request) => {
                return {
                    subscribe: (sink) => {
                        let unsubscribe = undefined;
                        // dynamic import on first subscription the live utils to keep the base bundle size small
                        const loadAndSubscribe = import("./graphql-live-query-utils/index.js")
                            .then(({ applyAsyncIterableIteratorToSink, applyLiveQueryJSONDiffPatch, makeAsyncIterableIteratorFromSink }) => {
                            const input = { ...request, query: request.query || "" };
                            unsubscribe = applyAsyncIterableIteratorToSink(applyLiveQueryJSONDiffPatch(makeAsyncIterableIteratorFromSink((sink) => this.getBaseSubscriptionClient().subscribe(input, sink))), sink);
                            return unsubscribe;
                        })
                            .catch((error) => sink.error(error));
                        return {
                            unsubscribe: () => {
                                if (unsubscribe) {
                                    unsubscribe();
                                }
                                else {
                                    void loadAndSubscribe.then((unsubscribe) => {
                                        if (unsubscribe) {
                                            unsubscribe();
                                        }
                                    });
                                }
                            },
                        };
                    },
                };
            },
        }), fetchExchange, ...this.exchanges.afterAll);
        const client = new Client({
            url: this.endpoint,
            fetch: this.fetch,
            exchanges,
            requestPolicy: this.requestPolicy,
        });
        client[$gadgetConnection] = this;
        return client;
    }
    newSubscriptionClient(overrides) {
        if (!this.websocketImplementation) {
            throw new Error("Can't use this GadgetClient for this subscription-based operation as there's no global WebSocket implementation available. Please pass one as the `websocketImplementation` option to the GadgetClient constructor.");
        }
        let url = this.websocketsEndpoint;
        if (overrides === null || overrides === void 0 ? void 0 : overrides.urlParams) {
            url = addUrlParams(url, overrides.urlParams);
        }
        let activeSocket;
        let timedOut;
        return this.createSubscriptionClient({
            url,
            webSocketImpl: this.websocketImplementation,
            keepAlive: 7000,
            connectionParams: async () => {
                var _a, _b, _c, _d;
                // In the browser, we can't set arbitrary headers on the websocket request, so we don't use the same auth mechanism that we use for normal HTTP requests. Instead we use graphql-ws' connectionParams to send the auth information in the connection setup message to the server.
                const connectionParams = { environment: this.environment, auth: { type: this.authenticationMode } };
                if (this.authenticationMode == AuthenticationMode.APIKey) {
                    connectionParams.auth.key = this.authenticationModeOptions.apiKey;
                }
                else if (this.authenticationMode == AuthenticationMode.Internal ||
                    this.authenticationMode == AuthenticationMode.InternalAuthToken) {
                    const authToken = this.authenticationMode == AuthenticationMode.Internal
                        ? this.authenticationModeOptions.internal.authToken
                        : this.authenticationModeOptions.internalAuthToken;
                    connectionParams.auth.token = authToken;
                    if (this.authenticationMode == AuthenticationMode.Internal && this.authenticationModeOptions.internal.actAsSession) {
                        connectionParams.auth.actAsInternalSession = true;
                        connectionParams.auth.internalSessionId = await ((_b = (_a = this.authenticationModeOptions.internal).getSessionId) === null || _b === void 0 ? void 0 : _b.call(_a));
                    }
                }
                else if (this.authenticationMode == AuthenticationMode.BrowserSession) {
                    connectionParams.auth.sessionToken = this.sessionTokenStore.getItem(this.sessionStorageKey);
                }
                else if (this.authenticationMode == AuthenticationMode.Custom) {
                    await ((_d = (_c = this.authenticationModeOptions) === null || _c === void 0 ? void 0 : _c.custom) === null || _d === void 0 ? void 0 : _d.processTransactionConnectionParams(connectionParams));
                }
                return connectionParams;
            },
            onNonLazyError: () => {
                // we catch this outside in the runner function
            },
            on: {
                connected: (socket, payload) => {
                    var _a, _b, _c, _d, _e, _f;
                    // If we're using session token authorization, we don't use request headers to exchange the session token, we use graphql-ws' ConnectionAck payload to persist the token. When the subscription client first starts, the server will send us session token identifying this client, and we persist it to the session token store
                    if (this.authenticationMode == AuthenticationMode.BrowserSession && (payload === null || payload === void 0 ? void 0 : payload.sessionToken)) {
                        const browserSession = (_a = this.authenticationModeOptions) === null || _a === void 0 ? void 0 : _a.browserSession;
                        const initialToken = browserSession !== null && typeof browserSession === "object" && "initialToken" in browserSession
                            ? browserSession.initialToken
                            : null;
                        if (!initialToken) {
                            this.sessionTokenStore.setItem(this.sessionStorageKey, payload.sessionToken);
                        }
                    }
                    (_d = (_c = (_b = this.subscriptionClientOptions) === null || _b === void 0 ? void 0 : _b.on) === null || _c === void 0 ? void 0 : _c.connected) === null || _d === void 0 ? void 0 : _d.call(_c, socket, payload);
                    (_f = (_e = overrides === null || overrides === void 0 ? void 0 : overrides.on) === null || _e === void 0 ? void 0 : _e.connected) === null || _f === void 0 ? void 0 : _f.call(_e, socket, payload);
                    activeSocket = socket;
                },
                ping: (received) => {
                    if (!received) {
                        timedOut = setTimeout(() => {
                            if (activeSocket.readyState === WebSocket.OPEN) {
                                activeSocket.close(4408, "Request Timeout");
                            }
                        }, 3000);
                    }
                },
                pong: (received) => {
                    if (received)
                        clearTimeout(timedOut);
                },
            },
            ...this.subscriptionClientOptions,
            ...overrides,
        });
    }
    async requestHeaders() {
        var _a, _b, _c;
        const headers = {};
        if (this.authenticationMode == AuthenticationMode.Internal || this.authenticationMode == AuthenticationMode.InternalAuthToken) {
            const authToken = this.authenticationMode == AuthenticationMode.Internal
                ? this.authenticationModeOptions.internal.authToken
                : this.authenticationModeOptions.internalAuthToken;
            headers.authorization = "Basic " + base64("gadget-internal" + ":" + authToken);
            if (this.authenticationMode == AuthenticationMode.Internal && this.authenticationModeOptions.internal.actAsSession) {
                headers["x-gadget-act-as-internal-session"] = "true";
                const sessionId = await ((_b = (_a = this.authenticationModeOptions.internal).getSessionId) === null || _b === void 0 ? void 0 : _b.call(_a));
                if (sessionId) {
                    headers["x-gadget-internal-session-id"] = sessionId;
                }
            }
        }
        else if (this.authenticationMode == AuthenticationMode.APIKey) {
            headers.authorization = `Bearer ${(_c = this.authenticationModeOptions) === null || _c === void 0 ? void 0 : _c.apiKey}`;
        }
        else if (this.authenticationMode == AuthenticationMode.BrowserSession) {
            const val = this.sessionTokenStore.getItem(this.sessionStorageKey);
            if (val) {
                headers.authorization = `Session ${val}`;
            }
            const browserSessionOptions = this.authenticationModeOptions.browserSession;
            console.log("where - browserSessionOptions:", browserSessionOptions);
            const shopId = typeof browserSessionOptions === "boolean" ? undefined : browserSessionOptions.shopId;
            if (shopId) {
                console.log("where - shopId:", shopId);
                headers["x-gadget-for-shop-id"] = shopId;
            }
        }
        headers["x-gadget-environment"] = this.environment;
        return headers;
    }
    async waitForOpenedConnection(options) {
        let subscriptionClient = this.newSubscriptionClient(options);
        let unsubscribes = []; // eslint-disable-line @typescript-eslint/ban-types
        let attempts = options.connectionAttempts || DEFAULT_CONN_ATTEMPTS;
        const globalTimeout = options.connectionGlobalTimeoutMs || DEFAULT_CONN_GLOBAL_TIMEOUT;
        const clearListeners = () => {
            unsubscribes.forEach((fn) => fn());
            unsubscribes = [];
        };
        return await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                this.disposeClient(subscriptionClient);
                wrappedReject(new GadgetWebsocketConnectionTimeoutError("Timeout opening websocket connection to Gadget API"));
            }, globalTimeout);
            const retryOnClose = (event) => {
                if (isCloseEvent(event)) {
                    if (event.code == GadgetGraphQLCloseCode.TooManyRequests) {
                        clearListeners();
                        return wrappedReject(new GadgetTooManyRequestsError(event.reason));
                    }
                    if (RETRYABLE_CLOSE_CODES.includes(event.code) && attempts > 0) {
                        attempts -= 1;
                        this.disposeClient(subscriptionClient);
                        subscriptionClient = this.newSubscriptionClient(options);
                        resetListeners();
                        return;
                    }
                }
                clearTimeout(timeout);
                reject(new GadgetUnexpectedCloseError(event));
            };
            const wrappedReject = (err) => {
                clearTimeout(timeout);
                reject(err);
            };
            const wrappedResolve = () => {
                clearTimeout(timeout);
                resolve(subscriptionClient);
            };
            const resetListeners = () => {
                clearListeners();
                unsubscribes.push(subscriptionClient.on("connected", wrappedResolve));
                unsubscribes.push(subscriptionClient.on("closed", retryOnClose));
                unsubscribes.push(subscriptionClient.on("error", wrappedReject));
            };
            resetListeners();
        }).finally(clearListeners);
    }
    disposeClient(client) {
        const maybePromise = client.dispose();
        if (maybePromise) {
            maybePromise.catch((err) => console.error(`Error closing SubscriptionClient: ${err.message}`));
        }
    }
    getBaseSubscriptionClient() {
        if (!this.baseSubscriptionClient) {
            this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: true });
        }
        return this.baseSubscriptionClient;
    }
}
Object.defineProperty(GadgetConnection, "version", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "0.15.47"
});
function processMaybeRelativeInput(input, endpoint) {
    if (typeof input != "string")
        return input;
    if (isRelativeUrl(input)) {
        try {
            return String(new URL(input, endpoint));
        }
        catch (err) {
            return input;
        }
    }
    return input;
}
function isRelativeUrl(url) {
    return url.startsWith("/") && !url.startsWith("//");
}
const getLiveDirectiveNode = (input) => {
    var _a;
    if (input.kind !== "OperationDefinition" || input.operation !== "query") {
        return null;
    }
    return (_a = input.directives) === null || _a === void 0 ? void 0 : _a.find((d) => d.name.value === "live");
};
export const isLiveQueryOperationDefinitionNode = (input) => {
    return !!getLiveDirectiveNode(input);
};
//# sourceMappingURL=GadgetConnection.js.map