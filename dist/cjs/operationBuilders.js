"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalActionOperation = exports.actionOperation = exports.findManyOperation = exports.findOneByFieldOperation = exports.findOneOperation = void 0;
const tiny_graphql_query_compiler_1 = require("tiny-graphql-query-compiler");
const support_js_1 = require("./support.js");
const hydrationOptions = (modelApiIdentifier) => {
    return {
        gadgetMeta: {
            [`hydrations(modelName: "${modelApiIdentifier}")`]: true,
        },
    };
};
/**
 * Converts Selection nested object format to the tiny-graphql-query-compiler shape
 **/
const fieldSelectionToQueryCompilerFields = (selection, includeTypename = false) => {
    const output = { ...selection };
    if (includeTypename)
        output.__typename = true;
    return output;
};
const directivesForOptions = (options) => {
    if (options === null || options === void 0 ? void 0 : options.live)
        return ["@live"];
    return undefined;
};
const findOneOperation = (operation, id, defaultSelection, modelApiIdentifier, options) => {
    const variables = {};
    if (typeof id !== "undefined")
        variables.id = (0, tiny_graphql_query_compiler_1.Var)({ type: "GadgetID!", value: id });
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "query",
        name: operation,
        fields: {
            [operation]: (0, tiny_graphql_query_compiler_1.Call)(variables, fieldSelectionToQueryCompilerFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true)),
            ...hydrationOptions(modelApiIdentifier),
        },
        directives: directivesForOptions(options),
    });
};
exports.findOneOperation = findOneOperation;
const findOneByFieldOperation = (operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options) => {
    return (0, exports.findManyOperation)(operation, defaultSelection, modelApiIdentifier, {
        ...options,
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
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "query",
        name: operation,
        fields: {
            [operation]: (0, tiny_graphql_query_compiler_1.Call)({
                after: (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.after, type: "String" }),
                first: (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.first, type: "Int" }),
                before: (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.before, type: "String" }),
                last: (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.last, type: "Int" }),
                sort: (options === null || options === void 0 ? void 0 : options.sort) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options.sort, type: `[${(0, support_js_1.sortTypeName)(modelApiIdentifier)}!]` }) : undefined,
                filter: (options === null || options === void 0 ? void 0 : options.filter) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options.filter, type: `[${(0, support_js_1.filterTypeName)(modelApiIdentifier)}!]` }) : undefined,
                search: (options === null || options === void 0 ? void 0 : options.search) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options.search, type: "String" }) : undefined,
            }, {
                pageInfo: { hasNextPage: true, hasPreviousPage: true, startCursor: true, endCursor: true },
                edges: {
                    cursor: true,
                    node: fieldSelectionToQueryCompilerFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true),
                },
            }),
            ...hydrationOptions(modelApiIdentifier),
        },
        directives: directivesForOptions(options),
    });
};
exports.findManyOperation = findManyOperation;
const ErrorsSelection = {
    message: true,
    code: true,
    "... on InvalidRecordError": {
        validationErrors: {
            message: true,
            apiIdentifier: true,
        },
    },
};
const variableOptionsToVariables = (variables) => {
    return Object.fromEntries(Object.entries(variables).map(([name, options]) => [name, (0, tiny_graphql_query_compiler_1.Var)(options)]));
};
const actionOperation = (operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace, isBulkAction, hasReturnType) => {
    const selection = (options === null || options === void 0 ? void 0 : options.select) || defaultSelection;
    let fields = {
        [operation]: (0, tiny_graphql_query_compiler_1.Call)(variableOptionsToVariables(variables), {
            success: true,
            errors: ErrorsSelection,
            [modelSelectionField]: selection && !hasReturnType ? fieldSelectionToQueryCompilerFields(selection, true) : false,
            [isBulkAction ? "results" : "result"]: !!hasReturnType,
        }),
    };
    if (namespace) {
        fields = {
            [namespace]: fields,
        };
    }
    const actionOperation = {
        type: "mutation",
        name: operation,
        fields: {
            ...fields,
            ...hydrationOptions(modelApiIdentifier),
        },
        directives: directivesForOptions(options),
    };
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)(actionOperation);
};
exports.actionOperation = actionOperation;
const globalActionOperation = (operation, variables, namespace, options) => {
    let fields = {
        [operation]: (0, tiny_graphql_query_compiler_1.Call)(variableOptionsToVariables(variables), {
            success: true,
            errors: ErrorsSelection,
            result: true,
        }),
    };
    const dataPath = [operation];
    if (namespace) {
        fields = {
            [namespace]: fields,
        };
        dataPath.unshift(namespace);
    }
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: operation,
        fields,
        directives: directivesForOptions(options),
    });
};
exports.globalActionOperation = globalActionOperation;
//# sourceMappingURL=operationBuilders.js.map