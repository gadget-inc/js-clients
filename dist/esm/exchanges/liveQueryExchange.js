import { filter, merge, pipe, tap } from "wonka";
import { isLiveQueryOperationDefinitionNode } from "../GadgetConnection.js";
/**
 * Exchange that prevents duplicate execution of live queries while allowing proper teardown and re-establishment.
 *
 * Live queries are long-running special subscriptions that receive real-time updates from the server. When mutations occur, urql's cache exchange tries to re-execute any mounted queries that could be affected and so re-executes live queries. Live queries automatically update their own data using their own persistent connection, so they shouldn't be re-executed if already mounted.
 */
export const liveQueryExchange = ({ forward }) => {
    const executed = new Set();
    const getOperationId = (op) => {
        return op.key;
    };
    return (operations$) => {
        const notLive = pipe(operations$, filter((op) => !op.query.definitions.some(isLiveQueryOperationDefinitionNode)));
        const live = pipe(operations$, filter((op) => op.query.definitions.some(isLiveQueryOperationDefinitionNode)), filter((op) => {
            const opId = getOperationId(op);
            return !executed.has(opId) || op.kind !== "query";
        }), tap((op) => {
            const opId = getOperationId(op);
            if (op.kind === "query") {
                executed.add(opId);
            }
            else if (op.kind === "teardown") {
                executed.delete(opId);
            }
        }));
        return forward(merge([live, notLive]));
    };
};
//# sourceMappingURL=liveQueryExchange.js.map