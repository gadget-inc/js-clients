"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundActionHandle = void 0;
const operationRunners_js_1 = require("./operationRunners.js");
/** Represents a handle to a background action which has been enqueued */
class BackgroundActionHandle {
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
        return (await (0, operationRunners_js_1.backgroundActionResultRunner)(this.connection, this.id, this.action, options))
            .result;
    }
    /** Cancel this background action by id. */
    async cancel() {
        await (0, operationRunners_js_1.cancelBackgroundActionRunner)(this.connection, this.id);
    }
}
exports.BackgroundActionHandle = BackgroundActionHandle;
//# sourceMappingURL=BackgroundActionHandle.js.map