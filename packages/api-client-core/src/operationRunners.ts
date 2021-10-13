import VariableOptions from "gql-query-builder/build/VariableOptions";
import { actionOperation, findManyOperation, findOneByFieldOperation, GadgetNonUniqueDataError, globalActionOperation } from ".";
import { FieldSelection } from "./FieldSelection";
import { GadgetConnection } from "./GadgetConnection";
import { GadgetRecord } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import { AnyModelManager } from "./ModelManager";
import { findOneOperation, PaginationOptions, SelectionOptions } from "./operationBuilders";
import { assertMutationSuccess, assertOperationSuccess, get, hydrateConnection, hydrateRecord, hydrateRecordArray } from "./support";

export const findOneRunner = async <Shape = any>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  id: string | undefined,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: SelectionOptions | null
) => {
  const plan = findOneOperation(operation, id, defaultSelection, modelApiIdentifier, options);
  const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
  const record = assertOperationSuccess(response, [operation]);
  return hydrateRecord<Shape>(response, record);
};

export const findOneByFieldRunner = async <Shape = any>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  fieldName: string,
  fieldValue: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: SelectionOptions | null
) => {
  const plan = findOneByFieldOperation(operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options);
  const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
  const connectionObject = assertOperationSuccess(response, [operation]);
  const records = hydrateConnection<Shape>(response, connectionObject);

  if (records.length > 1) {
    throw new GadgetNonUniqueDataError(
      `More than one record found for ${modelApiIdentifier}.${fieldName} = ${fieldValue}. Please confirm your unique validation is not reporting an error.`
    );
  }

  return records[0];
};

export const findManyRunner = async <Shape = any>(
  modelManager: AnyModelManager,
  operation: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: PaginationOptions
) => {
  const plan = findManyOperation(operation, defaultSelection, modelApiIdentifier, options);
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
  const plan = actionOperation(operation, defaultSelection, modelApiIdentifier, variables, options, namespace);
  const response = await modelManager.connection.currentClient.mutation(plan.query, plan.variables).toPromise();

  // pass bulk responses through without any assertions since we can have a success: false response but still want
  // to process it in a similar fashion since some of the records could have been processed
  const dataPath = namespace ? [namespace, operation] : [operation];
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
  const plan = globalActionOperation(operation, variables, namespace);
  const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
  const dataPath = namespace ? [namespace, operation] : [operation];
  return assertMutationSuccess(response, dataPath).result;
};
