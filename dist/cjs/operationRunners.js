"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionResultRunner = exports.enqueueActionRunner = exports.globalActionRunner = exports.actionRunner = exports.findManyRunner = exports.findOneByFieldRunner = exports.findOneRunner = void 0;
const wonka_1 = require("wonka");
const BackgroundActionHandle_js_1 = require("./BackgroundActionHandle.js");
const GadgetRecordList_js_1 = require("./GadgetRecordList.js");
const operationBuilders_js_1 = require("./operationBuilders.js");
const support_js_1 = require("./support.js");
const findOneRunner = async (modelManager, operation, id, defaultSelection, modelApiIdentifier, options, throwOnEmptyData = true) => {
    const plan = (0, operationBuilders_js_1.findOneOperation)(operation, id, defaultSelection, modelApiIdentifier, options);
    const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const assertSuccess = throwOnEmptyData ? support_js_1.assertOperationSuccess : support_js_1.assertNullableOperationSuccess;
    const record = assertSuccess(response, [operation]);
    return (0, support_js_1.hydrateRecord)(response, record);
};
exports.findOneRunner = findOneRunner;
const findOneByFieldRunner = async (modelManager, operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options) => {
    const plan = (0, operationBuilders_js_1.findOneByFieldOperation)(operation, fieldName, fieldValue, defaultSelection, modelApiIdentifier, options);
    const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
    const connectionObject = (0, support_js_1.assertOperationSuccess)(response, [operation]);
    const records = (0, support_js_1.hydrateConnection)(response, connectionObject);
    if (records.length > 1) {
        throw (0, support_js_1.getNonUniqueDataError)(modelApiIdentifier, fieldName, fieldValue);
    }
    return records[0];
};
exports.findOneByFieldRunner = findOneByFieldRunner;
const findManyRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, options, throwOnEmptyData) => {
    const plan = (0, operationBuilders_js_1.findManyOperation)(operation, defaultSelection, modelApiIdentifier, options);
    const response = await modelManager.connection.currentClient.query(plan.query, plan.variables).toPromise();
    let connectionObject;
    if (throwOnEmptyData === false) {
        // If this is a nullable operation, don't throw errors on empty
        connectionObject = (0, support_js_1.assertNullableOperationSuccess)(response, [operation]);
    }
    else {
        // Otherwise, passthrough the `throwOnEmptyData` flag, to account for
        // `findMany` (allows empty arrays) vs `findFirst` (no empty result) usage.
        connectionObject = (0, support_js_1.assertOperationSuccess)(response, [operation], throwOnEmptyData);
    }
    const records = (0, support_js_1.hydrateConnection)(response, connectionObject);
    return GadgetRecordList_js_1.GadgetRecordList.boot(modelManager, records, { options, pageInfo: connectionObject.pageInfo });
};
exports.findManyRunner = findManyRunner;
const actionRunner = async (modelManager, operation, defaultSelection, modelApiIdentifier, modelSelectionField, isBulkAction, variables, options, namespace, hasReturnType) => {
    const plan = (0, operationBuilders_js_1.actionOperation)(operation, defaultSelection, modelApiIdentifier, modelSelectionField, variables, options, namespace, isBulkAction, hasReturnType);
    const response = await modelManager.connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    // pass bulk responses through without any assertions since we can have a success: false response but still want
    // to process it in a similar fashion since some of the records could have been processed
    const dataPath = namespace ? [namespace, operation] : [operation];
    if (!isBulkAction) {
        const mutationTriple = (0, support_js_1.assertMutationSuccess)(response, dataPath);
        return processActionResponse(defaultSelection, response, mutationTriple[modelSelectionField], hasReturnType);
    }
    else {
        const mutationTriple = (0, support_js_1.get)(response.data, dataPath);
        const results = mutationTriple[modelSelectionField] && defaultSelection
            ? (0, support_js_1.hydrateRecordArray)(response, mutationTriple[modelSelectionField])
            : undefined;
        if (mutationTriple.errors) {
            const errors = mutationTriple.errors.map((error) => (0, support_js_1.gadgetErrorFor)(error));
            throw new support_js_1.GadgetErrorGroup(errors, results);
        }
        return results;
    }
};
exports.actionRunner = actionRunner;
const processActionResponse = (defaultSelection, response, record, hasReturnType) => {
    // Delete actions have a null selection. We do an early return for this because `hydrateRecordArray` will fail
    // if there's nothing at `mutationResult[modelSelectionField]`, but the caller isn't expecting a return (void).
    if (defaultSelection == null)
        return;
    if (!hasReturnType) {
        return (0, support_js_1.hydrateRecord)(response, record);
    }
    else {
        return record.result;
    }
};
const globalActionRunner = async (connection, operation, variables, namespace) => {
    const plan = (0, operationBuilders_js_1.globalActionOperation)(operation, variables, namespace);
    const response = await connection.currentClient.mutation(plan.query, plan.variables).toPromise();
    const dataPath = namespace ? [namespace, operation] : [operation];
    return (0, support_js_1.assertMutationSuccess)(response, dataPath).result;
};
exports.globalActionRunner = globalActionRunner;
const enqueueActionRunner = async (connection, action, variables, options = {}) => {
    const normalizedVariableValues = "isBulk" in action && action.isBulk
        ? (0, support_js_1.disambiguateBulkActionVariables)(action, variables)
        : (0, support_js_1.disambiguateActionVariables)(action, variables);
    const variableOptions = (0, support_js_1.setVariableOptionValues)(action.variables, normalizedVariableValues);
    const plan = (0, operationBuilders_js_1.enqueueActionOperation)(action.operationName, variableOptions, action.namespace, options);
    const response = await connection.currentClient.mutation(plan.query, plan.variables, options).toPromise();
    const dataPath = ["background", action.operationName];
    if (action.namespace) {
        dataPath.unshift(action.namespace);
    }
    try {
        const result = (0, support_js_1.assertMutationSuccess)(response, dataPath);
        return new BackgroundActionHandle_js_1.BackgroundActionHandle(connection, action, result.backgroundAction.id, options);
    }
    catch (error) {
        if ("code" in error && error.code == "GGT_DUPLICATE_BACKGROUND_ACTION_ID" && (options === null || options === void 0 ? void 0 : options.id) && options.onDuplicateID == "ignore") {
            return new BackgroundActionHandle_js_1.BackgroundActionHandle(connection, action, options.id, options);
        }
        throw error;
    }
};
exports.enqueueActionRunner = enqueueActionRunner;
const actionResultRunner = async (connection, id, action, options) => {
    const plan = (0, operationBuilders_js_1.actionResultOperation)(id, action, options);
    const subscription = connection.currentClient.subscription(plan.query, plan.variables);
    const response = await (0, wonka_1.pipe)(subscription, (0, wonka_1.filter)((operation) => { var _a, _b; return operation.error || ((_b = (_a = operation.data) === null || _a === void 0 ? void 0 : _a.backgroundAction) === null || _b === void 0 ? void 0 : _b.outcome); }), (0, wonka_1.take)(1), wonka_1.toPromise);
    const backgroundAction = (0, support_js_1.assertOperationSuccess)(response, ["backgroundAction"]);
    (0, support_js_1.assertResponseSuccess)(backgroundAction.result);
    switch (action.type) {
        case "action": {
            backgroundAction.result = processActionResponse(action.defaultSelection, response.data, (0, support_js_1.get)(backgroundAction.result, [action.modelSelectionField]), action.hasReturnType);
            break;
        }
        case "globalAction": {
            backgroundAction.result = backgroundAction.result.result;
            break;
        }
    }
    return backgroundAction;
};
exports.actionResultRunner = actionResultRunner;
//# sourceMappingURL=operationRunners.js.map