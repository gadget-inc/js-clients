import React from "react";
/**
 * Renders an option label using Polaris Web Components.
 * @param label - The label to render (string or ReactNode)
 * @param type - The type of label: primary, secondary, or tertiary
 */
export const renderOptionLabel = (label, type) => {
    if (typeof label === "string") {
        switch (type) {
            case "primary":
                return React.createElement("s-text", null, label);
            case "secondary":
                return React.createElement("s-text", { color: "subdued" }, label);
            case "tertiary":
                return React.createElement("s-chip", null, label);
            default:
                throw new Error("Invalid option type");
        }
    }
    else {
        return label;
    }
};
//# sourceMappingURL=utils.js.map