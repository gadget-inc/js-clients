import { backgroundActionResultRunner, cancelBackgroundActionRunner } from "./operationRunners.js";
/** Represents a handle to a background action which has been enqueued */
export class BackgroundActionHandle {
    constructor(connection, action, id) {
        Object.defineProperty(this, "connection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: connection
        });
        Object.defineProperty(this, "action", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: action
        });
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
    }
    /** Wait for this background action to complete and return the result. */
    async result(options) {
        return (await backgroundActionResultRunner(this.connection, this.id, this.action, options))
            .result;
    }
    /** Cancel this background action by id. */
    async cancel() {
        await cancelBackgroundActionRunner(this.connection, this.id);
    }
}
//# sourceMappingURL=BackgroundActionHandle.js.map