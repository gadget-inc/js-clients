import { filter, pipe, take, toAsyncIterable, toPromise } from "wonka";
import { BackgroundActionHandle } from "./BackgroundActionHandle.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import { actionOperation, backgroundActionResultOperation, enqueueActionOperation, findManyOperation, findOneByFieldOperation, findOneOperation, globalActionOperation, } from "./operationBuilders.js";
import { GadgetErrorGroup, GadgetNotFoundError, assertMutationSuccess, assertNullableOperationSuccess, assertOperationSuccess, assertResponseSuccess, disambiguateActionVariables, disambiguateBulkActionVariables, gadgetErrorFor, get, getNonUniqueDataError, hydrateConnection, hydrateRecord, hydrateRecordArray, namespaceDataPath, setVariableOptionValues, } from "./support.js";
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
export const findOneRunner = (modelManager, operation, id, defaultSelection, modelApiIdentifier, options, throwOnEmptyData = true, namespace) => {
    const plan = findOneOperation(operation, id, defaultSelection, modelApiIdentifier, options, namespace);
    const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);
    return maybeLiveStream($results, (response) => {
        const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
        const dataPath = namespaceDataPath([operation], namespace);
        const record = assertSuccess(response, dataPath);
        return hydrateRecord(response, record);
    }, options);
};
export const findOneByFieldRunner = (modelManager, operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options, throwOnEmptyData = true, namespace) => {
    const plan = findOneByFieldOperation(operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options, namespace);
    const dataPath = namespaceDataPath([operation], namespace);
    const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);
    return maybeLiveStream($results, (response) => {
        const connectionObject = assertOperationSuccess(response, dataPath);
        const records = hydrateConnection(response, connectionObject);
        if (records.length > 1) {
            throw getNonUniqueDataError(modelApiIdentifier, fieldName, fieldValue);
        }
        const result = records[0];
        if (!result && throwOnEmptyData) {
            throw new GadgetNotFoundError(`${modelApiIdentifier} record with ${fieldName}=${fieldValue} not found`);
        }
        return result !== null && result !== void 0 ? result : null;
    }, options);
};
export const findManyRunner = (modelManager, operation, defaultSelection, modelApiIdentifier, options, throwOnEmptyData, namespace) => {
    const plan = findManyOperation(operation, defaultSelection, modelApiIdentifier, options, namespace);
    const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);
    const dataPath = namespaceDataPath([operation], namespace);
    return maybeLiveStream($results, (response) => {
        let connectionObject;
        if (throwOnEmptyData === false) {
            // If this is a nullable operation, don't throw errors on empty
            connectionObject = assertNullableOperationSuccess(response, dataPath);
        }
        else {
            // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
            // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
            connectionObject = assertOperationSuccess(response, dataPath, throwOnEmptyData);
        }
        const records = hydrateConnection(response, connectionObject);
        return GadgetRecordList.boot(modelManager, records, { options, pageInfo: connectionObject.pageInfo });
    }, options);
};
export const actionRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, modelSelectionField, isBulkAction, variables, options, namespace, hasReturnType) => {
    const plan = actionOperation(operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace, isBulkAction, hasReturnType);
    const response = await modelManager.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const dataPath = namespaceDataPath([operation], namespace);
    // pass bulk responses through without any assertions since we can have a success: false response but still want
    // to process it in a similar fashion since some of the records could have been processed
    if (!isBulkAction) {
        const mutationTriple = assertMutationSuccess(response, dataPath);
        return processActionResponse(defaultSelection, response, mutationTriple, modelSelectionField, hasReturnType);
    }
    else {
        const mutationTriple = get(response.data, dataPath);
        const results = processBulkActionResponse(defaultSelection, response, mutationTriple, modelSelectionField, hasReturnType);
        if (mutationTriple.errors) {
            const errors = mutationTriple.errors.map((error) => gadgetErrorFor(error));
            throw new GadgetErrorGroup(errors, results);
        }
        return results;
    }
};
const processBulkActionResponse = (defaultSelection, response, records, modelSelectionField, hasReturnType) => {
    if (defaultSelection == null)
        return [];
    if (!hasReturnType) {
        return hydrateRecordArray(response, records[modelSelectionField]);
    }
    else if (typeof hasReturnType == "boolean") {
        return records.results;
    }
    else {
        return Object.entries(hasReturnType).flatMap(([returnTypeField, innerHasReturnType]) => {
            const results = records[returnTypeField];
            if (!Array.isArray(results)) {
                return [];
            }
            return results.map((result) => {
                const returnTypeForResult = "hasReturnType" in innerHasReturnType ? returnTypeForRecord(result, innerHasReturnType.hasReturnType) : false;
                if (!returnTypeForResult) {
                    return hydrateRecord(response, result);
                }
                else {
                    return processActionResponse(defaultSelection, response, result, modelSelectionField, returnTypeForResult);
                }
            });
        });
    }
};
const processActionResponse = (defaultSelection, response, record, modelSelectionField, hasReturnType) => {
    // Delete actions have a null selection. We do an early return for this because `hydrateRecordArray` will fail
    // if there's nothing at `mutationResult[modelSelectionField]`, but the caller isn't expecting a return (void).
    if (defaultSelection == null)
        return;
    if (!hasReturnType) {
        return hydrateRecord(response, record[modelSelectionField]);
    }
    else if (typeof hasReturnType == "boolean") {
        return record.result;
    }
    else {
        const innerReturnType = returnTypeForRecord(record, hasReturnType);
        return processActionResponse(defaultSelection, response, record, modelSelectionField, innerReturnType);
    }
};
const returnTypeForRecord = (record, hasReturnType) => {
    if (typeof hasReturnType == "boolean") {
        return hasReturnType;
    }
    const innerReturnTypeForTypename = hasReturnType[`... on ${record.__typename}`];
    return innerReturnTypeForTypename && "hasReturnType" in innerReturnTypeForTypename ? innerReturnTypeForTypename.hasReturnType : false;
};
export const globalActionRunner = async (connection, operation, variables, namespace) => {
    const plan = globalActionOperation(operation, variables, namespace);
    const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const dataPath = namespaceDataPath([operation], namespace);
    return assertMutationSuccess(response, dataPath).result;
};
export async function enqueueActionRunner(connection, action, variables, options = {}) {
    const normalizedVariableValues = action.isBulk
        ? disambiguateBulkActionVariables(action, variables)
        : disambiguateActionVariables(action, variables);
    const variableOptions = setVariableOptionValues(action.variables, normalizedVariableValues);
    const plan = enqueueActionOperation(action.operationName, variableOptions, action.namespace, options, action.isBulk);
    const response = await connection.currentClient.mutation(plan.query, plan.variables, options).toPromise();
    const dataPath = ["background", ...namespaceDataPath([action.operationName], action.namespace)];
    try {
        const result = assertMutationSuccess(response, dataPath);
        if (action.isBulk) {
            return result.backgroundActions.map((result) => new BackgroundActionHandle(connection, action, result.id));
        }
        else {
            return new BackgroundActionHandle(connection, action, result.backgroundAction.id);
        }
    }
    catch (error) {
        if ("code" in error && error.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (options === null || options === void 0 ? void 0 : options.id) && options.onDuplicateID == "ignore") {
            return new BackgroundActionHandle(connection, action, options.id);
        }
        throw error;
    }
}
export const backgroundActionResultRunner = async (connection, id, action, options) => {
    const plan = backgroundActionResultOperation(id, action, options);
    const subscription = connection.currentClient.subscription(plan.query, plan.variables);
    const response = await pipe(subscription, filter((operation) => { var _a, _b; return operation.error || ((_b = (_a = operation.data) === null || _a === void 0 ? void 0 : _a.backgroundAction) === null || _b === void 0 ? void 0 : _b.outcome); }), take(1), toPromise);
    const backgroundAction = assertOperationSuccess(response, ["backgroundAction"]);
    assertResponseSuccess(backgroundAction.result);
    switch (action.type) {
        case "action": {
            backgroundAction.result = processActionResponse(action.defaultSelection, response.data, backgroundAction.result, action.isBulk ? action.modelApiIdentifier : action.modelSelectionField, action.hasReturnType);
            break;
        }
        case "globalAction": {
            backgroundAction.result = backgroundAction.result.result;
            break;
        }
    }
    return backgroundAction;
};
/** @deprecated previous export name, @see backgroundActionResultRunner */
export const actionResultRunner = backgroundActionResultRunner;
//# sourceMappingURL=operationRunners.js.map