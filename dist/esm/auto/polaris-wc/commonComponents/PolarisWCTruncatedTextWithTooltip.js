import React, { useEffect } from "react";
import { useHover } from "../../hooks/useHover.js";
import { useIsOverflowed } from "../../hooks/useIsOverflowed.js";
import { PolarisWCPopover } from "./PolarisWCPopover.js";
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
export const PolarisWCTruncatedTextWithTooltip = (props) => {
    const { text } = props;
    const { isOverflowed, childElementRef, containerRef, checkOverflow } = useIsOverflowed({
        useScrollWidthCheck: true,
    });
    useEffect(() => {
        checkOverflow();
    }, [checkOverflow, text]);
    const [isHovering, hoverProps] = useHover();
    const truncatedText = (React.createElement("div", { ref: containerRef, style: { overflow: "hidden", minWidth: 0, width: "100%" } },
        React.createElement("span", { ref: childElementRef, style: truncationStyle },
            React.createElement("s-text", null, text))));
    if (!isOverflowed) {
        return truncatedText;
    }
    return (React.createElement("div", { ...hoverProps, style: { cursor: "default", minWidth: 0 } },
        React.createElement(PolarisWCPopover, { open: isHovering, onClose: () => hoverProps.onMouseLeave(null), anchor: truncatedText, maxHeight: "200px", contentProps: {
                ...hoverProps,
                style: { padding: "8px" },
            } },
            React.createElement("s-text", null, text))));
};
//# sourceMappingURL=PolarisWCTruncatedTextWithTooltip.js.map