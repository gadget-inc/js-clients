"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitExchange = void 0;
const core_1 = require("@urql/core");
const IGNORED_OPERATION_NAMES = ["CommitTransaction"];
const IGNORED_OPERATION_KINDS = ["teardown"];
const rateLimitExchange = (bucket) => (0, core_1.mapExchange)({
    onOperation: (operation) => {
        if (IGNORED_OPERATION_KINDS.includes(operation.kind) || IGNORED_OPERATION_NAMES.includes(operation.context.operationName)) {
            return operation;
        }
        return bucket.consume().then(() => operation);
    },
});
exports.rateLimitExchange = rateLimitExchange;
//# sourceMappingURL=rateLimitExchange.js.map