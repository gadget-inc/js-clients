import type { AnyClient, GadgetConnection } from "@gadgetinc/api-client-core";
import type { Client as UrqlClient } from "@urql/core";
import { RuntimeAdapter } from "./adapter.js";
import { createHooks } from "./createHooks.js";

const isGadgetClient = (client: any): client is AnyClient => {
  return client && "connection" in client && client.connection && "endpoint" in client.connection;
};

export const registerClientHooks = (api: AnyClient, adapter: RuntimeAdapter) => {
  let gadgetClient: AnyClient;
  let gadgetConnection: GadgetConnection;
  let urqlClient: UrqlClient;

  if (!api) {
    throw new Error(
      "No Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!"
    );
  }

  if (!isGadgetClient(api)) {
    throw new Error(
      "Invalid Gadget API client passed to <Provider /> component -- please pass an instance of your generated client, like <Provider api={api} />!"
    );
  }
  gadgetClient = api;
  urqlClient = api.connection.currentClient;
  gadgetConnection = api.connection;
  createHooks(adapter);

  return {
    gadgetClient,
    gadgetConnection,
    urqlClient,
  };
};
