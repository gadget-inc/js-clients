"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFindByObjectWithMetadata = exports.validateTriggersFromMetadata = exports.validateAutoFormProps = exports.validateTriggersFromApiClient = exports.MissingApiTriggerErrorMessage = exports.InvalidActionErrorMessage = exports.MissingActionPropErrorMessage = exports.validateNonBulkAction = void 0;
const utils_js_1 = require("../use-action-form/utils.js");
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
    if (props.children) {
        if (props.include) {
            throw new Error(`AutoForm components with children cannot use the include option`);
        }
        if (props.exclude) {
            throw new Error(`AutoForm components with children cannot use the exclude option`);
        }
    }
};
exports.validateAutoFormProps = validateAutoFormProps;
const validateTriggersFromMetadata = (metadata) => {
    if (!metadata) {
        return;
    }
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
};
exports.validateTriggersFromMetadata = validateTriggersFromMetadata;
const validateFindByObjectWithMetadata = (fields, findBy) => {
    if (!findBy || typeof findBy === "string") {
        return;
    }
    if (!(0, utils_js_1.isPlainObject)(findBy) || Object.keys(findBy).length !== 1) {
        throw new Error("The findBy prop in AutoForm must be an object containing a single unique Gadget field API identifier as a key.");
    }
    if (!fields || !fields.length) {
        return;
    }
    const findByUniqueFieldApiId = Object.keys(findBy)[0];
    const uniqueFields = fields
        .filter((field) => field.metadata.configuration.validations.some((validation) => validation?.specID === "gadget/validation/unique"))
        .map((field) => field.metadata.apiIdentifier);
    if (!uniqueFields.includes(findByUniqueFieldApiId)) {
        throw new Error(`The findBy prop in AutoForm must be an object containing a unique Gadget field API identifier as a key. "${findByUniqueFieldApiId}" is not a unique field name.`);
    }
};
exports.validateFindByObjectWithMetadata = validateFindByObjectWithMetadata;
//# sourceMappingURL=AutoFormActionValidators.js.map