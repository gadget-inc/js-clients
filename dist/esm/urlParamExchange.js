import { onPush, pipe } from "wonka";
export const graphqlDocumentName = (doc) => {
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
export const urlParamExchange = ({ forward }) => {
    return (ops$) => pipe(ops$, onPush((op) => {
        if (op.context.url && op.query && !op.context.url.includes("?")) {
            const operation = graphqlDocumentName(op.query) || "unknown";
            op.context = {
                ...op.context,
                url: op.context.url + `?operation=${operation}`,
            };
        }
    }), forward);
};
//# sourceMappingURL=urlParamExchange.js.map