"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisSubmitErrorBanner = exports.PolarisSubmitSuccessfulBanner = exports.PolarisSubmitResultBanner = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useResultBannerController_js_1 = require("../../hooks/useResultBannerController.js");
const PolarisBaseSubmitResultBanner = (props) => {
    const { hide, successful, title } = (0, useResultBannerController_js_1.useResultBannerController)();
    return (react_1.default.createElement(polaris_1.Banner, { title: title, tone: successful ? "success" : "critical", ...props, onDismiss: () => {
            hide();
            props?.onDismiss?.();
        } }));
};
const PolarisSubmitResultBanner = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.PolarisSubmitSuccessfulBanner, { ...props.successBannerProps }),
        react_1.default.createElement(exports.PolarisSubmitErrorBanner, { ...props.errorBannerProps })));
};
exports.PolarisSubmitResultBanner = PolarisSubmitResultBanner;
const PolarisSubmitSuccessfulBanner = (props) => {
    const { show, successful } = (0, useResultBannerController_js_1.useResultBannerController)();
    return show && successful ? react_1.default.createElement(PolarisBaseSubmitResultBanner, { ...props }) : null;
};
exports.PolarisSubmitSuccessfulBanner = PolarisSubmitSuccessfulBanner;
const PolarisSubmitErrorBanner = (props) => {
    const { show, successful } = (0, useResultBannerController_js_1.useResultBannerController)();
    return show && !successful ? react_1.default.createElement(PolarisBaseSubmitResultBanner, { ...props }) : null;
};
exports.PolarisSubmitErrorBanner = PolarisSubmitErrorBanner;
//# sourceMappingURL=PolarisSubmitResultBanner.js.map