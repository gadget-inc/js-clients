"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otelExchange = void 0;
const core_1 = require("@urql/core");
const support_js_1 = require("../support.js");
const spans = new Map();
exports.otelExchange = (0, core_1.mapExchange)({
    onOperation: (operation) => {
        (0, support_js_1.withSpan)("api-client.operation", {
            attributes: {
                "operation.name": operation.context.operationName,
                "operation.key": operation.key,
                "operation.kind": operation.kind,
            },
        }, (span) => {
            spans.set(operation.key, span);
        });
    },
    onResult: (result) => {
        const span = spans.get(result.operation.key);
        spans.delete(result.operation.key);
        if (span) {
            if (result.error) {
                (0, support_js_1.onSpanError)(span, result.error);
            }
            span.end();
        }
    },
});
//# sourceMappingURL=otelExchange.js.map