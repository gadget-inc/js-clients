import { XIcon } from "lucide-react";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
export const makeSubmitResultBanner = ({ Alert, AlertTitle, AlertDescription, Button, }) => {
    if (!Alert || !AlertTitle || !AlertDescription || !Button) {
        throw new Error("Alert components are required");
    }
    const SubmitSuccessfulBanner = (props) => {
        const { show, successful, title, hide } = useResultBannerController();
        if (!show || !successful) {
            return null;
        }
        return (React.createElement(Alert, { className: "flex flex-row", ...props },
            React.createElement("div", { className: "flex flex-col" },
                React.createElement(AlertTitle, { className: "text-lg font-bold" }, "Success"),
                React.createElement(AlertDescription, null, title || "Operation completed successfully")),
            React.createElement(Button, { className: "ml-auto", variant: "ghost", size: "icon", "aria-label": "Dismiss notification", onClick: hide },
                React.createElement(XIcon, null))));
    };
    const SubmitErrorBanner = (props) => {
        const { show, successful, hide, title } = useResultBannerController();
        if (!show || successful) {
            return null;
        }
        return (React.createElement(Alert, { className: "flex flex-row", variant: "destructive", ...props },
            React.createElement("div", { className: "flex flex-col" },
                React.createElement(AlertTitle, { className: "text-lg font-bold" }, "Error"),
                React.createElement(AlertDescription, null, title || "An error occurred")),
            React.createElement(Button, { className: "ml-auto", variant: "ghost", size: "icon", "aria-label": "Dismiss notification", onClick: hide },
                React.createElement(XIcon, null))));
    };
    const SubmitResultBanner = (props) => {
        return (React.createElement(React.Fragment, null,
            React.createElement(SubmitSuccessfulBanner, { ...props.successBannerProps }),
            React.createElement(SubmitErrorBanner, { ...props.errorBannerProps })));
    };
    return {
        SubmitResultBanner,
        SubmitSuccessfulBanner,
        SubmitErrorBanner,
    };
};
//# sourceMappingURL=ShadcnSubmitResultBanner.js.map