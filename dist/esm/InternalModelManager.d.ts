import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { InternalFindListOptions, InternalFindManyOptions, InternalFindOneOptions } from "./types";
export declare const internalFindOneQuery: (apiIdentifier: string) => string;
export declare const internalFindFirstQuery: (apiIdentifier: string, options?: InternalFindListOptions) => {
    query: string;
    variables: Record<string, any>;
};
export declare const internalFindManyQuery: (apiIdentifier: string, options?: InternalFindManyOptions) => {
    query: string;
    variables: Record<string, any>;
};
export declare const internalCreateMutation: (apiIdentifier: string) => string;
export declare const internalBulkCreateMutation: (apiIdentifier: string, pluralApiIdentifier: string) => string;
export declare const internalUpdateMutation: (apiIdentifier: string) => string;
export declare const internalDeleteMutation: (apiIdentifier: string) => string;
export declare const internalDeleteManyMutation: (apiIdentifier: string) => string;
/** The fields for a given record to send to the backend */
export type RecordData = Record<string, any>;
/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
export declare class InternalModelManager {
    private readonly apiIdentifier;
    readonly connection: GadgetConnection;
    readonly options?: {
        pluralApiIdentifier: string;
        hasAmbiguousIdentifiers?: boolean | undefined;
    } | undefined;
    private readonly capitalizedApiIdentifier;
    constructor(apiIdentifier: string, connection: GadgetConnection, options?: {
        pluralApiIdentifier: string;
        hasAmbiguousIdentifiers?: boolean | undefined;
    } | undefined);
    private validateRecord;
    private getRecordFromData;
    /**
     * Find a single record by ID. Throws an error by default if the record with the given ID is not found.
     *
     * @example
     * // returns post with id 10
     * const post = await api.internal.post.findOne(10);
     *
     * @param id The ID of the record to find
     * @param options Options for the find operation
     * @param throwOnEmptyData Whether or not to throw an error if the record is not found
     * @returns The record, if found
     */
    findOne(id: string, options?: InternalFindOneOptions, throwOnEmptyData?: boolean): Promise<GadgetRecord<RecordData>>;
    /**
     * Find a single record by ID. Returns null if the record doesn't exist.
     *
     * @example
     * // returns post with id 10 if it exists, null otherwise
     * const post = await api.internal.post.maybeFindOne(10);
     *
     * @param id The ID of the record to find
     * @param options Options for the find operation
     * @returns The record, if found, null otherwise
     */
    maybeFindOne(id: string, options?: InternalFindOneOptions): Promise<GadgetRecord<RecordData> | null>;
    /**
     * Find a list of records matching the given options
     *
     * @example
     * // returns the first page of published posts
     * const posts = await api.internal.post.findMany({ filter: { published: { equals: true }}});
     *
     * @param options Options for the find operation, like sorts, filters, and pagination
     * @returns The record, if found, null otherwise
     */
    findMany(options?: InternalFindManyOptions): Promise<GadgetRecordList<any>>;
    /**
     * Find the first record matching the given options. Throws an error by default if no records matching the options are found.
     *
     * @example
     * // returns the first published post or throws if none found
     * const post = await api.internal.post.findFirst({ filter: { published: { equals: true }}});
     *
     * @param options Options for the find operation, like sorts, filters, and pagination
     * @returns The first record matching the options
     */
    findFirst(options?: InternalFindListOptions, throwOnEmptyData?: boolean): Promise<GadgetRecord<RecordShape>>;
    /**
     * Find the first record matching the given options. Returns null if no records matching the options are found.
     *
     * @example
     * // returns the first published post or null if none are published
     * const post = await api.internal.post.maybeFindFirst({ filter: { published: { equals: true }}});
     *
     * @param options Options for the find operation, like sorts, filters, and pagination
     * @returns The first record matching the options, null otherwise
     */
    maybeFindFirst(options?: InternalFindListOptions): Promise<GadgetRecord<RecordShape> | null>;
    /**
     * Creates a new record in the backend datastore for this model using the Internal API
     *
     * Does *not* run actions -- use the Public API for that.
     *
     * @example
     * // creates a new post record in the database
     * const post = await api.internal.post.create({ title: "A new post" });
     *
     * @param record The data for the record to create
     * @returns The created record
     */
    create(record: RecordData): Promise<GadgetRecord<RecordShape>>;
    /**
     * Creates a set of new records in the backend datastore for this model using the Internal API. Creates in bulk within the same database transaction for performance.
     *
     * Does *not* run actions -- use the Public API for that.
     *
     * @example
     * // creates 2 new post records in the database
     * const posts = await api.internal.post.bulkCreate([
     *   { title: "A new post" },
     *   { title: "Another new post" }
     * ]);
     *
     * @param record An array of data for the records to create
     * @returns The created records
     */
    bulkCreate(records: RecordData[]): Promise<GadgetRecord<RecordShape>[]>;
    /**
     * Updates an existing record in the backend datastore for this model using the Internal API
     *
     * Does *not* run actions -- use the Public API for that.
     *
     * @example
     * // updates post with id 10 in the database
     * const post = await api.internal.post.update(10, { title: "A new post title" });
     *
     * @param record The data for the record to update
     * @returns The updated record
     */
    update(id: string, record: RecordData): Promise<GadgetRecord<RecordShape>>;
    /**
     * Deletes an existing record in the backend datastore for this model using the Internal API
     *
     * Does *not* run actions -- use the Public API for that.
     *
     * @example
     * // removes the post with id 10 in the database
     * await api.internal.post.delete(10);
     *
     * @param id The id of the record to delete
     */
    delete(id: string): Promise<void>;
    /**
     * Deletes the records in the backend datastore that match the given filter criteria. Uses the Internal API.
     *
     * Does *not* run actions -- use the Public API for that.
     *
     * @example
     * // removes all unpublished posts from the database
     * await api.internal.post.deleteMany({filter: { published: { equals: false } } });
     *
     * @param options Search and filter options for the records to delete
     */
    deleteMany(options?: {
        search?: string;
        filter?: RecordData;
    }): Promise<void>;
}
