import { BlockStack, InlineStack, Text } from "@shopify/polaris";
import React, { useMemo } from "react";
import { shouldShowOptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { renderOptionLabel } from "./utils.js";
export const EditableOptionLabelButton = ({ option }) => {
    const showOptionLabel = useMemo(() => shouldShowOptionLabel(option), [option]);
    return (React.createElement(React.Fragment, null, showOptionLabel && option ? (React.createElement(InlineStack, { align: "space-between" },
        React.createElement(BlockStack, { gap: "200" },
            renderOptionLabel(option.primary, "primary"),
            option.secondary && renderOptionLabel(option.secondary, "secondary")),
        option.tertiary && renderOptionLabel(option.tertiary, "tertiary"))) : (React.createElement(Text, { variant: "bodyMd", as: "h3", tone: "subdued" }, "Click to edit..."))));
};
//# sourceMappingURL=EditableOptionLabelButton.js.map