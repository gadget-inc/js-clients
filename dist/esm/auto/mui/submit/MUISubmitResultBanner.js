import { Alert, Button } from "@mui/material";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
export const MUISubmitResultBanner = (props) => {
    const { show, hide, successful, title } = useResultBannerController();
    if (show) {
        const bannerProps = successful ? props.successBannerProps : props.errorBannerProps;
        return (React.createElement(Alert, { severity: successful ? "success" : "error", ...bannerProps },
            title,
            React.createElement(Button, { onClick: hide }, "X")));
    }
    return null;
};
//# sourceMappingURL=MUISubmitResultBanner.js.map