import React, { useMemo } from "react";
import deepEqual from "react-fast-compare";
import { humanizeCamelCase } from "../../utils.js";
export const useTableBulkActions = (props) => {
    const { model, actions, excludeActions } = props;
    if (actions && excludeActions) {
        throw new Error("Cannot have both actions and excludeActions in the same table");
    }
    const [selectedModelActionDetails, setSelectedModelActionDetails] = React.useState(undefined);
    const gadgetModelActionsAsBulkActionOptions = getModelActionsForTableAsBulkActionOptions({ model, setSelectedModelActionDetails });
    const bulkActionOptions = useMemo(() => {
        if (excludeActions) {
            return getValidateActionsWithExclude(excludeActions, gadgetModelActionsAsBulkActionOptions);
        }
        if (actions) {
            return getValidatedIncludedActions(actions, gadgetModelActionsAsBulkActionOptions, setSelectedModelActionDetails);
        }
        return gadgetModelActionsAsBulkActionOptions; // Default - No `actions` or `excludeActions` provided
    }, [gadgetModelActionsAsBulkActionOptions, actions, excludeActions]);
    return { selectedModelActionDetails, bulkActionOptions };
};
/**
 * Returns a list of BulkActionOption objects for given model
 */
const getModelActionsForTableAsBulkActionOptions = (props) => {
    const { model, setSelectedModelActionDetails } = props;
    const allModelActionsDetails = getModelActionsForTable({ model });
    return allModelActionsDetails
        .filter(isBulkActionThatOnlyTakesIds) // Only bulk actions that accept only IDs are currently supported
        .map((actionDetails) => ({
        humanizedName: humanizeCamelCase(removeBulkPrefix(actionDetails.apiIdentifier)),
        selectModelAction: () => setSelectedModelActionDetails(actionDetails), // To open the corresponding modal
        apiIdentifier: lowercaseFirstChar(removeBulkPrefix(actionDetails.apiIdentifier)), // `bulk` prefix removed
    }));
};
const isBulkActionThatOnlyTakesIds = (actionDetails) => actionDetails.isGadgetAction &&
    actionDetails.isBulk &&
    !actionDetails.acceptsModelInput && // Accepting modelInput guarantees that the action accepts more than just IDs
    deepEqual(actionDetails.variables, OnlyIdsAcceptedInputVariables);
// Expected variables for supported bulk actions
const OnlyIdsAcceptedInputVariables = {
    ids: {
        required: true,
        type: "[GadgetID!]",
    },
};
/**
 * Returns a list of ModelActionDetail objects for given model
 */
const getModelActionsForTable = (props) => {
    const modelActions = [];
    const modelPrototype = Object.getPrototypeOf(props.model);
    for (const key of Object.keys(modelPrototype)) {
        const isAction = modelPrototype[key].type === "action";
        if (isAction) {
            modelActions.push(modelPrototype[key]);
        }
    }
    return modelActions.map((func) => ({
        apiIdentifier: func.functionName,
        isDeleter: func.isDeleter,
        isBulk: func.isBulk,
        acceptsModelInput: func.acceptsModelInput,
        variables: func.variables,
        isGadgetAction: true,
    }));
};
function getValidateActionsWithExclude(excludeActions, gadgetModelActionsAsBulkActionOptions) {
    for (const excludedAction of excludeActions) {
        if (!gadgetModelActionsAsBulkActionOptions.find((action) => action.apiIdentifier === excludedAction)) {
            throw new Error(`Excluded action '${excludedAction}' not found in model`);
        }
    }
    return gadgetModelActionsAsBulkActionOptions.filter((action) => !excludeActions.includes(action.apiIdentifier));
}
function getValidatedIncludedActions(actions, gadgetModelActionsAsBulkActionOptions, setSelectedModelActionDetails) {
    const bulkActions = [];
    for (const action of actions) {
        if (typeof action === "string") {
            // Ensure that this is a real action name
            const modelAction = gadgetModelActionsAsBulkActionOptions.find((actionOption) => actionOption.apiIdentifier === action);
            if (!modelAction) {
                throw new Error(`Action '${action}' not found in model`);
            }
            bulkActions.push(modelAction);
        }
        else {
            // Custom callback/renderer
            validateCallbackXorRender(action);
            const customCallbackModelActionDetails = {
                isGadgetAction: false,
                apiIdentifier: action.label,
                render: "render" in action ? action.render ?? undefined : undefined,
            };
            bulkActions.push({
                humanizedName: action.label,
                selectModelAction: () => setSelectedModelActionDetails(customCallbackModelActionDetails),
                callback: "callback" in action ? action.callback ?? undefined : undefined,
                apiIdentifier: action.label,
            });
        }
    }
    return bulkActions;
}
/**
 * Ensures that the action has either a callback or a render, but not both
 */
const validateCallbackXorRender = (action) => {
    const label = action.label;
    if ("callback" in action && "render" in action) {
        throw new Error(`Cannot have both callback and render in action with label: "${label}"`);
    }
    if (!("callback" in action) && !("render" in action)) {
        throw new Error(`Missing required property "callback" | "render" in action with label: "${label}"`);
    }
};
const removeBulkPrefix = (actionName) => (actionName.startsWith("bulk") ? actionName.slice(4) : actionName);
const lowercaseFirstChar = (input) => {
    return input.length === 0 ? "" : `${input.charAt(0).toLowerCase()}${input.slice(1)}`;
};
//# sourceMappingURL=useTableBulkActions.js.map