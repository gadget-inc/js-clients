"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCTruncatedTextWithTooltip = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useHover_js_1 = require("../../hooks/useHover.js");
const useIsOverflowed_js_1 = require("../../hooks/useIsOverflowed.js");
const PolarisWCPopover_js_1 = require("./PolarisWCPopover.js");
const truncationStyle = {
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    minWidth: 0,
};
/**
 * Renders text with ellipsis when it overflows. When truncated, shows a popover
 * with the full content on hover over the truncated text only.
 */
const PolarisWCTruncatedTextWithTooltip = (props) => {
    const { text } = props;
    const { isOverflowed, childElementRef, containerRef, checkOverflow } = (0, useIsOverflowed_js_1.useIsOverflowed)({
        useScrollWidthCheck: true,
    });
    (0, react_1.useEffect)(checkOverflow, [text]);
    const [isHovering, hoverProps] = (0, useHover_js_1.useHover)();
    const truncatedText = (react_1.default.createElement("div", { ref: containerRef, style: { overflow: "hidden", minWidth: 0, width: "100%" } },
        react_1.default.createElement("span", { ref: childElementRef, style: truncationStyle },
            react_1.default.createElement("s-text", null, text))));
    if (!isOverflowed) {
        return truncatedText;
    }
    return (react_1.default.createElement("div", { ...hoverProps, style: { cursor: "default", minWidth: 0 } },
        react_1.default.createElement(PolarisWCPopover_js_1.PolarisWCPopover, { open: isHovering, onClose: () => hoverProps.onMouseLeave(null), anchor: truncatedText, maxHeight: "200px", contentProps: {
                ...hoverProps,
                style: { padding: "8px" },
            } },
            react_1.default.createElement("s-text", null, text))));
};
exports.PolarisWCTruncatedTextWithTooltip = PolarisWCTruncatedTextWithTooltip;
//# sourceMappingURL=PolarisWCTruncatedTextWithTooltip.js.map