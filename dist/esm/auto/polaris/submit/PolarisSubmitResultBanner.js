import { Banner } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { useAutoFormMetadata } from "../../AutoFormContext.js";
export const PolarisSubmitResultBanner = (props) => {
    const { successBannerProps, errorBannerProps } = props;
    const { metadata, submitResult } = useAutoFormMetadata();
    const [isManuallyClosed, setIsManuallyClosed] = useState(false);
    const hideBanner = () => setIsManuallyClosed(true);
    useEffect(() => {
        setIsManuallyClosed(false);
    }, [submitResult?.isSuccessful, submitResult?.error]);
    if (!isManuallyClosed) {
        if (submitResult?.isSuccessful) {
            return (React.createElement(Banner, { title: `Saved ${`${metadata?.name} `}successfully.`, tone: "success", ...successBannerProps, onDismiss: () => {
                    hideBanner();
                    successBannerProps?.onDismiss?.();
                } }));
        }
        else if (submitResult?.error) {
            return (React.createElement(Banner, { title: submitResult?.error.message, tone: "critical", ...errorBannerProps, onDismiss: () => {
                    hideBanner?.();
                    errorBannerProps?.onDismiss?.();
                } }));
        }
    }
    return React.createElement(React.Fragment, null);
};
//# sourceMappingURL=PolarisSubmitResultBanner.js.map