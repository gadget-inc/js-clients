import type { Client } from "@urql/core";
import type { Client as SubscriptionClient } from "graphql-ws";
/** Represents the error thrown when a transaction is explicity rolled back, sometimes due to another inner error */
export declare class TransactionRolledBack extends Error {
}
/** Represents an open transaction against the Gadget API */
export declare class GadgetTransaction {
    readonly client: Client;
    readonly subscriptionClient: SubscriptionClient;
    open: boolean;
    constructor(client: Client, subscriptionClient: SubscriptionClient);
    /** Shut down this transaction by closing the connection to the backend. */
    close(): void;
    /** Explicitly roll back this transaction, preventing any of the changes made during it from being committed. */
    rollback(): Promise<void>;
    /**
     * @private
     */
    start(): Promise<void>;
    /**
     * @private
     */
    commit(): Promise<void>;
}
