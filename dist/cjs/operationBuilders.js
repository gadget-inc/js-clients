"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enqueueActionOperation = exports.graphqlizeBackgroundOptions = exports.globalActionOperation = exports.actionResultOperation = exports.backgroundActionResultOperation = exports.actionOperation = exports.findManyOperation = exports.findOneByFieldOperation = exports.findOneOperation = void 0;
const tiny_graphql_query_compiler_1 = require("tiny-graphql-query-compiler");
const support_js_1 = require("./support.js");
const hydrationOptions = (modelApiIdentifier, namespace) => {
    const fullyQualifiedIdentifier = namespace
        ? [...(Array.isArray(namespace) ? namespace : [namespace]), modelApiIdentifier].join(".")
        : modelApiIdentifier;
    return {
        gadgetMeta: {
            [`hydrations(modelName: "${fullyQualifiedIdentifier}")`]: true,
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
const findOneOperation = (operation, id, defaultSelection, modelApiIdentifier, options, namespace) => {
    const variables = {};
    if (typeof id !== "undefined")
        variables.id = (0, tiny_graphql_query_compiler_1.Var)({ type: "GadgetID!", value: id });
    let fields = {
        [operation]: (0, tiny_graphql_query_compiler_1.Call)(variables, fieldSelectionToQueryCompilerFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true)),
        ...hydrationOptions(modelApiIdentifier, namespace),
    };
    fields = namespacify(namespace, fields);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "query",
        name: operation,
        fields,
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
    });
};
exports.findOneByFieldOperation = findOneByFieldOperation;
const findManyOperation = (operation, defaultSelection, modelApiIdentifier, options, namespace) => {
    let fields = {
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
    };
    if (namespace) {
        fields = namespacify(namespace, fields);
    }
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "query",
        name: operation,
        fields,
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
const actionResultFieldSelection = (modelSelectionField, selection, hasReturnType) => {
    return {
        success: true,
        errors: ErrorsSelection,
        [modelSelectionField]: selection && !hasReturnType ? fieldSelectionToQueryCompilerFields(selection, true) : false,
        result: !!hasReturnType,
    };
};
const actionOperation = (operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace, isBulkAction, hasReturnType) => {
    const selection = (options === null || options === void 0 ? void 0 : options.select) || defaultSelection;
    let fields = {
        [operation]: (0, tiny_graphql_query_compiler_1.Call)(variableOptionsToVariables(variables), actionResultFieldSelection(modelSelectionField, selection, hasReturnType)),
    };
    fields = namespacify(namespace, fields);
    const actionOperation = {
        type: "mutation",
        name: operation,
        fields: {
            ...fields,
            ...hydrationOptions(modelApiIdentifier, namespace),
        },
        directives: directivesForOptions(options),
    };
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)(actionOperation);
};
exports.actionOperation = actionOperation;
const backgroundActionResultOperation = (id, action, options) => {
    let fields = {};
    let operationName = action.operationName;
    switch (action.type) {
        case "action": {
            const selection = (options === null || options === void 0 ? void 0 : options.select) || action.defaultSelection;
            // background bulk actions enqueue many of the same action, each returning the result of one element of the bulk. so, the GraphQL result type is the singular result type, not the bulk result type.
            if (action.isBulk) {
                operationName = action.operationName.replace(/^bulk/, "").replace(/s$/, "");
            }
            const resultType = `${(0, support_js_1.camelize)(operationName)}Result`;
            fields = {
                [`... on ${resultType}`]: actionResultFieldSelection(action.modelApiIdentifier, selection, action.hasReturnType),
            };
            break;
        }
        case "globalAction": {
            fields = {
                [`... on ${(0, support_js_1.camelize)(operationName)}Result`]: globalActionFieldSelection(),
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
        errors: ErrorsSelection,
        result: true,
    };
};
const globalActionOperation = (operation, variables, namespace, options) => {
    let fields = {
        [operation]: (0, tiny_graphql_query_compiler_1.Call)(variableOptionsToVariables(variables), globalActionFieldSelection()),
    };
    fields = namespacify(namespace, fields);
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
    fields = namespacify(namespace, fields);
    return (0, tiny_graphql_query_compiler_1.compileWithVariableValues)({
        type: "mutation",
        name: "enqueue" + (0, support_js_1.camelize)(operation),
        fields: {
            background: fields,
        },
    });
};
exports.enqueueActionOperation = enqueueActionOperation;
function namespacify(namespace, fields) {
    if (!namespace)
        return fields;
    if (!Array.isArray(namespace)) {
        namespace = [namespace];
    }
    if (namespace) {
        for (let i = namespace.length - 1; i >= 0; i--) {
            fields = {
                [namespace[i]]: fields,
            };
        }
    }
    return fields;
}
//# sourceMappingURL=operationBuilders.js.map