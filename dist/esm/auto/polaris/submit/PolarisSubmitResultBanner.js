import { Banner } from "@shopify/polaris";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
const PolarisBaseSubmitResultBanner = (props) => {
    const { hide, successful, title } = useResultBannerController();
    return (React.createElement(Banner, { title: title, tone: successful ? "success" : "critical", ...props, onDismiss: () => {
            hide();
            props?.onDismiss?.();
        } }));
};
export const PolarisSubmitResultBanner = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(PolarisSubmitSuccessfulBanner, { ...props.successBannerProps }),
        React.createElement(PolarisSubmitErrorBanner, { ...props.errorBannerProps })));
};
export const PolarisSubmitSuccessfulBanner = (props) => {
    const { show, successful } = useResultBannerController();
    return show && successful ? React.createElement(PolarisBaseSubmitResultBanner, { ...props }) : null;
};
export const PolarisSubmitErrorBanner = (props) => {
    const { show, successful } = useResultBannerController();
    return show && !successful ? React.createElement(PolarisBaseSubmitResultBanner, { ...props }) : null;
};
//# sourceMappingURL=PolarisSubmitResultBanner.js.map