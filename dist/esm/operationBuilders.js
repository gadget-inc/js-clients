import { mutation, query } from "gql-query-builder";
import { fieldSelectionToGQLBuilderFields } from "./FieldSelection.js";
import { filterTypeName, sortTypeName } from "./support.js";
const hydrationOptions = (modelApiIdentifier) => {
    return {
        operation: "gadgetMeta",
        fields: [`hydrations(modelName: "${modelApiIdentifier}")`],
    };
};
export const findOneOperation = (operation, id, defaultSelection, modelApiIdentifier, options) => {
    const variables = {};
    if (typeof id !== "undefined")
        variables.id = { type: "GadgetID", required: true, value: id };
    return query([
        {
            operation,
            fields: fieldSelectionToGQLBuilderFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true),
            variables,
        },
        hydrationOptions(modelApiIdentifier),
    ]);
};
export const findOneByFieldOperation = (operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options) => {
    return findManyOperation(operation, defaultSelection, modelApiIdentifier, {
        select: options === null || options === void 0 ? void 0 : options.select,
        first: 2,
        filter: {
            [fieldName]: {
                equals: fieldValue,
            },
        },
    });
};
export const findManyOperation = (operation, defaultSelection, modelApiIdentifier, options) => {
    return query([
        {
            operation,
            fields: [
                {
                    pageInfo: ["hasNextPage", "hasPreviousPage", "startCursor", "endCursor"],
                },
                {
                    edges: ["cursor", { node: fieldSelectionToGQLBuilderFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true) }],
                },
            ],
            variables: {
                after: { value: options === null || options === void 0 ? void 0 : options.after, type: "String", required: false },
                first: { value: options === null || options === void 0 ? void 0 : options.first, type: "Int", required: false },
                before: { value: options === null || options === void 0 ? void 0 : options.before, type: "String", required: false },
                last: { value: options === null || options === void 0 ? void 0 : options.last, type: "Int", required: false },
                ...((options === null || options === void 0 ? void 0 : options.sort) && { sort: { value: options === null || options === void 0 ? void 0 : options.sort, type: sortTypeName(modelApiIdentifier) + "!", list: true } }),
                ...((options === null || options === void 0 ? void 0 : options.filter) && { filter: { value: options === null || options === void 0 ? void 0 : options.filter, type: filterTypeName(modelApiIdentifier) + "!", list: true } }),
                ...((options === null || options === void 0 ? void 0 : options.search) && { search: { value: options === null || options === void 0 ? void 0 : options.search, type: "String", required: false } }),
            },
        },
        hydrationOptions(modelApiIdentifier),
    ]);
};
export const actionOperation = (operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace) => {
    let actionOperation = {
        operation,
        fields: [
            "success",
            { errors: ["message", "code", { "... on InvalidRecordError": [{ validationErrors: ["message", "apiIdentifier"] }] }] },
        ],
        variables,
    };
    const selection = (options === null || options === void 0 ? void 0 : options.select) || defaultSelection;
    if (selection) {
        actionOperation.fields.push({ [modelSelectionField]: fieldSelectionToGQLBuilderFields(selection, true) });
    }
    if (namespace) {
        actionOperation = {
            operation: namespace,
            fields: [actionOperation],
        };
    }
    return mutation([actionOperation, hydrationOptions(modelApiIdentifier)]);
};
export const globalActionOperation = (operation, variables, namespace) => {
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
    return mutation([actionOperation]);
};
//# sourceMappingURL=operationBuilders.js.map