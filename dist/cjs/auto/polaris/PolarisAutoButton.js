"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoButton = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useAutoButtonController_js_1 = require("../hooks/useAutoButtonController.js");
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
const PolarisAutoButton = (props) => {
    const { fetching, running, isDestructive, run, label, buttonProps } = (0, useAutoButtonController_js_1.useAutoButtonController)({
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
    return (react_1.default.createElement(polaris_1.Button, { loading: running, disabled: fetching, tone: isDestructive ? "critical" : undefined, onClick: run, ...buttonProps }, props?.children ?? label));
};
exports.PolarisAutoButton = PolarisAutoButton;
//# sourceMappingURL=PolarisAutoButton.js.map