import { assertOperationSuccess } from "./support.js";
/** Represents the error thrown when a transaction is explicity rolled back, sometimes due to another inner error */
export class TransactionRolledBack extends Error {
}
/** Represents an open transaction against the Gadget API */
export class GadgetTransaction {
    constructor(client, subscriptionClient) {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: client
        });
        Object.defineProperty(this, "subscriptionClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: subscriptionClient
        });
        Object.defineProperty(this, "open", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    /** Shut down this transaction by closing the connection to the backend. */
    close() {
        if (this.open) {
            void this.rollback().catch(() => null);
        }
        void this.subscriptionClient.dispose();
    }
    /** Explicitly roll back this transaction, preventing any of the changes made during it from being committed. */
    async rollback() {
        assertOperationSuccess(await this.client.mutation(`mutation RollbackTransaction { internal { rollbackTransaction }}`, {}).toPromise(), [
            "internal",
            "rollbackTransaction",
        ]);
        this.open = false;
        throw new TransactionRolledBack("Transaction rolled back.");
    }
    /**
     * @private
     */
    async start() {
        assertOperationSuccess(await this.client.mutation(`mutation StartTransaction { internal { startTransaction }}`, {}).toPromise(), [
            "internal",
            "startTransaction",
        ]);
        this.open = true;
    }
    /**
     * @private
     */
    async commit() {
        assertOperationSuccess(await this.client.mutation(`mutation CommitTransaction { internal { commitTransaction }}`, {}).toPromise(), [
            "internal",
            "commitTransaction",
        ]);
        this.open = false;
    }
}
//# sourceMappingURL=GadgetTransaction.js.map