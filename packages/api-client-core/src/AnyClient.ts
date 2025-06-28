import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetTransaction } from "./GadgetTransaction.js";
import type { InternalModelManager } from "./InternalModelManager.js";

export const $modelRelationships = Symbol.for("gadget/modelRelationships");

export type InternalModelManagerNamespace = {
  // internal model managers can be maps of model names to model managers, subnamespaces, or utility functions
  [key: string]: InternalModelManager | InternalModelManagerNamespace | ((...args: any[]) => any);
};

/**
 * An instance of any Gadget app's API client object
 */
export interface AnyClient {
  connection: GadgetConnection;
  query(graphQL: string, variables?: Record<string, any>): Promise<any>;
  mutate(graphQL: string, variables?: Record<string, any>): Promise<any>;
  transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T>;
  internal: InternalModelManagerNamespace;
  apiClientCoreVersion?: string;
  [$modelRelationships]?: { [modelName: string]: { [apiIdentifier: string]: { type: string; model: string } } };
}

/**
 * Checks if the given object is an instance of any Gadget app's generated JS client object
 */
export const isGadgetClient = (client: any): client is AnyClient => {
  return client && "connection" in client && client.connection && "endpoint" in client.connection;
};
