"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoTableBulkActionSelector = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useTableBulkActions_js_1 = require("../../hooks/useTableBulkActions.js");
const MORE_ACTIONS_LABEL = "Actions";
function PolarisWCBulkActionButton(props) {
    const { action, selectedRows, clearSelection, rawRecords, actionModalIds } = props;
    const onAction = (0, useTableBulkActions_js_1.getBulkActionOptionCallback)({
        option: action,
        selectedRows,
        clearSelection,
        rawRecords,
    });
    const isGadgetAction = action.selectModelAction !== undefined;
    const modalId = actionModalIds[action.apiIdentifier];
    const destructive = "isDeleter" in action ? action.isDeleter : false;
    return (react_1.default.createElement("s-button", { variant: "secondary", tone: destructive ? "critical" : "neutral", onClick: isGadgetAction ? undefined : onAction, ...(isGadgetAction && modalId ? { commandFor: modalId } : {}) }, action.humanizedName));
}
function NonPromotedActionsDropdown(props) {
    const { nonPromotedActions, selection, rows, rawRecords, actionModalIds } = props;
    const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id));
    const menuId = (0, react_1.useId)().replace(/:/g, "");
    if (nonPromotedActions.length === 0) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("s-button", { commandFor: menuId, variant: "secondary" }, MORE_ACTIONS_LABEL),
        react_1.default.createElement("s-menu", { id: menuId, accessibilityLabel: MORE_ACTIONS_LABEL }, nonPromotedActions.map((action) => (react_1.default.createElement(NonPromotedActionItem, { key: action.humanizedName, action: action, selectedRows: selectedRows, clearSelection: selection.clearAll, rawRecords: rawRecords, actionModalIds: actionModalIds }))))));
}
function NonPromotedActionItem(props) {
    const { action, selectedRows, clearSelection, rawRecords, actionModalIds } = props;
    const callback = (0, useTableBulkActions_js_1.getBulkActionOptionCallback)({
        option: action,
        selectedRows,
        clearSelection,
        rawRecords,
    });
    const isGadgetAction = action.selectModelAction !== undefined;
    const modalId = actionModalIds[action.apiIdentifier];
    const destructive = "isDeleter" in action ? action.isDeleter : false;
    if (isGadgetAction && modalId) {
        return (react_1.default.createElement("s-button", { variant: "tertiary", tone: destructive ? "critical" : undefined, commandFor: modalId, command: "--show" }, action.humanizedName));
    }
    return (react_1.default.createElement("s-button", { variant: "tertiary", tone: destructive ? "critical" : undefined, onClick: callback }, action.humanizedName));
}
function PolarisWCAutoTableBulkActionSelector(props) {
    const { bulkActionOptions, selection, rows, rawRecords, actionModalIds } = props;
    const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id));
    const { promotedActions, nonPromotedActions } = (0, react_1.useMemo)(() => {
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        promotedActions.map((action) => (react_1.default.createElement(PolarisWCBulkActionButton, { key: action.humanizedName, action: action, selectedRows: selectedRows, clearSelection: selection.clearAll, rawRecords: rawRecords, actionModalIds: actionModalIds }))),
        react_1.default.createElement(NonPromotedActionsDropdown, { nonPromotedActions: nonPromotedActions, selection: selection, rows: rows, rawRecords: rawRecords, actionModalIds: actionModalIds })));
}
exports.PolarisWCAutoTableBulkActionSelector = PolarisWCAutoTableBulkActionSelector;
//# sourceMappingURL=PolarisWCAutoTableBulkActionSelector.js.map