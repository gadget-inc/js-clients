import { Box, Tag, Text } from "@shopify/polaris";
import React from "react";
export const renderOptionLabel = (label, type) => {
    if (typeof label === "string") {
        switch (type) {
            case "primary":
                return (React.createElement(Text, { variant: "bodyMd", fontWeight: "semibold", as: "h3" }, label));
            case "secondary":
                return (React.createElement(Text, { variant: "bodyMd", as: "p", tone: "subdued" }, label));
            case "tertiary":
                return (React.createElement(Box, null,
                    React.createElement(Tag, null, label)));
            default:
                throw new Error("Invalid option type");
        }
    }
    else {
        return label;
    }
};
//# sourceMappingURL=utils.js.map