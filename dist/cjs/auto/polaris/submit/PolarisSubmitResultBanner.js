"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisSubmitResultBanner = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const useResultBannerController_js_1 = require("../../hooks/useResultBannerController.js");
const PolarisSubmitResultBanner = (props) => {
    const { show, hide, successful, title } = (0, useResultBannerController_js_1.useResultBannerController)();
    if (show) {
        const bannerProps = successful ? props.successBannerProps : props.errorBannerProps;
        return (react_1.default.createElement(polaris_1.Banner, { title: title, tone: successful ? "success" : "critical", ...bannerProps, onDismiss: () => {
                hide();
                bannerProps?.onDismiss?.();
            } }));
    }
    return null;
};
exports.PolarisSubmitResultBanner = PolarisSubmitResultBanner;
//# sourceMappingURL=PolarisSubmitResultBanner.js.map