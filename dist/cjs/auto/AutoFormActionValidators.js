"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTriggersFromMetadata = exports.validateAutoFormProps = exports.validateTriggersFromApiClient = exports.MissingApiTriggerErrorMessage = exports.InvalidActionErrorMessage = exports.MissingActionPropErrorMessage = exports.validateNonBulkAction = void 0;
const validateNonBulkAction = (action) => {
    if (action.isBulk) {
        throw new Error("Bulk actions are not supported in AutoForms");
    }
};
exports.validateNonBulkAction = validateNonBulkAction;
const GadgetApiTriggerSpecId = "gadget/trigger/graphql_api";
exports.MissingActionPropErrorMessage = "Specify a valid Gagdet action to use AutoForm";
exports.InvalidActionErrorMessage = `"action" is not a valid Gadget action`;
exports.MissingApiTriggerErrorMessage = `"action" requires an API trigger to be used in AutoForm`;
const validActionTypes = ["globalAction", "action"];
const validateTriggersFromApiClient = (action) => {
    if (!validActionTypes.includes(action.type)) {
        // When the API client is built with an action without the API trigger, the type will be "stubbedAction"
        // action.type === "globalAction" | "action" // Only when the action has the API trigger when the api client is built
        throw new Error(exports.MissingApiTriggerErrorMessage);
    }
};
exports.validateTriggersFromApiClient = validateTriggersFromApiClient;
const validateAutoFormProps = (props) => {
    if (!("action" in props)) {
        throw new Error(exports.MissingActionPropErrorMessage);
    }
    if (!props.action) {
        throw new Error(exports.InvalidActionErrorMessage);
    }
};
exports.validateAutoFormProps = validateAutoFormProps;
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
            throw new Error(exports.MissingApiTriggerErrorMessage);
        }
    }
};
exports.validateTriggersFromMetadata = validateTriggersFromMetadata;
//# sourceMappingURL=AutoFormActionValidators.js.map