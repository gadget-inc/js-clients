"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAutoButton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useAutoButtonController_js_1 = require("../hooks/useAutoButtonController.js");
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
const makeAutoButton = ({ Button, toast }) => {
    const AutoButton = (props) => {
        const { fetching, isDestructive, run, label, buttonProps } = (0, useAutoButtonController_js_1.useAutoButtonController)({
            onSuccess: (_result) => {
                toast.success(`${label} succeeded.`);
            },
            onError: (error, _result) => {
                toast.error(`${label} encountered an error`, { description: error.message });
            },
            ...props,
        });
        const { variant = isDestructive ? "destructive" : "default", ...rest } = props;
        return (react_1.default.createElement(Button, { disabled: fetching, variant: variant, onClick: run, ...buttonProps, ...rest }, props?.children ?? label));
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
exports.makeAutoButton = makeAutoButton;
//# sourceMappingURL=ShadcnAutoButton.js.map