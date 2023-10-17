import type { OperationResult } from "@urql/core";
import type { Source } from "wonka";
import { filter, pipe, take, toAsyncIterable, toPromise } from "wonka";
import type { FieldSelection } from "./FieldSelection.js";
import type { GadgetConnection } from "./GadgetConnection.js";
import type { GadgetRecord, RecordShape } from "./GadgetRecord.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import type { AnyModelManager } from "./ModelManager.js";
import {
  actionOperation,
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
  gadgetErrorFor,
  get,
  getNonUniqueDataError,
  hydrateConnection,
  hydrateRecord,
  hydrateRecordArray,
} from "./support.js";
import type { BaseFindOptions, FindManyOptions, VariablesOptions } from "./types.js";

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

export const findOneRunner = <Shape extends RecordShape = any, Options extends BaseFindOptions = { live: false }>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  id: string | undefined,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: Options | null,
  throwOnEmptyData = true
) => {
  const plan = findOneOperation(operation, id, defaultSelection, modelApiIdentifier, options);
  const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);

  return maybeLiveStream(
    $results,
    (response) => {
      const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
      const record = assertSuccess(response, [operation]);
      return hydrateRecord<Shape>(response, record);
    },
    options
  );
};

export const findOneByFieldRunner = <Shape extends RecordShape = any>(
  modelManager: { connection: GadgetConnection },
  operation: string,
  fieldName: string,
  fieldValue: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: BaseFindOptions | null
) => {
  const plan = findOneByFieldOperation(operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options);
  const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);

  return maybeLiveStream(
    $results,
    (response) => {
      const connectionObject = assertOperationSuccess(response, [operation]);
      const records = hydrateConnection<Shape>(response, connectionObject);

      if (records.length > 1) {
        throw getNonUniqueDataError(modelApiIdentifier, fieldName, fieldValue);
      }
      return records[0];
    },
    options
  );
};

export const findManyRunner = <Shape extends RecordShape = any, Options extends FindManyOptions = { live: false }>(
  modelManager: AnyModelManager,
  operation: string,
  defaultSelection: FieldSelection,
  modelApiIdentifier: string,
  options?: Options,
  throwOnEmptyData?: boolean
) => {
  const plan = findManyOperation(operation, defaultSelection, modelApiIdentifier, options);
  const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);

  return maybeLiveStream(
    $results,
    (response) => {
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
