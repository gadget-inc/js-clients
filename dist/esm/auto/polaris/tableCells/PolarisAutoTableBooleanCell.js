import { InlineStack } from "@shopify/polaris";
import { CheckIcon, XIcon } from "@shopify/polaris-icons";
import React from "react";
export const PolarisAutoTableBooleanCell = (props) => {
    const { value } = props;
    return (React.createElement(InlineStack, { blockAlign: "center" }, value ? React.createElement(CheckIcon, { width: 20 }) : React.createElement(XIcon, { width: 20, fill: "var(--p-color-icon-disabled)" })));
};
//# sourceMappingURL=PolarisAutoTableBooleanCell.js.map