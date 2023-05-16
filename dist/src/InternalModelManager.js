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
    query InternalFind${capitalizedApiIdentifier}($id: GadgetID!) {
      ${internalHydrationPlan(apiIdentifier)}
      internal {
        ${apiIdentifier}(id: $id)
      }
    }
    `;
};
exports.internalFindOneQuery = internalFindOneQuery;
const internalFindFirstQuery = (apiIdentifier, options) => {
    const capitalizedApiIdentifier = (0, support_1.capitalizeIdentifier)(apiIdentifier);
    const defaultVariables = {
        ...((options === null || options === void 0 ? void 0 : options.search) && { search: { value: options === null || options === void 0 ? void 0 : options.search, type: "String", required: false } }),
        ...((options === null || options === void 0 ? void 0 : options.sort) && { sort: { value: options === null || options === void 0 ? void 0 : options.sort, type: `${capitalizedApiIdentifier}Sort!`, list: true } }),
        ...((options === null || options === void 0 ? void 0 : options.filter) && { filter: { value: options === null || options === void 0 ? void 0 : options.filter, type: `${capitalizedApiIdentifier}Filter!`, list: true } }),
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
    const capitalizedApiIdentifier = (0, support_1.capitalizeIdentifier)(apiIdentifier);
    const defaultVariables = {
        ...((options === null || options === void 0 ? void 0 : options.search) && { search: { value: options === null || options === void 0 ? void 0 : options.search, type: "String", required: false } }),
        ...((options === null || options === void 0 ? void 0 : options.sort) && { sort: { value: options === null || options === void 0 ? void 0 : options.sort, type: `${capitalizedApiIdentifier}Sort!`, list: true } }),
        ...((options === null || options === void 0 ? void 0 : options.filter) && { filter: { value: options === null || options === void 0 ? void 0 : options.filter, type: `${capitalizedApiIdentifier}Filter!`, list: true } }),
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
    async findOne(id, throwOnEmptyData = true) {
        const response = await this.connection.currentClient.query((0, exports.internalFindOneQuery)(this.apiIdentifier), { id }).toPromise();
        const assertSuccess = throwOnEmptyData ? support_1.assertOperationSuccess : support_1.assertNullableOperationSuccess;
        const result = assertSuccess(response, ["internal", this.apiIdentifier]);
        return (0, support_1.hydrateRecord)(response, result);
    }
    async maybeFindOne(id) {
        const record = await this.findOne(id, false);
        return record.isEmpty() ? null : record;
    }
    async findMany(options) {
        const plan = (0, exports.internalFindManyQuery)(this.apiIdentifier, options);
        const response = await this.connection.currentClient.query(plan.query, plan.variables).toPromise();
        const connection = (0, support_1.assertNullableOperationSuccess)(response, ["internal", `list${this.capitalizedApiIdentifier}`]);
        const records = (0, support_1.hydrateConnection)(response, connection);
        return GadgetRecordList_1.GadgetRecordList.boot(this, records, { options, pageInfo: connection.pageInfo });
    }
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
    async maybeFindFirst(options) {
        return await this.findFirst(options, false);
    }
    async create(record) {
        return await this.transaction(async (transaction) => {
            const response = await transaction.client
                .mutation((0, exports.internalCreateMutation)(this.apiIdentifier), {
                record: record[this.apiIdentifier],
            })
                .toPromise();
            const result = (0, support_1.assertMutationSuccess)(response, ["internal", `create${this.capitalizedApiIdentifier}`]);
            return (0, support_1.hydrateRecord)(response, result[this.apiIdentifier]);
        });
    }
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
            return (0, support_1.hydrateRecord)(response, result[this.apiIdentifier]);
        });
    }
    async delete(id) {
        (0, support_1.assert)(id, `Can't delete a record without an ID`);
        return await this.transaction(async (transaction) => {
            const response = await transaction.client.mutation((0, exports.internalDeleteMutation)(this.apiIdentifier), { id }).toPromise();
            (0, support_1.assertMutationSuccess)(response, ["internal", `delete${this.capitalizedApiIdentifier}`]);
        });
    }
    async deleteMany(options) {
        return await this.transaction(async (transaction) => {
            const response = await transaction.client.mutation((0, exports.internalDeleteManyMutation)(this.apiIdentifier), options).toPromise();
            (0, support_1.assertMutationSuccess)(response, ["internal", `deleteMany${this.capitalizedApiIdentifier}`]);
        });
    }
    async transaction(callback) {
        return await this.connection.transaction(callback);
    }
}
exports.InternalModelManager = InternalModelManager;
//# sourceMappingURL=InternalModelManager.js.map