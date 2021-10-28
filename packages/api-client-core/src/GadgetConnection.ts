import { Client, dedupExchange, fetchExchange, subscriptionExchange } from "@urql/core";
import fetch from "cross-fetch";
import { ExecutionResult } from "graphql";
import {
  Client as SubscriptionClient,
  ClientOptions as SubscriptionClientOptions,
  createClient as createSubscriptionClient,
  Sink,
} from "graphql-ws";
import WebSocket from "isomorphic-ws";
import type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions } from "./ClientOptions";
import { BrowserSessionStorageType } from "./ClientOptions";
import { GadgetTransaction, TransactionRolledBack } from "./GadgetTransaction";
import { BrowserStorage, InMemoryStorage } from "./InMemoryStorage";

export type TransactionRun<T> = (transaction: GadgetTransaction) => Promise<T>;
export interface GadgetSubscriptionClientOptions extends Partial<SubscriptionClientOptions> {
  urlParams?: Record<string, string | null | undefined>;
}

export const $transaction = Symbol.for("gadget/transaction");
const sessionStorageKey = "token";
const base64 = typeof btoa !== "undefined" ? btoa : (str: string) => Buffer.from(str).toString("base64");

export interface GadgetConnectionOptions {
  endpoint: string;
  authenticationMode?: AuthenticationModeOptions;
  websocketsEndpoint?: string;
  subscriptionClientOptions?: GadgetSubscriptionClientOptions;
  websocketImplementation?: any;
  fetchImplementation?: typeof fetch;
  environment?: "Development" | "Production";
}

const isCloseEvent = (event: any): event is CloseEvent => event?.type == "close";

/** Helper function to await the setup dance on a graphql-ws Client object. */
export const connectionOpen = async (subscriptionClient: SubscriptionClient) => {
  const unsubscribes: Function[] = []; // eslint-disable-line @typescript-eslint/ban-types
  const clearListeners = () => unsubscribes.forEach((fn) => fn());
  await new Promise<void>((resolve, reject) => {
    const wrappedReject = (err: unknown) => {
      clearTimeout(timeout);
      reject(err);
    };

    const wrappedResolve = () => {
      clearTimeout(timeout);
      resolve();
    };

    const timeout = setTimeout(() => {
      void subscriptionClient.dispose();
      wrappedReject(new Error("Timeout opening batch connection to Gadget API"));
    }, 5000);

    unsubscribes.push(subscriptionClient.on("connected", wrappedResolve));
    unsubscribes.push(subscriptionClient.on("closed", wrappedReject));
  }).finally(clearListeners);
};

/**
 * Represents the current strategy for authenticating with the Gadget platform.
 * For individual users in web browsers, we authenticate using a session token stored client side, like a cookie, but with cross domain support.
 * For server to server communication, or traceable access from the browser, we use pre shared secrets called API Keys
 * And when within the Gadget platform itself, we use a private secret token called an Internal Auth Token. Internal Auth Tokens are managed by Gadget and should never be used by external developers.
 **/
export enum AuthenticationMode {
  BrowserSession = "browser-session",
  APIKey = "api-key",
  InternalAuthToken = "internal-auth-token",
  Anonymous = "anonymous",
}

/**
 * Root level database connection that Actions can use to mutate data in a Gadget database.
 * Manages transactions and the connection to a Gadget API
 */
export class GadgetConnection {
  // Options used when generating new GraphQL clients for the base connection and for for transactions
  private endpoint: string;
  private subscriptionClientOptions?: SubscriptionClientOptions;
  private websocketsEndpoint: string;
  private websocketImplementation: any;
  private fetchImplementation: typeof fetch;
  private environment: "Development" | "Production";

  // the base client using HTTP requests that non-transactional operations will use
  private baseClient: Client;
  private baseSubscriptionClient: SubscriptionClient;

  // the transactional websocket client that will be used inside a transaction block
  private currentTransaction: GadgetTransaction | null = null;

  // How this client will authenticate (if at all) against the Gadget backed
  authenticationMode: AuthenticationMode;
  private sessionTokenStore?: BrowserStorage;

  constructor(readonly options: GadgetConnectionOptions) {
    if (!options.endpoint) throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = options.endpoint;
    this.fetchImplementation = options.fetchImplementation ?? fetch;
    this.websocketImplementation = options.websocketImplementation ?? WebSocket;
    this.websocketsEndpoint = options.websocketsEndpoint ?? options.endpoint + "/batch";
    this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws");
    this.environment = options.environment ?? "Development";

    if (options.authenticationMode) {
      if (options.authenticationMode.browserSession) {
        this.enableSessionMode(options.authenticationMode.browserSession);
      } else if (options.authenticationMode.internalAuthToken) {
        this.authenticationMode = AuthenticationMode.InternalAuthToken;
      } else if (options.authenticationMode.apiKey) {
        this.authenticationMode = AuthenticationMode.APIKey;
      }
    }

    this.authenticationMode ??= AuthenticationMode.Anonymous;

    // the base client for subscriptions is lazy so we don't open unnecessary connections to the backend, and it reconnects to deal with network issues
    this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: true });
    this.baseClient = this.newBaseClient();
  }

  get currentClient() {
    return this.currentTransaction?.client || this.baseClient;
  }

  enableSessionMode(options?: true | BrowserSessionAuthenticationModeOptions) {
    this.authenticationMode = AuthenticationMode.BrowserSession;
    if (!options || typeof options == "boolean" || options.storageType == BrowserSessionStorageType.Durable) {
      this.sessionTokenStore = window.localStorage;
    } else if (options.storageType == BrowserSessionStorageType.Session) {
      this.sessionTokenStore = window.sessionStorage;
    } else {
      this.sessionTokenStore = new InMemoryStorage();
    }
    this.resetClients();
  }

  transaction: {
    <T>(options: GadgetSubscriptionClientOptions, run: TransactionRun<T>): Promise<T>;
    <T>(run: TransactionRun<T>): Promise<T>;
  } = async <T>(optionsOrRun: GadgetSubscriptionClientOptions | TransactionRun<T>, maybeRun?: TransactionRun<T>): Promise<T> => {
    let run: TransactionRun<T>;
    let options: GadgetSubscriptionClientOptions;

    if (maybeRun) {
      run = maybeRun;
      options = optionsOrRun as GadgetSubscriptionClientOptions;
    } else {
      run = optionsOrRun as TransactionRun<T>;
      options = {};
    }

    if (this.currentTransaction) {
      return await run(this.currentTransaction);
    }

    // the transaction subscription client is not lazy because we know we need it immediately, and it doesn't reconnect so it is clear to calling code the transaction errored out.
    const subscriptionClient = this.newSubscriptionClient({
      isFatalConnectionProblem(errorOrCloseEvent) {
        // any interruption of the transaction is fatal to the transaction
        console.warn("Transport error encountered during transaction processing", errorOrCloseEvent);
        return true;
      },
      ...options,
      lazy: false,
      // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
      lazyCloseTimeout: 100000,
      retryAttempts: 0,
    });

    let transaction;
    try {
      // The server will error if it receives any operations before the auth dance has been completed, so we block on that happening before sending our first operation. It's important that this happens synchronously after instantiating the client so we don't miss any messages
      await connectionOpen(subscriptionClient);

      const client = new Client({
        url: "/-", // not used because there's no fetch exchange, set for clarity
        exchanges: [
          subscriptionExchange({
            forwardSubscription(operation) {
              return {
                subscribe: (sink) => {
                  const dispose = subscriptionClient.subscribe(operation, sink as Sink<ExecutionResult>);
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

      transaction = new GadgetTransaction(client, subscriptionClient);
      this.currentTransaction = transaction;
      await transaction.start();
      const result = await run(transaction);
      await transaction.commit();
      return result;
    } catch (error) {
      try {
        if (transaction?.open) await transaction.rollback();
      } catch (rollbackError) {
        if (!(rollbackError instanceof TransactionRolledBack)) {
          console.warn("Encountered another error while rolling back a Gadget transaction that errored. The other error:", rollbackError);
        }
      }
      if (isCloseEvent(error)) {
        throw new Error(`GraphQL websocket closed unexpectedly by the server with error code ${error.code} and reason "${error.reason}"`);
      } else {
        throw error;
      }
    } finally {
      await subscriptionClient.dispose();
      this.currentTransaction = null;
    }
  };

  close() {
    void this.baseSubscriptionClient.dispose();
    if (this.currentTransaction) {
      this.currentTransaction.close();
    }
  }

  /** `fetch` wrapper that applies Gadget's session token logic on the request and retrieves it from the reply */
  fetch = async (input: RequestInfo, init: RequestInit = {}) => {
    init.headers = { ...this.requestHeaders(), ...init.headers };

    const response = await this.fetchImplementation(input, init);
    if (this.authenticationMode == AuthenticationMode.BrowserSession) {
      const headerValue = response.headers.get("x-set-authorization");
      const sessionToken = headerValue?.startsWith("Session ") ? headerValue.replace("Session ", "") : null;
      if (sessionToken) {
        this.sessionTokenStore!.setItem(sessionStorageKey, sessionToken);
      }
    }
    return response;
  };

  private resetClients() {
    if (this.currentTransaction) {
      throw new Error("Can't reset clients while a transaction is open");
    }

    void this.baseSubscriptionClient?.dispose();
    if (this.baseClient) this.baseClient = this.newBaseClient();
  }

  private newBaseClient() {
    return new Client({
      url: this.endpoint,
      fetch: this.fetch,
      exchanges: [
        dedupExchange,
        fetchExchange,
        subscriptionExchange({
          forwardSubscription: (operation) => {
            return {
              subscribe: (sink) => {
                const dispose = this.baseSubscriptionClient.subscribe(operation, sink as Sink<ExecutionResult>);
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

  private newSubscriptionClient(overrides: GadgetSubscriptionClientOptions) {
    // In the browser, we can't set arbitrary headers on the websocket request, so we don't use the same auth mechanism that we use for normal HTTP requests. Instead we use graphql-ws' connectionParams to send the auth information in the connection setup message to the server.
    const auth: any = { type: this.authenticationMode };
    if (this.authenticationMode == AuthenticationMode.APIKey) {
      auth.key = this.options.authenticationMode!.apiKey!;
    } else if (this.authenticationMode == AuthenticationMode.InternalAuthToken) {
      auth.token = this.options.authenticationMode!.internalAuthToken!;
    } else if (this.authenticationMode == AuthenticationMode.BrowserSession) {
      auth.sessionToken = this.sessionTokenStore!.getItem(sessionStorageKey);
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

    return createSubscriptionClient({
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
            this.sessionTokenStore!.setItem(sessionStorageKey, payload.sessionToken as string);
          }
        },
      },
      ...this.subscriptionClientOptions,
      ...overrides,
    });
  }

  private requestHeaders() {
    const headers: Record<string, string> = {};

    if (this.authenticationMode == AuthenticationMode.InternalAuthToken) {
      headers.authorization = "Basic " + base64("gadget-internal" + ":" + this.options.authenticationMode!.internalAuthToken!);
    } else if (this.authenticationMode == AuthenticationMode.APIKey) {
      headers.authorization = `Bearer ${this.options.authenticationMode?.apiKey}`;
    } else if (this.authenticationMode == AuthenticationMode.BrowserSession) {
      const val = this.sessionTokenStore!.getItem(sessionStorageKey);
      if (val) {
        headers.authorization = `Session ${val}`;
      }
    }

    headers["x-gadget-environment"] = this.environment;

    return headers;
  }
}
