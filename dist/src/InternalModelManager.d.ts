import { GadgetConnection } from "./GadgetConnection";
import { GadgetRecord, RecordShape } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import { GadgetTransaction } from "./GadgetTransaction";
import { AnyFilter, AnySelection, InternalFindFilteredOptions, InternalFindManyOptions } from "./types";
export declare const internalFindOneQuery: (apiIdentifier: string) => string;
export declare const internalFindFirstQuery: (apiIdentifier: string, options?: RecordData) => {
    variables: any;
    query: string;
};
export declare const internalFindManyQuery: (apiIdentifier: string, options?: InternalFindManyOptions) => {
    variables: any;
    query: string;
};
export declare const internalCreateMutation: (apiIdentifier: string) => string;
export declare const internalUpdateMutation: (apiIdentifier: string) => string;
export declare const internalDeleteMutation: (apiIdentifier: string) => string;
export declare const internalDeleteManyMutation: (apiIdentifier: string) => string;
export declare type RecordData = Record<string, any>;
export interface InternalFindOneOptions {
    /** Return only the given fields on the backend record (and related records) */
    select?: AnySelection;
    /** Raise an error if the record for the given id can't be found. Defaults to `true` */
    throwOnEmptyData?: boolean;
}
/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
export declare class InternalModelManager {
    private readonly apiIdentifier;
    readonly connection: GadgetConnection;
    private readonly capitalizedApiIdentifier;
    constructor(apiIdentifier: string, connection: GadgetConnection);
    /**
     * Find one record from the backend internal API
     *
     * @deprecated Please use the `options` method instead
     * @param id the id of the record to find
     * @param throwOnEmptyData whether to throw an error if the record can't be found. Default: `true`
     */
    findOne(id: string, throwOnEmptyData?: boolean): Promise<GadgetRecord<RecordData>>;
    /**
     * Find one record from the backend internal API
     *
     * @param id the id of the record to find
     * @param options Options for the find. Optional.
     */
    findOne(id: string, options?: InternalFindOneOptions): Promise<GadgetRecord<RecordData>>;
    /**
     * Find one record from the backend internal API. Returns null if the record can't be found.
     *
     * @param id the id of the record to find
     * @param options Options for the find. Optional.
     */
    maybeFindOne(id: string, options?: InternalFindOneOptions): Promise<GadgetRecord<RecordData> | null>;
    /**
     * Find a list of records from the backend internal API.
     *
     * @param options Options for the find. Optional.
     */
    findMany(options?: InternalFindManyOptions): Promise<GadgetRecordList<any>>;
    /**
     * Find the first record from the backend that matches the given options using the Internal API. Throws if no record can be found.
     *
     * @param options Options for the find. Optional.
     */
    findFirst(options?: InternalFindFilteredOptions, throwOnEmptyData?: boolean): Promise<GadgetRecord<RecordShape>>;
    /**
     * Find the first record from the backend that matches the given options using the Internal API. Returns null if no record can be found
     *
     * @param options Options for the find. Optional.
     */
    maybeFindFirst(options?: InternalFindFilteredOptions): Promise<GadgetRecord<RecordShape> | null>;
    /**
     * Creates a new record for this model using the Internal API.
     *
     * __Note__: This won't call the `create` action on the backend model as it uses the Internal API. Use the Public API if you want to call actions. See the Gadget docs for more on the differences between the Public API and the Internal API.
     *
     * @param record Raw record data to apply to the record.
     */
    create(record: RecordData): Promise<GadgetRecord<RecordShape>>;
    /**
     * Updates a given record with the given data using the Internal API.
     *
     * __Note__: This won't call the `update` action on the backend model as it uses the Internal API. Use the Public API if you want to call actions. See the Gadget docs for more on the differences between the Public API and the Internal API.
     *
     * @param id The id of the record to update
     * @param record Raw record data to apply to the record.
     */
    update(id: string, record: RecordData): Promise<GadgetRecord<RecordShape>>;
    /**
     * Deletes a record by id from the backend database using the Internal API
     *
     * __Note__: This won't call the `delete` action on the backend model as it uses the Internal API. Use the Public API if you want to call actions. See the Gadget docs for more on the differences between the Public API and the Internal API.
     *
     * @param id The id of the record to delete
     */
    delete(id: string): Promise<void>;
    /**
     * Deletes all the records matching the given filter conditions from the backend database using the internal API
     *
     * __Note__: This won't call the `delete` action on the backend model as it uses the Internal API. Use the Public API if you want to call actions. See the Gadget docs for more on the differences between the Public API and the Internal API.
     *
     * @param id The id of the record to delete
     */
    deleteMany(options?: {
        filter?: AnyFilter | null;
    }): Promise<void>;
    /**
     * Starts or continues a transaction against the backend API.
     */
    transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T>;
}
