import { Button } from "@shopify/polaris";
import React from "react";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
export const PolarisAutoButton = (props) => {
    const { fetching, isDestructive, run, label, buttonProps } = useAutoButtonController({
        ...props,
    });
    return (React.createElement(Button, { loading: fetching, disabled: fetching, tone: isDestructive ? "critical" : undefined, onClick: run, ...buttonProps }, props?.children ?? label));
};
//# sourceMappingURL=PolarisAutoButton.js.map