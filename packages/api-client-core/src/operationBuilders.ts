import type { FieldSelection as BuilderFieldSelection, BuilderOperation, Variable } from "tiny-graphql-query-compiler";
import { Call, Var, compileWithVariableValues } from "tiny-graphql-query-compiler";
import type { FieldSelection } from "./FieldSelection.js";
import { filterTypeName, sortTypeName } from "./support.js";
import type { VariablesOptions } from "./types.js";

const hydrationOptions = (modelApiIdentifier: string): BuilderFieldSelection => {
  return {
    gadgetMeta: {
      [`hydrations(modelName: "${modelApiIdentifier}")`]: true,
    },
  };
};

/**
 * Converts Selection nested object format to the tiny-graphql-query-compiler shape
 **/
const fieldSelectionToQueryCompilerFields = (selection: FieldSelection, includeTypename = false): BuilderFieldSelection => {
  const output: BuilderFieldSelection = { ...selection };
  if (includeTypename) output.__typename = true;
  return output;
};

type AnySort = any;
type AnyFilter = any;

export type SelectionOptions = { select?: any };

export type PaginationOptions = {
  sort?: AnySort | null;
  filter?: AnyFilter | null;
  search?: string | null;
  after?: string | null;
  first?: number | null;
  before?: string | null;
  last?: number | null;
} & SelectionOptions;

export type FindFirstPaginationOptions = Omit<PaginationOptions, "first" | "last" | "before" | "after">;

export const findOneOperation = (
  operation: string,
  id: string | undefined,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: SelectionOptions | null
) => {
  const variables: Record<string, Variable> = {};
  if (typeof id !== "undefined") variables.id = Var({ type: "GadgetID!", value: id });
  return compileWithVariableValues({
    type: "query",
    name: operation,
    fields: {
      [operation]: Call(variables, fieldSelectionToQueryCompilerFields(options?.select || defaultSelection, true)),
      ...hydrationOptions(modelApiIdentifier),
    },
  });
};

export const findOneByFieldOperation = (
  operation: string,
  fieldName: string,
  fieldValue: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: SelectionOptions | null
) => {
  return findManyOperation(operation, defaultSelection, modelApiIdentifier, {
    select: options?.select,
    first: 2,
    filter: {
      [fieldName]: {
        equals: fieldValue,
      },
    },
  });
};

export const findManyOperation = (
  operation: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: PaginationOptions
) => {
  return compileWithVariableValues({
    type: "query",
    name: operation,
    fields: {
      [operation]: Call(
        {
          after: Var({ value: options?.after, type: "String" }),
          first: Var({ value: options?.first, type: "Int" }),
          before: Var({ value: options?.before, type: "String" }),
          last: Var({ value: options?.last, type: "Int" }),
          sort: options?.sort ? Var({ value: options.sort, type: `[${sortTypeName(modelApiIdentifier)}!]` }) : undefined,
          filter: options?.filter ? Var({ value: options.filter, type: `[${filterTypeName(modelApiIdentifier)}!]` }) : undefined,
          search: options?.search ? Var({ value: options.search, type: "String" }) : undefined,
        },
        {
          pageInfo: { hasNextPage: true, hasPreviousPage: true, startCursor: true, endCursor: true },
          edges: {
            cursor: true,
            node: fieldSelectionToQueryCompilerFields(options?.select || defaultSelection, true),
          },
        }
      ),
      ...hydrationOptions(modelApiIdentifier),
    },
  });
};

const ErrorsSelection: BuilderFieldSelection = {
  message: true,
  code: true,
  "... on InvalidRecordError": {
    validationErrors: {
      message: true,
      apiIdentifier: true,
    },
  },
};

const variableOptionsToVariables = (variables: VariablesOptions) => {
  return Object.fromEntries(Object.entries(variables).map(([name, options]) => [name, Var(options)]));
};

export const actionOperation = (
  operation: string,
  defaultSelection: FieldSelection | null,
  modelApiIdentifier: string,
  modelSelectionField: string,
  variables: VariablesOptions,
  options?: SelectionOptions | null,
  namespace?: string | null
) => {
  const selection = options?.select || defaultSelection;

  let fields: BuilderFieldSelection = {
    [operation]: Call(variableOptionsToVariables(variables), {
      success: true,
      errors: ErrorsSelection,
      [modelSelectionField]: selection ? fieldSelectionToQueryCompilerFields(selection, true) : false,
    }),
  };

  if (namespace) {
    fields = {
      [namespace]: fields,
    };
  }

  const actionOperation: BuilderOperation = {
    type: "mutation",
    name: operation,
    fields: {
      ...fields,
      ...hydrationOptions(modelApiIdentifier),
    },
  };

  return compileWithVariableValues(actionOperation);
};

export const globalActionOperation = (operation: string, variables: VariablesOptions, namespace?: string | null) => {
  let fields: BuilderFieldSelection = {
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
