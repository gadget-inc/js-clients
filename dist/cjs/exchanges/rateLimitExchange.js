"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitExchange = void 0;
const core_1 = require("@urql/core");
const support_js_1 = require("../support.js");
const rateLimitExchange = (options = {}) => {
    const { enabled = true, bucket = new support_js_1.TokenBucket(), ignoredOperationKinds = ["teardown"], ignoredOperationNames = ["CommitTransaction"], } = options;
    return (0, core_1.mapExchange)({
        onOperation: (operation) => {
            if (!enabled || ignoredOperationKinds.includes(operation.kind) || ignoredOperationNames.includes(operation.context.operationName)) {
                return operation;
            }
            return bucket.consume().then(() => operation);
        },
    });
};
exports.rateLimitExchange = rateLimitExchange;
//# sourceMappingURL=rateLimitExchange.js.map