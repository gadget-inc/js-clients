"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUISubmitResultBanner = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useResultBannerController_js_1 = require("../../hooks/useResultBannerController.js");
const MUISubmitResultBanner = (props) => {
    const { show, hide, successful, title } = (0, useResultBannerController_js_1.useResultBannerController)();
    if (show) {
        const bannerProps = successful ? props.successBannerProps : props.errorBannerProps;
        return (react_1.default.createElement(material_1.Alert, { severity: successful ? "success" : "error", ...bannerProps },
            title,
            react_1.default.createElement(material_1.Button, { onClick: hide }, "X")));
    }
    return null;
};
exports.MUISubmitResultBanner = MUISubmitResultBanner;
//# sourceMappingURL=MUISubmitResultBanner.js.map