import { GadgetRecordList } from "./GadgetRecordList.js";
import { actionOperation, findManyOperation, findOneByFieldOperation, findOneOperation, globalActionOperation, } from "./operationBuilders.js";
import { assertMutationSuccess, assertNullableOperationSuccess, assertOperationSuccess, get, getNonUniqueDataError, hydrateConnection, hydrateRecord, hydrateRecordArray, } from "./support.js";
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
export const actionRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, modelSelectionField, isBulkAction, variables, options, namespace) => {
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
        return hydrateRecordArray(response, mutationResult[modelSelectionField]);
    }
    else {
        return hydrateRecord(response, mutationResult[modelSelectionField]);
    }
};
export const globalActionRunner = async (connection, operation, variables, namespace) => {
    const plan = globalActionOperation(operation, variables, namespace);
    const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const dataPath = namespace ? [namespace, operation] : [operation];
    return assertMutationSuccess(response, dataPath).result;
};
//# sourceMappingURL=operationRunners.js.map