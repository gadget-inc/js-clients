import {
  actionOperation,
  findFirstOperation,
  FindFirstPaginationOptions,
  findManyOperation,
  findOneByFieldOperation,
  GadgetNonUniqueDataError,
  globalActionOperation,
  maybeFindFirstOperation,
  maybeFindOneOperation,
  VariableOptions,
} from ".";
import { FieldSelection } from "./FieldSelection";
import { GadgetConnection } from "./GadgetConnection";
import { GadgetRecord } from "./GadgetRecord";
import { GadgetRecordList } from "./GadgetRecordList";
import { AnyModelManager } from "./ModelManager";
import { findOneOperation, PaginationOptions, SelectionOptions } from "./operationBuilders";
import {
  assertMutationSuccess,
  assertNullableOperationSuccess,
  assertOperationSuccess,
  get,
  hydrateConnection,
  hydrateRecord,
  hydrateRecordArray,
} from "./support";

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

export const maybeFindOneRunner = async <Shape = any>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  id: string | undefined,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: SelectionOptions | null
) => {
  const plan = maybeFindOneOperation(operation, id, defaultSelection, modelApiIdentifier, options);
  const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
  const record = assertNullableOperationSuccess(response, [operation]);
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

export const findFirstRunner = async <Shape = any>(
  modelManager: AnyModelManager,
  operation: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: FindFirstPaginationOptions
) => {
  const plan = findFirstOperation(operation, defaultSelection, modelApiIdentifier, options);
  const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
  const record = assertOperationSuccess(response, [operation]);
  return hydrateRecord<Shape>(response, record);
};

export const maybeFindFirstRunner = async <Shape = any>(
  modelManager: AnyModelManager,
  operation: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: FindFirstPaginationOptions
) => {
  const plan = maybeFindFirstOperation(operation, defaultSelection, modelApiIdentifier, options);
  const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
  const record = assertNullableOperationSuccess(response, [operation]);
  return hydrateRecord<Shape>(response, record);
};

export interface ActionRunner {
  <Shape = any>(
    modelManager: { connection: GadgetConnection },
    operation: string,
    defaultSelection: FieldSelection | null,
    modelApiIdentifier: string,
    modelSelectionField: string,
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
    modelSelectionField: string,
    isBulkAction: true,
    variables: VariableOptions,
    options?: SelectionOptions | null,
    namespace?: string | null
  ): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;
}

export const actionRunner: ActionRunner = async <Shape = any>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  defaultSelection: FieldSelection | null,
  modelApiIdentifier: string,
  modelSelectionField: string,
  isBulkAction: boolean,
  variables: VariableOptions,
  options?: SelectionOptions | null,
  namespace?: string | null
) => {
  const plan = actionOperation(operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace);
  const response = await modelManager.connection.currentClient.mutation(plan.query, plan.variables).toPromise();

  // pass bulk responses through without any assertions since we can have a success: false response but still want
  // to process it in a similar fashion since some of the records could have been processed
  const dataPath = namespace ? [namespace, operation] : [operation];
  const mutationResult = isBulkAction ? get(response.data, dataPath) : assertMutationSuccess(response, dataPath);

  // Currently, delete actions have a null selection. We do an early return for this because `hydrateRecordArray` will fail
  // if there's nothing at `mutationResult[modelSelectionField]`, but the caller isn't expecting a return (void).
  if (defaultSelection == null) {
    return;
  }

  // todo this does not support pagination params right now, we'll need to add it to bulk action Results
  if (isBulkAction) {
    return hydrateRecordArray<Shape>(response, mutationResult[modelSelectionField]);
  } else {
    return hydrateRecord<Shape>(response, mutationResult[modelSelectionField]);
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
