"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCSubmitErrorBanner = exports.PolarisWCSubmitSuccessfulBanner = exports.PolarisWCSubmitResultBanner = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useResultBannerController_js_1 = require("../../hooks/useResultBannerController.js");
/**
 * A banner that displays the result of an AutoForm submission using Polaris Web Components.
 * @param props.successBannerProps - The props for the successful banner
 * @param props.errorBannerProps - The props for the error banner
 * @returns The banner component
 */
const PolarisWCSubmitResultBanner = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.PolarisWCSubmitSuccessfulBanner, { ...props.successBannerProps }),
        react_1.default.createElement(exports.PolarisWCSubmitErrorBanner, { ...props.errorBannerProps })));
};
exports.PolarisWCSubmitResultBanner = PolarisWCSubmitResultBanner;
const PolarisWCSubmitSuccessfulBanner = (props) => {
    const { show, hide, successful, title } = (0, useResultBannerController_js_1.useResultBannerController)();
    const { onDismiss } = props;
    const handleDismiss = (0, react_1.useCallback)(() => {
        hide();
        onDismiss?.();
    }, [hide, onDismiss]);
    if (!show || !successful) {
        return null;
    }
    return (react_1.default.createElement("s-banner", { dismissible: true, tone: "success", onDismiss: handleDismiss, ...props }, props.title ?? title));
};
exports.PolarisWCSubmitSuccessfulBanner = PolarisWCSubmitSuccessfulBanner;
const PolarisWCSubmitErrorBanner = (props) => {
    const { show, hide, successful, title } = (0, useResultBannerController_js_1.useResultBannerController)();
    const { onDismiss } = props;
    const handleDismiss = (0, react_1.useCallback)(() => {
        hide();
        onDismiss?.();
    }, [hide, onDismiss]);
    if (!show || successful) {
        return null;
    }
    return (react_1.default.createElement("s-banner", { dismissible: true, tone: "critical", onDismiss: handleDismiss, ...props }, props.title ?? title));
};
exports.PolarisWCSubmitErrorBanner = PolarisWCSubmitErrorBanner;
//# sourceMappingURL=PolarisWCSubmitResultBanner.js.map