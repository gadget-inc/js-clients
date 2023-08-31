import type { Span } from "@opentelemetry/api";
import { mapExchange } from "@urql/core";
import { onSpanError, withSpan } from "../support.js";

const spans = new Map<number, Span>();

export const otelExchange = mapExchange({
  onOperation: (operation) => {
    withSpan(
      "api-client.operation",
      {
        attributes: {
          "operation.name": operation.context.operationName,
          "operation.key": operation.key,
          "operation.kind": operation.kind,
        },
      },
      (span) => {
        spans.set(operation.key, span);
      }
    );
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
