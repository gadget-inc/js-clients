import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetRecord } from "./GadgetRecord.js";
import type { GadgetRecordList } from "./GadgetRecordList.js";
import type { InternalModelManager } from "./InternalModelManager.js";

export type AnyModelFinderMetadata = {
  /** The name of the GraphQL API field that should be called for this operation */
  operationName: string;
  /** The model's api identifier */
  modelApiIdentifier: string;
  /** What fields to select from the GraphQL API if no explicit selection is passed */
  defaultSelection: Record<string, any>;
  /** A namespace this operation is nested in. Absent for old clients or root-namespaced operations */
  namespace?: string | string[] | null;
  /** Type-time only type member used for strong typing of finders  */
  selectionType: any;
  /** Type-time only type member used for strong typing of finders  */
  optionsType: any;
  /** Type-time only type member used for strong typing of finders  */
  schemaType: any | null;
};

/**
 * The manager class for a given model that uses the Public API, like `api.post` or `api.user`
 **/
export interface AnyPublicModelManager {
  connection: GadgetConnection;
  apiIdentifier?: string;
  findOne: ((id: string, options: any) => Promise<GadgetRecord<any>>) & AnyModelFinderMetadata;
  findMany: ((options: any) => Promise<GadgetRecordList<any>>) & AnyModelFinderMetadata;
  findFirst: ((options: any) => Promise<GadgetRecord<any>>) & AnyModelFinderMetadata;
  maybeFindFirst(options: any): Promise<GadgetRecord<any> | null>;
  maybeFindOne(id: string, options: any): Promise<GadgetRecord<any> | null>;
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
 * Prior to 1.1 actions were defined to accept just a connection
 */
export interface AnyLegacyModelManager {
  connection: GadgetConnection;
}

/**
 * Any model manager, either public or internal
 */
export type AnyModelManager = AnyPublicModelManager | AnyPublicSingletonModelManager | AnyLegacyModelManager | InternalModelManager;
