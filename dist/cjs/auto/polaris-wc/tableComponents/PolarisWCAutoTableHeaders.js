"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortableTableHeader = void 0;
const tslib_1 = require("tslib");
// Import Polaris types for web components - this augments JSX.IntrinsicElements for s-* elements
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const react_1 = tslib_1.__importStar(require("react"));
const useHover_js_1 = require("../../hooks/useHover.js");
// Sortable table header with click-to-sort and sort indicators
const SortableTableHeader = (props) => {
    const { column, isPrimary, sort } = props;
    const ref = (0, react_1.useRef)(null);
    const columnField = column.type === "CustomRenderer" ? column.identifier : column.field;
    const isSorted = sort.column === columnField;
    const isSortable = column.sortable && column.type !== "CustomRenderer";
    (0, react_1.useEffect)(() => {
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
    const [isHovered, hoverProps] = (0, useHover_js_1.useHover)();
    // Sort indicator icon
    const SortIndicator = () => {
        if (!isSortable)
            return null;
        return (react_1.default.createElement("span", { style: { opacity: isSorted ? 1 : isHovered ? 0.25 : 0 } }, !isSorted ? (react_1.default.createElement("s-icon", { type: "sort", tone: "neutral" })) : sort.direction === "Ascending" ? (react_1.default.createElement("s-icon", { type: "arrow-up", tone: "neutral" })) : (react_1.default.createElement("s-icon", { type: "arrow-down", tone: "neutral" }))));
    };
    return (react_1.default.createElement("s-table-header", { ref: ref, listSlot: isPrimary ? "primary" : undefined },
        react_1.default.createElement("div", { style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "4px",
                minHeight: "24px",
            }, ...hoverProps },
            react_1.default.createElement("span", { style: { whiteSpace: "nowrap" } }, column.header),
            react_1.default.createElement(SortIndicator, null))));
};
exports.SortableTableHeader = SortableTableHeader;
//# sourceMappingURL=PolarisWCAutoTableHeaders.js.map