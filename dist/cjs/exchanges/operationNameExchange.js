"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationNameExchange = void 0;
const core_1 = require("@urql/core");
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
exports.operationNameExchange = (0, core_1.mapExchange)({
    onOperation: (operation) => {
        var _a;
        var _b;
        (_a = (_b = operation.context).operationName) !== null && _a !== void 0 ? _a : (_b.operationName = graphqlDocumentName(operation.query) || "unknown");
    },
});
//# sourceMappingURL=operationNameExchange.js.map