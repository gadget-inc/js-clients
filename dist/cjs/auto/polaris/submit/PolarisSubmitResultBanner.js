"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisSubmitErrorBanner = exports.PolarisSubmitSuccessfulBanner = exports.PolarisSubmitResultBanner = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useResultBannerController_js_1 = require("../../hooks/useResultBannerController.js");
const PolarisSubmitResultBanner = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.PolarisSubmitSuccessfulBanner, { ...props.successBannerProps }),
        react_1.default.createElement(exports.PolarisSubmitErrorBanner, { ...props.errorBannerProps })));
};
exports.PolarisSubmitResultBanner = PolarisSubmitResultBanner;
const PolarisSubmitSuccessfulBanner = (props) => {
    const { show, hide, successful, ...rest } = (0, useResultBannerController_js_1.useResultBannerController)();
    if (!show || !successful) {
        return null;
    }
    return react_1.default.createElement(polaris_1.Banner, { tone: "success", onDismiss: hide, ...rest, ...props });
};
exports.PolarisSubmitSuccessfulBanner = PolarisSubmitSuccessfulBanner;
const PolarisSubmitErrorBanner = (props) => {
    const { show, hide, successful, ...rest } = (0, useResultBannerController_js_1.useResultBannerController)();
    if (!show || successful) {
        return null;
    }
    return react_1.default.createElement(polaris_1.Banner, { tone: "critical", onDismiss: hide, ...rest, ...props });
};
exports.PolarisSubmitErrorBanner = PolarisSubmitErrorBanner;
//# sourceMappingURL=PolarisSubmitResultBanner.js.map