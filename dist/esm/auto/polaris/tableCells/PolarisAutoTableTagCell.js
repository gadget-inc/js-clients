import { InlineStack, Tag, Text } from "@shopify/polaris";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { isRoleAssignmentsArray } from "../../../utils.js";
const MAX_TAGS_LENGTH = 5;
export const PolarisAutoTableTagCell = (props) => {
    const { value } = props;
    const [showMore, setShowMore] = useState(false);
    const ref = useRef(null);
    const { tags, originalLength } = useMemo(() => {
        let formattedTags = [];
        if (Array.isArray(value)) {
            if (isRoleAssignmentsArray(value)) {
                formattedTags = value.map((role) => role.name);
            }
            else {
                const compactValues = value.filter((tag) => tag !== null && tag !== undefined);
                formattedTags = compactValues.map((tag) => tag.toString());
            }
        }
        else {
            if (value !== null && value !== undefined) {
                formattedTags = [value];
            }
        }
        return {
            tags: formattedTags.slice(0, MAX_TAGS_LENGTH),
            originalLength: formattedTags.length,
        };
    }, [value]);
    useEffect(() => {
        if (ref.current) {
            setShowMore(ref.current.scrollWidth > ref.current.clientWidth);
        }
    }, [tags]);
    const showMoreComponent = React.createElement(Text, { as: "span" }, "...");
    return (React.createElement(InlineStack, { gap: "100", wrap: false },
        React.createElement("div", { style: {
                width: showMore ? "calc(100% - 20px)" : "auto",
                overflowX: "hidden",
            }, ref: ref },
            React.createElement(InlineStack, { gap: "100", wrap: false },
                tags.map((tag) => (React.createElement(Tag, { key: tag }, tag))),
                originalLength > MAX_TAGS_LENGTH && showMoreComponent)),
        showMore && showMoreComponent));
};
//# sourceMappingURL=PolarisAutoTableTagCell.js.map