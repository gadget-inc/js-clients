import type { GadgetConnection } from "./GadgetConnection";
import type { GadgetRecord, RecordShape } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import type { GadgetTransaction } from "./GadgetTransaction";
export declare const internalFindOneQuery: (apiIdentifier: string) => string;
/**
 * A list of fields to select from the internal API
 * Matches the format of the Public API `select` option, but only allows going one level deep -- no relationships can be selected using the internal API.
 *
 * Supports passing a list of strings as a shorthand.
 *
 * @example
 * { fieldA: true, fieldB: true, fieldC: false }
 *
 * @example
 * ['fieldA', 'fieldB']
 */
export type InternalFieldSelection = string[] | {
    [field: string]: boolean | null | undefined;
};
/** Options for the api functions that return one record on an InternalModelManager */
export interface InternalFindOneOptions {
    /**
     * What fields to retrieve from the API for this API call
     **/
    select?: InternalFieldSelection;
}
/** Options for functions that query a list of records on an InternalModelManager */
export interface InternalFindListOptions {
    /**
     * A string to search for within all the stringlike fields of the records
     * Matches the behavior of the Public API `search` option
     **/
    search?: string;
    /**
     * How to sort the returned records
     * Matches the format and behavior of the Public API `sort` option
     *
     * @example
     * {
     *   sort: { publishedAt: "Descending" }
     * }
     **/
    sort?: Record<string, "Ascending" | "Descending"> | Record<string, "Ascending" | "Descending">[];
    /**
     * Only return records matching this filter
     * Matches the format and behavior of the Public API `filter` option
     *
     * @example
     * {
     *   filter: { published: { equals: true } }
     * }
     * */
    filter?: Record<string, any>;
    /**
     * What fields to retrieve from the API for this API call
     **/
    select?: InternalFieldSelection;
}
/** Options for functions that return a paginated list of records from an InternalModelManager */
export interface InternalFindManyOptions extends InternalFindListOptions {
    /**
     * A count of records to return
     * Often used in tandem with the `after` option for GraphQL relay-style cursor pagination
     * Matches the pagination style and behavior of the Public API
     **/
    first?: number;
    /**
     * The `after` cursor from the GraphQL Relay pagination spec
     * Matches the pagination style and behavior of the Public API
     **/
    after?: string;
    /**
     * A count of records to return
     * Often used in tandem with the `before` option for GraphQL relay-style cursor pagination
     * Matches the pagination style and behavior of the Public API
     **/
    last?: number;
    /**
     * The `before` cursor from the GraphQL Relay pagination spec
     * Matches the pagination style and behavior of the Public API
     **/
    before?: string;
}
export declare const internalFindFirstQuery: (apiIdentifier: string, options?: InternalFindListOptions) => {
    variables: any;
    query: string;
};
export declare const internalFindManyQuery: (apiIdentifier: string, options?: InternalFindManyOptions) => {
    variables: any;
    query: string;
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
    /** @private */
    transaction<T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T>;
}
