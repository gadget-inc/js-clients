"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUISubmitErrorBanner = exports.MUISubmitSuccessfulBanner = exports.MUISubmitResultBanner = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useResultBannerController_js_1 = require("../../hooks/useResultBannerController.js");
const MUIBaseSubmitResultBanner = (props) => {
    const { hide, successful, title } = (0, useResultBannerController_js_1.useResultBannerController)();
    return (react_1.default.createElement(material_1.Alert, { severity: successful ? "success" : "error", ...props },
        title,
        react_1.default.createElement(material_1.Button, { onClick: hide }, "X")));
};
const MUISubmitResultBanner = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.MUISubmitSuccessfulBanner, { ...props.successBannerProps }),
        react_1.default.createElement(exports.MUISubmitErrorBanner, { ...props.errorBannerProps })));
};
exports.MUISubmitResultBanner = MUISubmitResultBanner;
const MUISubmitSuccessfulBanner = (props) => {
    const { show, successful } = (0, useResultBannerController_js_1.useResultBannerController)();
    return show && successful ? react_1.default.createElement(MUIBaseSubmitResultBanner, { ...props }) : null;
};
exports.MUISubmitSuccessfulBanner = MUISubmitSuccessfulBanner;
const MUISubmitErrorBanner = (props) => {
    const { show, successful } = (0, useResultBannerController_js_1.useResultBannerController)();
    return show && !successful ? react_1.default.createElement(MUIBaseSubmitResultBanner, { ...props }) : null;
};
exports.MUISubmitErrorBanner = MUISubmitErrorBanner;
//# sourceMappingURL=MUISubmitResultBanner.js.map