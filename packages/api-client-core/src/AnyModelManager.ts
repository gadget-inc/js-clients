import type { GadgetConnection } from "./GadgetConnection.js";
import type { FindFirstFunction, FindManyFunction, FindOneFunction, GetFunction } from "./GadgetFunctions.js";
import type { GadgetRecord } from "./GadgetRecord.js";
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

export type AnyFindOneFunc = FindOneFunction<any, any, any, any>;
export type AnyFindManyFunc = FindManyFunction<any, any, any, any>;
export type AnyFindFirstFunc = FindFirstFunction<any, any, any, any>;

/**
 * The manager class for a given model that uses the Public API, like `api.post` or `api.user`
 **/
export interface AnyPublicModelManager<
  FindOneFunc extends AnyFindOneFunc = AnyFindOneFunc,
  FindManyFunc extends AnyFindManyFunc = AnyFindManyFunc,
  FindFirstFunc extends AnyFindFirstFunc = AnyFindFirstFunc
> {
  connection: GadgetConnection;
  findOne: FindOneFunc;
  findMany: FindManyFunc;
  findFirst: FindFirstFunc;
  maybeFindFirst(options: any): Promise<GadgetRecord<any> | null>;
  maybeFindOne(id: string, options: any): Promise<GadgetRecord<any> | null>;
}

/**
 * The manager class for a given single model that uses the Public API, like `api.session`
 **/
export interface AnyPublicSingletonModelManager<GetFunc extends GetFunction<any, any, any, any> = GetFunction<any, any, any, any>> {
  connection: GadgetConnection;
  get: GetFunc;
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
