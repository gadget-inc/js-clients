import { Call, Var, compileWithVariableValues } from "tiny-graphql-query-compiler";
import { filterTypeName, sortTypeName } from "./support.js";
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
export const findOneOperation = (operation, id, defaultSelection, modelApiIdentifier, options) => {
    const variables = {};
    if (typeof id !== "undefined")
        variables.id = Var({ type: "GadgetID!", value: id });
    return compileWithVariableValues({
        type: "query",
        name: operation,
        fields: {
            [operation]: Call(variables, fieldSelectionToQueryCompilerFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true)),
            ...hydrationOptions(modelApiIdentifier),
        },
    });
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
    return compileWithVariableValues({
        type: "query",
        name: operation,
        fields: {
            [operation]: Call({
                after: Var({ value: options === null || options === void 0 ? void 0 : options.after, type: "String" }),
                first: Var({ value: options === null || options === void 0 ? void 0 : options.first, type: "Int" }),
                before: Var({ value: options === null || options === void 0 ? void 0 : options.before, type: "String" }),
                last: Var({ value: options === null || options === void 0 ? void 0 : options.last, type: "Int" }),
                sort: (options === null || options === void 0 ? void 0 : options.sort) ? Var({ value: options.sort, type: `[${sortTypeName(modelApiIdentifier)}!]` }) : undefined,
                filter: (options === null || options === void 0 ? void 0 : options.filter) ? Var({ value: options.filter, type: `[${filterTypeName(modelApiIdentifier)}!]` }) : undefined,
                search: (options === null || options === void 0 ? void 0 : options.search) ? Var({ value: options.search, type: "String" }) : undefined,
            }, {
                pageInfo: { hasNextPage: true, hasPreviousPage: true, startCursor: true, endCursor: true },
                edges: {
                    cursor: true,
                    node: fieldSelectionToQueryCompilerFields((options === null || options === void 0 ? void 0 : options.select) || defaultSelection, true),
                },
            }),
            ...hydrationOptions(modelApiIdentifier),
        },
    });
};
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
    return Object.fromEntries(Object.entries(variables).map(([name, options]) => [name, Var(options)]));
};
export const actionOperation = (operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace, hasReturnType) => {
    const selection = (options === null || options === void 0 ? void 0 : options.select) || defaultSelection;
    let fields = {
        [operation]: Call(variableOptionsToVariables(variables), {
            success: true,
            errors: ErrorsSelection,
            [modelSelectionField]: selection && !hasReturnType ? fieldSelectionToQueryCompilerFields(selection, true) : false,
            result: !!hasReturnType,
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
    };
    return compileWithVariableValues(actionOperation);
};
export const globalActionOperation = (operation, variables, namespace) => {
    let fields = {
        [operation]: Call(variableOptionsToVariables(variables), {
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
    return compileWithVariableValues({
        type: "mutation",
        name: operation,
        fields,
    });
};
//# sourceMappingURL=operationBuilders.js.map