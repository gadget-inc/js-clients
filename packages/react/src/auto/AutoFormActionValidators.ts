import type { ActionFunction, GlobalActionFunction } from "@gadgetinc/api-client-core";
import type { ActionMetadata, GlobalActionMetadata } from "../metadata.js";

export const validateNonBulkAction = (action: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => {
  if (action.isBulk) {
    throw new Error("Bulk actions are not supported in AutoForms");
  }
};

const GadgetApiTriggerSpecId = "gadget/trigger/graphql_api";
const ApiTriggerRequiredError = `Actions must have API triggers to be used in AutoForms`;
const validActionTypes = ["globalAction", "action"];

export const validateTriggersFromApiClient = (action: ActionFunction<any, any, any, any, any> | GlobalActionFunction<any>) => {
  if (!validActionTypes.includes(action.type)) {
    // When the API client is built with an action without the API trigger, the type will be "stubbedAction"
    // action.type === "globalAction" | "action" // Only when the action has the API trigger when the api client is built
    throw new Error(ApiTriggerRequiredError);
  }
};

export const validateTriggersFromMetadata = (metadata?: ActionMetadata | GlobalActionMetadata) => {
  if (metadata) {
    // When an action's API trigger is removed but the referenced API client still uses the old api-triggered action, the presence of the trigger shall be checked in the metadata

    const triggersAsArray =
      (metadata.__typename === "GadgetGlobalAction"
        ? metadata.triggers
        : metadata.__typename === "GadgetModel"
        ? metadata.action.triggers
        : []) ?? [];

    const hasApiTrigger = triggersAsArray.some((trigger) => trigger.specID === GadgetApiTriggerSpecId);
    if (!hasApiTrigger) {
      throw new Error(ApiTriggerRequiredError);
    }
  }
};
