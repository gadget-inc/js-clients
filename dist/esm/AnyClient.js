export const $modelRelationships = Symbol.for("gadget/modelRelationships");
/**
 * Checks if the given object is an instance of any Gadget app's generated JS client object
 */
export const isGadgetClient = (client) => {
    return client && "connection" in client && client.connection && "endpoint" in client.connection;
};
//# sourceMappingURL=AnyClient.js.map