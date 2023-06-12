"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalActionRunner = exports.actionRunner = exports.findManyRunner = exports.findOneByFieldRunner = exports.findOneRunner = void 0;
const _1 = require(".");
const GadgetRecordList_1 = require("./GadgetRecordList");
const operationBuilders_1 = require("./operationBuilders");
const support_1 = require("./support");
const findOneRunner = async (modelManager, operation, id, defaultSelection, modelApiIdentifier, options, throwOnEmptyData = true) => {
    const plan = (0, operationBuilders_1.findOneOperation)(operation, id, defaultSelection, modelApiIdentifier, options);
    const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const assertSuccess = throwOnEmptyData ? support_1.assertOperationSuccess : support_1.assertNullableOperationSuccess;
    const record = assertSuccess(response, [operation]);
    return (0, support_1.hydrateRecord)(response, record);
};
exports.findOneRunner = findOneRunner;
const findOneByFieldRunner = async (modelManager, operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options) => {
    const plan = (0, _1.findOneByFieldOperation)(operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options);
    const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const connectionObject = (0, support_1.assertOperationSuccess)(response, [operation]);
    const records = (0, support_1.hydrateConnection)(response, connectionObject);
    if (records.length > 1) {
        throw (0, support_1.getNonUniqueDataError)(modelApiIdentifier, fieldName, fieldValue);
    }
    return records[0];
};
exports.findOneByFieldRunner = findOneByFieldRunner;
const findManyRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, options, throwOnEmptyData) => {
    const plan = (0, _1.findManyOperation)(operation, defaultSelection, modelApiIdentifier, options);
    const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
    let connectionObject;
    if (throwOnEmptyData === false) {
        // If this is a nullable operation, don't throw errors on empty
        connectionObject = (0, support_1.assertNullableOperationSuccess)(response, [operation]);
    }
    else {
        // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
        // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
        connectionObject = (0, support_1.assertOperationSuccess)(response, [operation], throwOnEmptyData);
    }
    const records = (0, support_1.hydrateConnection)(response, connectionObject);
    return GadgetRecordList_1.GadgetRecordList.boot(modelManager, records, { options, pageInfo: connectionObject.pageInfo });
};
exports.findManyRunner = findManyRunner;
const actionRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, modelSelectionField, isBulkAction, variables, options, namespace) => {
    const plan = (0, _1.actionOperation)(operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace);
    const response = await modelManager.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    // pass bulk responses through without any assertions since we can have a success: false response but still want
    // to process it in a similar fashion since some of the records could have been processed
    const dataPath = namespace ? [namespace, operation] : [operation];
    const mutationResult = isBulkAction ? (0, support_1.get)(response.data, dataPath) : (0, support_1.assertMutationSuccess)(response, dataPath);
    // Currently, delete actions have a null selection. We do an early return for this because `hydrateRecordArray` will fail
    // if there's nothing at `mutationResult[modelSelectionField]`, but the caller isn't expecting a return (void).
    if (defaultSelection == null) {
        return;
    }
    // todo this does not support pagination params right now, we'll need to add it to bulk action Results
    if (isBulkAction) {
        return (0, support_1.hydrateRecordArray)(response, mutationResult[modelSelectionField]);
    }
    else {
        return (0, support_1.hydrateRecord)(response, mutationResult[modelSelectionField]);
    }
};
exports.actionRunner = actionRunner;
const globalActionRunner = async (connection, operation, variables, namespace) => {
    const plan = (0, _1.globalActionOperation)(operation, variables, namespace);
    const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const dataPath = namespace ? [namespace, operation] : [operation];
    return (0, support_1.assertMutationSuccess)(response, dataPath).result;
};
exports.globalActionRunner = globalActionRunner;
//# sourceMappingURL=operationRunners.js.map