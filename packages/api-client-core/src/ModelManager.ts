import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetRecord } from "./GadgetRecord.js";
import type { GadgetRecordList } from "./GadgetRecordList.js";

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
 * Object representing one model's API in a high level way
 * This is a generic interface. Concrete ones are generated by Gadget, */
export interface AnyModelManager {
  connection: GadgetConnection;
  findOne: ((id: string, options: any) => Promise<GadgetRecord<any>>) & AnyModelFinderMetadata;
  findMany: ((options: any) => Promise<GadgetRecordList<any>>) & AnyModelFinderMetadata;
  findFirst: ((options: any) => Promise<GadgetRecord<any>>) & AnyModelFinderMetadata;
  maybeFindFirst(options: any): Promise<GadgetRecord<any> | null>;
  maybeFindOne(id: string, options: any): Promise<GadgetRecord<any> | null>;
}
