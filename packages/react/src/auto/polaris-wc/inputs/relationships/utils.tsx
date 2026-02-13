import React from "react";

/**
 * Renders an option label using Polaris Web Components.
 * @param label - The label to render (string or ReactNode)
 * @param type - The type of label: primary, secondary, or tertiary
 */
export const renderOptionLabel = (label: React.ReactNode, type: "primary" | "secondary" | "tertiary") => {
  if (typeof label === "string") {
    switch (type) {
      case "primary":
        return <s-text>{label}</s-text>;
      case "secondary":
        return <s-text color="subdued">{label}</s-text>;
      case "tertiary":
        return <s-chip>{label}</s-chip>;
      default:
        throw new Error("Invalid option type");
    }
  } else {
    return label;
  }
};
