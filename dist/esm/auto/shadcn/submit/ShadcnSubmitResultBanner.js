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
        return (React.createElement(Alert, { className: "relative p-4", ...props },
            React.createElement(AlertTitle, null, "Success"),
            React.createElement(AlertDescription, null, title || "Operation completed successfully"),
            React.createElement(Button, { className: "absolute top-2 right-2 h-4 w-4 cursor-pointer", variant: "ghost", size: "icon", "aria-label": "Dismiss notification", onClick: hide },
                React.createElement(XIcon, null))));
    };
    const SubmitErrorBanner = (props) => {
        const { show, successful, hide, title } = useResultBannerController();
        if (!show || successful) {
            return null;
        }
        return (React.createElement(Alert, { className: "relative", variant: "destructive", ...props, ...props },
            React.createElement(AlertTitle, null, "Error"),
            React.createElement(AlertDescription, null, title || "An error occurred"),
            React.createElement(Button, { className: "absolute top-2 right-2 h-4 w-4 cursor-pointer", variant: "ghost", size: "icon", "aria-label": "Dismiss notification", onClick: hide },
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