"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoTableTagCell = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useTagsForTableCellRenderer_js_1 = require("../../hooks/useTagsForTableCellRenderer.js");
const PolarisWCPopover_js_1 = require("../commonComponents/PolarisWCPopover.js");
const PolarisWCAutoTableTagCell = (props) => {
    const { value } = props;
    const [showMore, setShowMore] = (0, react_1.useState)(false);
    const [popoverOpen, setPopoverOpen] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    const { allTags, shortenedTags, hasOmittedTags } = (0, useTagsForTableCellRenderer_js_1.useTagsForTableCellRenderer)({
        value,
        maxTagCount: 3,
        maxTagLength: 6,
    });
    const omittedTags = allTags.slice(shortenedTags.length);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            setShowMore(ref.current.scrollWidth > ref.current.clientWidth);
        }
    }, [shortenedTags]);
    const cellContent = (0, react_1.useMemo)(() => (react_1.default.createElement("div", { style: {
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            overflow: "hidden",
            minWidth: 0,
        } },
        react_1.default.createElement("div", { style: {
                overflowX: "hidden",
                display: "flex",
                flexWrap: "nowrap",
                gap: "2px",
                alignItems: "center",
            }, ref: ref },
            shortenedTags.map((tag) => (react_1.default.createElement("s-chip", { key: tag }, tag))),
            hasOmittedTags ? react_1.default.createElement("span", { style: { flexShrink: 0 } }, "...") : null),
        showMore && hasOmittedTags ? react_1.default.createElement("span", { style: { flexShrink: 0 } }, "...") : null)), [shortenedTags, hasOmittedTags, showMore]);
    return (react_1.default.createElement("div", { onMouseEnter: () => hasOmittedTags && setPopoverOpen(true), onMouseLeave: () => setPopoverOpen(false), style: { cursor: hasOmittedTags ? "default" : undefined } }, hasOmittedTags ? (react_1.default.createElement(PolarisWCPopover_js_1.PolarisWCPopover, { open: popoverOpen, onClose: () => setPopoverOpen(false), anchor: cellContent, maxHeight: "200px", contentProps: {
            onMouseEnter: () => hasOmittedTags && setPopoverOpen(true),
            onMouseLeave: () => setPopoverOpen(false),
        } },
        react_1.default.createElement("div", { style: { maxWidth: "220px", padding: "8px 12px" } },
            react_1.default.createElement("s-stack", { direction: "inline", gap: "small-100" }, omittedTags.map((tag) => (react_1.default.createElement("s-chip", { key: tag }, tag))))))) : (cellContent)));
};
exports.PolarisWCAutoTableTagCell = PolarisWCAutoTableTagCell;
//# sourceMappingURL=PolarisWCAutoTableTagCell.js.map