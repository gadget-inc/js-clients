import React from "react";
import { useIsOverflowed } from "../../../hooks/useIsOverflowed.js";
export const makeShadcnAutoTableTextCell = (elements) => {
    const { Label, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } = elements;
    function ShadcnAutoTableTextCell(props) {
        const { value } = props;
        const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : `${value}`;
        const { isOverflowed, childElementRef, containerRef } = useIsOverflowed();
        return (React.createElement("div", { style: { maxWidth: "100%" }, ref: containerRef },
            React.createElement(TooltipProvider, null,
                React.createElement(Tooltip, null,
                    isOverflowed && (React.createElement(TooltipContent, { className: "max-w-[150px] max-h-[100px] overflow-y-auto overflow-x-hidden bg-background border border-neutral-300 shadow-md whitespace-normal break-words text-foreground" }, stringifiedValue)),
                    React.createElement(TooltipTrigger, { className: "max-w-full block" },
                        React.createElement(Label, { className: "block max-w-full overflow-hidden text-ellipsis whitespace-nowrap" },
                            React.createElement("span", { ref: childElementRef, style: { width: "fit-content" } }, stringifiedValue)))))));
    }
    return ShadcnAutoTableTextCell;
};
//# sourceMappingURL=ShadcnAutoTableTextCell.js.map