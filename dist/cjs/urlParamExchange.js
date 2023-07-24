"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlParamExchange = exports.graphqlDocumentName = void 0;
const wonka_1 = require("wonka");
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
exports.graphqlDocumentName = graphqlDocumentName;
const urlParamExchange = ({ forward }) => {
    return (ops$) => (0, wonka_1.pipe)(ops$, (0, wonka_1.onPush)((op) => {
        if (op.context.url && op.query && !op.context.url.includes("?")) {
            const operation = (0, exports.graphqlDocumentName)(op.query) || "unknown";
            op.context = {
                ...op.context,
                url: op.context.url + `?operation=${operation}`,
            };
        }
    }), forward);
};
exports.urlParamExchange = urlParamExchange;
//# sourceMappingURL=urlParamExchange.js.map