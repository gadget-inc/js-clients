"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liveQueryExchange = void 0;
const wonka_1 = require("wonka");
const GadgetConnection_js_1 = require("../GadgetConnection.js");
/**
 * Exchange that prevents duplicate execution of live queries while allowing proper teardown and re-establishment.
 *
 * Live queries are long-running special subscriptions that receive real-time updates from the server. When mutations occur, urql's cache exchange tries to re-execute any mounted queries that could be affected and so re-executes live queries. Live queries automatically update their own data using their own persistent connection, so they shouldn't be re-executed if already mounted.
 */
const liveQueryExchange = ({ forward }) => {
    const executed = new Set();
    const getOperationId = (op) => {
        return op.key;
    };
    return (operations$) => {
        const notLive = (0, wonka_1.pipe)(operations$, (0, wonka_1.filter)((op) => !op.query.definitions.some(GadgetConnection_js_1.isLiveQueryOperationDefinitionNode)));
        const live = (0, wonka_1.pipe)(operations$, (0, wonka_1.filter)((op) => op.query.definitions.some(GadgetConnection_js_1.isLiveQueryOperationDefinitionNode)), (0, wonka_1.filter)((op) => {
            const opId = getOperationId(op);
            return !executed.has(opId) || op.kind !== "query";
        }), (0, wonka_1.tap)((op) => {
            const opId = getOperationId(op);
            if (op.kind === "query") {
                executed.add(opId);
            }
            else if (op.kind === "teardown") {
                executed.delete(opId);
            }
        }));
        return forward((0, wonka_1.merge)([live, notLive]));
    };
};
exports.liveQueryExchange = liveQueryExchange;
//# sourceMappingURL=liveQueryExchange.js.map