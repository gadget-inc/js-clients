/** Represents a handle to a background action which has been enqueued */
export class BackgroundActionHandle {
    constructor(connection, id, options) {
        Object.defineProperty(this, "connection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: connection
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
    }
    /** Wait for this background action to complete and return the result. */
    async result(options) {
        // TODO: implement
    }
}
//# sourceMappingURL=BackgroundActionHandle.js.map