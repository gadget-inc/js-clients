"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoTableBulkActionSelector = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useTableBulkActions_js_1 = require("../../hooks/useTableBulkActions.js");
const PolarisWCPopover_js_1 = require("../commonComponents/PolarisWCPopover.js");
const MORE_ACTIONS_LABEL = "Actions...";
function PolarisWCBulkActionButton(props) {
    const { action, selectedRows, clearSelection, rawRecords } = props;
    const ref = (0, react_1.useRef)(null);
    const onAction = (0, useTableBulkActions_js_1.getBulkActionOptionCallback)({
        option: action,
        selectedRows,
        clearSelection,
        rawRecords,
    });
    const destructive = "isDeleter" in action ? action.isDeleter : false;
    return (react_1.default.createElement("s-button", { ref: ref, variant: "secondary", tone: destructive ? "critical" : "neutral", onClick: onAction }, action.humanizedName));
}
function PolarisWCMoreActionsTrigger(props) {
    const { open, onToggle } = props;
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const el = ref.current;
        if (!el)
            return;
        el.addEventListener("click", onToggle);
        return () => el.removeEventListener("click", onToggle);
    }, [onToggle]);
    return (react_1.default.createElement("s-button", { ref: ref, variant: "secondary", "aria-expanded": open, "aria-label": MORE_ACTIONS_LABEL }, MORE_ACTIONS_LABEL));
}
function NonPromotedActionsDropdown(props) {
    const { nonPromotedActions, selection, rows, rawRecords } = props;
    const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id));
    const [open, setOpen] = (0, react_1.useState)(false);
    if (nonPromotedActions.length === 0) {
        return null;
    }
    return (react_1.default.createElement(PolarisWCPopover_js_1.PolarisWCPopover, { open: open, onClose: () => setOpen(false), anchor: react_1.default.createElement(PolarisWCMoreActionsTrigger, { open: open, onToggle: () => setOpen((prev) => !prev) }), contentProps: { style: { minWidth: "260px" } }, position: "below-end" },
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", minWidth: "260px" } }, nonPromotedActions.map((action) => (react_1.default.createElement(NonPromotedActionItem, { key: action.humanizedName, action: action, selectedRows: selectedRows, clearSelection: selection.clearAll, rawRecords: rawRecords, onSelect: () => {
                setOpen(false);
                const callback = (0, useTableBulkActions_js_1.getBulkActionOptionCallback)({
                    option: action,
                    selectedRows,
                    clearSelection: selection.clearAll,
                    rawRecords,
                });
            } }))))));
}
function NonPromotedActionItem(props) {
    const { action, selectedRows, clearSelection, rawRecords, onSelect } = props;
    const callback = (0, useTableBulkActions_js_1.getBulkActionOptionCallback)({
        option: action,
        selectedRows,
        clearSelection,
        rawRecords,
    });
    const handleClick = () => {
        callback();
        onSelect();
    };
    return (react_1.default.createElement("button", { type: "button", onClick: handleClick, style: {
            display: "block",
            width: "100%",
            padding: "8px 12px",
            textAlign: "left",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "14px",
            color: "var(--p-color-text, #202223)",
        }, onMouseEnter: (e) => {
            e.currentTarget.style.background = "var(--p-color-bg-surface-hover, #f6f6f7)";
        }, onMouseLeave: (e) => {
            e.currentTarget.style.background = "transparent";
        } }, action.humanizedName));
}
function PolarisWCAutoTableBulkActionSelector(props) {
    const { bulkActionOptions, selection, rows, rawRecords } = props;
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
        promotedActions.map((action) => (react_1.default.createElement(PolarisWCBulkActionButton, { key: action.humanizedName, action: action, selectedRows: selectedRows, clearSelection: selection.clearAll, rawRecords: rawRecords }))),
        react_1.default.createElement(NonPromotedActionsDropdown, { nonPromotedActions: nonPromotedActions, selection: selection, rows: rows, rawRecords: rawRecords })));
}
exports.PolarisWCAutoTableBulkActionSelector = PolarisWCAutoTableBulkActionSelector;
//# sourceMappingURL=PolarisWCAutoTableBulkActionSelector.js.map