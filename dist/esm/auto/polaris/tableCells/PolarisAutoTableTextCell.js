import { Text } from "@shopify/polaris";
import React from "react";
export const PolarisAutoTableTextCell = (props) => {
    const { value } = props;
    const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : value;
    return (React.createElement(Text, { as: "span", truncate: true }, stringifiedValue));
};
//# sourceMappingURL=PolarisAutoTableTextCell.js.map