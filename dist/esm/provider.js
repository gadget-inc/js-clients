import { createHooks } from "./createHooks.js";
const isGadgetClient = (client) => {
    return client && "connection" in client && client.connection && "endpoint" in client.connection;
};
export const registerClientHooks = (api, adapter) => {
    if (!api) {
        throw new Error("No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    }
    if (!isGadgetClient(api)) {
        throw new Error("Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!");
    }
    const gadgetClient = api;
    const urqlClient = api.connection.currentClient;
    const gadgetConnection = api.connection;
    createHooks(adapter);
    return {
        gadgetClient,
        gadgetConnection,
        urqlClient,
    };
};
//# sourceMappingURL=provider.js.map