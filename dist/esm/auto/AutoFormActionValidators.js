export const validateNonBulkAction = (action) => {
    if (action.isBulk) {
        throw new Error("Bulk actions are not supported in AutoForms");
    }
};
const GadgetApiTriggerSpecId = "gadget/trigger/graphql_api";
export const MissingActionPropErrorMessage = "Specify a valid Gagdet action to use AutoForm";
export const InvalidActionErrorMessage = `"action" is not a valid Gadget action`;
export const MissingApiTriggerErrorMessage = `"action" requires an API trigger to be used in AutoForm`;
const validActionTypes = ["globalAction", "action"];
export const validateTriggersFromApiClient = (action) => {
    if (!validActionTypes.includes(action.type)) {
        // When the API client is built with an action without the API trigger, the type will be "stubbedAction"
        // action.type === "globalAction" | "action" // Only when the action has the API trigger when the api client is built
        throw new Error(MissingApiTriggerErrorMessage);
    }
};
export const validateAutoFormProps = (props) => {
    if (!("action" in props)) {
        throw new Error(MissingActionPropErrorMessage);
    }
    if (!props.action) {
        throw new Error(InvalidActionErrorMessage);
    }
};
export const validateTriggersFromMetadata = (metadata) => {
    if (metadata) {
        // When an action's API trigger is removed but the referenced API client still uses the old api-triggered action, the presence of the trigger shall be checked in the metadata
        const triggersAsArray = (metadata.__typename === "GadgetGlobalAction"
            ? metadata.triggers
            : metadata.__typename === "GadgetModel"
                ? metadata.action.triggers
                : []) ?? [];
        const hasApiTrigger = triggersAsArray.some((trigger) => trigger.specID === GadgetApiTriggerSpecId);
        if (!hasApiTrigger) {
            throw new Error(MissingApiTriggerErrorMessage);
        }
    }
};
//# sourceMappingURL=AutoFormActionValidators.js.map