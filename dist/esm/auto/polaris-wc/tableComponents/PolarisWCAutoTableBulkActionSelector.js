import React, { useEffect, useMemo, useRef, useState } from "react";
import { getBulkActionOptionCallback } from "../../hooks/useTableBulkActions.js";
import { PolarisWCPopover } from "../commonComponents/PolarisWCPopover.js";
const MORE_ACTIONS_LABEL = "Actions...";
function PolarisWCBulkActionButton(props) {
    const { action, selectedRows, clearSelection, rawRecords } = props;
    const ref = useRef(null);
    const onAction = getBulkActionOptionCallback({
        option: action,
        selectedRows,
        clearSelection,
        rawRecords,
    });
    const destructive = "isDeleter" in action ? action.isDeleter : false;
    return (React.createElement("s-button", { ref: ref, variant: "secondary", tone: destructive ? "critical" : "neutral", onClick: onAction }, action.humanizedName));
}
function PolarisWCMoreActionsTrigger(props) {
    const { open, onToggle } = props;
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        el.addEventListener("click", onToggle);
        return () => el.removeEventListener("click", onToggle);
    }, [onToggle]);
    return (React.createElement("s-button", { ref: ref, variant: "secondary", "aria-expanded": open, "aria-label": MORE_ACTIONS_LABEL }, MORE_ACTIONS_LABEL));
}
function NonPromotedActionsDropdown(props) {
    const { nonPromotedActions, selection, rows, rawRecords } = props;
    const selectedRows = rows.filter((row) => selection.recordIds.includes(row.id));
    const [open, setOpen] = useState(false);
    if (nonPromotedActions.length === 0) {
        return null;
    }
    return (React.createElement(PolarisWCPopover, { open: open, onClose: () => setOpen(false), anchor: React.createElement(PolarisWCMoreActionsTrigger, { open: open, onToggle: () => setOpen((prev) => !prev) }), contentProps: { style: { minWidth: "260px" } }, position: "below-end" },
        React.createElement("div", { style: { display: "flex", flexDirection: "column", minWidth: "260px" } }, nonPromotedActions.map((action) => (React.createElement(NonPromotedActionItem, { key: action.humanizedName, action: action, selectedRows: selectedRows, clearSelection: selection.clearAll, rawRecords: rawRecords, onSelect: () => {
                setOpen(false);
                const callback = getBulkActionOptionCallback({
                    option: action,
                    selectedRows,
                    clearSelection: selection.clearAll,
                    rawRecords,
                });
            } }))))));
}
function NonPromotedActionItem(props) {
    const { action, selectedRows, clearSelection, rawRecords, onSelect } = props;
    const callback = getBulkActionOptionCallback({
        option: action,
        selectedRows,
        clearSelection,
        rawRecords,
    });
    const handleClick = () => {
        callback();
        onSelect();
    };
    return (React.createElement("button", { type: "button", onClick: handleClick, style: {
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
export function PolarisWCAutoTableBulkActionSelector(props) {
    const { bulkActionOptions, selection, rows, rawRecords } = props;
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
        promotedActions.map((action) => (React.createElement(PolarisWCBulkActionButton, { key: action.humanizedName, action: action, selectedRows: selectedRows, clearSelection: selection.clearAll, rawRecords: rawRecords }))),
        React.createElement(NonPromotedActionsDropdown, { nonPromotedActions: nonPromotedActions, selection: selection, rows: rows, rawRecords: rawRecords })));
}
//# sourceMappingURL=PolarisWCAutoTableBulkActionSelector.js.map