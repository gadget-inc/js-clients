"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGadgetClient = exports.$modelRelationships = void 0;
exports.$modelRelationships = Symbol.for("gadget/modelRelationships");
/**
 * Checks if the given object is an instance of any Gadget app's generated JS client object
 */
const isGadgetClient = (client) => {
    return client && "connection" in client && client.connection && "endpoint" in client.connection;
};
exports.isGadgetClient = isGadgetClient;
//# sourceMappingURL=AnyClient.js.map