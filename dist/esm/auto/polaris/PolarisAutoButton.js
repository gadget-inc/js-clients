import { Button } from "@shopify/polaris";
import React from "react";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
export const PolarisAutoButton = (props) => {
    const { fetching, running, isDestructive, run, label, buttonProps } = useAutoButtonController({
        onSuccess: (_result) => {
            if (window && window.shopify && window.shopify.toast) {
                window.shopify.toast.show(`${label} succeeded.`);
            }
            else {
                alert(`${label} succeeded.`);
            }
        },
        onError: (error, _result) => {
            if (window && window.shopify && window.shopify.toast) {
                window.shopify.toast.show(`${label} encountered an error: ${error.message}.`, { isError: true });
            }
            else {
                alert(`${label} encountered an error: ${error.message}.`);
            }
        },
        ...props,
    });
    return (React.createElement(Button, { loading: running, disabled: fetching, tone: isDestructive ? "critical" : undefined, onClick: run, ...buttonProps }, props?.children ?? label));
};
//# sourceMappingURL=PolarisAutoButton.js.map