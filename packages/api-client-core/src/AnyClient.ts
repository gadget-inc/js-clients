import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetTransaction } from "./GadgetTransaction.js";
import type { InternalModelManager } from "./InternalModelManager.js";

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
export const isGadgetClient = (client: any): client is AnyClient => {
  return client && "connection" in client && client.connection && "endpoint" in client.connection;
};
