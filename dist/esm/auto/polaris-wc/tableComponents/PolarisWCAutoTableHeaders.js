// Import Polaris types for web components - this augments JSX.IntrinsicElements for s-* elements
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useRef } from "react";
import { useHover } from "../../hooks/useHover.js";
// Sortable table header with click-to-sort and sort indicators
export const SortableTableHeader = (props) => {
    const { column, isPrimary, sort } = props;
    const ref = useRef(null);
    const columnField = column.type === "CustomRenderer" ? column.identifier : column.field;
    const isSorted = sort.column === columnField;
    const isSortable = column.sortable && column.type !== "CustomRenderer";
    useEffect(() => {
        const el = ref.current;
        if (!el || !isSortable || !columnField)
            return;
        const handleClick = () => {
            sort.handleColumnSort(columnField);
        };
        // Add cursor style for sortable columns
        el.style.cursor = "pointer";
        el.addEventListener("click", handleClick);
        return () => {
            el.removeEventListener("click", handleClick);
            el.style.cursor = "";
        };
    }, [sort.handleColumnSort, columnField, isSortable]);
    const [isHovered, hoverProps] = useHover();
    // Sort indicator icon
    const SortIndicator = () => {
        if (!isSortable)
            return null;
        return (React.createElement("span", { style: { opacity: isSorted ? 1 : isHovered ? 0.25 : 0 } }, !isSorted ? (React.createElement("s-icon", { type: "sort", tone: "neutral" })) : sort.direction === "Ascending" ? (React.createElement("s-icon", { type: "arrow-up", tone: "neutral" })) : (React.createElement("s-icon", { type: "arrow-down", tone: "neutral" }))));
    };
    return (React.createElement("s-table-header", { ref: ref, listSlot: isPrimary ? "primary" : undefined },
        React.createElement("div", { style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "4px",
                minHeight: "24px",
            }, ...hoverProps },
            React.createElement("span", { style: { whiteSpace: "nowrap" } }, column.header),
            React.createElement(SortIndicator, null))));
};
//# sourceMappingURL=PolarisWCAutoTableHeaders.js.map