import type { AnyConnection } from "./AnyConnection.js";
import { AnyCoreImplementation } from "./AnyCoreImplementation.js";
import type { AnyGadgetTransaction } from "./AnyGadgetTransaction.js";
import type { AnyInternalModelManager } from "./AnyInternalModelManager.js";

export const $modelRelationships = Symbol.for("gadget/modelRelationships");
export const $coreImplementation = Symbol.for("gadget/coreImplementation");

export type InternalModelManagerNamespace = {
  // internal model managers can be maps of model names to model managers, subnamespaces, or utility functions
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
  [$modelRelationships]: { [modelName: string]: { [apiIdentifier: string]: { type: string; model: string } } };
  [$coreImplementation]: AnyCoreImplementation;
}
