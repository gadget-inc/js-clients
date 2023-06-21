import type { GadgetConnection } from "./GadgetConnection";
import type { GadgetTransaction } from "./GadgetTransaction";
import type { InternalModelManager } from "./InternalModelManager";
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
}
/**
 * Checks if the given object is an instance of any Gadget app's generated JS client object
 */
export declare const isGadgetClient: (client: any) => client is AnyClient;
