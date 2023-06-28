import type { GadgetConnection } from "./GadgetConnection";
import type { GadgetRecord } from "./GadgetRecord";
import type { GadgetRecordList } from "./GadgetRecordList";
import type { InternalModelManager } from "./InternalModelManager";

/**
 * The manager class for a given model that uses the Public API, like `api.post` or `api.user`
 **/
export interface AnyPublicModelManager {
  connection: GadgetConnection;
  apiIdentifier?: string;
  findOne(id: string, options: any): Promise<GadgetRecord<any>>;
  maybeFindOne(id: string, options: any): Promise<GadgetRecord<any> | null>;
  findMany(options: any): Promise<GadgetRecordList<any>>;
  findFirst(options: any): Promise<GadgetRecord<any>>;
  maybeFindFirst(options: any): Promise<GadgetRecord<any> | null>;
}

/**
 * The manager class for a given single model that uses the Public API, like `api.session`
 **/
export interface AnyPublicSingletonModelManager {
  connection: GadgetConnection;
  apiIdentifier?: string;
  get(): Promise<GadgetRecord<any>>;
}

/**
 * Any model manager, either public or internal
 */
export type AnyModelManager = AnyPublicModelManager | AnyPublicSingletonModelManager | InternalModelManager;
