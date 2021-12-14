"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalActionOperation = exports.actionOperation = exports.findManyOperation = exports.findOneByFieldOperation = exports.findOneOperation = void 0;
const gql_query_builder_1 = require("gql-query-builder");
const _1 = require(".");
const hydrationOptions = (modelApiIdentifier) => {
    return {
        operation: "gadgetMeta",
        fields: [`hydrations(modelName: "${modelApiIdentifier}")`],
    };
};
const findOneOperation = (operation, id, defaultSelection, modelApiIdentifier, options) => {
    const variables = {};
    if (typeof id !== "undefined")
        variables.id = { type: "GadgetID", required: true, value: id };
    return (0, gql_query_builder_1.query)([
        {
            operation,
            fields: (0, _1.fieldSelectionToGQLBuilderFields)(options?.select || defaultSelection, true),
            variables,
        },
        hydrationOptions(modelApiIdentifier),
    ]);
};
exports.findOneOperation = findOneOperation;
const findOneByFieldOperation = (operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options) => {
    return (0, exports.findManyOperation)(operation, defaultSelection, modelApiIdentifier, {
        select: options?.select,
        first: 2,
        filter: {
            [fieldName]: {
                equals: fieldValue,
            },
        },
    });
};
exports.findOneByFieldOperation = findOneByFieldOperation;
const findManyOperation = (operation, defaultSelection, modelApiIdentifier, options) => {
    return (0, gql_query_builder_1.query)([
        {
            operation,
            fields: [
                {
                    pageInfo: ["hasNextPage", "hasPreviousPage", "startCursor", "endCursor"],
                },
                {
                    edges: ["cursor", { node: (0, _1.fieldSelectionToGQLBuilderFields)(options?.select || defaultSelection, true) }],
                },
            ],
            variables: {
                after: { value: options?.after, type: "String", required: false },
                first: { value: options?.first, type: "Int", required: false },
                before: { value: options?.before, type: "String", required: false },
                last: { value: options?.last, type: "Int", required: false },
                sort: { value: options?.sort, type: (0, _1.sortTypeName)(modelApiIdentifier) + "!", list: true },
                filter: { value: options?.filter, type: (0, _1.filterTypeName)(modelApiIdentifier) + "!", list: true },
                search: { value: options?.search, type: "String", required: false },
            },
        },
        hydrationOptions(modelApiIdentifier),
    ]);
};
exports.findManyOperation = findManyOperation;
const actionOperation = (operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace) => {
    let actionOperation = {
        operation,
        fields: [
            "success",
            { errors: ["message", "code", { "... on InvalidRecordError": [{ validationErrors: ["message", "apiIdentifier"] }] }] },
        ],
        variables,
    };
    const selection = options?.select || defaultSelection;
    if (selection) {
        actionOperation.fields.push({ [modelSelectionField]: (0, _1.fieldSelectionToGQLBuilderFields)(selection, true) });
    }
    if (namespace) {
        actionOperation = {
            operation: namespace,
            fields: [actionOperation],
        };
    }
    return (0, gql_query_builder_1.mutation)([actionOperation, hydrationOptions(modelApiIdentifier)]);
};
exports.actionOperation = actionOperation;
const globalActionOperation = (operation, variables, namespace) => {
    let actionOperation = {
        operation,
        fields: [
            "success",
            { errors: ["message", "code", { "... on InvalidRecordError": [{ validationErrors: ["message", "apiIdentifier"] }] }] },
            "result",
        ],
        variables,
    };
    const dataPath = [operation];
    if (namespace) {
        actionOperation = {
            operation: namespace,
            fields: [actionOperation],
        };
        dataPath.unshift(namespace);
    }
    return (0, gql_query_builder_1.mutation)([actionOperation]);
};
exports.globalActionOperation = globalActionOperation;
//# sourceMappingURL=operationBuilders.js.map