"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSubmitResultBanner = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importDefault(require("react"));
const useResultBannerController_js_1 = require("../../hooks/useResultBannerController.js");
const makeSubmitResultBanner = ({ Alert, AlertTitle, AlertDescription, Button, }) => {
    if (!Alert || !AlertTitle || !AlertDescription || !Button) {
        throw new Error("Alert components are required");
    }
    const SubmitSuccessfulBanner = (props) => {
        const { show, successful, title, hide } = (0, useResultBannerController_js_1.useResultBannerController)();
        if (!show || !successful) {
            return null;
        }
        return (react_1.default.createElement(Alert, { className: "flex flex-row", ...props },
            react_1.default.createElement("div", { className: "flex flex-col" },
                react_1.default.createElement(AlertTitle, { className: "text-lg font-bold" }, "Success"),
                react_1.default.createElement(AlertDescription, null, title || "Operation completed successfully")),
            react_1.default.createElement(Button, { className: "ml-auto", variant: "ghost", size: "icon", "aria-label": "Dismiss notification", onClick: hide },
                react_1.default.createElement(lucide_react_1.XIcon, null))));
    };
    const SubmitErrorBanner = (props) => {
        const { show, successful, hide, title } = (0, useResultBannerController_js_1.useResultBannerController)();
        if (!show || successful) {
            return null;
        }
        return (react_1.default.createElement(Alert, { className: "flex flex-row", variant: "destructive", ...props },
            react_1.default.createElement("div", { className: "flex flex-col" },
                react_1.default.createElement(AlertTitle, { className: "text-lg font-bold" }, "Error"),
                react_1.default.createElement(AlertDescription, null, title || "An error occurred")),
            react_1.default.createElement(Button, { className: "ml-auto", variant: "ghost", size: "icon", "aria-label": "Dismiss notification", onClick: hide },
                react_1.default.createElement(lucide_react_1.XIcon, null))));
    };
    const SubmitResultBanner = (props) => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(SubmitSuccessfulBanner, { ...props.successBannerProps }),
            react_1.default.createElement(SubmitErrorBanner, { ...props.errorBannerProps })));
    };
    return {
        SubmitResultBanner,
        SubmitSuccessfulBanner,
        SubmitErrorBanner,
    };
};
exports.makeSubmitResultBanner = makeSubmitResultBanner;
//# sourceMappingURL=ShadcnSubmitResultBanner.js.map