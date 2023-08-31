import { mapExchange } from "@urql/core";

export const urlParamExchange = mapExchange({
  onOperation: (operation) => {
    if (operation.context.url && operation.context.operationName && !operation.context.url.includes("?")) {
      operation.context.url += `?operation=${operation.context.operationName}`;
    }
  },
});
