"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoButton = void 0;
const tslib_1 = require("tslib");
const app_bridge_react_1 = require("@shopify/app-bridge-react");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useAutoButtonController_js_1 = require("../hooks/useAutoButtonController.js");
/**
 * Render a button that invokes an action when clicked, and shows a toast notification when the action succeeds or encounters an error by default.
 */
const PolarisAutoButton = (props) => {
    const { fetching, isDestructive, run, label, buttonProps } = (0, useAutoButtonController_js_1.useAutoButtonController)({
        onSuccess: (_result) => {
            shopify.toast.show(`${label} succeeded.`);
        },
        onError: (error, _result) => {
            shopify.toast.show(`${label} encountered an error: ${error.message}.`, { isError: true });
        },
        ...props,
    });
    const shopify = (0, app_bridge_react_1.useAppBridge)();
    return (react_1.default.createElement(polaris_1.Button, { loading: fetching, disabled: fetching, tone: isDestructive ? "critical" : undefined, onClick: run, ...buttonProps }, props?.children ?? label));
};
exports.PolarisAutoButton = PolarisAutoButton;
//# sourceMappingURL=PolarisAutoButton.js.map