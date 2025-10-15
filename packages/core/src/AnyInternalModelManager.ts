import { AnyConnection } from "./AnyConnection.js";
import type { AnyGadgetRecord, AnyGadgetRecordList, RecordShape } from "./AnyGadgetRecord.js";
import type { AnyFilter, InternalFindListOptions, InternalFindManyOptions, InternalFindOneOptions } from "./types.js";

export type RecordData = Record<string, any>;

export interface AnyInternalModelManager<Shape extends RecordShape = RecordData> {
  connection: AnyConnection;
  findOne: (id: string, options?: InternalFindOneOptions, throwOnEmptyData?: boolean) => Promise<AnyGadgetRecord<Shape>>;
  maybeFindOne: (id: string, options?: InternalFindOneOptions) => Promise<AnyGadgetRecord<Shape> | null>;
  findMany: (options?: InternalFindManyOptions) => Promise<AnyGadgetRecordList<Shape>>;
  findFirst: (options?: InternalFindListOptions, throwOnEmptyData?: boolean) => Promise<AnyGadgetRecord<Shape>>;
  maybeFindFirst: (options?: InternalFindListOptions) => Promise<AnyGadgetRecord<Shape> | null>;
  create: (record: RecordData) => Promise<AnyGadgetRecord<Shape>>;
  bulkCreate: (records: RecordData[]) => Promise<AnyGadgetRecord<Shape>[]>;
  update: (id: string, record: RecordData) => Promise<AnyGadgetRecord<Shape>>;
  upsert: (record: RecordData & { on?: string[] }) => Promise<AnyGadgetRecord<Shape>>;
  delete: (id: string) => Promise<void>;
  deleteMany: (options?: { search?: string; filter?: AnyFilter }) => Promise<void>;
}
