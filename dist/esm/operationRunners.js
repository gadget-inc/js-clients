import { filter, pipe, take, toAsyncIterable, toPromise } from "wonka";
import { GadgetRecordList } from "./GadgetRecordList.js";
import { actionOperation, findManyOperation, findOneByFieldOperation, findOneOperation, globalActionOperation, } from "./operationBuilders.js";
import { GadgetErrorGroup, assertMutationSuccess, assertNullableOperationSuccess, assertOperationSuccess, gadgetErrorFor, get, getNonUniqueDataError, hydrateConnection, hydrateRecord, hydrateRecordArray, } from "./support.js";
const mapAsyncIterable = (source, mapper) => {
    return {
        [Symbol.asyncIterator]() {
            const iter = source[Symbol.asyncIterator]();
            return {
                async next() {
                    const { done, value } = await iter.next();
                    return {
                        done,
                        value: typeof value != "undefined" ? mapper(value) : undefined,
                    };
                },
                async return(value) {
                    var _a;
                    return (await ((_a = iter.return) === null || _a === void 0 ? void 0 : _a.call(iter, value)));
                },
            };
        },
    };
};
/** Given a stream, return an async iterable when live querying, and a promise resolving to the last value otherwise */
function maybeLiveStream($result, mapper, options) {
    if (options === null || options === void 0 ? void 0 : options.live) {
        return mapAsyncIterable(toAsyncIterable($result), mapper);
    }
    else {
        const promise = pipe($result, filter((result) => !result.stale && !result.hasNext), take(1), toPromise);
        return promise.then((value) => mapper(value));
    }
}
export const findOneRunner = async (modelManager, operation, id, defaultSelection, modelApiIdentifier, options, throwOnEmptyData = true) => {
    const plan = findOneOperation(operation, id, defaultSelection, modelApiIdentifier, options);
    const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);
    return await maybeLiveStream($results, (response) => {
        const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
        const record = assertSuccess(response, [operation]);
        return hydrateRecord(response, record);
    }, options);
};
export const findOneByFieldRunner = async (modelManager, operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options) => {
    const plan = findOneByFieldOperation(operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options);
    const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);
    return await maybeLiveStream($results, (response) => {
        const connectionObject = assertOperationSuccess(response, [operation]);
        const records = hydrateConnection(response, connectionObject);
        if (records.length > 1) {
            throw getNonUniqueDataError(modelApiIdentifier, fieldName, fieldValue);
        }
        return records[0];
    }, options);
};
export const findManyRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, options, throwOnEmptyData) => {
    const plan = findManyOperation(operation, defaultSelection, modelApiIdentifier, options);
    const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);
    return await maybeLiveStream($results, (response) => {
        let connectionObject;
        if (throwOnEmptyData === false) {
            // If this is a nullable operation, don't throw errors on empty
            connectionObject = assertNullableOperationSuccess(response, [operation]);
        }
        else {
            // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
            // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
            connectionObject = assertOperationSuccess(response, [operation], throwOnEmptyData);
        }
        const records = hydrateConnection(response, connectionObject);
        return GadgetRecordList.boot(modelManager, records, { options, pageInfo: connectionObject.pageInfo });
    }, options);
};
export const actionRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, modelSelectionField, isBulkAction, variables, options, namespace, hasReturnType) => {
    const plan = actionOperation(operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace, isBulkAction, hasReturnType);
    const response = await modelManager.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    // pass bulk responses through without any assertions since we can have a success: false response but still want
    // to process it in a similar fashion since some of the records could have been processed
    const dataPath = namespace ? [namespace, operation] : [operation];
    if (!isBulkAction) {
        const mutationTriple = assertMutationSuccess(response, dataPath);
        // Delete actions have a null selection. We do an early return for this because `hydrateRecordArray` will fail
        // if there's nothing at `mutationResult[modelSelectionField]`, but the caller isn't expecting a return (void).
        if (defaultSelection == null)
            return;
        if (!hasReturnType) {
            return hydrateRecord(response, mutationTriple[modelSelectionField]);
        }
        else {
            return mutationTriple.result;
        }
    }
    else {
        const mutationTriple = get(response.data, dataPath);
        const results = mutationTriple[modelSelectionField] && defaultSelection
            ? hydrateRecordArray(response, mutationTriple[modelSelectionField])
            : undefined;
        if (mutationTriple.errors) {
            const errors = mutationTriple.errors.map((error) => gadgetErrorFor(error));
            throw new GadgetErrorGroup(errors, results);
        }
        return results;
    }
};
export const globalActionRunner = async (connection, operation, variables, namespace) => {
    const plan = globalActionOperation(operation, variables, namespace);
    const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const dataPath = namespace ? [namespace, operation] : [operation];
    return assertMutationSuccess(response, dataPath).result;
};
//# sourceMappingURL=operationRunners.js.map