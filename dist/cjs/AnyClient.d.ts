import type { AnyConnection } from "./AnyConnection.js";
import type { AnyInternalModelManager } from "./AnyInternalModelManager.js";
import type { GadgetTransaction } from "./GadgetTransaction.js";
export declare const $modelRelationships: unique symbol;
export type InternalModelManagerNamespace = {
    [key: string]: AnyInternalModelManager | InternalModelManagerNamespace | ((...args: any[]) => any);
};
/**
 * An instance of any Gadget app's API client object
 */
export interface AnyClient {
    connection: AnyConnection;
    query(graphQL: string, variables?: Record<string, any>): Promise<any>;
    mutate(graphQL: string, variables?: Record<string, any>): Promise<any>;
    transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T>;
    internal: InternalModelManagerNamespace;
    apiClientCoreVersion?: string;
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
