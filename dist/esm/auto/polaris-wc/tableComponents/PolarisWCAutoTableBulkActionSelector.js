import React, { useId, useMemo } from "react";
import { getBulkActionOptionCallback } from "../../hooks/useTableBulkActions.js";
const MORE_ACTIONS_LABEL = "Actions";
function PolarisWCBulkActionButton(props) {
    const { action, selectedRows, clearSelection, rawRecords, actionModalIds } = props;
    const onAction = getBulkActionOptionCallback({
        option: action,
        selectedRows,
        clearSelection,
        rawRecords,
    });
    const isGadgetAction = action.selectModelAction !== undefined;
    const modalId = actionModalIds[action.apiIdentifier];
    const destructive = "isDeleter" in action ? action.isDeleter : false;
    return (React.createElement("s-button", { variant: "secondary", tone: destructive ? "critical" : "neutral", onClick: isGadgetAction ? undefined : onAction, ...(isGadgetAction && modalId ? { commandFor: modalId } : {}) }, action.humanizedName));
}
function NonPromotedActionsDropdown(props) {
    const { nonPromotedActions, selection, rows, rawRecords, actionModalIds } = props;
    const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id));
    const menuId = useId().replace(/:/g, "");
    if (nonPromotedActions.length === 0) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("s-button", { commandFor: menuId, variant: "secondary" }, MORE_ACTIONS_LABEL),
        React.createElement("s-menu", { id: menuId, accessibilityLabel: MORE_ACTIONS_LABEL }, nonPromotedActions.map((action) => (React.createElement(NonPromotedActionItem, { key: action.humanizedName, action: action, selectedRows: selectedRows, clearSelection: selection.clearAll, rawRecords: rawRecords, actionModalIds: actionModalIds }))))));
}
function NonPromotedActionItem(props) {
    const { action, selectedRows, clearSelection, rawRecords, actionModalIds } = props;
    const callback = getBulkActionOptionCallback({
        option: action,
        selectedRows,
        clearSelection,
        rawRecords,
    });
    const isGadgetAction = action.selectModelAction !== undefined;
    const modalId = actionModalIds[action.apiIdentifier];
    const destructive = "isDeleter" in action ? action.isDeleter : false;
    if (isGadgetAction && modalId) {
        return (React.createElement("s-button", { variant: "tertiary", tone: destructive ? "critical" : undefined, commandFor: modalId, command: "--show" }, action.humanizedName));
    }
    return (React.createElement("s-button", { variant: "tertiary", tone: destructive ? "critical" : undefined, onClick: callback }, action.humanizedName));
}
export function PolarisWCAutoTableBulkActionSelector(props) {
    const { bulkActionOptions, selection, rows, rawRecords, actionModalIds } = props;
    const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id));
    const { promotedActions, nonPromotedActions } = useMemo(() => {
        const promoted = [];
        const nonPromoted = [];
        for (const option of bulkActionOptions) {
            if (option.promoted) {
                promoted.push(option);
            }
            else {
                nonPromoted.push(option);
            }
        }
        return { promotedActions: promoted, nonPromotedActions: nonPromoted };
    }, [bulkActionOptions]);
    return (React.createElement(React.Fragment, null,
        promotedActions.map((action) => (React.createElement(PolarisWCBulkActionButton, { key: action.humanizedName, action: action, selectedRows: selectedRows, clearSelection: selection.clearAll, rawRecords: rawRecords, actionModalIds: actionModalIds }))),
        React.createElement(NonPromotedActionsDropdown, { nonPromotedActions: nonPromotedActions, selection: selection, rows: rows, rawRecords: rawRecords, actionModalIds: actionModalIds })));
}
//# sourceMappingURL=PolarisWCAutoTableBulkActionSelector.js.map