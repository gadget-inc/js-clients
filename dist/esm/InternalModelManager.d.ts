import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { AnyFilter, InternalFieldSelection, InternalFindListOptions, InternalFindManyOptions, InternalFindOneOptions } from "./types.js";
export declare const internalFindOneQuery: (apiIdentifier: string, id: string, namespace: string[], select?: InternalFieldSelection) => {
    query: string;
    variables: Record<string, any>;
};
export declare const internalFindFirstQuery: (apiIdentifier: string, namespace: string[], options?: InternalFindListOptions) => {
    query: string;
    variables: Record<string, any>;
};
export declare const internalFindManyQuery: (apiIdentifier: string, namespace: string[], options?: InternalFindManyOptions) => {
    query: string;
    variables: Record<string, any>;
};
export declare const internalCreateMutation: (apiIdentifier: string, namespace: string[], record: RecordData) => {
    query: string;
    variables: Record<string, any>;
};
export declare const internalBulkCreateMutation: (apiIdentifier: string, pluralApiIdentifier: string, namespace: string[], records: RecordData[]) => {
    query: string;
    variables: Record<string, any>;
};
export declare const internalUpdateMutation: (apiIdentifier: string, namespace: string[], id: string, record: RecordData) => {
    query: string;
    variables: Record<string, any>;
};
export declare const internalUpsertMutation: (apiIdentifier: string, namespace: string[], on: string[] | undefined, record: RecordData) => {
    query: string;
    variables: Record<string, any>;
};
export declare const internalDeleteMutation: (apiIdentifier: string, namespace: string[], id: string) => {
    query: string;
    variables: Record<string, any>;
};
export declare const internalDeleteManyMutation: (apiIdentifier: string, namespace: string[], options?: {
    search?: string;
    filter?: AnyFilter;
}) => {
    query: string;
    variables: Record<string, any>;
};
/** The fields for a given record to send to the backend */
export type RecordData = Record<string, any>;
/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
export declare class InternalModelManager<Shape extends RecordShape = RecordData> {
    private readonly apiIdentifier;
    readonly connection: GadgetConnection;
    readonly options?: {
        pluralApiIdentifier: string;
        hasAmbiguousIdentifiers?: boolean | undefined;
        namespace?: string[] | undefined;
    } | undefined;
    private readonly capitalizedApiIdentifier;
    private readonly namespace;
    constructor(apiIdentifier: string, connection: GadgetConnection, options?: {
        pluralApiIdentifier: string;
        hasAmbiguousIdentifiers?: boolean | undefined;
        namespace?: string[] | undefined;
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
    findOne(id: string, options?: InternalFindOneOptions, throwOnEmptyData?: boolean): Promise<GadgetRecord<Shape>>;
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
    maybeFindOne(id: string, options?: InternalFindOneOptions): Promise<GadgetRecord<Shape> | null>;
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
    findMany(options?: InternalFindManyOptions): Promise<GadgetRecordList<Shape>>;
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
    findFirst(options?: InternalFindListOptions, throwOnEmptyData?: boolean): Promise<GadgetRecord<Shape>>;
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
    maybeFindFirst(options?: InternalFindListOptions): Promise<GadgetRecord<Shape> | null>;
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
    create(record: RecordData): Promise<GadgetRecord<Shape>>;
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
    bulkCreate(records: RecordData[]): Promise<GadgetRecord<Shape>[]>;
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
    update(id: string, record: RecordData): Promise<GadgetRecord<Shape>>;
    /**
     * Upserts a record in the backend datastore for this model using the Internal API.
     * If a matching record exists, it will be updated. If it doesn't exist, it will be created.
     * By default records will be matched by the `id` field, but you can specify a different field to match on.
     *
     * Does *not* run actions -- use the Public API for that.
     *
     * @example
     * // upserts post with id 10 in the database
     * // if a post with id 10 exists, it will be updated
     * // if a post with id 10 does not exist, it will be created
     * const post = await api.internal.post.upsert({ id: "10", title: "A new post title" });
     *
     * @example
     * // upserts post with slug "new-post" in the database
     * // if a post with slug "new-post" exists, it will be updated
     * // if a post with slug "new-post" does not exist, it will be created
     * const post = await api.internal.post.upsert({ post: {slug: "new-post", title: "A new post title" }, on: ["slug"] });
     *
     * @param record The data for the record to update
     * @returns The upserted record
     */
    upsert(record: RecordData & {
        on?: string[];
    }): Promise<GadgetRecord<Shape>>;
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
    deleteMany(options: {
        search?: string;
        filter: AnyFilter;
    }): Promise<void>;
    private dataPath;
}
