import { Alert, Button } from "@mui/material";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
const MUIBaseSubmitResultBanner = (props) => {
    const { hide, successful, title } = useResultBannerController();
    return (React.createElement(Alert, { severity: successful ? "success" : "error", ...props },
        title,
        React.createElement(Button, { onClick: hide }, "X")));
};
export const MUISubmitResultBanner = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(MUISubmitSuccessfulBanner, { ...props.successBannerProps }),
        React.createElement(MUISubmitErrorBanner, { ...props.errorBannerProps })));
};
export const MUISubmitSuccessfulBanner = (props) => {
    const { show, successful } = useResultBannerController();
    return show && successful ? React.createElement(MUIBaseSubmitResultBanner, { ...props }) : null;
};
export const MUISubmitErrorBanner = (props) => {
    const { show, successful } = useResultBannerController();
    return show && !successful ? React.createElement(MUIBaseSubmitResultBanner, { ...props }) : null;
};
//# sourceMappingURL=MUISubmitResultBanner.js.map