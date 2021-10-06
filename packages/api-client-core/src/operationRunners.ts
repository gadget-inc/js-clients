import { mutation, query } from "gql-query-builder";
import IQueryBuilderOptions from "gql-query-builder/build/IQueryBuilderOptions";
import VariableOptions from "gql-query-builder/build/VariableOptions";
import { FieldSelection, fieldSelectionToGQLBuilderFields } from "./FieldSelection";
import { GadgetConnection } from "./GadgetConnection";
import { GadgetRecord } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import { ModelManager } from "./ModelManager";
import {
  assertMutationSuccess,
  assertOperationSuccess,
  filterTypeName,
  get,
  hydrateConnection,
  hydrateRecord,
  hydrateRecordArray,
  sortTypeName,
} from "./support";

// these types are local to the implementation and not exposed to the code calling into the client, used to keep some type safety in our re-used implementation
type AnySort = any;
type AnyFilter = any;
type SelectionOptions = { select?: any };
export type PaginationOptions = {
  sort?: AnySort | null;
  filter?: AnyFilter | null;
  search?: string | null;
  after?: string | null;
  first?: number | null;
  before?: string | null;
  last?: number | null;
} & SelectionOptions;

const hydrationOptions = (modelApiIdentifier: string): IQueryBuilderOptions => {
  return {
    operation: "gadgetMeta",
    fields: [`hydrations(modelName: "${modelApiIdentifier}")`],
  };
};

export const findOneRunner = async <Shape = any>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  id: string | undefined,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: SelectionOptions | null
) => {
  const variables: IQueryBuilderOptions["variables"] = {};
  if (typeof id !== "undefined") variables.id = { type: "GadgetID", required: true, value: id };
  const plan = query([
    {
      operation,
      fields: fieldSelectionToGQLBuilderFields(options?.select || defaultSelection),
      variables,
    },
    hydrationOptions(modelApiIdentifier),
  ]);

  const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
  const record = assertOperationSuccess(response, [operation]);
  return hydrateRecord<Shape>(response, record);
};

export const findManyRunner = async <Shape = any>(
  modelManager: ModelManager,
  operation: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: PaginationOptions
) => {
  const plan = query([
    {
      operation,
      fields: [
        {
          pageInfo: ["hasNextPage", "hasPreviousPage", "startCursor", "endCursor"],
        },
        {
          edges: ["cursor", { node: fieldSelectionToGQLBuilderFields(options?.select || defaultSelection) }],
        },
      ],
      variables: {
        after: { value: options?.after, type: "String", required: false },
        first: { value: options?.first, type: "Int", required: false },
        before: { value: options?.before, type: "String", required: false },
        last: { value: options?.last, type: "Int", required: false },
        sort: { value: options?.sort, type: sortTypeName(modelApiIdentifier) + "!", list: true },
        filter: { value: options?.filter, type: filterTypeName(modelApiIdentifier) + "!", list: true },
        search: { value: options?.search, type: "String", required: false },
      },
    },
    hydrationOptions(modelApiIdentifier),
  ]);

  const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
  const connectionObject = assertOperationSuccess(response, [operation]);
  const records = hydrateConnection<Shape>(response, connectionObject);
  return GadgetRecordList.boot<Shape>(modelManager, records, { options, pageInfo: connectionObject.pageInfo });
};

export interface ActionRunner {
  <Shape = any>(
    modelManager: { connection: GadgetConnection },
    operation: string,
    defaultSelection: FieldSelection | null,
    modelApiIdentifier: string,
    isBulkAction: false,
    variables: VariableOptions,
    options?: SelectionOptions | null,
    namespace?: string | null
  ): Promise<Shape extends void ? void : GadgetRecord<Shape>>;

  <Shape = any>(
    modelManager: { connection: GadgetConnection },
    operation: string,
    defaultSelection: FieldSelection | null,
    modelApiIdentifier: string,
    isBulkAction: true,
    variables: VariableOptions,
    options?: SelectionOptions | null,
    namespace?: string | null
  ): Promise<Shape extends void ? void : GadgetRecordList<Shape>>;
}

export const actionRunner: ActionRunner = async <Shape = any>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  defaultSelection: FieldSelection | null,
  modelApiIdentifier: string,
  isBulkAction: boolean,
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
  if (selection) actionOperation.fields!.push({ [modelApiIdentifier]: fieldSelectionToGQLBuilderFields(selection) });
  const dataPath = [operation];
  if (namespace) {
    actionOperation = {
      operation: namespace,
      fields: [actionOperation],
    };
    dataPath.unshift(namespace);
  }

  const plan = mutation([actionOperation, hydrationOptions(modelApiIdentifier)]);
  const response = await modelManager.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
  // pass bulk responses through without any assertions since we can have a success: false response but still want
  // to process it in a similar fashion since some of the records could have been processed
  const mutationResult = isBulkAction ? get(response.data, dataPath) : assertMutationSuccess(response, dataPath);

  // todo this does not support pagination params right now, we'll need to add it to bulk action Results
  if (isBulkAction) {
    return hydrateRecordArray<Shape>(response, mutationResult[modelApiIdentifier]);
  } else {
    return hydrateRecord<Shape>(response, mutationResult[modelApiIdentifier]);
  }
};

export const globalActionRunner = async (
  connection: GadgetConnection,
  operation: string,
  variables: VariableOptions,
  namespace?: string | null
) => {
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

  const plan = mutation([actionOperation]);
  const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
  const actionResult = assertMutationSuccess(response, dataPath);
  return actionResult.result;
};
