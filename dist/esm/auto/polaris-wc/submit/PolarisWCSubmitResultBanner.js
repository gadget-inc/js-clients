import React, { useCallback } from "react";
import { useResultBannerController } from "../../hooks/useResultBannerController.js";
/**
 * A banner that displays the result of an AutoForm submission using Polaris Web Components.
 * @param props.successBannerProps - The props for the successful banner
 * @param props.errorBannerProps - The props for the error banner
 * @returns The banner component
 */
export const PolarisWCSubmitResultBanner = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(PolarisWCSubmitSuccessfulBanner, { ...props.successBannerProps }),
        React.createElement(PolarisWCSubmitErrorBanner, { ...props.errorBannerProps })));
};
export const PolarisWCSubmitSuccessfulBanner = (props) => {
    const { show, hide, successful, title } = useResultBannerController();
    const handleDismiss = useCallback(() => {
        hide();
        props.onDismiss?.();
    }, [hide, props.onDismiss]);
    if (!show || !successful) {
        return null;
    }
    return (React.createElement("s-banner", { dismissible: true, tone: "success", onDismiss: handleDismiss, ...props }, props.title ?? title));
};
export const PolarisWCSubmitErrorBanner = (props) => {
    const { show, hide, successful, title } = useResultBannerController();
    const handleDismiss = useCallback(() => {
        hide();
        props.onDismiss?.();
    }, [hide, props.onDismiss]);
    if (!show || successful) {
        return null;
    }
    return (React.createElement("s-banner", { dismissible: true, tone: "critical", onDismiss: handleDismiss, ...props }, props.title ?? title));
};
//# sourceMappingURL=PolarisWCSubmitResultBanner.js.map