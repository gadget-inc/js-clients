import type { AnyClient, AnyConnection } from "@gadgetinc/core";
import type { Client as UrqlClient } from "@urql/core";
import type { RuntimeAdapter } from "./adapter.js";
export declare const registerClientHooks: (api: AnyClient, adapter: RuntimeAdapter) => {
    gadgetClient: AnyClient;
    gadgetConnection: AnyConnection;
    urqlClient: UrqlClient;
};
