import React from "react";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
export const makeAutoButton = ({ Button, toast }) => (props) => {
    const { fetching, isDestructive, run, label, buttonProps } = useAutoButtonController({
        onSuccess: (_result) => {
            toast({
                title: `${label} succeeded.`,
            });
        },
        onError: (error, _result) => {
            toast({
                title: `${label} encountered an error: ${error.message}.`,
                variant: "destructive",
            });
        },
        ...props,
    });
    const { variant = isDestructive ? "destructive" : "default", ...rest } = props;
    return (React.createElement(Button, { disabled: fetching, variant: variant, onClick: run, ...buttonProps, ...rest }, props?.children ?? label));
};
//# sourceMappingURL=ShadcnAutoButton.js.map