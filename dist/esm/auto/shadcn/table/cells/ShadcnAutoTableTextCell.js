import React from "react";
import { useIsOverflowed } from "../../../hooks/useIsOverflowed.js";
import "./ShadcnAutoTableStyles.css";
export const makeShadcnAutoTableTextCell = (elements) => {
    const { Label, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } = elements;
    function ShadcnAutoTableTextCell(props) {
        const { value } = props;
        const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : `${value}`;
        const { isOverflowed, childElementRef, containerRef } = useIsOverflowed();
        return (React.createElement("div", { style: { maxWidth: "100%" }, ref: containerRef },
            React.createElement(TooltipProvider, null,
                React.createElement(Tooltip, null,
                    isOverflowed && React.createElement(TooltipContent, { className: "shadcn-auto-table-cell-tooltip-content" }, stringifiedValue),
                    React.createElement(TooltipTrigger, { className: "shadcn-auto-table-tooltip-trigger" },
                        React.createElement(Label, null,
                            React.createElement("span", { ref: childElementRef }, stringifiedValue)))))));
    }
    return ShadcnAutoTableTextCell;
};
//# sourceMappingURL=ShadcnAutoTableTextCell.js.map