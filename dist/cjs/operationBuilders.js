"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelBackgroundActionOperation = exports.enqueueActionOperation = exports.graphqlizeBackgroundOptions = exports.globalActionOperation = exports.actionResultOperation = exports.backgroundActionResultOperation = exports.actionOperation = exports.findManyOperation = exports.findOneByFieldOperation = exports.findOneOperation = void 0;
const tiny_graphql_query_compiler_1 = require("tiny-graphql-query-compiler");
const support_js_1 = require("./support.js");
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
const findOneOperation = (operation, id, defaultSelection, modelApiIdentifier, options, namespace) => {
    const variables = {};
    if (typeof id !== "undefined")
        variables.id = (0, tiny_graphql_query_compiler_1.Var)({ type: "GadgetID!", value: id });
    let fields = {
        [operation]: (0, tiny_graphql_query_compiler_1.Call)(variables, fieldSelectionToQueryCompilerFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true)),
    };
    fields = (0, support_js_1.namespacify)(namespace, fields);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "query",
        name: operation,
        fields: {
            ...fields,
            ...(0, support_js_1.hydrationSelection)(modelApiIdentifier, namespace),
        },
        directives: directivesForOptions(options),
    });
};
exports.findOneOperation = findOneOperation;
const findOneByFieldOperation = (operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options, namespace) => {
    return (0, exports.findManyOperation)(operation, defaultSelection, modelApiIdentifier, {
        ...options,
        first: 2,
        filter: {
            [fieldName]: {
                equals: fieldValue,
            },
        },
    }, namespace);
};
exports.findOneByFieldOperation = findOneByFieldOperation;
const findManyOperation = (operation, defaultSelection, modelApiIdentifier, options, namespace) => {
    let fields = {
        [operation]: (0, tiny_graphql_query_compiler_1.Call)({
            after: (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.after, type: "String" }),
            first: (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.first, type: "Int" }),
            before: (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.before, type: "String" }),
            last: (0, tiny_graphql_query_compiler_1.Var)({ value: options === null || options === void 0 ? void 0 : options.last, type: "Int" }),
            sort: (options === null || options === void 0 ? void 0 : options.sort) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options.sort, type: `[${(0, support_js_1.sortTypeName)(modelApiIdentifier, namespace)}!]` }) : undefined,
            filter: (options === null || options === void 0 ? void 0 : options.filter) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options.filter, type: `[${(0, support_js_1.filterTypeName)(modelApiIdentifier, namespace)}!]` }) : undefined,
            search: (options === null || options === void 0 ? void 0 : options.search) ? (0, tiny_graphql_query_compiler_1.Var)({ value: options.search, type: "String" }) : undefined,
        }, {
            pageInfo: { hasNextPage: true, hasPreviousPage: true, startCursor: true, endCursor: true },
            edges: {
                cursor: true,
                node: fieldSelectionToQueryCompilerFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true),
            },
        }),
    };
    if (namespace) {
        fields = (0, support_js_1.namespacify)(namespace, fields);
    }
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "query",
        name: operation,
        fields: {
            ...fields,
            ...(0, support_js_1.hydrationSelection)(modelApiIdentifier, namespace),
        },
        directives: directivesForOptions(options),
    });
};
exports.findManyOperation = findManyOperation;
const variableOptionsToVariables = (variables) => {
    return Object.fromEntries(Object.entries(variables).map(([name, options]) => [name, (0, tiny_graphql_query_compiler_1.Var)(options)]));
};
const actionResultFieldSelection = (modelSelectionField, selection, isBulkAction, hasReturnType, depth = 0) => {
    const fieldSelection = depth == 0
        ? {
            success: true,
            ...support_js_1.ErrorsSelection,
        }
        : {};
    if (hasReturnType && typeof hasReturnType != "boolean") {
        for (const [selectionField, returnTypeSelection] of Object.entries(hasReturnType)) {
            if ("select" in returnTypeSelection) {
                fieldSelection[selectionField] = fieldSelectionToQueryCompilerFields(selection, true);
            }
            else {
                fieldSelection[selectionField] = {
                    __typename: selectionField.includes("... on"),
                    ...actionResultFieldSelection(modelSelectionField, selection, isBulkAction, returnTypeSelection.hasReturnType, depth + 1),
                };
            }
        }
    }
    else if (hasReturnType) {
        fieldSelection[isBulkAction && depth == 0 ? "results" : "result"] = true;
    }
    else if (selection) {
        fieldSelection[modelSelectionField] = fieldSelectionToQueryCompilerFields(selection, true);
    }
    return fieldSelection;
};
const actionOperation = (operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace, isBulkAction, hasReturnType) => {
    const selection = (options === null || options === void 0 ? void 0 : options.select) || defaultSelection;
    let fields = {
        [operation]: (0, tiny_graphql_query_compiler_1.Call)(variableOptionsToVariables(variables), actionResultFieldSelection(modelSelectionField, selection, isBulkAction, hasReturnType)),
    };
    fields = (0, support_js_1.namespacify)(namespace, fields);
    const actionOperation = {
        type: "mutation",
        name: operation,
        fields: {
            ...fields,
            ...(0, support_js_1.hydrationSelection)(modelApiIdentifier, namespace),
        },
        directives: directivesForOptions(options),
    };
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)(actionOperation);
};
exports.actionOperation = actionOperation;
const backgroundActionResultOperation = (id, action, options) => {
    let fields = {};
    let resultType;
    const backgroundAction = action.isBulk && action.singleAction ? action.singleAction : action;
    let operationName = backgroundAction.operationName;
    if (backgroundAction.isBulk) {
        operationName = backgroundAction.operationName.replace(/^bulk/, "").replace(/s$/, "");
    }
    if (!backgroundAction.operationReturnType) {
        resultType = `${(0, support_js_1.camelize)(operationName)}Result`;
    }
    else {
        resultType = `${backgroundAction.operationReturnType}Result`;
    }
    switch (backgroundAction.type) {
        case "action": {
            const selection = (options === null || options === void 0 ? void 0 : options.select) || backgroundAction.defaultSelection;
            fields = {
                [`... on ${resultType}`]: actionResultFieldSelection(backgroundAction.modelApiIdentifier, selection, backgroundAction.isBulk, backgroundAction.hasReturnType),
            };
            break;
        }
        case "globalAction": {
            fields = {
                [`... on ${resultType}`]: globalActionFieldSelection(),
            };
        }
    }
    const actionResultOperation = {
        type: "subscription",
        name: (0, support_js_1.capitalizeIdentifier)(operationName) + "BackgroundResult",
        fields: {
            backgroundAction: (0, tiny_graphql_query_compiler_1.Call)({ id: (0, tiny_graphql_query_compiler_1.Var)({ value: id, type: "String!" }) }, {
                id: true,
                outcome: true,
                result: {
                    ...fields,
                },
            }),
        },
    };
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)(actionResultOperation);
};
exports.backgroundActionResultOperation = backgroundActionResultOperation;
/** @deprecated previous export name, @see backgroundActionResultOperation */
exports.actionResultOperation = exports.backgroundActionResultOperation;
const globalActionFieldSelection = () => {
    return {
        success: true,
        ...support_js_1.ErrorsSelection,
        result: true,
    };
};
const globalActionOperation = (operation, variables, namespace, options) => {
    let fields = {
        [operation]: (0, tiny_graphql_query_compiler_1.Call)(variableOptionsToVariables(variables), globalActionFieldSelection()),
    };
    fields = (0, support_js_1.namespacify)(namespace, fields);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: operation,
        fields,
        directives: directivesForOptions(options),
    });
};
exports.globalActionOperation = globalActionOperation;
const graphqlizeBackgroundOptions = (options) => {
    if (!options)
        return null;
    const obj = { ...options };
    if (typeof obj.retries == "number") {
        obj.retries = {
            retryCount: obj.retries,
        };
    }
    if (typeof obj.queue == "string") {
        obj.queue = {
            name: obj.queue,
        };
    }
    if (obj.startAt instanceof Date) {
        obj.startAt = obj.startAt.toISOString();
    }
    for (const key of Object.keys(obj)) {
        if (["id", "retries", "queue", "priority", "startAt"].includes(key))
            continue;
        delete obj[key];
    }
    return obj;
};
exports.graphqlizeBackgroundOptions = graphqlizeBackgroundOptions;
const enqueueActionOperation = (operation, variables, namespace, options, isBulk) => {
    let fields = {
        [operation]: (0, tiny_graphql_query_compiler_1.Call)({
            ...variableOptionsToVariables(variables),
            backgroundOptions: (0, tiny_graphql_query_compiler_1.Var)({
                type: "EnqueueBackgroundActionOptions",
                value: (0, exports.graphqlizeBackgroundOptions)(options),
            }),
        }, {
            success: true,
            errors: {
                message: true,
                code: true,
            },
            [isBulk ? "backgroundActions" : "backgroundAction"]: {
                id: true,
            },
        }),
    };
    fields = (0, support_js_1.namespacify)(namespace, fields);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: "enqueue" + (0, support_js_1.camelize)(operation),
        fields: {
            background: fields,
        },
    });
};
exports.enqueueActionOperation = enqueueActionOperation;
const cancelBackgroundActionOperation = (id) => {
    const fields = {
        cancel: (0, tiny_graphql_query_compiler_1.Call)({ id: (0, tiny_graphql_query_compiler_1.Var)({ value: id, type: "String!" }) }, {
            success: true,
            errors: {
                code: true,
                message: true,
            },
            backgroundAction: {
                id: true,
            },
        }),
    };
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: "cancelBackgroundAction",
        fields: {
            background: fields,
        },
    });
};
exports.cancelBackgroundActionOperation = cancelBackgroundActionOperation;
//# sourceMappingURL=operationBuilders.js.map