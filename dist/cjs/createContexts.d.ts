import { RuntimeAdapter } from "./adaptors/types.js";
export interface CoreContexts {
    /**
     * Context that stores the current urql client
     *
     * urql doesn't have its own useClient hook, so we store it on our own context to get at the client object later
     **/
    GadgetUrqlClientContext: unknown;
    /**
     * Context that stores an instance of the JS Client for an app (AKA the `api` object)
     */
    GadgetConfigurationContext: unknown;
}
export declare const createContexts: (adapter: RuntimeAdapter) => CoreContexts;
