import { BackgroundActionHandle } from "./BackgroundActionHandle.js";
import type { FieldSelection } from "./FieldSelection.js";
import type { GadgetConnection } from "./GadgetConnection.js";
import { AnyActionFunction } from "./GadgetFunctions.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { AnyModelManager } from "./ModelManager.js";
import {
  actionOperation,
  enqueueActionOperation,
  findManyOperation,
  findOneByFieldOperation,
  findOneOperation,
  globalActionOperation,
} from "./operationBuilders.js";
import {
  GadgetErrorGroup,
  assertMutationSuccess,
  assertNullableOperationSuccess,
  assertOperationSuccess,
  disambiguateActionVariables,
  disambiguateBulkActionVariables,
  gadgetErrorFor,
  get,
  getNonUniqueDataError,
  hydrateConnection,
  hydrateRecord,
  hydrateRecordArray,
  setVariableOptionValues,
} from "./support.js";
import type { BaseFindOptions, EnqueueBackgroundActionOptions, FindManyOptions, VariablesOptions } from "./types.js";

export const findOneRunner = async <Shape extends RecordShape = any>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  id: string | undefined,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: BaseFindOptions | null,
  throwOnEmptyData = true
) => {
  const plan = findOneOperation(operation, id, defaultSelection, modelApiIdentifier, options);
  const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
  const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
  const record = assertSuccess(response, [operation]);
  return hydrateRecord<Shape>(response, record);
};

export const findOneByFieldRunner = async <Shape extends RecordShape = any>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  fieldName: string,
  fieldValue: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: BaseFindOptions | null
) => {
  const plan = findOneByFieldOperation(operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options);
  const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
  const connectionObject = assertOperationSuccess(response, [operation]);
  const records = hydrateConnection<Shape>(response, connectionObject);

  if (records.length > 1) {
    throw getNonUniqueDataError(modelApiIdentifier, fieldName, fieldValue);
  }

  return records[0];
};

export const findManyRunner = async <Shape extends RecordShape = any>(
  modelManager: AnyModelManager,
  operation: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: FindManyOptions,
  throwOnEmptyData?: boolean
) => {
  const plan = findManyOperation(operation, defaultSelection, modelApiIdentifier, options);
  const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();

  let connectionObject;
  if (throwOnEmptyData === false) {
    // If this is a nullable operation, don't throw errors on empty
    connectionObject = assertNullableOperationSuccess(response, [operation]);
  } else {
    // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
    // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
    connectionObject = assertOperationSuccess(response, [operation], throwOnEmptyData);
  }

  const records = hydrateConnection<Shape>(response, connectionObject);
  return GadgetRecordList.boot<Shape>(modelManager, records, { options, pageInfo: connectionObject.pageInfo });
};

export interface ActionRunner {
  (
    modelManager: { connection: GadgetConnection },
    operation: string,
    defaultSelection: FieldSelection | null,
    modelApiIdentifier: string,
    modelSelectionField: string,
    isBulkAction: false,
    variables: VariablesOptions,
    options?: BaseFindOptions | null,
    namespace?: string | null,
    hasReturnType?: true
  ): Promise<any>;

  <Shape extends RecordShape = any>(
    modelManager: { connection: GadgetConnection },
    operation: string,
    defaultSelection: FieldSelection | null,
    modelApiIdentifier: string,
    modelSelectionField: string,
    isBulkAction: false,
    variables: VariablesOptions,
    options?: BaseFindOptions | null,
    namespace?: string | null,
    hasReturnType?: false
  ): Promise<Shape extends void ? void : GadgetRecord<Shape>>;

  <Shape extends RecordShape = any>(
    modelManager: { connection: GadgetConnection },
    operation: string,
    defaultSelection: FieldSelection | null,
    modelApiIdentifier: string,
    modelSelectionField: string,
    isBulkAction: false,
    variables: VariablesOptions,
    options?: BaseFindOptions | null,
    namespace?: string | null
  ): Promise<Shape extends void ? void : GadgetRecord<Shape>>;

  <Shape extends RecordShape = any>(
    modelManager: { connection: GadgetConnection },
    operation: string,
    defaultSelection: FieldSelection | null,
    modelApiIdentifier: string,
    modelSelectionField: string,
    isBulkAction: true,
    variables: VariablesOptions,
    options?: BaseFindOptions | null,
    namespace?: string | null
  ): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;

  (
    modelManager: { connection: GadgetConnection },
    operation: string,
    defaultSelection: FieldSelection | null,
    modelApiIdentifier: string,
    modelSelectionField: string,
    isBulkAction: true,
    variables: VariablesOptions,
    options?: BaseFindOptions | null,
    namespace?: string | null,
    hasReturnType?: true
  ): Promise<any[]>;

  <Shape extends RecordShape = any>(
    modelManager: { connection: GadgetConnection },
    operation: string,
    defaultSelection: FieldSelection | null,
    modelApiIdentifier: string,
    modelSelectionField: string,
    isBulkAction: true,
    variables: VariablesOptions,
    options?: BaseFindOptions | null,
    namespace?: string | null,
    hasReturnType?: false
  ): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;
}

export const actionRunner: ActionRunner = async <Shape extends RecordShape = any>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  defaultSelection: FieldSelection | null,
  modelApiIdentifier: string,
  modelSelectionField: string,
  isBulkAction: boolean,
  variables: VariablesOptions,
  options?: BaseFindOptions | null,
  namespace?: string | null,
  hasReturnType?: boolean | null
) => {
  const plan = actionOperation(
    operation,
    defaultSelection,
    modelApiIdentifier,
    modelSelectionField,
    variables,
    options,
    namespace,
    isBulkAction,
    hasReturnType
  );
  const response = await modelManager.connection.currentClient.mutation(plan.query, plan.variables).toPromise();

  // pass bulk responses through without any assertions since we can have a success: false response but still want
  // to process it in a similar fashion since some of the records could have been processed
  const dataPath = namespace ? [namespace, operation] : [operation];

  if (!isBulkAction) {
    const mutationTriple = assertMutationSuccess(response, dataPath);
    // Delete actions have a null selection. We do an early return for this because `hydrateRecordArray` will fail
    // if there's nothing at `mutationResult[modelSelectionField]`, but the caller isn't expecting a return (void).
    if (defaultSelection == null) return;
    if (!hasReturnType) {
      return hydrateRecord<Shape>(response, mutationTriple[modelSelectionField]);
    } else {
      return mutationTriple.result;
    }
  } else {
    const mutationTriple = get(response.data, dataPath);
    const results =
      mutationTriple[modelSelectionField] && defaultSelection
        ? hydrateRecordArray<Shape>(response, mutationTriple[modelSelectionField])
        : undefined;
    if (mutationTriple.errors) {
      const errors = mutationTriple.errors.map((error: any) => gadgetErrorFor(error));
      throw new GadgetErrorGroup(errors, results);
    }

    return results;
  }
};

export const globalActionRunner = async (
  connection: GadgetConnection,
  operation: string,
  variables: VariablesOptions,
  namespace?: string | null
) => {
  const plan = globalActionOperation(operation, variables, namespace);
  const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
  const dataPath = namespace ? [namespace, operation] : [operation];
  return assertMutationSuccess(response, dataPath).result;
};

export const enqueueActionRunner = async <Action extends AnyActionFunction>(
  connection: GadgetConnection,
  action: Action,
  variables: Action["variablesType"],
  options: EnqueueBackgroundActionOptions<Action> = {}
) => {
  const normalizedVariableValues =
    "isBulk" in action && action.isBulk
      ? disambiguateBulkActionVariables(action, variables)
      : disambiguateActionVariables(action, variables);
  const variableOptions = setVariableOptionValues(action.variables, normalizedVariableValues);

  const plan = enqueueActionOperation(action.operationName, variableOptions, action.namespace, options);
  const response = await connection.currentClient.mutation(plan.query, plan.variables, options).toPromise();
  const dataPath = ["background", action.operationName];
  if (action.namespace) {
    dataPath.unshift(action.namespace);
  }

  try {
    const result = assertMutationSuccess(response, dataPath);
    return new BackgroundActionHandle(connection, result.backgroundAction.id, options);
  } catch (error: any) {
    if ("code" in error && error.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && options?.id && options.onDuplicateID == "ignore") {
      return new BackgroundActionHandle(connection, options.id, options);
    }
    throw error;
  }
};
