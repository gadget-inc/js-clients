import type { FieldSelection as BuilderFieldSelection, BuilderOperation, Variable } from "tiny-graphql-query-compiler";
import { Call, On, Var, compileWithVariableValues } from "tiny-graphql-query-compiler";
import type { FieldSelection } from "./FieldSelection.js";
import type { AnyActionFunction, UnionResultType } from "./index.js";
import {
  ErrorsSelection,
  camelize,
  capitalizeIdentifier,
  filterTypeName,
  hydrationSelection,
  namespacify,
  sortTypeName,
} from "./support.js";
import type { ActionFunctionOptions, BaseFindOptions, EnqueueBackgroundActionOptions, FindManyOptions, VariablesOptions } from "./types.js";

/**
 * Converts Selection nested object format to the tiny-graphql-query-compiler shape
 **/
const fieldSelectionToQueryCompilerFields = (selection: FieldSelection, includeTypename = false): BuilderFieldSelection => {
  const output: BuilderFieldSelection = { ...selection };
  if (includeTypename) output.__typename = true;
  return output;
};

const unionResultTypeToQueryCompilerFields = (unionResultType: UnionResultType, selection: FieldSelection) => {
  const output: BuilderFieldSelection = {
    __typename: true,
  };

  for (const [key, value] of Object.entries(unionResultType)) {
    output[key] = On(value.hasReturnType ? { result: true } : fieldSelectionToQueryCompilerFields(selection, false));
  }

  return output;
};

export type FindFirstPaginationOptions = Omit<FindManyOptions, "first" | "last" | "before" | "after">;

const directivesForOptions = (options?: BaseFindOptions | null) => {
  if (options?.live) return ["@live"];
  return undefined;
};

export const findOneOperation = (
  operation: string,
  id: string | undefined,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: BaseFindOptions | null,
  namespace?: string | string[] | null
) => {
  const variables: Record<string, Variable> = {};
  if (typeof id !== "undefined") variables.id = Var({ type: "GadgetID!", value: id });

  let fields = {
    [operation]: Call(variables, fieldSelectionToQueryCompilerFields(options?.select || defaultSelection, true)),
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

export const findOneByFieldOperation = (
  operation: string,
  fieldName: string,
  fieldValue: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: BaseFindOptions | null,
  namespace?: string | string[] | null
) => {
  return findManyOperation(
    operation,
    defaultSelection,
    modelApiIdentifier,
    {
      ...options,
      first: 2,
      filter: {
        [fieldName]: {
          equals: fieldValue,
        },
      },
    },
    namespace
  );
};

export const findManyOperation = (
  operation: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: FindManyOptions,
  namespace?: string | string[] | null
) => {
  let fields = {
    [operation]: Call(
      {
        after: Var({ value: options?.after, type: "String" }),
        first: Var({ value: options?.first, type: "Int" }),
        before: Var({ value: options?.before, type: "String" }),
        last: Var({ value: options?.last, type: "Int" }),
        sort: options?.sort ? Var({ value: options.sort, type: `[${sortTypeName(modelApiIdentifier, namespace)}!]` }) : undefined,
        filter: options?.filter ? Var({ value: options.filter, type: `[${filterTypeName(modelApiIdentifier, namespace)}!]` }) : undefined,
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

const variableOptionsToVariables = (variables: VariablesOptions) => {
  return Object.fromEntries(Object.entries(variables).map(([name, options]) => [name, Var(options)]));
};

const actionResultFieldSelection = (
  modelSelectionField: string,
  selection: FieldSelection,
  hasReturnType?: boolean | null,
  unionResultType?: UnionResultType | null
) => {
  return {
    success: true,
    ...ErrorsSelection,
    [modelSelectionField]:
      selection && !hasReturnType
        ? unionResultType
          ? unionResultTypeToQueryCompilerFields(unionResultType, selection)
          : fieldSelectionToQueryCompilerFields(selection, true)
        : false,
    result: !!hasReturnType,
  } as FieldSelection;
};

export const actionOperation = (
  operation: string,
  defaultSelection: FieldSelection | null,
  modelApiIdentifier: string,
  modelSelectionField: string,
  variables: VariablesOptions,
  options?: BaseFindOptions | null,
  namespace?: string | string[] | null,
  isBulkAction?: boolean | null,
  hasReturnType?: boolean | null,
  unionResultType?: UnionResultType | null
) => {
  const selection = options?.select || defaultSelection;

  let fields: BuilderFieldSelection = {
    [operation]: Call(
      variableOptionsToVariables(variables),
      actionResultFieldSelection(modelSelectionField, selection, hasReturnType, unionResultType)
    ),
  };

  fields = namespacify(namespace, fields);

  const actionOperation: BuilderOperation = {
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

export const backgroundActionResultOperation = <Action extends AnyActionFunction, Options extends ActionFunctionOptions<Action>>(
  id: string,
  action: Action,
  options?: Options
) => {
  let fields: FieldSelection = {};
  let operationName = action.operationName;
  let resultType: string;

  if (action.isBulk) {
    operationName = action.operationName.replace(/^bulk/, "").replace(/s$/, "");
  }

  if (!action.operationReturnType) {
    resultType = `${camelize(operationName)}Result`;
  } else {
    resultType = `${action.operationReturnType}Result`;
  }

  switch (action.type) {
    case "action": {
      const selection = options?.select || action.defaultSelection;

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

  const actionResultOperation: BuilderOperation = {
    type: "subscription",
    name: capitalizeIdentifier(operationName) + "BackgroundResult",
    fields: {
      backgroundAction: Call(
        { id: Var({ value: id, type: "String!" }) },
        {
          id: true,
          outcome: true,
          result: {
            ...fields,
          },
        }
      ),
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
  } as FieldSelection;
};

export const globalActionOperation = (
  operation: string,
  variables: VariablesOptions,
  namespace?: string | string[] | null,
  options?: { live?: boolean }
) => {
  let fields: BuilderFieldSelection = {
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

export interface GraphQLBackgroundActionOptions {
  retries?: { retryCount: number };
  queue?: { name: string; maxConcurrency?: number };
  priority?: string;
  startAt?: string;
}

export const graphqlizeBackgroundOptions = (options?: EnqueueBackgroundActionOptions<any> | null) => {
  if (!options) return null;
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
    if (["id", "retries", "queue", "priority", "startAt"].includes(key)) continue;
    delete obj[key];
  }

  return obj as GraphQLBackgroundActionOptions;
};

export const enqueueActionOperation = (
  operation: string,
  variables: VariablesOptions,
  namespace?: string | string[] | null,
  options?: EnqueueBackgroundActionOptions<any> | null,
  isBulk?: boolean
) => {
  let fields: BuilderFieldSelection = {
    [operation]: Call(
      {
        ...variableOptionsToVariables(variables),
        backgroundOptions: Var({
          type: "EnqueueBackgroundActionOptions",
          value: graphqlizeBackgroundOptions(options),
        }),
      },
      {
        success: true,
        errors: {
          message: true,
          code: true,
        },
        [isBulk ? "backgroundActions" : "backgroundAction"]: {
          id: true,
        },
      }
    ),
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
