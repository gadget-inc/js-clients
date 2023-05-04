import type { GadgetConnection } from "./GadgetConnection";
import type { GadgetTransaction } from "./GadgetTransaction";
import type { InternalModelManager } from "./InternalModelManager";

export interface AnyClient {
  connection: GadgetConnection;
  query(graphQL: string, variables?: Record<string, any>): Promise<any>;
  mutate(graphQL: string, variables?: Record<string, any>): Promise<any>;
  transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T>;
  internal: {
    [key: string]: InternalModelManager;
  };
}
