"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUISubmitErrorBanner = exports.MUISubmitSuccessfulBanner = exports.MUISubmitResultBanner = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useResultBannerController_js_1 = require("../../hooks/useResultBannerController.js");
const MUISubmitResultBanner = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.MUISubmitSuccessfulBanner, { ...props.successBannerProps }),
        react_1.default.createElement(exports.MUISubmitErrorBanner, { ...props.errorBannerProps })));
};
exports.MUISubmitResultBanner = MUISubmitResultBanner;
const MUISubmitSuccessfulBanner = (props) => {
    const { show, successful, title, hide } = (0, useResultBannerController_js_1.useResultBannerController)();
    if (!show || !successful) {
        return null;
    }
    return (react_1.default.createElement(material_1.Alert, { severity: "success", ...props },
        title,
        react_1.default.createElement(CloseBannerButton, { onClick: hide })));
};
exports.MUISubmitSuccessfulBanner = MUISubmitSuccessfulBanner;
const MUISubmitErrorBanner = (props) => {
    const { show, successful, title, hide } = (0, useResultBannerController_js_1.useResultBannerController)();
    if (!show || successful) {
        return null;
    }
    return (react_1.default.createElement(material_1.Alert, { severity: "error", ...props },
        title,
        react_1.default.createElement(CloseBannerButton, { onClick: hide })));
};
exports.MUISubmitErrorBanner = MUISubmitErrorBanner;
const CloseBannerButton = (props) => {
    return (react_1.default.createElement(material_1.Button, { onClick: props.onClick, "aria-label": "Dismiss notification" }, "X"));
};
//# sourceMappingURL=MUISubmitResultBanner.js.map