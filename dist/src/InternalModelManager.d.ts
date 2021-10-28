import { GadgetConnection } from "./GadgetConnection";
import { GadgetRecord } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import { GadgetTransaction } from "./GadgetTransaction";
export declare const internalFindOneQuery: (apiIdentifier: string) => string;
export declare const internalFindManyQuery: (apiIdentifier: string) => string;
export declare const internalCreateMutation: (apiIdentifier: string) => string;
export declare const internalUpdateMutation: (apiIdentifier: string) => string;
export declare const internalDeleteMutation: (apiIdentifier: string) => string;
export declare type RecordData = Record<string, any>;
/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
export declare class InternalModelManager {
    private readonly apiIdentifier;
    readonly connection: GadgetConnection;
    private readonly capitalizedApiIdentifier;
    constructor(apiIdentifier: string, connection: GadgetConnection);
    findOne(id: string): Promise<GadgetRecord<any>>;
    findMany(options?: Record<string, any>): Promise<GadgetRecordList<any>>;
    create(record: RecordData): Promise<GadgetRecord<any>>;
    update(id: string, record: RecordData): Promise<GadgetRecord<any>>;
    delete(id: string): Promise<void>;
    transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T>;
}
