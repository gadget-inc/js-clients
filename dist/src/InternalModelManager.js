"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalModelManager = exports.internalDeleteManyMutation = exports.internalDeleteMutation = exports.internalUpdateMutation = exports.internalBulkCreateMutation = exports.internalCreateMutation = exports.internalFindManyQuery = exports.internalFindFirstQuery = exports.internalFindOneQuery = void 0;
const gql_query_builder_1 = require("gql-query-builder");
const GadgetRecordList_1 = require("./GadgetRecordList");
const support_1 = require("./support");
const internalErrorsDetails = `
fragment InternalErrorsDetails on ExecutionError {
  code
  message
  ...on InvalidRecordError {
    validationErrors {
      apiIdentifier
      message
    }
    model {
      apiIdentifier
    }
    record
  }
}
`;
const internalHydrationPlan = (modelApiIdentifer) => `
  gadgetMeta {
    hydrations(modelName: "${modelApiIdentifer}")
  }
`;
const internalFindOneQuery = (apiIdentifier) => {
    const capitalizedApiIdentifier = (0, support_1.capitalizeIdentifier)(apiIdentifier);
    return `
    query InternalFind${capitalizedApiIdentifier}($id: GadgetID!, $select: [String!]) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        ${apiIdentifier}(id: $id, select: $select)
      }
    }
    `;
};
exports.internalFindOneQuery = internalFindOneQuery;
const internalFindListVariables = (capitalizedApiIdentifier, options) => {
    return {
        ...((options === null || options === void 0 ? void 0 : options.search) && { search: { value: options === null || options === void 0 ? void 0 : options.search, type: "String", required: false } }),
        ...((options === null || options === void 0 ? void 0 : options.sort) && { sort: { value: options === null || options === void 0 ? void 0 : options.sort, type: `${capitalizedApiIdentifier}Sort!`, list: true } }),
        ...((options === null || options === void 0 ? void 0 : options.filter) && { filter: { value: options === null || options === void 0 ? void 0 : options.filter, type: `${capitalizedApiIdentifier}Filter!`, list: true } }),
        ...((options === null || options === void 0 ? void 0 : options.select) && { select: { value: formatInternalSelectVariable(options === null || options === void 0 ? void 0 : options.select), type: `String!`, list: true } }),
    };
};
const internalFindFirstQuery = (apiIdentifier, options) => {
    const capitalizedApiIdentifier = (0, support_1.capitalizeIdentifier)(apiIdentifier);
    const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, options);
    return (0, gql_query_builder_1.query)([
        {
            operation: "internal",
            fields: [
                {
                    operation: `list${capitalizedApiIdentifier}`,
                    fields: [
                        {
                            edges: ["node"],
                        },
                    ],
                    variables: {
                        ...defaultVariables,
                        first: { value: 1, type: "Int" },
                    },
                },
            ],
        },
    ], null, { operationName: `InternalFindFirst${capitalizedApiIdentifier}` });
};
exports.internalFindFirstQuery = internalFindFirstQuery;
const internalFindManyQuery = (apiIdentifier, options) => {
    const capitalizedApiIdentifier = (0, support_1.capitalizeIdentifier)(apiIdentifier);
    const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, options);
    return (0, gql_query_builder_1.query)([
        {
            operation: "internal",
            fields: [
                {
                    operation: `list${capitalizedApiIdentifier}`,
                    fields: [
                        {
                            pageInfo: ["hasNextPage", "hasPreviousPage", "startCursor", "endCursor"],
                        },
                        {
                            edges: ["cursor", "node"],
                        },
                    ],
                    variables: {
                        ...defaultVariables,
                        after: { value: options === null || options === void 0 ? void 0 : options.after, type: "String" },
                        before: { value: options === null || options === void 0 ? void 0 : options.before, type: "String" },
                        first: { value: options === null || options === void 0 ? void 0 : options.first, type: "Int" },
                        last: { value: options === null || options === void 0 ? void 0 : options.last, type: "Int" },
                    },
                },
            ],
        },
    ], null, { operationName: `InternalFindMany${capitalizedApiIdentifier}` });
};
exports.internalFindManyQuery = internalFindManyQuery;
const internalCreateMutation = (apiIdentifier) => {
    const capitalizedApiIdentifier = (0, support_1.capitalizeIdentifier)(apiIdentifier);
    return `
    ${internalErrorsDetails}

    mutation InternalCreate${capitalizedApiIdentifier}($record: Internal${capitalizedApiIdentifier}Input) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        create${capitalizedApiIdentifier}(${apiIdentifier}: $record) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${apiIdentifier}
        }
      }
    }
  `;
};
exports.internalCreateMutation = internalCreateMutation;
const internalBulkCreateMutation = (apiIdentifier, pluralApiIdentifier) => {
    const capitalizedApiIdentifier = (0, support_1.capitalizeIdentifier)(apiIdentifier);
    const capitalizedPluralApiIdentifier = (0, support_1.capitalizeIdentifier)(pluralApiIdentifier);
    return `
    ${internalErrorsDetails}

    mutation InternalBulkCreate${capitalizedPluralApiIdentifier}($records: [Internal${capitalizedApiIdentifier}Input]!) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        bulkCreate${capitalizedPluralApiIdentifier}(${pluralApiIdentifier}: $records) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${pluralApiIdentifier}
        }
      }
    }
  `;
};
exports.internalBulkCreateMutation = internalBulkCreateMutation;
const internalUpdateMutation = (apiIdentifier) => {
    const capitalizedApiIdentifier = (0, support_1.capitalizeIdentifier)(apiIdentifier);
    return `
    ${internalErrorsDetails}

    mutation InternalUpdate${capitalizedApiIdentifier}($id: GadgetID!, $record: Internal${capitalizedApiIdentifier}Input) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        update${capitalizedApiIdentifier}(id: $id, ${apiIdentifier}: $record) {
          success
          errors {
            ... InternalErrorsDetails
          }
          ${apiIdentifier}
        }
      }
    }
  `;
};
exports.internalUpdateMutation = internalUpdateMutation;
const internalDeleteMutation = (apiIdentifier) => {
    const capitalizedApiIdentifier = (0, support_1.capitalizeIdentifier)(apiIdentifier);
    return `
    ${internalErrorsDetails}

    mutation InternalDelete${capitalizedApiIdentifier}($id: GadgetID!) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        delete${capitalizedApiIdentifier}(id: $id) {
          success
          errors {
            ... InternalErrorsDetails
          }
        }
      }
    }
  `;
};
exports.internalDeleteMutation = internalDeleteMutation;
const internalDeleteManyMutation = (apiIdentifier) => {
    const capitalizedApiIdentifier = (0, support_1.capitalizeIdentifier)(apiIdentifier);
    return `
    ${internalErrorsDetails}

    mutation InternalDeleteMany${capitalizedApiIdentifier}(
      $search: String
      $filter: [${capitalizedApiIdentifier}Filter!]
    ) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        deleteMany${capitalizedApiIdentifier}(search: $search, filter: $filter) {
          success
          errors {
            ... InternalErrorsDetails
          }
        }
      }
    }
  `;
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
        this.capitalizedApiIdentifier = (0, support_1.camelize)(apiIdentifier);
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
            throw new support_1.GadgetOperationError(`Invalid arguments found in variables. Did you mean to use ${functionName}({ ${this.apiIdentifier}: { ... } })?`, "GGT_INVALID_RECORD_DATA");
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
        const response = await this.connection.currentClient
            .query((0, exports.internalFindOneQuery)(this.apiIdentifier), { id, select: formatInternalSelectVariable(options === null || options === void 0 ? void 0 : options.select) })
            .toPromise();
        const assertSuccess = throwOnEmptyData ? support_1.assertOperationSuccess : support_1.assertNullableOperationSuccess;
        const result = assertSuccess(response, ["internal", this.apiIdentifier]);
        return (0, support_1.hydrateRecord)(response, result);
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
        const plan = (0, exports.internalFindManyQuery)(this.apiIdentifier, options);
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        const connection = (0, support_1.assertNullableOperationSuccess)(response, ["internal", `list${this.capitalizedApiIdentifier}`]);
        const records = (0, support_1.hydrateConnection)(response, connection);
        return GadgetRecordList_1.GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
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
        const plan = (0, exports.internalFindFirstQuery)(this.apiIdentifier, options);
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        let connection;
        if (throwOnEmptyData === false) {
            // If this is a nullable operation, don't throw errors on empty
            connection = (0, support_1.assertNullableOperationSuccess)(response, ["internal", `list${this.capitalizedApiIdentifier}`]);
        }
        else {
            // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
            // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
            connection = (0, support_1.assertOperationSuccess)(response, ["internal", `list${this.capitalizedApiIdentifier}`], throwOnEmptyData);
        }
        const records = (0, support_1.hydrateConnection)(response, connection);
        const recordList = GadgetRecordList_1.GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
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
        return await this.transaction(async (transaction) => {
            const response = await transaction.client
                .mutation((0, exports.internalCreateMutation)(this.apiIdentifier), {
                record: this.getRecordFromData(record, "create"),
            })
                .toPromise();
            const result = (0, support_1.assertMutationSuccess)(response, ["internal", `create${this.capitalizedApiIdentifier}`]);
            return (0, support_1.hydrateRecord)(response, result[this.apiIdentifier]);
        });
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
        return await this.transaction(async (transaction) => {
            var _a;
            if (!((_a = this.options) === null || _a === void 0 ? void 0 : _a.pluralApiIdentifier)) {
                throw new support_1.GadgetClientError("Cannot perform bulkCreate without a pluralApiIdentifier");
            }
            const capitalizedPluralApiIdentifier = (0, support_1.capitalizeIdentifier)(this.options.pluralApiIdentifier);
            const response = await transaction.client
                .mutation((0, exports.internalBulkCreateMutation)(this.apiIdentifier, this.options.pluralApiIdentifier), {
                records,
            })
                .toPromise();
            const result = (0, support_1.assertMutationSuccess)(response, ["internal", `bulkCreate${capitalizedPluralApiIdentifier}`]);
            return (0, support_1.hydrateRecordArray)(response, result[this.options.pluralApiIdentifier]);
        });
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
        (0, support_1.assert)(id, `Can't update a record without an ID passed`);
        return await this.transaction(async (transaction) => {
            const response = await transaction.client
                .mutation((0, exports.internalUpdateMutation)(this.apiIdentifier), {
                id,
                record: this.getRecordFromData(record, "update"),
            })
                .toPromise();
            const result = (0, support_1.assertMutationSuccess)(response, ["internal", `update${this.capitalizedApiIdentifier}`]);
            return (0, support_1.hydrateRecord)(response, result[this.apiIdentifier]);
        });
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
        (0, support_1.assert)(id, `Can't delete a record without an ID`);
        return await this.transaction(async (transaction) => {
            const response = await transaction.client.mutation((0, exports.internalDeleteMutation)(this.apiIdentifier), { id }).toPromise();
            (0, support_1.assertMutationSuccess)(response, ["internal", `delete${this.capitalizedApiIdentifier}`]);
        });
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
        return await this.transaction(async (transaction) => {
            const response = await transaction.client.mutation((0, exports.internalDeleteManyMutation)(this.apiIdentifier), options).toPromise();
            (0, support_1.assertMutationSuccess)(response, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
        });
    }
    /** @private */
    async transaction(callback) {
        return await this.connection.transaction(callback);
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