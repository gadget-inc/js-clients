import { GadgetConnection } from "./GadgetConnection";
import { GadgetRecord } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";

/**
 * Object representing one model's API in a high level way
 * This is a generic interface. Concrete ones are generated by Gadget, */
export interface AnyModelManager {
  connection: GadgetConnection;
  findOne(id: string, options: any): Promise<GadgetRecord<any>>;
  maybeFindOne(id: string, options: any): Promise<GadgetRecord<any> | null>;
  findMany(options: any): Promise<GadgetRecordList<any>>;
  findFirst(options: any): Promise<GadgetRecord<any>>;
  maybeFindFirst(options: any): Promise<GadgetRecord<any> | null>;
}
