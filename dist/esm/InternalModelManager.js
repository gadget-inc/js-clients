import { Call, Var, compileWithVariableValues } from "tiny-graphql-query-compiler";
import { GadgetRecordList } from "./GadgetRecordList.js";
import { ErrorsSelection, GadgetClientError, GadgetOperationError, assert, assertMutationSuccess, assertNullableOperationSuccess, assertOperationSuccess, camelize, capitalizeIdentifier, filterTypeName, hydrateConnection, hydrateRecord, hydrateRecordArray, hydrationSelection, namespaceDataPath, namespacify, sortTypeName, } from "./support.js";
export const internalFindOneQuery = (apiIdentifier, id, namespace, select) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    return compileWithVariableValues({
        type: "query",
        name: `InternalFind${capitalizedApiIdentifier}`,
        fields: {
            internal: namespacify(namespace, {
                [apiIdentifier]: Call({
                    id: Var({ value: id, type: "GadgetID!" }),
                    select: Var({ value: formatInternalSelectVariable(select), type: `[String!]` }),
                }),
            }),
            ...hydrationSelection(apiIdentifier, namespace),
        },
    });
};
const internalFindListVariables = (apiIdentifier, namespace, options) => {
    return {
        search: (options === null || options === void 0 ? void 0 : options.search) ? Var({ value: options === null || options === void 0 ? void 0 : options.search, type: "String" }) : undefined,
        sort: (options === null || options === void 0 ? void 0 : options.sort) ? Var({ value: options === null || options === void 0 ? void 0 : options.sort, type: `[${sortTypeName(apiIdentifier, namespace)}!]` }) : undefined,
        filter: (options === null || options === void 0 ? void 0 : options.filter) ? Var({ value: options === null || options === void 0 ? void 0 : options.filter, type: `[${filterTypeName(apiIdentifier, namespace)}!]` }) : undefined,
        select: (options === null || options === void 0 ? void 0 : options.select) ? Var({ value: formatInternalSelectVariable(options === null || options === void 0 ? void 0 : options.select), type: `[String!]` }) : undefined,
    };
};
export const internalFindFirstQuery = (apiIdentifier, namespace, options) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, namespace, options);
    return compileWithVariableValues({
        type: "query",
        name: `InternalFindFirst${capitalizedApiIdentifier}`,
        fields: {
            internal: namespacify(namespace, {
                [`list${capitalizedApiIdentifier}`]: Call({
                    ...defaultVariables,
                    first: Var({ value: 1, type: "Int" }),
                }, {
                    edges: {
                        node: true,
                    },
                }),
            }),
            ...hydrationSelection(apiIdentifier, namespace),
        },
    });
};
export const internalFindManyQuery = (apiIdentifier, namespace, options) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, namespace, options);
    return compileWithVariableValues({
        type: "query",
        name: `InternalFindMany${capitalizedApiIdentifier}`,
        fields: {
            internal: namespacify(namespace, {
                [`list${capitalizedApiIdentifier}`]: Call({
                    ...defaultVariables,
                    after: Var({ value: options === null || options === void 0 ? void 0 : options.after, type: "String" }),
                    before: Var({ value: options === null || options === void 0 ? void 0 : options.before, type: "String" }),
                    first: Var({ value: options === null || options === void 0 ? void 0 : options.first, type: "Int" }),
                    last: Var({ value: options === null || options === void 0 ? void 0 : options.last, type: "Int" }),
                }, {
                    pageInfo: { hasNextPage: true, hasPreviousPage: true, startCursor: true, endCursor: true },
                    edges: { cursor: true, node: true },
                }),
            }),
            ...hydrationSelection(apiIdentifier, namespace),
        },
    });
};
export const internalCreateMutation = (apiIdentifier, namespace, record) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    return compileWithVariableValues({
        type: "mutation",
        name: `InternalCreate${capitalizedApiIdentifier}`,
        fields: {
            internal: namespacify(namespace, {
                [`create${capitalizedApiIdentifier}`]: Call({
                    [apiIdentifier]: Var({ value: record, type: `Internal${capitalizedApiIdentifier}Input` }),
                }, {
                    success: true,
                    ...ErrorsSelection,
                    [apiIdentifier]: true,
                }),
            }),
            ...hydrationSelection(apiIdentifier, namespace),
        },
    });
};
export const internalBulkCreateMutation = (apiIdentifier, pluralApiIdentifier, namespace, records) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    const capitalizedPluralApiIdentifier = capitalizeIdentifier(pluralApiIdentifier);
    return compileWithVariableValues({
        type: "mutation",
        name: `InternalBulkCreate${capitalizedPluralApiIdentifier}`,
        fields: {
            internal: namespacify(namespace, {
                [`bulkCreate${capitalizedPluralApiIdentifier}`]: Call({
                    [pluralApiIdentifier]: Var({ value: records, type: `[Internal${capitalizedApiIdentifier}Input]!` }),
                }, {
                    success: true,
                    ...ErrorsSelection,
                    [pluralApiIdentifier]: true,
                }),
            }),
            ...hydrationSelection(apiIdentifier, namespace),
        },
    });
};
export const internalUpdateMutation = (apiIdentifier, namespace, id, record) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    return compileWithVariableValues({
        type: "mutation",
        name: `InternalUpdate${capitalizedApiIdentifier}`,
        fields: {
            internal: namespacify(namespace, {
                [`update${capitalizedApiIdentifier}`]: Call({
                    id: Var({ value: id, type: "GadgetID!" }),
                    [apiIdentifier]: Var({ value: record, type: `Internal${capitalizedApiIdentifier}Input` }),
                }, {
                    success: true,
                    ...ErrorsSelection,
                    [apiIdentifier]: true,
                }),
            }),
            ...hydrationSelection(apiIdentifier, namespace),
        },
    });
};
export const internalDeleteMutation = (apiIdentifier, namespace, id) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    return compileWithVariableValues({
        type: "mutation",
        name: `InternalDelete${capitalizedApiIdentifier}`,
        fields: {
            internal: namespacify(namespace, {
                [`delete${capitalizedApiIdentifier}`]: Call({
                    id: Var({ value: id, type: "GadgetID!" }),
                }, {
                    success: true,
                    ...ErrorsSelection,
                }),
            }),
        },
    });
};
export const internalDeleteManyMutation = (apiIdentifier, namespace, options) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    return compileWithVariableValues({
        type: "mutation",
        name: `InternalDeleteMany${capitalizedApiIdentifier}`,
        fields: {
            internal: namespacify(namespace, {
                [`deleteMany${capitalizedApiIdentifier}`]: Call({
                    search: Var({ value: options === null || options === void 0 ? void 0 : options.search, type: "String" }),
                    filter: Var({ value: options === null || options === void 0 ? void 0 : options.filter, type: `[${filterTypeName(apiIdentifier, namespace)}!]` }),
                }, {
                    success: true,
                    ...ErrorsSelection,
                }),
            }),
        },
    });
};
/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
export class InternalModelManager {
    constructor(apiIdentifier, connection, options) {
        Object.defineProperty(this, "apiIdentifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: apiIdentifier
        });
        Object.defineProperty(this, "connection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: connection
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        });
        Object.defineProperty(this, "capitalizedApiIdentifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.capitalizedApiIdentifier = camelize(apiIdentifier);
        this.namespace = (options === null || options === void 0 ? void 0 : options.namespace) || [];
    }
    validateRecord(record) {
        if (!this.options || !this.options.hasAmbiguousIdentifiers) {
            return true;
        }
        const keys = Object.keys(record);
        // any keys that aren't the apiIdentifier are invalid
        return keys.every((key) => key === this.apiIdentifier);
    }
    getRecordFromData(record, functionName) {
        let recordData = record;
        if (!this.validateRecord(record)) {
            throw new GadgetOperationError(`Invalid arguments found in variables. Did you mean to use ${functionName}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
        }
        if (this.apiIdentifier in record) {
            recordData = recordData[this.apiIdentifier];
        }
        return recordData;
    }
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
    async findOne(id, options, throwOnEmptyData = true) {
        const plan = internalFindOneQuery(this.apiIdentifier, id, this.namespace, formatInternalSelectVariable(options === null || options === void 0 ? void 0 : options.select));
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
        const result = assertSuccess(response, this.dataPath(this.apiIdentifier));
        return hydrateRecord(response, result);
    }
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
    async maybeFindOne(id, options) {
        const record = await this.findOne(id, options, false);
        return record.isEmpty() ? null : record;
    }
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
    async findMany(options) {
        const plan = internalFindManyQuery(this.apiIdentifier, this.namespace, options);
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        const connection = assertNullableOperationSuccess(response, this.dataPath(`list${this.capitalizedApiIdentifier}`));
        const records = hydrateConnection(response, connection);
        return GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
    }
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
    async findFirst(options, throwOnEmptyData = true) {
        const plan = internalFindFirstQuery(this.apiIdentifier, this.namespace, options);
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        const dataPath = this.dataPath(`list${this.capitalizedApiIdentifier}`);
        let connection;
        if (throwOnEmptyData === false) {
            // If this is a nullable operation, don't throw errors on empty
            connection = assertNullableOperationSuccess(response, dataPath);
        }
        else {
            // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
            // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
            connection = assertOperationSuccess(response, dataPath, throwOnEmptyData);
        }
        const records = hydrateConnection(response, connection);
        const recordList = GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
        return recordList[0];
    }
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
    async maybeFindFirst(options) {
        return await this.findFirst(options, false);
    }
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
    async create(record) {
        const plan = internalCreateMutation(this.apiIdentifier, this.namespace, this.getRecordFromData(record, "create"));
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        const result = assertMutationSuccess(response, this.dataPath(`create${this.capitalizedApiIdentifier}`));
        return hydrateRecord(response, result[this.apiIdentifier]);
    }
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
    async bulkCreate(records) {
        var _a;
        if (!((_a = this.options) === null || _a === void 0 ? void 0 : _a.pluralApiIdentifier)) {
            throw new GadgetClientError("Cannot perform bulkCreate without a pluralApiIdentifier");
        }
        const capitalizedPluralApiIdentifier = capitalizeIdentifier(this.options.pluralApiIdentifier);
        const plan = internalBulkCreateMutation(this.apiIdentifier, this.options.pluralApiIdentifier, this.namespace, records);
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        const result = assertMutationSuccess(response, this.dataPath(`bulkCreate${capitalizedPluralApiIdentifier}`));
        return hydrateRecordArray(response, result[this.options.pluralApiIdentifier]);
    }
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
    async update(id, record) {
        assert(id, `Can't update a record without an ID passed`);
        const plan = internalUpdateMutation(this.apiIdentifier, this.namespace, id, this.getRecordFromData(record, "update"));
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        const result = assertMutationSuccess(response, this.dataPath(`update${this.capitalizedApiIdentifier}`));
        return hydrateRecord(response, result[this.apiIdentifier]);
    }
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
    async delete(id) {
        assert(id, `Can't delete a record without an ID`);
        const plan = internalDeleteMutation(this.apiIdentifier, this.namespace, id);
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        assertMutationSuccess(response, this.dataPath(`delete${this.capitalizedApiIdentifier}`));
    }
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
    async deleteMany(options) {
        const plan = internalDeleteManyMutation(this.apiIdentifier, this.namespace, options);
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        assertMutationSuccess(response, this.dataPath(`deleteMany${this.capitalizedApiIdentifier}`));
    }
    dataPath(dataPath) {
        return ["internal", ...namespaceDataPath([dataPath], this.namespace)];
    }
}
function formatInternalSelectVariable(select) {
    if (!select)
        return;
    if (Array.isArray(select))
        return select;
    const result = [];
    for (const [key, value] of Object.entries(select)) {
        if (value) {
            result.push(key);
        }
    }
    return result;
}
//# sourceMappingURL=InternalModelManager.js.map