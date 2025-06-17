import type { Exchange } from "@urql/core";
import stringify from "fast-json-stable-stringify";
import { filter, merge, pipe, tap } from "wonka";
import { isLiveQueryOperationDefinitionNode } from "../GadgetConnection.js";

/**
 * Exchange that prevents duplicate execution of live queries while allowing proper teardown and re-establishment.
 *
 * Live queries are long-running subscriptions that receive real-time updates from the server.
 * When mutations occur, urql's cache exchange may try to re-execute queries that could be affected,
 * but live queries should not be duplicated since they maintain persistent connections.
 *
 * This exchange exists to solve a specific problem: when mutations occur, the cache layer tries to
 * re-execute anything that was potentially invalidated by the mutation. As far as the cache is
 * concerned, live queries are just regular queries and so it sends them again. However, live queries
 * should maintain their persistent connections and not be duplicated.
 *
 * The exchange:
 * - Separates live and non-live operations into different streams
 * - Tracks executed live query operations by a combination of key and variables hash
 * - Prevents re-execution of already running live queries with identical parameters
 * - Allows teardown operations to proceed (for cleanup)
 * - Removes operations from tracking when they are torn down
 * - Allows new live queries with different parameters to be established
 *
 * The exchange uses a Set to track operation identifiers. While this could theoretically leak memory
 * if teardown operations fail, the teardown logic should prevent this in normal operation.
 * WeakSet cannot be used here because operation identifiers are strings, not objects.
 */
export const liveQueryExchange: Exchange = ({ forward }) => {
  const executed = new Set<string>();

  const getOperationId = (op: any) => {
    return `${op.key}-${stringify(op.variables || {})}`;
  };

  return (operations$) => {
    const notLive = pipe(
      operations$,
      filter((op) => !op.query.definitions.some(isLiveQueryOperationDefinitionNode))
    );

    const live = pipe(
      operations$,
      filter((op) => op.query.definitions.some(isLiveQueryOperationDefinitionNode)),
      filter((op) => {
        const opId = getOperationId(op);
        return !executed.has(opId) || op.kind !== "query";
      }),
      tap((op) => {
        const opId = getOperationId(op);
        if (op.kind === "query") {
          executed.add(opId);
        } else if (op.kind === "teardown") {
          executed.delete(opId);
        }
      })
    );

    return forward(merge([live, notLive]));
  };
};
