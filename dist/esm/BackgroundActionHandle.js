import { actionResultRunner } from "./operationRunners.js";
/** Represents a handle to a background action which has been enqueued */
export class BackgroundActionHandle {
    constructor(connection, action, id, options) {
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
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        });
        Object.defineProperty(this, "fetchResult", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (options) => {
                return await actionResultRunner(this.connection, this.id, this.action, options);
            }
        });
        Object.defineProperty(this, "sleep", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (delay) => {
                return new Promise((resolve) => {
                    setTimeout(resolve, delay);
                });
            }
        });
    }
    /** Wait for this background action to complete and return the result. */
    async result(options) {
        let result = await this.fetchResult(options);
        while (result.outcome === null || result.outcome === undefined) {
            await this.sleep(250);
            result = await this.fetchResult(options);
        }
        return result.result;
    }
}
//# sourceMappingURL=BackgroundActionHandle.js.map