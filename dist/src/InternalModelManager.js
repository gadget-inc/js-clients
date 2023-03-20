"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalModelManager = exports.internalDeleteManyMutation = exports.internalDeleteMutation = exports.internalUpdateMutation = exports.internalCreateMutation = exports.internalFindManyQuery = exports.internalFindFirstQuery = exports.internalFindOneQuery = void 0;
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
    const capitalizedApiIdentifier = (0, support_1.capitalize)(apiIdentifier);
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
const internalFindFirstQuery = (apiIdentifier, options) => {
    const capitalizedApiIdentifier = (0, support_1.capitalize)(apiIdentifier);
    const defaultVariables = {
        ...((options === null || options === void 0 ? void 0 : options.search) && { search: { value: options === null || options === void 0 ? void 0 : options.search, type: "String", required: false } }),
        ...((options === null || options === void 0 ? void 0 : options.sort) && { sort: { value: options === null || options === void 0 ? void 0 : options.sort, type: `${capitalizedApiIdentifier}Sort!`, list: true } }),
        ...((options === null || options === void 0 ? void 0 : options.filter) && { filter: { value: options === null || options === void 0 ? void 0 : options.filter, type: `${capitalizedApiIdentifier}Filter!`, list: true } }),
        ...((options === null || options === void 0 ? void 0 : options.select) && { select: { value: options === null || options === void 0 ? void 0 : options.select, type: `String!`, list: true } }),
    };
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
    const capitalizedApiIdentifier = (0, support_1.capitalize)(apiIdentifier);
    const defaultVariables = {
        ...((options === null || options === void 0 ? void 0 : options.search) && { search: { value: options === null || options === void 0 ? void 0 : options.search, type: "String", required: false } }),
        ...((options === null || options === void 0 ? void 0 : options.sort) && { sort: { value: options === null || options === void 0 ? void 0 : options.sort, type: `${capitalizedApiIdentifier}Sort!`, list: true } }),
        ...((options === null || options === void 0 ? void 0 : options.filter) && { filter: { value: options === null || options === void 0 ? void 0 : options.filter, type: `${capitalizedApiIdentifier}Filter!`, list: true } }),
        ...((options === null || options === void 0 ? void 0 : options.select) && { select: { value: options === null || options === void 0 ? void 0 : options.select, type: `String!`, list: true } }),
    };
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
    const capitalizedApiIdentifier = (0, support_1.capitalize)(apiIdentifier);
    return `
    ${internalErrorsDetails}
    
    mutation InternalCreate${capitalizedApiIdentifier}($record: Internal${capitalizedApiIdentifier}Input, $select: [String!]) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        create${capitalizedApiIdentifier}(${apiIdentifier}: $record, select: $select) {
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
const internalUpdateMutation = (apiIdentifier) => {
    const capitalizedApiIdentifier = (0, support_1.capitalize)(apiIdentifier);
    return `
    ${internalErrorsDetails}
    
    mutation InternalUpdate${capitalizedApiIdentifier}($id: GadgetID!, $record: Internal${capitalizedApiIdentifier}Input, $select: [String!]) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        update${capitalizedApiIdentifier}(id: $id, ${apiIdentifier}: $record, select: $select) {
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
    const capitalizedApiIdentifier = (0, support_1.capitalize)(apiIdentifier);
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
    const capitalizedApiIdentifier = (0, support_1.capitalize)(apiIdentifier);
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
    constructor(apiIdentifier, connection) {
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
        Object.defineProperty(this, "capitalizedApiIdentifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.capitalizedApiIdentifier = (0, support_1.camelize)(apiIdentifier);
    }
    async findOne(id, option) {
        var _a;
        const options = typeof option === "boolean" ? { throwOnEmptyData: option } : option !== null && option !== void 0 ? option : {};
        (_a = options.throwOnEmptyData) !== null && _a !== void 0 ? _a : (options.throwOnEmptyData = true);
        const response = await this.connection.currentClient
            .query((0, exports.internalFindOneQuery)(this.apiIdentifier), { id, select: options.select })
            .toPromise();
        const assertSuccess = options.throwOnEmptyData ? support_1.assertOperationSuccess : support_1.assertNullableOperationSuccess;
        const result = assertSuccess(response, ["internal", this.apiIdentifier]);
        return await (0, support_1.hydrateRecord)(response, result);
    }
    /**
     * Find one record from the backend internal API. Returns null if the record can't be found.
     *
     * @param id the id of the record to find
     * @param options Options for the find. Optional.
     */
    async maybeFindOne(id, options) {
        const record = await this.findOne(id, options);
        return record.isEmpty() ? null : record;
    }
    /**
     * Find a list of records from the backend internal API.
     *
     * @param options Options for the find. Optional.
     */
    async findMany(options) {
        const plan = (0, exports.internalFindManyQuery)(this.apiIdentifier, options);
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        const connection = (0, support_1.assertNullableOperationSuccess)(response, ["internal", `list${this.capitalizedApiIdentifier}`]);
        const records = (0, support_1.hydrateConnection)(response, connection);
        return GadgetRecordList_1.GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
    }
    /**
     * Find the first record from the backend that matches the given options using the Internal API. Throws if no record can be found.
     *
     * @param options Options for the find. Optional.
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
     * Find the first record from the backend that matches the given options using the Internal API. Returns null if no record can be found
     *
     * @param options Options for the find. Optional.
     */
    async maybeFindFirst(options) {
        return await this.findFirst(options, false);
    }
    /**
     * Creates a new record for this model using the Internal API.
     *
     * __Note__: This won't call the `create` action on the backend model as it uses the Internal API. Use the Public API if you want to call actions. See the Gadget docs for more on the differences between the Public API and the Internal API.
     *
     * @param record Raw record data to apply to the record.
     */
    async create(record) {
        return await this.transaction(async (transaction) => {
            const response = await transaction.client
                .mutation((0, exports.internalCreateMutation)(this.apiIdentifier), {
                record: record[this.apiIdentifier],
            })
                .toPromise();
            const result = (0, support_1.assertMutationSuccess)(response, ["internal", `create${this.capitalizedApiIdentifier}`]);
            return await (0, support_1.hydrateRecord)(response, result[this.apiIdentifier]);
        });
    }
    /**
     * Updates a given record with the given data using the Internal API.
     *
     * __Note__: This won't call the `update` action on the backend model as it uses the Internal API. Use the Public API if you want to call actions. See the Gadget docs for more on the differences between the Public API and the Internal API.
     *
     * @param id The id of the record to update
     * @param record Raw record data to apply to the record.
     */
    async update(id, record) {
        (0, support_1.assert)(id, `Can't update a record without an ID passed`);
        return await this.transaction(async (transaction) => {
            const response = await transaction.client
                .mutation((0, exports.internalUpdateMutation)(this.apiIdentifier), {
                id,
                record: record[this.apiIdentifier],
            })
                .toPromise();
            const result = (0, support_1.assertMutationSuccess)(response, ["internal", `update${this.capitalizedApiIdentifier}`]);
            return await (0, support_1.hydrateRecord)(response, result[this.apiIdentifier]);
        });
    }
    /**
     * Deletes a record by id from the backend database using the Internal API
     *
     * __Note__: This won't call the `delete` action on the backend model as it uses the Internal API. Use the Public API if you want to call actions. See the Gadget docs for more on the differences between the Public API and the Internal API.
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
     * Deletes all the records matching the given filter conditions from the backend database using the internal API
     *
     * __Note__: This won't call the `delete` action on the backend model as it uses the Internal API. Use the Public API if you want to call actions. See the Gadget docs for more on the differences between the Public API and the Internal API.
     *
     * @param id The id of the record to delete
     */
    async deleteMany(options) {
        return await this.transaction(async (transaction) => {
            const response = await transaction.client.mutation((0, exports.internalDeleteManyMutation)(this.apiIdentifier), options).toPromise();
            (0, support_1.assertMutationSuccess)(response, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
        });
    }
    /**
     * Starts or continues a transaction against the backend API.
     */
    async transaction(callback) {
        return await this.connection.transaction(callback);
    }
}
exports.InternalModelManager = InternalModelManager;
//# sourceMappingURL=InternalModelManager.js.map