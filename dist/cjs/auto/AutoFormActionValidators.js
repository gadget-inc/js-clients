"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTriggersFromMetadata = exports.validateTriggersFromApiClient = exports.TriggerableActionRequiredErrorMessage = exports.validateNonBulkAction = void 0;
const validateNonBulkAction = (action) => {
    if (action.isBulk) {
        throw new Error("Bulk actions are not supported in AutoForms");
    }
};
exports.validateNonBulkAction = validateNonBulkAction;
const GadgetApiTriggerSpecId = "gadget/trigger/graphql_api";
exports.TriggerableActionRequiredErrorMessage = `"action" must be a valid Gadget action with an API trigger to be used in AutoForms`;
const validActionTypes = ["globalAction", "action"];
const validateTriggersFromApiClient = (action) => {
    if (!validActionTypes.includes(action.type)) {
        // When the API client is built with an action without the API trigger, the type will be "stubbedAction"
        // action.type === "globalAction" | "action" // Only when the action has the API trigger when the api client is built
        throw new Error(exports.TriggerableActionRequiredErrorMessage);
    }
};
exports.validateTriggersFromApiClient = validateTriggersFromApiClient;
const validateTriggersFromMetadata = (metadata) => {
    if (metadata) {
        // When an action's API trigger is removed but the referenced API client still uses the old api-triggered action, the presence of the trigger shall be checked in the metadata
        const triggersAsArray = (metadata.__typename === "GadgetGlobalAction"
            ? metadata.triggers
            : metadata.__typename === "GadgetModel"
                ? metadata.action.triggers
                : []) ?? [];
        const hasApiTrigger = triggersAsArray.some((trigger) => trigger.specID === GadgetApiTriggerSpecId);
        if (!hasApiTrigger) {
            throw new Error(exports.TriggerableActionRequiredErrorMessage);
        }
    }
};
exports.validateTriggersFromMetadata = validateTriggersFromMetadata;
//# sourceMappingURL=AutoFormActionValidators.js.map