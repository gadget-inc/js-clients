import { cacheExchange, Client, dedupExchange, subscriptionExchange } from "@urql/core";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import fetch from "cross-fetch";
import { ExecutionResult } from "graphql";
import {
  Client as SubscriptionClient,
  ClientOptions as SubscriptionClientOptions,
  createClient as createSubscriptionClient,
  Sink,
} from "graphql-ws";
import WebSocket from "isomorphic-ws";
import { getCurrentSpan } from ".";
import type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions } from "./ClientOptions";
import { BrowserSessionStorageType } from "./ClientOptions";
import { GadgetTransaction, TransactionRolledBack } from "./GadgetTransaction";
import { BrowserStorage, InMemoryStorage } from "./InMemoryStorage";
import { traceFunction } from "./support";

export type TransactionRun<T> = (transaction: GadgetTransaction) => Promise<T>;
export interface GadgetSubscriptionClientOptions extends Partial<SubscriptionClientOptions> {
  urlParams?: Record<string, string | null | undefined>;
}

const DEFAULT_CONN_ACK_TIMEOUT = 10_000;

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
  applicationId?: string;
}

const isCloseEvent = (event: any): event is CloseEvent => event?.type == "close";

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
  Custom = "custom",
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
  private _fetchImplementation: typeof fetch;
  private environment: "Development" | "Production";

  // the base client using HTTP requests that non-transactional operations will use
  private baseClient: Client;
  private baseSubscriptionClient: SubscriptionClient;

  // the transactional websocket client that will be used inside a transaction block
  private currentTransaction: GadgetTransaction | null = null;

  // How this client will authenticate (if at all) against the Gadget backed
  authenticationMode: AuthenticationMode = AuthenticationMode.Anonymous;
  private sessionTokenStore?: BrowserStorage;

  constructor(readonly options: GadgetConnectionOptions) {
    if (!options.endpoint) throw new Error("Must provide an `endpoint` option for a GadgetConnection to connect to");
    this.endpoint = options.endpoint;
    this._fetchImplementation = options.fetchImplementation ?? fetch;
    this.websocketImplementation = options.websocketImplementation ?? WebSocket;
    this.websocketsEndpoint = options.websocketsEndpoint ?? options.endpoint + "/batch";
    this.websocketsEndpoint = this.websocketsEndpoint.replace(/^http/, "ws");
    this.environment = options.environment ?? "Development";

    this.setAuthenticationMode(options.authenticationMode);

    // the base client for subscriptions is lazy so we don't open unnecessary connections to the backend, and it reconnects to deal with network issues
    this.baseSubscriptionClient = this.newSubscriptionClient({ lazy: true });
    this.baseClient = this.newBaseClient();
  }

  get currentClient() {
    return this.currentTransaction?.client || this.baseClient;
  }

  set fetchImplementation(implementation: typeof fetch) {
    this._fetchImplementation = implementation;
    this.resetClients();
  }

  /**
   * Change the authentication mode settings for this connection imperatively.
   * @private This function is generally not required for use by external developers, but is useful for those building integrations against the Gadget API to configure passed in `api` objects.
   */
  setAuthenticationMode(options?: AuthenticationModeOptions) {
    if (options) {
      if (options.browserSession) {
        this.enableSessionMode(options.browserSession);
      } else if (options.internalAuthToken) {
        this.authenticationMode = AuthenticationMode.InternalAuthToken;
      } else if (options.apiKey) {
        this.authenticationMode = AuthenticationMode.APIKey;
      } else if (options.custom) {
        this.authenticationMode = AuthenticationMode.Custom;
      }
      this.options.authenticationMode = options;
    }

    this.authenticationMode ??= AuthenticationMode.Anonymous;
  }

  enableSessionMode(options?: true | BrowserSessionAuthenticationModeOptions) {
    this.authenticationMode = AuthenticationMode.BrowserSession;

    let sessionTokenStore;
    if (!options || typeof options == "boolean" || options.storageType == BrowserSessionStorageType.Durable) {
      sessionTokenStore = window.localStorage;
    } else if (options.storageType == BrowserSessionStorageType.Session) {
      sessionTokenStore = window.sessionStorage;
    } else {
      sessionTokenStore = new InMemoryStorage();
    }

    if (options !== null && typeof options === "object" && "initialToken" in options && options.initialToken) {
      sessionTokenStore.setItem(sessionStorageKey, options.initialToken);
    }

    this.sessionTokenStore = sessionTokenStore;
    this.resetClients();
  }

  transaction: {
    <T>(options: GadgetSubscriptionClientOptions, run: TransactionRun<T>): Promise<T>;
    <T>(run: TransactionRun<T>): Promise<T>;
  } = traceFunction(
    "api-client.transaction",
    async <T>(optionsOrRun: GadgetSubscriptionClientOptions | TransactionRun<T>, maybeRun?: TransactionRun<T>): Promise<T> => {
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

      getCurrentSpan()?.setAttributes({ applicationId: this.options.applicationId, environmentName: this.environment });

      let subscriptionClient: SubscriptionClient | null = null;
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
          // super ultra critical option that ensures graphql-ws doesn't automatically close the websocket connection when there are no outstanding operations. this is key so we can start a transaction then make mutations within it
          lazyCloseTimeout: 100000,
          retryAttempts: 0,
        });

        const client = new Client({
          url: "/-", // not used because there's no fetch exchange, set for clarity
          exchanges: [
            subscriptionExchange({
              forwardSubscription(operation) {
                return {
                  subscribe: (sink) => {
                    const dispose = subscriptionClient!.subscribe(operation, sink as Sink<ExecutionResult>);
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
        await subscriptionClient?.dispose();
        this.currentTransaction = null;
      }
    }
  );

  close() {
    this.disposeClient(this.baseSubscriptionClient);
    if (this.currentTransaction) {
      this.currentTransaction.close();
    }
  }

  /** `fetch` wrapper that applies Gadget's session token logic on the request and retrieves it from the reply */
  fetch = traceFunction("api-client.fetch", async (input: RequestInfo, init: RequestInit = {}) => {
    init.headers = { ...this.requestHeaders(), ...init.headers };

    if (this.authenticationMode == AuthenticationMode.Custom) {
      await this.options.authenticationMode!.custom!.processFetch(input, init);
    }

    const response = await this._fetchImplementation(input, init);
    if (this.authenticationMode == AuthenticationMode.BrowserSession) {
      const headerValue = response.headers.get("x-set-authorization");
      const sessionToken = headerValue?.startsWith("Session ") ? headerValue.replace("Session ", "") : null;
      if (sessionToken) {
        this.sessionTokenStore!.setItem(sessionStorageKey, sessionToken);
      }
    }

    return response;
  });

  private resetClients() {
    if (this.currentTransaction) {
      throw new Error("Can't reset clients while a transaction is open");
    }

    if (this.baseSubscriptionClient) this.disposeClient(this.baseSubscriptionClient);
    if (this.baseClient) this.baseClient = this.newBaseClient();
  }

  private newBaseClient() {
    const exchanges = [dedupExchange];

    // apply urql's default caching behaviour when client side (but skip it server side)
    if (typeof window != "undefined") {
      exchanges.push(cacheExchange);
    }

    exchanges.push(
      multipartFetchExchange,
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
      })
    );

    return new Client({ url: this.endpoint, fetch: this.fetch, exchanges });
  }

  private newSubscriptionClient(overrides: GadgetSubscriptionClientOptions) {
    // In the browser, we can't set arbitrary headers on the websocket request, so we don't use the same auth mechanism that we use for normal HTTP requests. Instead we use graphql-ws' connectionParams to send the auth information in the connection setup message to the server.
    const connectionParams: Record<string, any> = { environment: this.environment, auth: { type: this.authenticationMode } };
    if (this.authenticationMode == AuthenticationMode.APIKey) {
      connectionParams.auth.key = this.options.authenticationMode!.apiKey!;
    } else if (this.authenticationMode == AuthenticationMode.InternalAuthToken) {
      connectionParams.auth.token = this.options.authenticationMode!.internalAuthToken!;
    } else if (this.authenticationMode == AuthenticationMode.BrowserSession) {
      connectionParams.auth.sessionToken = this.sessionTokenStore!.getItem(sessionStorageKey);
    } else if (this.authenticationMode == AuthenticationMode.Custom) {
      this.options.authenticationMode?.custom?.processTransactionConnectionParams(connectionParams);
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
      connectionParams,
      onNonLazyError: () => {
        // we catch this outside in the runner function
      },
      on: {
        connected: (socket, payload) => {
          // If we're using session token authorization, we don't use request headers to exchange the session token, we use graphql-ws' ConnectionAck payload to persist the token. When the subscription client first starts, the server will send us session token identifying this client, and we persist it to the session token store
          if (this.authenticationMode == AuthenticationMode.BrowserSession && payload?.sessionToken) {
            const browserSession = this.options.authenticationMode?.browserSession;
            const initialToken = browserSession !== null && typeof browserSession === "object" ? browserSession.initialToken : null;
            if (!initialToken) {
              this.sessionTokenStore!.setItem(sessionStorageKey, payload.sessionToken as string);
            }
          }
          this.subscriptionClientOptions?.on?.connected?.(socket, payload);
          overrides?.on?.connected?.(socket, payload);
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

  private async waitForOpenedConnection(options: GadgetSubscriptionClientOptions): Promise<SubscriptionClient> {
    let subscriptionClient: SubscriptionClient;
    let unsubscribe: () => void;

    return await new Promise<SubscriptionClient>((resolve, reject) => {
      subscriptionClient = this.newSubscriptionClient({
        ...options,
        lazy: false,
        onNonLazyError: reject,
      });

      unsubscribe = subscriptionClient.on("connected", () => resolve(subscriptionClient));
    }).finally(() => unsubscribe?.());
  }

  private disposeClient(client: SubscriptionClient) {
    const maybePromise = client.dispose();
    if (maybePromise) {
      maybePromise.catch((err) => console.error(`Error closing SubscriptionClient: ${err}`));
    }
  }
}
