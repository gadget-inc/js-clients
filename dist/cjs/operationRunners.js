"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionResultRunner = exports.backgroundActionResultRunner = exports.enqueueActionRunner = exports.globalActionRunner = exports.processActionResponse = exports.actionRunner = exports.findManyRunner = exports.findOneByFieldRunner = exports.findOneRunner = void 0;
const wonka_1 = require("wonka");
const BackgroundActionHandle_js_1 = require("./BackgroundActionHandle.js");
const GadgetRecordList_js_1 = require("./GadgetRecordList.js");
const operationBuilders_js_1 = require("./operationBuilders.js");
const support_js_1 = require("./support.js");
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
        return mapAsyncIterable((0, wonka_1.toAsyncIterable)($result), mapper);
    }
    else {
        const promise = (0, wonka_1.pipe)($result, (0, wonka_1.filter)((result) => !result.stale && !result.hasNext), (0, wonka_1.take)(1), wonka_1.toPromise);
        return promise.then((value) => mapper(value));
    }
}
const findOneRunner = (modelManager, operation, id, defaultSelection, modelApiIdentifier, options, throwOnEmptyData = true, namespace) => {
    const plan = (0, operationBuilders_js_1.findOneOperation)(operation, id, defaultSelection, modelApiIdentifier, options, namespace);
    const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);
    return maybeLiveStream($results, (response) => {
        const assertSuccess = throwOnEmptyData ? support_js_1.assertOperationSuccess : support_js_1.assertNullableOperationSuccess;
        const dataPath = (0, support_js_1.namespaceDataPath)([operation], namespace);
        const record = assertSuccess(response, dataPath);
        return (0, support_js_1.hydrateRecord)(response, record);
    }, options);
};
exports.findOneRunner = findOneRunner;
const findOneByFieldRunner = (modelManager, operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options, throwOnEmptyData = true, namespace) => {
    const plan = (0, operationBuilders_js_1.findOneByFieldOperation)(operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options, namespace);
    const dataPath = (0, support_js_1.namespaceDataPath)([operation], namespace);
    const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);
    return maybeLiveStream($results, (response) => {
        const connectionObject = (0, support_js_1.assertOperationSuccess)(response, dataPath);
        const records = (0, support_js_1.hydrateConnection)(response, connectionObject);
        if (records.length > 1) {
            throw (0, support_js_1.getNonUniqueDataError)(modelApiIdentifier, fieldName, fieldValue);
        }
        const result = records[0];
        if (!result && throwOnEmptyData) {
            throw new support_js_1.GadgetNotFoundError(`${modelApiIdentifier} record with ${fieldName}=${fieldValue} not found`);
        }
        return result !== null && result !== void 0 ? result : null;
    }, options);
};
exports.findOneByFieldRunner = findOneByFieldRunner;
const findManyRunner = (modelManager, operation, defaultSelection, modelApiIdentifier, options, throwOnEmptyData, namespace) => {
    const plan = (0, operationBuilders_js_1.findManyOperation)(operation, defaultSelection, modelApiIdentifier, options, namespace);
    const $results = modelManager.connection.currentClient.query(plan.query, plan.variables);
    const dataPath = (0, support_js_1.namespaceDataPath)([operation], namespace);
    return maybeLiveStream($results, (response) => {
        let connectionObject;
        if (throwOnEmptyData === false) {
            // If this is a nullable operation, don't throw errors on empty
            connectionObject = (0, support_js_1.assertNullableOperationSuccess)(response, dataPath);
        }
        else {
            // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
            // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
            connectionObject = (0, support_js_1.assertOperationSuccess)(response, dataPath, throwOnEmptyData);
        }
        const records = (0, support_js_1.hydrateConnection)(response, connectionObject);
        return GadgetRecordList_js_1.GadgetRecordList.boot(modelManager, records, { options, pageInfo: connectionObject.pageInfo });
    }, options);
};
exports.findManyRunner = findManyRunner;
const actionRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, modelSelectionField, isBulkAction, variables, options, namespace, hasReturnType) => {
    const plan = (0, operationBuilders_js_1.actionOperation)(operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace, isBulkAction, hasReturnType);
    const response = await modelManager.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const dataPath = (0, support_js_1.namespaceDataPath)([operation], namespace);
    // pass bulk responses through without any assertions since we can have a success: false response but still want
    // to process it in a similar fashion since some of the records could have been processed
    if (!isBulkAction) {
        const mutationTriple = (0, support_js_1.assertMutationSuccess)(response, dataPath);
        return (0, exports.processActionResponse)(defaultSelection, response, mutationTriple, modelSelectionField, hasReturnType);
    }
    else {
        const mutationTriple = (0, support_js_1.get)(response.data, dataPath);
        const results = processBulkActionResponse(defaultSelection, response, mutationTriple, modelSelectionField, hasReturnType);
        if (mutationTriple.errors) {
            const errors = mutationTriple.errors.map((error) => (0, support_js_1.gadgetErrorFor)(error));
            throw new support_js_1.GadgetErrorGroup(errors, results);
        }
        return results;
    }
};
exports.actionRunner = actionRunner;
const processBulkActionResponse = (defaultSelection, response, records, modelSelectionField, hasReturnType) => {
    if (defaultSelection == null)
        return;
    if (!hasReturnType) {
        return (0, support_js_1.hydrateRecordArray)(response, records[modelSelectionField]);
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
                    return (0, support_js_1.hydrateRecord)(response, result);
                }
                else {
                    return (0, exports.processActionResponse)(defaultSelection, response, result, modelSelectionField, returnTypeForResult);
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
        return (0, support_js_1.hydrateRecord)(response, record[modelSelectionField]);
    }
    else if (typeof hasReturnType == "boolean") {
        return record.result;
    }
    else {
        const innerReturnType = returnTypeForRecord(record, hasReturnType);
        return (0, exports.processActionResponse)(defaultSelection, response, record, modelSelectionField, innerReturnType);
    }
};
exports.processActionResponse = processActionResponse;
const returnTypeForRecord = (record, hasReturnType) => {
    if (typeof hasReturnType == "boolean") {
        return hasReturnType;
    }
    const innerReturnTypeForTypename = hasReturnType[`... on ${record.__typename}`];
    return innerReturnTypeForTypename && "hasReturnType" in innerReturnTypeForTypename ? innerReturnTypeForTypename.hasReturnType : false;
};
const globalActionRunner = async (connection, operation, variables, namespace) => {
    const plan = (0, operationBuilders_js_1.globalActionOperation)(operation, variables, namespace);
    const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const dataPath = (0, support_js_1.namespaceDataPath)([operation], namespace);
    return (0, support_js_1.assertMutationSuccess)(response, dataPath).result;
};
exports.globalActionRunner = globalActionRunner;
async function enqueueActionRunner(connection, action, variables, options = {}) {
    const normalizedVariableValues = action.isBulk
        ? (0, support_js_1.disambiguateBulkActionVariables)(action, variables)
        : (0, support_js_1.disambiguateActionVariables)(action, variables);
    const variableOptions = (0, support_js_1.setVariableOptionValues)(action.variables, normalizedVariableValues);
    const plan = (0, operationBuilders_js_1.enqueueActionOperation)(action.operationName, variableOptions, action.namespace, options, action.isBulk);
    const response = await connection.currentClient.mutation(plan.query, plan.variables, options).toPromise();
    const dataPath = ["background", ...(0, support_js_1.namespaceDataPath)([action.operationName], action.namespace)];
    try {
        const result = (0, support_js_1.assertMutationSuccess)(response, dataPath);
        if (action.isBulk) {
            return result.backgroundActions.map((result) => new BackgroundActionHandle_js_1.BackgroundActionHandle(connection, action, result.id));
        }
        else {
            return new BackgroundActionHandle_js_1.BackgroundActionHandle(connection, action, result.backgroundAction.id);
        }
    }
    catch (error) {
        if ("code" in error && error.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (options === null || options === void 0 ? void 0 : options.id) && options.onDuplicateID == "ignore") {
            return new BackgroundActionHandle_js_1.BackgroundActionHandle(connection, action, options.id);
        }
        throw error;
    }
}
exports.enqueueActionRunner = enqueueActionRunner;
const backgroundActionResultRunner = async (connection, id, action, options) => {
    const plan = (0, operationBuilders_js_1.backgroundActionResultOperation)(id, action, options);
    const subscription = connection.currentClient.subscription(plan.query, plan.variables);
    const response = await (0, wonka_1.pipe)(subscription, (0, wonka_1.filter)((operation) => { var _a, _b; return operation.error || ((_b = (_a = operation.data) === null || _a === void 0 ? void 0 : _a.backgroundAction) === null || _b === void 0 ? void 0 : _b.outcome); }), (0, wonka_1.take)(1), wonka_1.toPromise);
    const backgroundAction = (0, support_js_1.assertOperationSuccess)(response, ["backgroundAction"]);
    (0, support_js_1.assertResponseSuccess)(backgroundAction.result);
    switch (action.type) {
        case "action": {
            backgroundAction.result = (0, exports.processActionResponse)(action.defaultSelection, response.data, backgroundAction.result, action.isBulk ? action.modelApiIdentifier : action.modelSelectionField, action.hasReturnType);
            break;
        }
        case "globalAction": {
            backgroundAction.result = backgroundAction.result.result;
            break;
        }
    }
    return backgroundAction;
};
exports.backgroundActionResultRunner = backgroundActionResultRunner;
/** @deprecated previous export name, @see backgroundActionResultRunner */
exports.actionResultRunner = exports.backgroundActionResultRunner;
//# sourceMappingURL=operationRunners.js.map