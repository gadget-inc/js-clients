"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClientHooks = void 0;
const createHooks_js_1 = require("./createHooks.js");
const isGadgetClient = (client) => {
    return client && "connection" in client && client.connection && "endpoint" in client.connection;
};
const registerClientHooks = (api, adapter) => {
    if (!api) {
        throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    }
    if (!isGadgetClient(api)) {
        throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    }
    const gadgetClient = api;
    const urqlClient = api.connection.currentClient;
    const gadgetConnection = api.connection;
    (0, createHooks_js_1.createHooks)(adapter);
    return {
        gadgetClient,
        gadgetConnection,
        urqlClient,
    };
};
exports.registerClientHooks = registerClientHooks;
//# sourceMappingURL=provider.js.map