import React from "react";
import { useAutoButtonController } from "../hooks/useAutoButtonController.js";
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
export const makeAutoButton = ({ Button, toast }) => {
    const AutoButton = (props) => {
        const { fetching, isDestructive, run, label, buttonProps } = useAutoButtonController({
            onSuccess: (_result) => {
                toast.success(`${label} succeeded.`);
            },
            onError: (error, _result) => {
                toast.error(`${label} encountered an error`, { description: error.message });
            },
            ...props,
        });
        const { variant = isDestructive ? "destructive" : "default", ...rest } = props;
        return (React.createElement(Button, { disabled: fetching, variant: variant, onClick: run, ...buttonProps, ...rest }, props?.children ?? label));
    };
    return AutoButton;
    // return <
    //   GivenOptions extends OptionsType,
    //   SchemaT,
    //   ActionFunc extends ActionFunction<GivenOptions, any, any, SchemaT, any> | GlobalActionFunction<any>
    // >(
    //   props: ShadcnAutoButtonProps<GivenOptions, SchemaT, ActionFunc>
    // ): JSX.Element => {
    //   const { fetching, isDestructive, run, label, buttonProps } = useAutoButtonController({
    //     onSuccess: (_result) => {
    //       toast.success(`${label} succeeded.`);
    //     },
    //     onError: (error, _result) => {
    //       toast.error(`${label} encountered an error`, { description: error.message });
    //     },
    //     ...props,
    //   });
    //   const { variant = isDestructive ? "destructive" : "default", ...rest } = props;
    //   return (
    //     <Button disabled={fetching} variant={variant} onClick={run} {...buttonProps} {...rest}>
    //       {props?.children ?? label}
    //     </Button>
    //   );
    // };
};
//# sourceMappingURL=ShadcnAutoButton.js.map