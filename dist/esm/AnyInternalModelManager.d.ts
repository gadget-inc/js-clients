import { AnyConnection } from "./AnyConnection.js";
import type { GadgetRecord, GadgetRecordList, RecordShape } from "./GadgetRecord.js";
import type { AnyFilter, InternalFindListOptions, InternalFindManyOptions, InternalFindOneOptions } from "./types.js";
export type RecordData = Record<string, any>;
export interface AnyInternalModelManager<Shape extends RecordShape = RecordData> {
    connection: AnyConnection;
    findOne: (id: string, options?: InternalFindOneOptions, throwOnEmptyData?: boolean) => Promise<GadgetRecord<Shape>>;
    maybeFindOne: (id: string, options?: InternalFindOneOptions) => Promise<GadgetRecord<Shape> | null>;
    findMany: (options?: InternalFindManyOptions) => Promise<GadgetRecordList<Shape>>;
    findFirst: (options?: InternalFindListOptions, throwOnEmptyData?: boolean) => Promise<GadgetRecord<Shape>>;
    maybeFindFirst: (options?: InternalFindListOptions) => Promise<GadgetRecord<Shape> | null>;
    create: (record: RecordData) => Promise<GadgetRecord<Shape>>;
    bulkCreate: (records: RecordData[]) => Promise<GadgetRecord<Shape>[]>;
    update: (id: string, record: RecordData) => Promise<GadgetRecord<Shape>>;
    upsert: (record: RecordData & {
        on?: string[];
    }) => Promise<GadgetRecord<Shape>>;
    delete: (id: string) => Promise<void>;
    deleteMany: (options?: {
        search?: string;
        filter?: AnyFilter;
    }) => Promise<void>;
}
