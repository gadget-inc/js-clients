import { Call, Var, compileWithVariableValues } from "tiny-graphql-query-compiler";
import { ErrorsSelection, camelize, capitalizeIdentifier, filterTypeName, hydrationSelection, namespacify, sortTypeName, } from "./support.js";
/**
 * Converts Selection nested object format to the tiny-graphql-query-compiler shape
 **/
const fieldSelectionToQueryCompilerFields = (selection, includeTypename = false) => {
    const output = { ...selection };
    if (includeTypename)
        output.__typename = true;
    return output;
};
const unionResultTypeToQueryCompilerFields = (unionResultType, selection) => {
    const output = {
        __typename: true,
    };
    for (const [key, value] of Object.entries(unionResultType)) {
        output[`... on ${key}`] = value.hasReturnType ? { result: true } : fieldSelectionToQueryCompilerFields(selection, false);
    }
    return output;
};
const directivesForOptions = (options) => {
    if (options === null || options === void 0 ? void 0 : options.live)
        return ["@live"];
    return undefined;
};
export const findOneOperation = (operation, id, defaultSelection, modelApiIdentifier, options, namespace) => {
    const variables = {};
    if (typeof id !== "undefined")
        variables.id = Var({ type: "GadgetID!", value: id });
    let fields = {
        [operation]: Call(variables, fieldSelectionToQueryCompilerFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true)),
    };
    fields = namespacify(namespace, fields);
    return compileWithVariableValues({
        type: "query",
        name: operation,
        fields: {
            ...fields,
            ...hydrationSelection(modelApiIdentifier, namespace),
        },
        directives: directivesForOptions(options),
    });
};
export const findOneByFieldOperation = (operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options, namespace) => {
    return findManyOperation(operation, defaultSelection, modelApiIdentifier, {
        ...options,
        first: 2,
        filter: {
            [fieldName]: {
                equals: fieldValue,
            },
        },
    }, namespace);
};
export const findManyOperation = (operation, defaultSelection, modelApiIdentifier, options, namespace) => {
    let fields = {
        [operation]: Call({
            after: Var({ value: options === null || options === void 0 ? void 0 : options.after, type: "String" }),
            first: Var({ value: options === null || options === void 0 ? void 0 : options.first, type: "Int" }),
            before: Var({ value: options === null || options === void 0 ? void 0 : options.before, type: "String" }),
            last: Var({ value: options === null || options === void 0 ? void 0 : options.last, type: "Int" }),
            sort: (options === null || options === void 0 ? void 0 : options.sort) ? Var({ value: options.sort, type: `[${sortTypeName(modelApiIdentifier, namespace)}!]` }) : undefined,
            filter: (options === null || options === void 0 ? void 0 : options.filter) ? Var({ value: options.filter, type: `[${filterTypeName(modelApiIdentifier, namespace)}!]` }) : undefined,
            search: (options === null || options === void 0 ? void 0 : options.search) ? Var({ value: options.search, type: "String" }) : undefined,
        }, {
            pageInfo: { hasNextPage: true, hasPreviousPage: true, startCursor: true, endCursor: true },
            edges: {
                cursor: true,
                node: fieldSelectionToQueryCompilerFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true),
            },
        }),
    };
    if (namespace) {
        fields = namespacify(namespace, fields);
    }
    return compileWithVariableValues({
        type: "query",
        name: operation,
        fields: {
            ...fields,
            ...hydrationSelection(modelApiIdentifier, namespace),
        },
        directives: directivesForOptions(options),
    });
};
const variableOptionsToVariables = (variables) => {
    return Object.fromEntries(Object.entries(variables).map(([name, options]) => [name, Var(options)]));
};
const actionResultFieldSelection = (modelSelectionField, selection, hasReturnType, unionResultType) => {
    let modelSelection;
    if (selection && !hasReturnType && unionResultType) {
        modelSelection = unionResultTypeToQueryCompilerFields(unionResultType, selection);
    }
    else if (selection && !hasReturnType) {
        modelSelection = fieldSelectionToQueryCompilerFields(selection, true);
    }
    else {
        modelSelection = false;
    }
    return {
        success: true,
        ...ErrorsSelection,
        [modelSelectionField]: modelSelection,
        result: !!hasReturnType,
    };
};
export const actionOperation = (operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace, isBulkAction, hasReturnType, unionResultType) => {
    const selection = (options === null || options === void 0 ? void 0 : options.select) || defaultSelection;
    let fields = {
        [operation]: Call(variableOptionsToVariables(variables), actionResultFieldSelection(modelSelectionField, selection, hasReturnType, unionResultType)),
    };
    fields = namespacify(namespace, fields);
    const actionOperation = {
        type: "mutation",
        name: operation,
        fields: {
            ...fields,
            ...hydrationSelection(modelApiIdentifier, namespace),
        },
        directives: directivesForOptions(options),
    };
    return compileWithVariableValues(actionOperation);
};
export const backgroundActionResultOperation = (id, action, options) => {
    let fields = {};
    let operationName = action.operationName;
    let resultType;
    if (action.isBulk) {
        operationName = action.operationName.replace(/^bulk/, "").replace(/s$/, "");
    }
    if (!action.operationReturnType) {
        resultType = `${camelize(operationName)}Result`;
    }
    else {
        resultType = `${action.operationReturnType}Result`;
    }
    switch (action.type) {
        case "action": {
            const selection = (options === null || options === void 0 ? void 0 : options.select) || action.defaultSelection;
            fields = {
                [`... on ${resultType}`]: actionResultFieldSelection(action.modelApiIdentifier, selection, action.hasReturnType),
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
        name: capitalizeIdentifier(operationName) + "BackgroundResult",
        fields: {
            backgroundAction: Call({ id: Var({ value: id, type: "String!" }) }, {
                id: true,
                outcome: true,
                result: {
                    ...fields,
                },
            }),
        },
    };
    return compileWithVariableValues(actionResultOperation);
};
/** @deprecated previous export name, @see backgroundActionResultOperation */
export const actionResultOperation = backgroundActionResultOperation;
const globalActionFieldSelection = () => {
    return {
        success: true,
        ...ErrorsSelection,
        result: true,
    };
};
export const globalActionOperation = (operation, variables, namespace, options) => {
    let fields = {
        [operation]: Call(variableOptionsToVariables(variables), globalActionFieldSelection()),
    };
    fields = namespacify(namespace, fields);
    return compileWithVariableValues({
        type: "mutation",
        name: operation,
        fields,
        directives: directivesForOptions(options),
    });
};
export const graphqlizeBackgroundOptions = (options) => {
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
export const enqueueActionOperation = (operation, variables, namespace, options, isBulk) => {
    let fields = {
        [operation]: Call({
            ...variableOptionsToVariables(variables),
            backgroundOptions: Var({
                type: "EnqueueBackgroundActionOptions",
                value: graphqlizeBackgroundOptions(options),
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
    return compileWithVariableValues({
        type: "mutation",
        name: "enqueue" + camelize(operation),
        fields: {
            background: fields,
        },
    });
};
//# sourceMappingURL=operationBuilders.js.map