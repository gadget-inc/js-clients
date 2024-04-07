import { filter, pipe, take, toPromise } from "wonka";
import type { BackgroundActionResult } from "./BackgroundActionHandle.js";
import { BackgroundActionHandle } from "./BackgroundActionHandle.js";
import type { FieldSelection } from "./FieldSelection.js";
import type { GadgetConnection } from "./GadgetConnection.js";
import type { ActionFunctionMetadata, AnyActionFunction, AnyBulkActionFunction } from "./GadgetFunctions.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { AnyModelManager } from "./ModelManager.js";
import {
  actionOperation,
  actionResultOperation,
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
  assertResponseSuccess,
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
import type { ActionFunctionOptions, BaseFindOptions, EnqueueBackgroundActionOptions, FindManyOptions, VariablesOptions } from "./types.js";

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

    return processActionResponse(defaultSelection, response, mutationTriple, modelSelectionField, hasReturnType);
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

const processActionResponse = <Shape extends RecordShape = any>(
  defaultSelection: FieldSelection | null,
  response: any,
  record: any,
  modelSelectionField: string,
  hasReturnType?: boolean | null
) => {
  // Delete actions have a null selection. We do an early return for this because `hydrateRecordArray` will fail
  // if there's nothing at `mutationResult[modelSelectionField]`, but the caller isn't expecting a return (void).
  if (defaultSelection == null) return;
  if (!hasReturnType) {
    return hydrateRecord<Shape>(response, record[modelSelectionField]);
  } else {
    return record.result;
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

export async function enqueueActionRunner<Action extends AnyBulkActionFunction>(
  connection: GadgetConnection,
  action: Action,
  variables: Action["variablesType"],
  options?: EnqueueBackgroundActionOptions<Action>
): Promise<BackgroundActionHandle<Action>[]>;
export async function enqueueActionRunner<Action extends AnyActionFunction>(
  connection: GadgetConnection,
  action: Action,
  variables: Action["variablesType"],
  options?: EnqueueBackgroundActionOptions<Action>
): Promise<BackgroundActionHandle<Action>>;
export async function enqueueActionRunner<Action extends AnyActionFunction>(
  connection: GadgetConnection,
  action: Action,
  variables: Action["variablesType"],
  options: EnqueueBackgroundActionOptions<Action> = {}
): Promise<BackgroundActionHandle<Action> | BackgroundActionHandle<Action>[]> {
  const normalizedVariableValues = action.isBulk
    ? disambiguateBulkActionVariables(action as ActionFunctionMetadata<any, any, any, any, any, true>, variables)
    : disambiguateActionVariables(action, variables);
  const variableOptions = setVariableOptionValues(action.variables, normalizedVariableValues);

  const plan = enqueueActionOperation(action.operationName, variableOptions, action.namespace, options, action.isBulk);
  const response = await connection.currentClient.mutation(plan.query, plan.variables, options).toPromise();
  const dataPath = ["background", action.operationName];
  if (action.namespace) {
    dataPath.unshift(action.namespace);
  }

  try {
    const result = assertMutationSuccess(response, dataPath);
    if (action.isBulk) {
      return result.backgroundActions.map((result: { id: string }) => new BackgroundActionHandle(connection, action, result.id));
    } else {
      return new BackgroundActionHandle(connection, action, result.backgroundAction.id);
    }
  } catch (error: any) {
    if ("code" in error && error.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && options?.id && options.onDuplicateID == "ignore") {
      return new BackgroundActionHandle(connection, action, options.id);
    }
    throw error;
  }
}

export const actionResultRunner = async <Action extends AnyActionFunction, Options extends ActionFunctionOptions<Action>>(
  connection: GadgetConnection,
  id: string,
  action: Action,
  options?: Options
): Promise<BackgroundActionResult> => {
  const plan = actionResultOperation(id, action, options);
  const subscription = connection.currentClient.subscription(plan.query, plan.variables);

  const response = await pipe(
    subscription,
    filter((operation) => operation.error || operation.data?.backgroundAction?.outcome),
    take(1),
    toPromise
  );

  const backgroundAction = assertOperationSuccess(response, ["backgroundAction"]);

  assertResponseSuccess(backgroundAction.result);

  switch (action.type) {
    case "action": {
      backgroundAction.result = processActionResponse(
        action.defaultSelection,
        response.data,
        backgroundAction.result,
        action.modelSelectionField,
        action.hasReturnType
      );
      break;
    }
    case "globalAction": {
      backgroundAction.result = backgroundAction.result.result;
      break;
    }
  }

  return backgroundAction;
};
