import type { Exchange } from "@urql/core";
import { mapExchange } from "@urql/core";
import type { DocumentNode, OperationDefinitionNode } from "graphql";

const graphqlDocumentName = (doc: DocumentNode) => {
  const lastDefinition: OperationDefinitionNode | undefined = [...doc.definitions]
    .reverse()
    .find((definition) => definition.kind == "OperationDefinition") as any;
  if (lastDefinition) {
    if (lastDefinition.name) {
      return lastDefinition.name.value;
    }
    const firstSelection = lastDefinition.selectionSet.selections.find((node) => node.kind == "Field") as any;
    return firstSelection.name.value;
  }
};

export const operationNameExchange: Exchange = mapExchange({
  onOperation: (operation) => {
    operation.context.operationName ??= graphqlDocumentName(operation.query) || "unknown";
  },
});
