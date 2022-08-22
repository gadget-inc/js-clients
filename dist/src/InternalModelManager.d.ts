import { GadgetConnection } from "./GadgetConnection";
import { GadgetRecord, RecordShape } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import { GadgetTransaction } from "./GadgetTransaction";
export declare const internalFindOneQuery: (apiIdentifier: string) => string;
export declare const internalFindFirstQuery: (apiIdentifier: string, options?: RecordData | undefined) => {
    variables: any;
    query: string;
};
export declare const internalFindManyQuery: (apiIdentifier: string, options?: RecordData | undefined) => {
    variables: any;
    query: string;
};
export declare const internalCreateMutation: (apiIdentifier: string) => string;
export declare const internalUpdateMutation: (apiIdentifier: string) => string;
export declare const internalDeleteMutation: (apiIdentifier: string) => string;
export declare const internalDeleteManyMutation: (apiIdentifier: string) => string;
export declare type RecordData = Record<string, any>;
/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
export declare class InternalModelManager {
    private readonly apiIdentifier;
    readonly connection: GadgetConnection;
    private readonly capitalizedApiIdentifier;
    constructor(apiIdentifier: string, connection: GadgetConnection);
    findOne(id: string, throwOnEmptyData?: boolean): Promise<GadgetRecord<RecordData>>;
    maybeFindOne(id: string): Promise<GadgetRecord<RecordData> | null>;
    findMany(options?: RecordData): Promise<GadgetRecordList<any>>;
    findFirst(options?: RecordData, throwOnEmptyData?: boolean): Promise<GadgetRecord<RecordShape>>;
    maybeFindFirst(options?: RecordData): Promise<GadgetRecord<RecordShape> | null>;
    create(record: RecordData): Promise<GadgetRecord<RecordShape>>;
    update(id: string, record: RecordData): Promise<GadgetRecord<RecordShape>>;
    delete(id: string): Promise<void>;
    deleteMany(options?: {
        search?: string;
        filter?: RecordData;
    }): Promise<void>;
    transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T>;
}
