import * as React from "react";
import { useIsOverflowed } from "../../../hooks/useIsOverflowed.js";
import { useTagsForTableCellRenderer } from "../../../hooks/useTagsForTableCellRenderer.js";
export const makeShadcnAutoTableTagCell = (elements) => {
    const { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, Badge } = elements;
    function TagList(props) {
        const { tags, tagPrefix } = props;
        return (React.createElement(React.Fragment, null, tags.map((tag, i) => (React.createElement(Badge, { key: `${tagPrefix}-${tag}-${i}`, variant: "outline" }, tag)))));
    }
    function ShadcnAutoTableTagCell(props) {
        const { value } = props;
        const { isOverflowed, childElementRef, containerRef } = useIsOverflowed();
        const { allTags, shortenedTags, hasOmittedTags } = useTagsForTableCellRenderer({ value });
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: { maxWidth: "100%" }, ref: containerRef },
                React.createElement(TooltipProvider, null,
                    React.createElement(Tooltip, null,
                        (isOverflowed || hasOmittedTags) && (React.createElement(TooltipContent, { className: "max-w-[150px] max-h-[100px] overflow-y-auto overflow-x-hidden bg-background text-foreground border border-neutral-300 shadow-md whitespace-normal break-words" },
                            React.createElement(TagList, { tags: allTags, tagPrefix: "all-tags" }))),
                        React.createElement(TooltipTrigger, { className: "max-w-full overflow-hidden text-ellipsis" },
                            React.createElement("div", { ref: childElementRef, style: { width: "fit-content" } },
                                React.createElement(TagList, { tags: shortenedTags, tagPrefix: "shortened-tags" }))))))));
    }
    return ShadcnAutoTableTagCell;
};
//# sourceMappingURL=ShadcnAutoTableTagCell.js.map