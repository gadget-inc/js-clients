import { Call, Var, compileWithVariableValues } from "tiny-graphql-query-compiler";
import { GadgetRecordList } from "./GadgetRecordList.js";
import { GadgetClientError, GadgetOperationError, assert, assertMutationSuccess, assertNullableOperationSuccess, assertOperationSuccess, camelize, capitalizeIdentifier, hydrateConnection, hydrateRecord, hydrateRecordArray, } from "./support.js";
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
export const internalFindOneQuery = (apiIdentifier) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    return `
    query InternalFind${capitalizedApiIdentifier}($id: GadgetID!, $select: [String!]) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        ${apiIdentifier}(id: $id, select: $select)
      }
    }
    `;
};
const internalFindListVariables = (capitalizedApiIdentifier, options) => {
    return {
        search: (options === null || options === void 0 ? void 0 : options.search) ? Var({ value: options === null || options === void 0 ? void 0 : options.search, type: "String" }) : undefined,
        sort: (options === null || options === void 0 ? void 0 : options.sort) ? Var({ value: options === null || options === void 0 ? void 0 : options.sort, type: `[${capitalizedApiIdentifier}Sort!]` }) : undefined,
        filter: (options === null || options === void 0 ? void 0 : options.filter) ? Var({ value: options === null || options === void 0 ? void 0 : options.filter, type: `[${capitalizedApiIdentifier}Filter!]` }) : undefined,
        select: (options === null || options === void 0 ? void 0 : options.select) ? Var({ value: formatInternalSelectVariable(options === null || options === void 0 ? void 0 : options.select), type: `[String!]` }) : undefined,
    };
};
export const internalFindFirstQuery = (apiIdentifier, options) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, options);
    return compileWithVariableValues({
        type: "query",
        name: `InternalFindFirst${capitalizedApiIdentifier}`,
        fields: {
            internal: {
                [`list${capitalizedApiIdentifier}`]: Call({
                    ...defaultVariables,
                    first: Var({ value: 1, type: "Int" }),
                }, {
                    edges: {
                        node: true,
                    },
                }),
            },
        },
    });
};
export const internalFindManyQuery = (apiIdentifier, options) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    const defaultVariables = internalFindListVariables(capitalizedApiIdentifier, options);
    return compileWithVariableValues({
        type: "query",
        name: `InternalFindMany${capitalizedApiIdentifier}`,
        fields: {
            internal: {
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
            },
        },
    });
};
export const internalCreateMutation = (apiIdentifier) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
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
export const internalBulkCreateMutation = (apiIdentifier, pluralApiIdentifier) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
    const capitalizedPluralApiIdentifier = capitalizeIdentifier(pluralApiIdentifier);
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
export const internalUpdateMutation = (apiIdentifier) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
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
export const internalDeleteMutation = (apiIdentifier) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
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
export const internalDeleteManyMutation = (apiIdentifier) => {
    const capitalizedApiIdentifier = capitalizeIdentifier(apiIdentifier);
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
        this.capitalizedApiIdentifier = camelize(apiIdentifier);
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
        const response = await this.connection.currentClient
            .query(internalFindOneQuery(this.apiIdentifier), { id, select: formatInternalSelectVariable(options === null || options === void 0 ? void 0 : options.select) })
            .toPromise();
        const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
        const result = assertSuccess(response, ["internal", this.apiIdentifier]);
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
        const plan = internalFindManyQuery(this.apiIdentifier, options);
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        const connection = assertNullableOperationSuccess(response, ["internal", `list${this.capitalizedApiIdentifier}`]);
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
        const plan = internalFindFirstQuery(this.apiIdentifier, options);
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        let connection;
        if (throwOnEmptyData === false) {
            // If this is a nullable operation, don't throw errors on empty
            connection = assertNullableOperationSuccess(response, ["internal", `list${this.capitalizedApiIdentifier}`]);
        }
        else {
            // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
            // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
            connection = assertOperationSuccess(response, ["internal", `list${this.capitalizedApiIdentifier}`], throwOnEmptyData);
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
        const response = await this.connection.currentClient
            .mutation(internalCreateMutation(this.apiIdentifier), {
            record: this.getRecordFromData(record, "create"),
        })
            .toPromise();
        const result = assertMutationSuccess(response, ["internal", `create${this.capitalizedApiIdentifier}`]);
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
        const response = await this.connection.currentClient
            .mutation(internalBulkCreateMutation(this.apiIdentifier, this.options.pluralApiIdentifier), {
            records,
        })
            .toPromise();
        const result = assertMutationSuccess(response, ["internal", `bulkCreate${capitalizedPluralApiIdentifier}`]);
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
        const response = await this.connection.currentClient
            .mutation(internalUpdateMutation(this.apiIdentifier), {
            id,
            record: this.getRecordFromData(record, "update"),
        })
            .toPromise();
        const result = assertMutationSuccess(response, ["internal", `update${this.capitalizedApiIdentifier}`]);
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
        const response = await this.connection.currentClient.mutation(internalDeleteMutation(this.apiIdentifier), { id }).toPromise();
        assertMutationSuccess(response, ["internal", `delete${this.capitalizedApiIdentifier}`]);
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
        const response = await this.connection.currentClient.mutation(internalDeleteManyMutation(this.apiIdentifier), options).toPromise();
        assertMutationSuccess(response, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
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