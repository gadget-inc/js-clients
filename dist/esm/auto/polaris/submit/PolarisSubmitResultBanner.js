import { Banner } from "@shopify/polaris";
import React from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
export const PolarisSubmitResultBanner = (props) => {
    const { show, hide, successful, title } = useResultBannerController();
    if (show) {
        const bannerProps = successful ? props.successBannerProps : props.errorBannerProps;
        return (React.createElement(Banner, { title: title, tone: successful ? "success" : "critical", ...bannerProps, onDismiss: () => {
                hide();
                bannerProps?.onDismiss?.();
            } }));
    }
    return null;
};
//# sourceMappingURL=PolarisSubmitResultBanner.js.map