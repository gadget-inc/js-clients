import { mapExchange } from "@urql/core";
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
export const operationNameExchange = mapExchange({
    onOperation: (operation) => {
        var _a;
        var _b;
        (_a = (_b = operation.context).operationName) !== null && _a !== void 0 ? _a : (_b.operationName = graphqlDocumentName(operation.query) || "unknown");
    },
});
//# sourceMappingURL=operationNameExchange.js.map