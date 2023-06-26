import type { Exchange } from "@urql/core";
import type { DocumentNode, OperationDefinitionNode } from "graphql";
import { onPush, pipe } from "wonka";

export const graphqlDocumentName = (doc: DocumentNode) => {
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

export const urlParamExchange: Exchange = ({ forward }) => {
  return (ops$) =>
    pipe(
      ops$,
      onPush((op) => {
        if (op.context.url && op.query && !op.context.url.includes("?")) {
          const operation = graphqlDocumentName(op.query) || "unknown";

          op.context = {
            ...op.context,
            url: op.context.url + `?operation=${operation}`,
          };
        }
      }),
      forward
    );
};
