import { Icon, InlineStack, Text, Thumbnail } from "@shopify/polaris";
import { NoteIcon } from "@shopify/polaris-icons";
import React from "react";
import { useAutoTableFileCell } from "../../hooks/useAutoTableFileCell.js";
export const PolarisAutoTableFileCell = (props) => {
    const { originalFileName, formattedFileName, imageFileIconUrl } = useAutoTableFileCell(props);
    const icon = imageFileIconUrl ? (React.createElement(Thumbnail, { size: "small", alt: originalFileName, source: imageFileIconUrl })) : (React.createElement("div", null,
        React.createElement(Icon, { source: NoteIcon })));
    return (React.createElement(InlineStack, { gap: "200", blockAlign: "center", wrap: false },
        icon,
        React.createElement(Text, { as: "span", truncate: true }, formattedFileName)));
};
//# sourceMappingURL=PolarisAutoTableFileCell.js.map