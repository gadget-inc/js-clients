import { Banner } from "@shopify/polaris";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
export const PolarisSubmitResultBanner = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(PolarisSubmitSuccessfulBanner, { ...props.successBannerProps }),
        React.createElement(PolarisSubmitErrorBanner, { ...props.errorBannerProps })));
};
export const PolarisSubmitSuccessfulBanner = (props) => {
    const { show, hide, successful, ...rest } = useResultBannerController();
    if (!show || !successful) {
        return null;
    }
    return React.createElement(Banner, { tone: "success", onDismiss: hide, ...rest, ...props });
};
export const PolarisSubmitErrorBanner = (props) => {
    const { show, hide, successful, ...rest } = useResultBannerController();
    if (!show || successful) {
        return null;
    }
    return React.createElement(Banner, { tone: "critical", onDismiss: hide, ...rest, ...props });
};
//# sourceMappingURL=PolarisSubmitResultBanner.js.map