import React from "react";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 * Uses Polaris Web Components (s-button).
 */
export const PolarisWCAutoButton = (props) => {
    const { id, ...rest } = props;
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
        ...rest,
    });
    return (React.createElement("s-button", { id: id, variant: "primary", tone: isDestructive ? "critical" : undefined, loading: running ? true : undefined, disabled: fetching, onClick: run, ...buttonProps }, props?.children ?? label));
};
//# sourceMappingURL=PolarisWCAutoButton.js.map