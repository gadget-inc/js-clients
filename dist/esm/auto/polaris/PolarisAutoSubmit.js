import { Button } from "@shopify/polaris";
import React from "react";
import { useAutoFormMetadata } from "../AutoFormContext.js";
export const PolarisAutoSubmit = (props) => {
    const { submit } = useAutoFormMetadata();
    return (React.createElement(Button, { submit: true, onClick: submit }, props.children || "Submit"));
};
//# sourceMappingURL=PolarisAutoSubmit.js.map