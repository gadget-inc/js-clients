import { filter, pipe, take, toPromise } from "wonka";
import { BackgroundActionHandle } from "./BackgroundActionHandle.js";
import { GadgetRecordList } from "./GadgetRecordList.js";
import { actionOperation, actionResultOperation, enqueueActionOperation, findManyOperation, findOneByFieldOperation, findOneOperation, globalActionOperation, } from "./operationBuilders.js";
import { GadgetErrorGroup, assertMutationSuccess, assertNullableOperationSuccess, assertOperationSuccess, assertResponseSuccess, disambiguateActionVariables, disambiguateBulkActionVariables, gadgetErrorFor, get, getNonUniqueDataError, hydrateConnection, hydrateRecord, hydrateRecordArray, setVariableOptionValues, } from "./support.js";
export const findOneRunner = async (modelManager, operation, id, defaultSelection, modelApiIdentifier, options, throwOnEmptyData = true) => {
    const plan = findOneOperation(operation, id, defaultSelection, modelApiIdentifier, options);
    const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const assertSuccess = throwOnEmptyData ? assertOperationSuccess : assertNullableOperationSuccess;
    const record = assertSuccess(response, [operation]);
    return hydrateRecord(response, record);
};
export const findOneByFieldRunner = async (modelManager, operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options) => {
    const plan = findOneByFieldOperation(operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options);
    const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const connectionObject = assertOperationSuccess(response, [operation]);
    const records = hydrateConnection(response, connectionObject);
    if (records.length > 1) {
        throw getNonUniqueDataError(modelApiIdentifier, fieldName, fieldValue);
    }
    return records[0];
};
export const findManyRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, options, throwOnEmptyData) => {
    const plan = findManyOperation(operation, defaultSelection, modelApiIdentifier, options);
    const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
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
};
export const actionRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, modelSelectionField, isBulkAction, variables, options, namespace, hasReturnType) => {
    const plan = actionOperation(operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace, isBulkAction, hasReturnType);
    const response = await modelManager.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    // pass bulk responses through without any assertions since we can have a success: false response but still want
    // to process it in a similar fashion since some of the records could have been processed
    const dataPath = namespace ? [namespace, operation] : [operation];
    if (!isBulkAction) {
        const mutationTriple = assertMutationSuccess(response, dataPath);
        return processActionResponse(defaultSelection, response, mutationTriple[modelSelectionField], hasReturnType);
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
const processActionResponse = (defaultSelection, response, record, hasReturnType) => {
    // Delete actions have a null selection. We do an early return for this because `hydrateRecordArray` will fail
    // if there's nothing at `mutationResult[modelSelectionField]`, but the caller isn't expecting a return (void).
    if (defaultSelection == null)
        return;
    if (!hasReturnType) {
        return hydrateRecord(response, record);
    }
    else {
        return record.result;
    }
};
export const globalActionRunner = async (connection, operation, variables, namespace) => {
    const plan = globalActionOperation(operation, variables, namespace);
    const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const dataPath = namespace ? [namespace, operation] : [operation];
    return assertMutationSuccess(response, dataPath).result;
};
export const enqueueActionRunner = async (connection, action, variables, options = {}) => {
    const normalizedVariableValues = "isBulk" in action && action.isBulk
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
        return new BackgroundActionHandle(connection, action, result.backgroundAction.id, options);
    }
    catch (error) {
        if ("code" in error && error.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (options === null || options === void 0 ? void 0 : options.id) && options.onDuplicateID == "ignore") {
            return new BackgroundActionHandle(connection, action, options.id, options);
        }
        throw error;
    }
};
export const actionResultRunner = async (connection, id, action, options) => {
    const plan = actionResultOperation(id, action, options);
    const subscription = connection.currentClient.subscription(plan.query, plan.variables);
    const response = await pipe(subscription, filter((operation) => { var _a, _b; return operation.error || ((_b = (_a = operation.data) === null || _a === void 0 ? void 0 : _a.backgroundAction) === null || _b === void 0 ? void 0 : _b.outcome); }), take(1), toPromise);
    const backgroundAction = assertOperationSuccess(response, ["backgroundAction"]);
    assertResponseSuccess(backgroundAction.result);
    switch (action.type) {
        case "action": {
            backgroundAction.result = processActionResponse(action.defaultSelection, response.data, get(backgroundAction.result, [action.modelSelectionField]), action.hasReturnType);
            break;
        }
        case "globalAction": {
            backgroundAction.result = backgroundAction.result.result;
            break;
        }
    }
    return backgroundAction;
};
//# sourceMappingURL=operationRunners.js.map