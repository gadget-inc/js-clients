import { mapExchange } from "@urql/core";
import { onSpanError, withSpan } from "./support.js";
const spans = new Map();
export const otelExchange = mapExchange({
    onOperation: (operation) => {
        operation.context.operationName = graphqlDocumentName(operation.query) || "unknown";
        withSpan("api-client.operation", {
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
                onSpanError(span, result.error);
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