import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetTransaction } from "./GadgetTransaction.js";
import type { InternalModelManager } from "./InternalModelManager.js";
export declare const $modelRelationships: unique symbol;
/**
 * An instance of any Gadget app's API client object
 */
export interface AnyClient {
    connection: GadgetConnection;
    query(graphQL: string, variables?: Record<string, any>): Promise<any>;
    mutate(graphQL: string, variables?: Record<string, any>): Promise<any>;
    transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T>;
    internal: {
        [key: string]: InternalModelManager;
    };
    [$modelRelationships]?: {
        [modelName: string]: {
            [apiIdentifier: string]: {
                type: string;
                model: string;
            };
        };
    };
}
/**
 * Checks if the given object is an instance of any Gadget app's generated JS client object
 */
export declare const isGadgetClient: (client: any) => client is AnyClient;
