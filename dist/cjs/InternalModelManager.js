"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalModelManager = exports.internalDeleteManyMutation = exports.internalDeleteMutation = exports.internalUpsertMutation = exports.internalUpdateMutation = exports.internalBulkCreateMutation = exports.internalCreateMutation = exports.internalFindManyQuery = exports.internalFindFirstQuery = exports.internalFindOneQuery = void 0;
const tiny_graphql_query_compiler_1 = require("tiny-graphql-query-compiler");
const GadgetRecordList_js_1 = require("./GadgetRecordList.js");
const support_js_1 = require("./support.js");
const internalFindOneQuery = (apiIdentifier, id, namespace, select) => {
    const capitalizedApiIdentifier = (0, support_js_1.capitalizeIdentifier)(apiIdentifier);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "query",
        name: `InternalFind${capitalizedApiIdentifier}`,
        fields: {
            internal: (0, support_js_1.namespacify)(namespace, {
                [apiIdentifier]: (0, tiny_graphql_query_compiler_1.Call)({
                    id: (0, tiny_graphql_query_compiler_1.Var)({ value: id, type: "GadgetID!" }),
                    select: (0, tiny_graphql_query_compiler_1.Var)({ value: formatInternalSelectVariable(select), type: `[String!]` }),
                }),
            }),
            ...(0, support_js_1.hydrationSelection)(apiIdentifier, namespace),
        },
    });
};
exports.internalFindOneQuery = internalFindOneQuery;
const internalFindListVariables = (apiIdentifier, namespace, options) => {
    return {
        search: (options === null || options === void 0 ? void 0 : options.search) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.search, type: "String" }) : undefined,
        searchFields: (options === null || options === void 0 ? void 0 : options.searchFields)
            ? (0, tiny_graphql_query_compiler_1.Var)({
                value: (0, support_js_1.jsSearchFieldsToGqlSearchFields)(options.searchFields),
                type: `${(0, support_js_1.searchableFieldTypeName)(apiIdentifier, namespace)}`,
            })
            : undefined,
        sort: (options === null || options === void 0 ? void 0 : options.sort) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.sort, type: `[${(0, support_js_1.sortTypeName)(apiIdentifier, namespace)}!]` }) : undefined,
        filter: (options === null || options === void 0 ? void 0 : options.filter) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.filter, type: `[${(0, support_js_1.filterTypeName)(apiIdentifier, namespace)}!]` }) : undefined,
        select: (options === null || options === void 0 ? void 0 : options.select) ? (0, tiny_graphql_query_compiler_1.Var)({ value: formatInternalSelectVariable(options === null || options === void 0 ? void 0 : options.select), type: `[String!]` }) : undefined,
    };
};
const internalFindFirstQuery = (apiIdentifier, namespace, options) => {
    const capitalizedApiIdentifier = (0, support_js_1.capitalizeIdentifier)(apiIdentifier);
    const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, namespace, options);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "query",
        name: `InternalFindFirst${capitalizedApiIdentifier}`,
        fields: {
            internal: (0, support_js_1.namespacify)(namespace, {
                [`list${capitalizedApiIdentifier}`]: (0, tiny_graphql_query_compiler_1.Call)({
                    ...defaultVariables,
                    first: (0, tiny_graphql_query_compiler_1.Var)({ value: 1, type: "Int" }),
                }, {
                    edges: {
                        node: true,
                    },
                }),
            }),
            ...(0, support_js_1.hydrationSelection)(apiIdentifier, namespace),
        },
    });
};
exports.internalFindFirstQuery = internalFindFirstQuery;
const internalFindManyQuery = (apiIdentifier, namespace, options) => {
    const capitalizedApiIdentifier = (0, support_js_1.capitalizeIdentifier)(apiIdentifier);
    const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, namespace, options);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "query",
        name: `InternalFindMany${capitalizedApiIdentifier}`,
        fields: {
            internal: (0, support_js_1.namespacify)(namespace, {
                [`list${capitalizedApiIdentifier}`]: (0, tiny_graphql_query_compiler_1.Call)({
                    ...defaultVariables,
                    after: (options === null || options === void 0 ? void 0 : options.after) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options.after, type: "String" }) : undefined,
                    before: (options === null || options === void 0 ? void 0 : options.before) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.before, type: "String" }) : undefined,
                    first: (options === null || options === void 0 ? void 0 : options.first) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.first, type: "Int" }) : undefined,
                    last: (options === null || options === void 0 ? void 0 : options.last) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.last, type: "Int" }) : undefined,
                }, {
                    pageInfo: { hasNextPage: true, hasPreviousPage: true, startCursor: true, endCursor: true },
                    edges: { cursor: true, node: true },
                }),
            }),
            ...(0, support_js_1.hydrationSelection)(apiIdentifier, namespace),
        },
    });
};
exports.internalFindManyQuery = internalFindManyQuery;
const internalInputTypeName = (apiIdentifier, namespace) => `Internal${(0, support_js_1.namespacedGraphQLTypeName)(apiIdentifier, namespace)}Input`;
const internalCreateMutation = (apiIdentifier, namespace, record) => {
    const capitalizedApiIdentifier = (0, support_js_1.capitalizeIdentifier)(apiIdentifier);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: `InternalCreate${capitalizedApiIdentifier}`,
        fields: {
            internal: (0, support_js_1.namespacify)(namespace, {
                [`create${capitalizedApiIdentifier}`]: (0, tiny_graphql_query_compiler_1.Call)({
                    [apiIdentifier]: (0, tiny_graphql_query_compiler_1.Var)({ value: record, type: internalInputTypeName(apiIdentifier, namespace) }),
                }, {
                    success: true,
                    ...support_js_1.ErrorsSelection,
                    [apiIdentifier]: true,
                }),
            }),
            ...(0, support_js_1.hydrationSelection)(apiIdentifier, namespace),
        },
    });
};
exports.internalCreateMutation = internalCreateMutation;
const internalBulkCreateMutation = (apiIdentifier, pluralApiIdentifier, namespace, records) => {
    const capitalizedPluralApiIdentifier = (0, support_js_1.capitalizeIdentifier)(pluralApiIdentifier);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: `InternalBulkCreate${capitalizedPluralApiIdentifier}`,
        fields: {
            internal: (0, support_js_1.namespacify)(namespace, {
                [`bulkCreate${capitalizedPluralApiIdentifier}`]: (0, tiny_graphql_query_compiler_1.Call)({
                    [pluralApiIdentifier]: (0, tiny_graphql_query_compiler_1.Var)({ value: records, type: `[${internalInputTypeName(apiIdentifier, namespace)}]!` }),
                }, {
                    success: true,
                    ...support_js_1.ErrorsSelection,
                    [pluralApiIdentifier]: true,
                }),
            }),
            ...(0, support_js_1.hydrationSelection)(apiIdentifier, namespace),
        },
    });
};
exports.internalBulkCreateMutation = internalBulkCreateMutation;
const internalUpdateMutation = (apiIdentifier, namespace, id, record) => {
    const capitalizedApiIdentifier = (0, support_js_1.capitalizeIdentifier)(apiIdentifier);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: `InternalUpdate${capitalizedApiIdentifier}`,
        fields: {
            internal: (0, support_js_1.namespacify)(namespace, {
                [`update${capitalizedApiIdentifier}`]: (0, tiny_graphql_query_compiler_1.Call)({
                    id: (0, tiny_graphql_query_compiler_1.Var)({ value: id, type: "GadgetID!" }),
                    [apiIdentifier]: (0, tiny_graphql_query_compiler_1.Var)({ value: record, type: internalInputTypeName(apiIdentifier, namespace) }),
                }, {
                    success: true,
                    ...support_js_1.ErrorsSelection,
                    [apiIdentifier]: true,
                }),
            }),
            ...(0, support_js_1.hydrationSelection)(apiIdentifier, namespace),
        },
    });
};
exports.internalUpdateMutation = internalUpdateMutation;
const internalUpsertMutation = (apiIdentifier, namespace, on, record) => {
    const capitalizedApiIdentifier = (0, support_js_1.capitalizeIdentifier)(apiIdentifier);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: `InternalUpsert${capitalizedApiIdentifier}`,
        fields: {
            internal: (0, support_js_1.namespacify)(namespace, {
                [`upsert${capitalizedApiIdentifier}`]: (0, tiny_graphql_query_compiler_1.Call)({
                    on: (0, tiny_graphql_query_compiler_1.Var)({ value: on, type: "[String!]" }),
                    [apiIdentifier]: (0, tiny_graphql_query_compiler_1.Var)({ value: record, type: internalInputTypeName(apiIdentifier, namespace) }),
                }, {
                    success: true,
                    ...support_js_1.ErrorsSelection,
                    [apiIdentifier]: true,
                }),
            }),
            ...(0, support_js_1.hydrationSelection)(apiIdentifier, namespace),
        },
    });
};
exports.internalUpsertMutation = internalUpsertMutation;
const internalDeleteMutation = (apiIdentifier, namespace, id) => {
    const capitalizedApiIdentifier = (0, support_js_1.capitalizeIdentifier)(apiIdentifier);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: `InternalDelete${capitalizedApiIdentifier}`,
        fields: {
            internal: (0, support_js_1.namespacify)(namespace, {
                [`delete${capitalizedApiIdentifier}`]: (0, tiny_graphql_query_compiler_1.Call)({
                    id: (0, tiny_graphql_query_compiler_1.Var)({ value: id, type: "GadgetID!" }),
                }, {
                    success: true,
                    ...support_js_1.ErrorsSelection,
                }),
            }),
        },
    });
};
exports.internalDeleteMutation = internalDeleteMutation;
const internalDeleteManyMutation = (apiIdentifier, namespace, options) => {
    const capitalizedApiIdentifier = (0, support_js_1.capitalizeIdentifier)(apiIdentifier);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: `InternalDeleteMany${capitalizedApiIdentifier}`,
        fields: {
            internal: (0, support_js_1.namespacify)(namespace, {
                [`deleteMany${capitalizedApiIdentifier}`]: (0, tiny_graphql_query_compiler_1.Call)({
                    search: (options === null || options === void 0 ? void 0 : options.search) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.search, type: "String" }) : undefined,
                    filter: (options === null || options === void 0 ? void 0 : options.filter) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.filter, type: `[${(0, support_js_1.filterTypeName)(apiIdentifier, namespace)}!]` }) : undefined,
                }, {
                    success: true,
                    ...support_js_1.ErrorsSelection,
                }),
            }),
        },
    });
};
exports.internalDeleteManyMutation = internalDeleteManyMutation;
/**
 * Model specific manager for a given model's internal representation. Used to access the inner, raw data in the Gadget database. Use with caution -- it's easy to break stuff, and the Public API should be used when possible!
 */
class InternalModelManager {
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
        this.capitalizedApiIdentifier = (0, support_js_1.camelize)(apiIdentifier);
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
            throw new support_js_1.GadgetOperationError(`Invalid arguments found in variables. Did you mean to use ${functionName}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
        const plan = (0, exports.internalFindOneQuery)(this.apiIdentifier, id, this.namespace, formatInternalSelectVariable(options === null || options === void 0 ? void 0 : options.select));
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        const assertSuccess = throwOnEmptyData ? support_js_1.assertOperationSuccess : support_js_1.assertNullableOperationSuccess;
        const result = assertSuccess(response, this.dataPath(this.apiIdentifier));
        return (0, support_js_1.hydrateRecord)(response, result);
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
        const plan = (0, exports.internalFindManyQuery)(this.apiIdentifier, this.namespace, options);
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        const connection = (0, support_js_1.assertNullableOperationSuccess)(response, this.dataPath(`list${this.capitalizedApiIdentifier}`));
        const records = (0, support_js_1.hydrateConnection)(response, connection);
        return GadgetRecordList_js_1.GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
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
        const plan = (0, exports.internalFindFirstQuery)(this.apiIdentifier, this.namespace, options);
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        const dataPath = this.dataPath(`list${this.capitalizedApiIdentifier}`);
        let connection;
        if (throwOnEmptyData === false) {
            // If this is a nullable operation, don't throw errors on empty
            connection = (0, support_js_1.assertNullableOperationSuccess)(response, dataPath);
        }
        else {
            // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
            // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
            connection = (0, support_js_1.assertOperationSuccess)(response, dataPath, throwOnEmptyData);
        }
        const records = (0, support_js_1.hydrateConnection)(response, connection);
        const recordList = GadgetRecordList_js_1.GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
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
        const plan = (0, exports.internalCreateMutation)(this.apiIdentifier, this.namespace, this.getRecordFromData(record, "create"));
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        const result = (0, support_js_1.assertMutationSuccess)(response, this.dataPath(`create${this.capitalizedApiIdentifier}`));
        return (0, support_js_1.hydrateRecord)(response, result[this.apiIdentifier]);
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
            throw new support_js_1.GadgetClientError("Cannot perform bulkCreate without a pluralApiIdentifier");
        }
        const capitalizedPluralApiIdentifier = (0, support_js_1.capitalizeIdentifier)(this.options.pluralApiIdentifier);
        const plan = (0, exports.internalBulkCreateMutation)(this.apiIdentifier, this.options.pluralApiIdentifier, this.namespace, records);
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        const result = (0, support_js_1.assertMutationSuccess)(response, this.dataPath(`bulkCreate${capitalizedPluralApiIdentifier}`));
        return (0, support_js_1.hydrateRecordArray)(response, result[this.options.pluralApiIdentifier]);
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
        (0, support_js_1.assert)(id, `Can't update a record without an ID passed`);
        const plan = (0, exports.internalUpdateMutation)(this.apiIdentifier, this.namespace, id, this.getRecordFromData(record, "update"));
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        const result = (0, support_js_1.assertMutationSuccess)(response, this.dataPath(`update${this.capitalizedApiIdentifier}`));
        return (0, support_js_1.hydrateRecord)(response, result[this.apiIdentifier]);
    }
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
    async upsert(record) {
        const { on, ...recordData } = record;
        on && (0, support_js_1.assert)(on.length > 0, `Must specify at least one field to upsert on`);
        const plan = (0, exports.internalUpsertMutation)(this.apiIdentifier, this.namespace, on, this.getRecordFromData(recordData, "upsert"));
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        const result = (0, support_js_1.assertMutationSuccess)(response, this.dataPath(`upsert${this.capitalizedApiIdentifier}`));
        return (0, support_js_1.hydrateRecord)(response, result[this.apiIdentifier]);
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
        (0, support_js_1.assert)(id, `Can't delete a record without an ID`);
        const plan = (0, exports.internalDeleteMutation)(this.apiIdentifier, this.namespace, id);
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        (0, support_js_1.assertMutationSuccess)(response, this.dataPath(`delete${this.capitalizedApiIdentifier}`));
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
        const plan = (0, exports.internalDeleteManyMutation)(this.apiIdentifier, this.namespace, options);
        const response = await this.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
        (0, support_js_1.assertMutationSuccess)(response, this.dataPath(`deleteMany${this.capitalizedApiIdentifier}`));
    }
    dataPath(dataPath) {
        return ["internal", ...(0, support_js_1.namespaceDataPath)([dataPath], this.namespace)];
    }
}
exports.InternalModelManager = InternalModelManager;
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