import { GadgetConnection } from "./GadgetConnection";
import { GadgetTransaction } from "./GadgetTransaction";
import { InternalModelManager } from "./InternalModelManager";

export interface AnyClient {
  connection: GadgetConnection;
  query(graphQL: string, variables?: Record<string, any>): Promise<any>;
  mutate(graphQL: string, variables?: Record<string, any>): Promise<any>;
  transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T>;
  internal: {
    [key: string]: InternalModelManager;
  };
}
