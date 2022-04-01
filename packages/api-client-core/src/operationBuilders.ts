import { mutation, query } from "gql-query-builder";
import IQueryBuilderOptions from "gql-query-builder/build/IQueryBuilderOptions";
import VariableOptions from "gql-query-builder/build/VariableOptions";
import { FieldSelection, fieldSelectionToGQLBuilderFields, filterTypeName, sortTypeName } from ".";

export type { default as VariableOptions } from "gql-query-builder/build/VariableOptions";

const hydrationOptions = (modelApiIdentifier: string): IQueryBuilderOptions => {
  return {
    operation: "gadgetMeta",
    fields: [`hydrations(modelName: "${modelApiIdentifier}")`],
  };
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
  const variables: IQueryBuilderOptions["variables"] = {};
  if (typeof id !== "undefined") variables.id = { type: "GadgetID", required: true, value: id };
  return query([
    {
      operation,
      fields: fieldSelectionToGQLBuilderFields(options?.select || defaultSelection, true),
      variables,
    },
    hydrationOptions(modelApiIdentifier),
  ]);
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
  return query([
    {
      operation,
      fields: [
        {
          pageInfo: ["hasNextPage", "hasPreviousPage", "startCursor", "endCursor"],
        },
        {
          edges: ["cursor", { node: fieldSelectionToGQLBuilderFields(options?.select || defaultSelection, true) }],
        },
      ],
      variables: {
        after: { value: options?.after, type: "String", required: false },
        first: { value: options?.first, type: "Int", required: false },
        before: { value: options?.before, type: "String", required: false },
        last: { value: options?.last, type: "Int", required: false },
        ...(options?.sort && { sort: { value: options?.sort, type: sortTypeName(modelApiIdentifier) + "!", list: true } }),
        ...(options?.filter && { filter: { value: options?.filter, type: filterTypeName(modelApiIdentifier) + "!", list: true } }),
        ...(options?.search && { search: { value: options?.search, type: "String", required: false } }),
      },
    },
    hydrationOptions(modelApiIdentifier),
  ]);
};

export const actionOperation = (
  operation: string,
  defaultSelection: FieldSelection | null,
  modelApiIdentifier: string,
  modelSelectionField: string,
  variables: VariableOptions,
  options?: SelectionOptions | null,
  namespace?: string | null
) => {
  let actionOperation: IQueryBuilderOptions = {
    operation,
    fields: [
      "success",
      { errors: ["message", "code", { "... on InvalidRecordError": [{ validationErrors: ["message", "apiIdentifier"] }] }] },
    ],
    variables,
  };

  const selection = options?.select || defaultSelection;
  if (selection) {
    actionOperation.fields!.push({ [modelSelectionField]: fieldSelectionToGQLBuilderFields(selection, true) });
  }

  if (namespace) {
    actionOperation = {
      operation: namespace,
      fields: [actionOperation],
    };
  }

  return mutation([actionOperation, hydrationOptions(modelApiIdentifier)]);
};

export const globalActionOperation = (operation: string, variables: VariableOptions, namespace?: string | null) => {
  let actionOperation: IQueryBuilderOptions = {
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
