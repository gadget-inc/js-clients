import { InlineStack, Tag, Text } from "@shopify/polaris";
import React, { useEffect, useRef, useState } from "react";
import { useTagsForTableCellRenderer } from "../../hooks/useTagsForTableCellRenderer.js";
export const PolarisAutoTableTagCell = (props) => {
    const { value } = props;
    const [showMore, setShowMore] = useState(false);
    const ref = useRef(null);
    const { shortenedTags, hasOmittedTags } = useTagsForTableCellRenderer({ value });
    useEffect(() => {
        if (ref.current) {
            setShowMore(ref.current.scrollWidth > ref.current.clientWidth);
        }
    }, [shortenedTags]);
    const showMoreComponent = React.createElement(Text, { as: "span" }, "...");
    return (React.createElement(InlineStack, { gap: "100", wrap: false },
        React.createElement("div", { style: {
                width: showMore ? "calc(100% - 20px)" : "auto",
                overflowX: "hidden",
            }, ref: ref },
            React.createElement(InlineStack, { gap: "100", wrap: false },
                shortenedTags.map((tag) => (React.createElement(Tag, { key: tag }, tag))),
                hasOmittedTags && showMoreComponent)),
        showMore && showMoreComponent));
};
//# sourceMappingURL=PolarisAutoTableTagCell.js.map