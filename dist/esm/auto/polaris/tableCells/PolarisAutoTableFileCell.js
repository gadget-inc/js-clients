import { Icon, InlineStack, Text, Thumbnail } from "@shopify/polaris";
import { NoteIcon } from "@shopify/polaris-icons";
import React, { useMemo } from "react";
import { imageFileTypes } from "../../hooks/useFileInputController.js";
const MAX_FILE_NAME_LENGTH = 12;
export const PolarisAutoTableFileCell = (props) => {
    const { value } = props;
    const originalFileName = value.fileName;
    const formattedFileName = useMemo(() => {
        const segments = originalFileName.split(".");
        if (segments.length > 1) {
            let name = segments.slice(0, -1).join(".");
            const extension = segments.pop();
            if (name.length > MAX_FILE_NAME_LENGTH) {
                // Truncate the name if it's too long
                name = name.substring(0, MAX_FILE_NAME_LENGTH) + "(..)";
            }
            // Join the name and extension back together
            return [name, extension].join(".");
        }
        else {
            // Return the original name if there's no extension
            return originalFileName;
        }
    }, [originalFileName]);
    const icon = imageFileTypes.includes(value.mimeType) ? (React.createElement(Thumbnail, { size: "small", alt: originalFileName, source: value.url })) : (React.createElement("div", null,
        React.createElement(Icon, { source: NoteIcon })));
    return (React.createElement(InlineStack, { gap: "200", blockAlign: "center", wrap: false },
        icon,
        React.createElement(Text, { as: "span", truncate: true }, formattedFileName)));
};
//# sourceMappingURL=PolarisAutoTableFileCell.js.map