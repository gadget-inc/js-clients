import type { AnyConnection } from "./AnyConnection.js";
import type { AnyCoreImplementation } from "./AnyCoreImplementation.js";
import type { AnyGadgetTransaction } from "./AnyGadgetTransaction.js";
import type { AnyInternalModelManager } from "./AnyInternalModelManager.js";
export declare const $modelRelationships: unique symbol;
export declare const $coreImplementation: unique symbol;
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
    transaction<T>(callback: (transaction: AnyGadgetTransaction) => Promise<T>): Promise<T>;
    internal: InternalModelManagerNamespace;
    [$modelRelationships]?: {
        [modelName: string]: {
            [apiIdentifier: string]: {
                type: string;
                model: string;
            };
        };
    };
    [$coreImplementation]?: AnyCoreImplementation;
    /** Symbol for passing field arguments in selections. Use as `{ field: { [api.$args]: { first: 10 }, nestedField: true } }` */
    $args?: symbol;
}
