"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otelExchange = void 0;
const core_1 = require("@urql/core");
const support_js_1 = require("./support.js");
const spans = new Map();
exports.otelExchange = (0, core_1.mapExchange)({
    onOperation: (operation) => {
        operation.context.operationName = graphqlDocumentName(operation.query) || "unknown";
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
const graphqlDocumentName = (doc) => {
    const lastDefinition = [...doc.definitions]
        .reverse()
        .find((definition) => definition.kind == "OperationDefinition");
    if (lastDefinition) {
        if (lastDefinition.name) {
            return lastDefinition.name.value;
        }
        const firstSelection = lastDefinition.selectionSet.selections.find((node) => node.kind == "Field");
        return firstSelection.name.value;
    }
};
//# sourceMappingURL=otelExchange.js.map