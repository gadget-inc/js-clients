import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTagsForTableCellRenderer } from "../../hooks/useTagsForTableCellRenderer.js";
import { PolarisWCPopover } from "../commonComponents/PolarisWCPopover.js";
export const PolarisWCAutoTableTagCell = (props) => {
    const { value } = props;
    const [showMore, setShowMore] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const ref = useRef(null);
    const { allTags, shortenedTags, hasOmittedTags } = useTagsForTableCellRenderer({
        value,
        maxTagCount: 3,
        maxTagLength: 6,
    });
    const omittedTags = allTags.slice(shortenedTags.length);
    useEffect(() => {
        if (ref.current) {
            setShowMore(ref.current.scrollWidth > ref.current.clientWidth);
        }
    }, [shortenedTags]);
    const cellContent = useMemo(() => (React.createElement("div", { style: {
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            overflow: "hidden",
            minWidth: 0,
        } },
        React.createElement("div", { style: {
                overflowX: "hidden",
                display: "flex",
                flexWrap: "nowrap",
                gap: "2px",
                alignItems: "center",
            }, ref: ref },
            shortenedTags.map((tag) => (React.createElement("s-chip", { key: tag }, tag))),
            hasOmittedTags ? React.createElement("span", { style: { flexShrink: 0 } }, "...") : null),
        showMore && hasOmittedTags ? React.createElement("span", { style: { flexShrink: 0 } }, "...") : null)), [shortenedTags, hasOmittedTags, showMore]);
    return (React.createElement("div", { onMouseEnter: () => hasOmittedTags && setPopoverOpen(true), onMouseLeave: () => setPopoverOpen(false), style: { cursor: hasOmittedTags ? "default" : undefined } }, hasOmittedTags ? (React.createElement(PolarisWCPopover, { open: popoverOpen, onClose: () => setPopoverOpen(false), anchor: cellContent, maxHeight: "200px", contentProps: {
            onMouseEnter: () => hasOmittedTags && setPopoverOpen(true),
            onMouseLeave: () => setPopoverOpen(false),
        } },
        React.createElement("div", { style: { maxWidth: "220px", padding: "8px 12px" } },
            React.createElement("s-stack", { direction: "inline", gap: "small-100" }, omittedTags.map((tag) => (React.createElement("s-chip", { key: tag }, tag))))))) : (cellContent)));
};
//# sourceMappingURL=PolarisWCAutoTableTagCell.js.map