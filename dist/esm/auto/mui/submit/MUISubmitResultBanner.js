import { Alert, Button } from "@mui/material";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
export const MUISubmitResultBanner = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(MUISubmitSuccessfulBanner, { ...props.successBannerProps }),
        React.createElement(MUISubmitErrorBanner, { ...props.errorBannerProps })));
};
export const MUISubmitSuccessfulBanner = (props) => {
    const { show, successful, title, hide } = useResultBannerController();
    if (!show || !successful) {
        return null;
    }
    return (React.createElement(Alert, { severity: "success", ...props },
        title,
        React.createElement(CloseBannerButton, { onClick: hide })));
};
export const MUISubmitErrorBanner = (props) => {
    const { show, successful, title, hide } = useResultBannerController();
    if (!show || successful) {
        return null;
    }
    return (React.createElement(Alert, { severity: "error", ...props },
        title,
        React.createElement(CloseBannerButton, { onClick: hide })));
};
const CloseBannerButton = (props) => {
    return (React.createElement(Button, { onClick: props.onClick, "aria-label": "Dismiss notification" }, "X"));
};
//# sourceMappingURL=MUISubmitResultBanner.js.map