import React, { useCallback, useEffect, useMemo } from "react";
import deepEqual from "react-fast-compare";
import { useBulkAction } from "../../useBulkAction.js";
import { humanizeCamelCase } from "../../utils.js";
import { validateAutoTableProps } from "../AutoTableValidators.js";
export const useTableBulkActions = (props) => {
    const { model, actions, excludeActions } = props;
    validateAutoTableProps(props.model);
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
            return getValidatedIncludedActions(actions, gadgetModelActionsAsBulkActionOptions);
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
        promoted: true,
        isDeleter: "isDeleter" in actionDetails ? actionDetails.isDeleter : false,
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
const getValidatedIncludedActions = (actions, gadgetModelActionsAsBulkActionOptions) => {
    const bulkActions = [];
    for (const action of actions) {
        if (typeof action === "string") {
            bulkActions.push(getValidatedBulkModelActionOption(gadgetModelActionsAsBulkActionOptions, action));
        }
        else {
            if (!("action" in action)) {
                throw new Error("Custom action objects must have an 'action' property");
            }
            if (typeof action.action === "string") {
                // Relabelled Gadget model action
                bulkActions.push({
                    ...getValidatedBulkModelActionOption(gadgetModelActionsAsBulkActionOptions, action.action),
                    humanizedName: action.label,
                    promoted: action.promoted ?? false,
                });
            }
            else {
                // Custom callback function
                bulkActions.push({
                    humanizedName: action.label,
                    action: action.action,
                    apiIdentifier: action.label,
                    promoted: action.promoted ?? false,
                });
            }
        }
    }
    return bulkActions;
};
const removeBulkPrefix = (actionName) => (actionName.startsWith("bulk") ? actionName.slice(4) : actionName);
const lowercaseFirstChar = (input) => {
    return input.length === 0 ? "" : `${input.charAt(0).toLowerCase()}${input.slice(1)}`;
};
const getValidatedBulkModelActionOption = (gadgetModelActionsAsBulkActionOptions, action) => {
    const modelAction = gadgetModelActionsAsBulkActionOptions.find((actionOption) => actionOption.apiIdentifier === action);
    if (!modelAction) {
        throw new Error(`'${action}' is not a valid action on the model`);
    }
    return modelAction;
};
export const getBulkActionOptionCallback = (props) => {
    const { option, selectedRows, clearSelection, rawRecords } = props;
    const selectedRowsWithRawRecord = selectedRows.map((row) => ({
        ...(rawRecords?.find((record) => record.id === row.id) ?? {}),
        ...row,
    }));
    return option.action
        ? () => {
            option.action?.(selectedRowsWithRawRecord);
            clearSelection();
        }
        : option.selectModelAction ?? (() => undefined);
};
export const useAutoTableBulkActionModal = (props) => {
    const { model, modelActionDetails, clearSelection } = props;
    const [showModal, setShowModal] = React.useState(!!modelActionDetails);
    const [actionName, setActionName] = React.useState(modelActionDetails?.apiIdentifier);
    useEffect(() => {
        if (!modelActionDetails) {
            return;
        }
        setShowModal(true);
        setActionName(modelActionDetails.apiIdentifier);
    }, [modelActionDetails]);
    const actionIsLoaded = modelActionDetails && actionName;
    const isBulkGadgetAction = actionIsLoaded && model[actionName] && modelActionDetails.isGadgetAction && modelActionDetails.isBulk;
    const modalTitle = useMemo(() => humanizeCamelCase(actionName ?? "").replace("Bulk ", ""), [actionName]);
    const closeAndClear = useCallback(() => {
        setShowModal(false);
        clearSelection();
    }, [setShowModal, clearSelection]);
    return {
        showModal,
        actionIsLoaded,
        isBulkGadgetAction,
        modalTitle,
        closeAndClear,
    };
};
export const ActionSuccessMessage = ` completed`;
export const ActionErrorMessage = ` failed`;
export const getRunActionConfirmationText = (count) => `Are you sure you want to run this action on ${count} record${count === 1 ? "" : `s`}?`;
export const useGadgetBulkActionModalContent = (props) => {
    const { model, modelActionDetails, actionLabel: actionName, ids, close } = props;
    const [hasRun, setHasRun] = React.useState(false);
    // eslint-disable-next-line
    // @ts-ignore:next-line
    const [{ fetching, data, error }, runBulkAction] = useBulkAction(model[modelActionDetails.apiIdentifier], {});
    const hasError = !!(error || (data && data.success === false));
    const actionResultMessage = useMemo(() => (hasError ? `${actionName}${ActionErrorMessage}` : `${actionName}${ActionSuccessMessage}`), [hasError]);
    const runAction = useCallback(() => {
        void runBulkAction(ids);
        setHasRun(true);
    }, [runBulkAction, ids]);
    return {
        hasRun,
        fetching,
        hasError,
        runAction,
        actionResultMessage,
    };
};
//# sourceMappingURL=useTableBulkActions.js.map