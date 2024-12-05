import { filter, pipe, take, toAsyncIterable, toPromise } from "wonka";
import type { BackgroundActionResult, BackgroundActionResultData } from "./BackgroundActionHandle.js";
import { BackgroundActionHandle } from "./BackgroundActionHandle.js";
/* eslint-disable @typescript-eslint/ban-types */
import type { OperationResult } from "@urql/core";
import type { Source } from "wonka";
import type { FieldSelection } from "./FieldSelection.js";
import type { GadgetConnection } from "./GadgetConnection.js";
import type {
  ActionFunctionMetadata,
  AnyActionFunction,
  AnyBulkActionFunction,
  GlobalActionFunction,
  HasReturnType,
} from "./GadgetFunctions.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { AnyModelManager } from "./ModelManager.js";
import {
  actionOperation,
  backgroundActionResultOperation,
  computedViewOperation,
  enqueueActionOperation,
  findManyOperation,
  findOneByFieldOperation,
  findOneOperation,
  globalActionOperation,
} from "./operationBuilders.js";
import {
  GadgetErrorGroup,
  GadgetNotFoundError,
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
  namespaceDataPath,
  setVariableOptionValues,
} from "./support.js";
import type { ActionFunctionOptions, BaseFindOptions, EnqueueBackgroundActionOptions, FindManyOptions, VariablesOptions } from "./types.js";

type LiveResultForOptions<T, LiveOptions extends { live?: boolean | null }> = LiveOptions extends { live: true }
  ? AsyncIterable<T>
  : Promise<T>;

const mapAsyncIterable = <T, U>(source: AsyncIterable<T>, mapper: (item: T) => U): AsyncIterable<U> => {
  return {
    [Symbol.asyncIterator]() {
      const iter = source[Symbol.asyncIterator]();

      return {
        async next(): Promise<IteratorResult<U>> {
          const { done, value } = await iter.next();

          return {
            done,
            value: typeof value != "undefined" ? mapper(value) : undefined,
          } as any;
        },
        async return(value: any): Promise<IteratorReturnResult<any>> {
          return (await iter.return?.(value)) as any;
        },
      };
    },
  };
};

/** Given a stream, return an async iterable when live querying, and a promise resolving to the last value otherwise */
function maybeLiveStream<T extends OperationResult, U, LiveOptions extends { live?: boolean | null }>(
  $result: Source<T>,
  mapper: (value: T) => U,
  options?: LiveOptions | null
): LiveResultForOptions<U, LiveOptions> {
  if (options?.live) {
    return mapAsyncIterable<T, U>(toAsyncIterable($result), mapper) as unknown as LiveResultForOptions<U, LiveOptions>;
  } else {
    const promise = pipe(
      $result,
      filter((result) => !result.stale && !result.hasNext),
      take(1),
      toPromise
    );

    return promise.then((value) => mapper(value)) as LiveResultForOptions<U, LiveOptions>;
  }
}

export const findOneRunner = <Shape extends RecordShape = any, Options extends BaseFindOptions = {}>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  id: string | undefined,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: Options | null,
  throwOnEmptyData = true,
  namespace?: string | string[] | null
) => {
  const plan = findOneOperation(operation, id, defaultSelection, modelApiIdentifier, options, namespace);
  const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);

  return maybeLiveStream(
    $results,
    (response) => {
      const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
      const dataPath = namespaceDataPath([operation], namespace);
      const record = assertSuccess(response, dataPath);
      return hydrateRecord<Shape>(response, record);
    },
    options
  );
};

export const findOneByFieldRunner = <Shape extends RecordShape = any, Options extends FindManyOptions = {}>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  fieldName: string,
  fieldValue: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: Options | null,
  throwOnEmptyData = true,
  namespace?: string | string[] | null
) => {
  const plan = findOneByFieldOperation(operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options, namespace);
  const dataPath = namespaceDataPath([operation], namespace);
  const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);

  return maybeLiveStream(
    $results,
    (response) => {
      const connectionObject = assertOperationSuccess(response, dataPath);
      const records = hydrateConnection<Shape>(response, connectionObject);

      if (records.length > 1) {
        throw getNonUniqueDataError(modelApiIdentifier, fieldName, fieldValue);
      }
      const result = records[0];
      if (!result && throwOnEmptyData) {
        throw new GadgetNotFoundError(`${modelApiIdentifier} record with ${fieldName}=${fieldValue} not found`);
      }
      return result ?? null;
    },
    options
  );
};

export const findManyRunner = <Shape extends RecordShape = any, Options extends FindManyOptions = {}>(
  modelManager: AnyModelManager,
  operation: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: Options,
  throwOnEmptyData?: boolean,
  namespace?: string | string[] | null
) => {
  const plan = findManyOperation(operation, defaultSelection, modelApiIdentifier, options, namespace);
  const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);
  const dataPath = namespaceDataPath([operation], namespace);

  return maybeLiveStream(
    $results,
    (response) => {
      let connectionObject;
      if (throwOnEmptyData === false) {
        // If this is a nullable operation, don't throw errors on empty
        connectionObject = assertNullableOperationSuccess(response, dataPath);
      } else {
        // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
        // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
        connectionObject = assertOperationSuccess(response, dataPath, throwOnEmptyData);
      }

      const records = hydrateConnection<Shape>(response, connectionObject);
      return GadgetRecordList.boot<Shape>(modelManager, records, { options, pageInfo: connectionObject.pageInfo });
    },
    options
  );
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
    namespace?: string | string[] | null,
    hasReturnType?: HasReturnType
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
    namespace?: string | string[] | null,
    hasReturnType?: false | null
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
    namespace?: string | string[] | null
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
    namespace?: string | string[] | null
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
    namespace?: string | string[] | null,
    hasReturnType?: HasReturnType
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
    namespace?: string | string[] | null,
    hasReturnType?: false | null
  ): Promise<Shape extends void ? void : GadgetRecord<Shape>[]>;
}

export const actionRunner: ActionRunner = async (
  modelManager: { connection: GadgetConnection },
  operation: string,
  defaultSelection: FieldSelection | null,
  modelApiIdentifier: string,
  modelSelectionField: string,
  isBulkAction: boolean,
  variables: VariablesOptions,
  options?: BaseFindOptions | null,
  namespace?: string | string[] | null,
  hasReturnType?: HasReturnType | null
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
  const dataPath = namespaceDataPath([operation], namespace);

  // pass bulk responses through without any assertions since we can have a success: false response but still want
  // to process it in a similar fashion since some of the records could have been processed
  if (!isBulkAction) {
    const mutationTriple = assertMutationSuccess(response, dataPath);

    return processActionResponse(defaultSelection, response, mutationTriple, modelSelectionField, hasReturnType);
  } else {
    const mutationTriple = get(response.data, dataPath);

    const results = processBulkActionResponse(defaultSelection, response, mutationTriple, modelSelectionField, hasReturnType);
    if (mutationTriple.errors) {
      const errors = mutationTriple.errors.map((error: any) => gadgetErrorFor(error));
      throw new GadgetErrorGroup(errors, results);
    }

    return results;
  }
};

const processBulkActionResponse = <Shape extends RecordShape = any>(
  defaultSelection: FieldSelection | null,
  response: any,
  records: any,
  modelSelectionField: string,
  hasReturnType?: HasReturnType | null
) => {
  if (defaultSelection == null) return;
  if (!hasReturnType) {
    return hydrateRecordArray<Shape>(response, records[modelSelectionField]);
  } else if (typeof hasReturnType == "boolean") {
    return records.results;
  } else {
    return Object.entries(hasReturnType).flatMap(([returnTypeField, innerHasReturnType]) => {
      const results = records[returnTypeField];

      if (!Array.isArray(results)) {
        return [];
      }

      return results.map((result) => {
        const returnTypeForResult =
          "hasReturnType" in innerHasReturnType ? returnTypeForRecord(result, innerHasReturnType.hasReturnType) : false;

        if (!returnTypeForResult) {
          return hydrateRecord<Shape>(response, result);
        } else {
          return processActionResponse(defaultSelection, response, result, modelSelectionField, returnTypeForResult);
        }
      });
    });
  }
};

export const processActionResponse = <Shape extends RecordShape = any>(
  defaultSelection: FieldSelection | null,
  response: any,
  record: any,
  modelSelectionField: string,
  hasReturnType?: HasReturnType | null
): any => {
  // Delete actions have a null selection. We do an early return for this because `hydrateRecordArray` will fail
  // if there's nothing at `mutationResult[modelSelectionField]`, but the caller isn't expecting a return (void).
  if (defaultSelection == null) return;
  if (!hasReturnType) {
    return hydrateRecord<Shape>(response, record[modelSelectionField]);
  } else if (typeof hasReturnType == "boolean") {
    return record.result;
  } else {
    const innerReturnType = returnTypeForRecord(record, hasReturnType);

    return processActionResponse(defaultSelection, response, record, modelSelectionField, innerReturnType);
  }
};

const returnTypeForRecord = (record: any, hasReturnType: HasReturnType) => {
  if (typeof hasReturnType == "boolean") {
    return hasReturnType;
  }

  const innerReturnTypeForTypename = hasReturnType[`... on ${record.__typename}`];

  return innerReturnTypeForTypename && "hasReturnType" in innerReturnTypeForTypename ? innerReturnTypeForTypename.hasReturnType : false;
};

export const globalActionRunner = async (
  connection: GadgetConnection,
  operation: string,
  variables: VariablesOptions,
  namespace?: string | string[] | null
) => {
  const plan = globalActionOperation(operation, variables, namespace);
  const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
  const dataPath = namespaceDataPath([operation], namespace);
  return assertMutationSuccess(response, dataPath).result;
};

export const computedViewRunner = async (
  connection: GadgetConnection,
  operation: string,
  defaultSelection: FieldSelection,
  variableValues?: VariablesOptions,
  selection?: FieldSelection,
  namespace?: string | string[] | null
) => {
  const { query, variables } = computedViewOperation(operation, defaultSelection, variableValues, selection, namespace);
  const response = await connection.currentClient.query(query, variables);
  const dataPath = namespaceDataPath([operation], namespace);
  return assertOperationSuccess(response, dataPath);
};

export async function enqueueActionRunner<SchemaT, Action extends AnyBulkActionFunction, Result = BackgroundActionHandle<SchemaT, Action>>(
  connection: GadgetConnection,
  action: Action,
  variables: Action["variablesType"],
  options?: EnqueueBackgroundActionOptions<Action>
): Promise<Result[]>;
export async function enqueueActionRunner<SchemaT, Action extends AnyActionFunction, Result = BackgroundActionHandle<SchemaT, Action>>(
  connection: GadgetConnection,
  action: Action,
  variables: Action["variablesType"],
  options?: EnqueueBackgroundActionOptions<Action>
): Promise<Result>;
export async function enqueueActionRunner<SchemaT, Action extends AnyActionFunction, Result = BackgroundActionHandle<SchemaT, Action>>(
  connection: GadgetConnection,
  action: Action,
  variables: Action["variablesType"],
  options: EnqueueBackgroundActionOptions<Action> = {}
): Promise<Result | Result[]> {
  const normalizedVariableValues = action.isBulk
    ? disambiguateBulkActionVariables(action as ActionFunctionMetadata<any, any, any, any, any, true>, variables)
    : disambiguateActionVariables(action, variables);
  const variableOptions = setVariableOptionValues(action.variables, normalizedVariableValues);

  const plan = enqueueActionOperation(action.operationName, variableOptions, action.namespace, options, action.isBulk);
  const response = await connection.currentClient.mutation(plan.query, plan.variables, options).toPromise();
  const dataPath = ["background", ...namespaceDataPath([action.operationName], action.namespace)];

  try {
    const result = assertMutationSuccess(response, dataPath);
    if (action.isBulk) {
      return result.backgroundActions.map((result: { id: string }) => new BackgroundActionHandle(connection, action, result.id));
    } else {
      return new BackgroundActionHandle(connection, action, result.backgroundAction.id) as Result;
    }
  } catch (error: any) {
    if ("code" in error && error.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && options?.id && options.onDuplicateID == "ignore") {
      return new BackgroundActionHandle(connection, action, options.id) as Result;
    }
    throw error;
  }
}

export const backgroundActionResultRunner = async <
  SchemaT,
  Action extends ActionFunctionMetadata<any, any, any, SchemaT, any, any> | GlobalActionFunction<any>,
  Options extends ActionFunctionOptions<Action>,
  ResultData = BackgroundActionResultData<Action, Options>
>(
  connection: GadgetConnection,
  id: string,
  action: Action,
  options?: Options
): Promise<BackgroundActionResult<ResultData>> => {
  const plan = backgroundActionResultOperation(id, action, options);
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
        action.isBulk ? action.modelApiIdentifier : action.modelSelectionField,
        action.hasReturnType
      );
      break;
    }
    case "globalAction": {
      backgroundAction.result = backgroundAction.result.result;
      break;
    }
  }

  return backgroundAction as BackgroundActionResult<ResultData>;
};

/** @deprecated previous export name, @see backgroundActionResultRunner */
export const actionResultRunner = backgroundActionResultRunner;
