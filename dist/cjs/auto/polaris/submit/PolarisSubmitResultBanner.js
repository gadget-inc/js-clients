"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisSubmitResultBanner = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
const PolarisSubmitResultBanner = (props) => {
    const { successBannerProps, errorBannerProps } = props;
    const { metadata, submitResult } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const [isManuallyClosed, setIsManuallyClosed] = (0, react_1.useState)(false);
    const hideBanner = () => setIsManuallyClosed(true);
    (0, react_1.useEffect)(() => {
        setIsManuallyClosed(false);
    }, [submitResult?.isSuccessful, submitResult?.error]);
    if (!isManuallyClosed) {
        if (submitResult?.isSuccessful) {
            return (react_1.default.createElement(polaris_1.Banner, { title: `Saved ${`${metadata?.name} `}successfully.`, tone: "success", ...successBannerProps, onDismiss: () => {
                    hideBanner();
                    successBannerProps?.onDismiss?.();
                } }));
        }
        else if (submitResult?.error) {
            return (react_1.default.createElement(polaris_1.Banner, { title: submitResult?.error.message, tone: "critical", ...errorBannerProps, onDismiss: () => {
                    hideBanner?.();
                    errorBannerProps?.onDismiss?.();
                } }));
        }
    }
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.PolarisSubmitResultBanner = PolarisSubmitResultBanner;
//# sourceMappingURL=PolarisSubmitResultBanner.js.map