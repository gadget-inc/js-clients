"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUISubmitResultBanner = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importStar(require("react"));
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
const MUISubmitResultBanner = (props) => {
    const { successBannerProps, errorBannerProps } = props;
    const { metadata, submitResult } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const [isManuallyClosed, setIsManuallyClosed] = (0, react_1.useState)(false);
    const hideBanner = () => setIsManuallyClosed(true);
    (0, react_1.useEffect)(() => {
        setIsManuallyClosed(false);
    }, [submitResult?.isSuccessful, submitResult?.error]);
    const hideBannerButton = react_1.default.createElement(material_1.Button, { onClick: hideBanner }, "X");
    if (!isManuallyClosed) {
        if (submitResult?.isSuccessful) {
            return (react_1.default.createElement(material_1.Alert, { severity: "success", ...successBannerProps },
                `Saved ${`${metadata?.name} `}successfully.`,
                hideBannerButton));
        }
        else if (submitResult?.error) {
            return (react_1.default.createElement(material_1.Alert, { severity: "error", ...errorBannerProps },
                submitResult?.error.message,
                hideBannerButton));
        }
    }
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.MUISubmitResultBanner = MUISubmitResultBanner;
//# sourceMappingURL=MUISubmitResultBanner.js.map