import React from "react";
export interface PolarisWCBannerProps {
    tone?: "success" | "warning" | "critical" | "info";
    title?: string;
    onDismiss?: () => void;
}
type PolarisWCSubmitResultBannerProps = {
    successBannerProps?: PolarisWCBannerProps;
    errorBannerProps?: PolarisWCBannerProps;
};
/**
 * A banner that displays the result of an AutoForm submission using Polaris Web Components.
 * @param props.successBannerProps - The props for the successful banner
 * @param props.errorBannerProps - The props for the error banner
 * @returns The banner component
 */
export declare const PolarisWCSubmitResultBanner: (props: PolarisWCSubmitResultBannerProps) => React.JSX.Element;
export declare const PolarisWCSubmitSuccessfulBanner: (props: PolarisWCBannerProps) => React.JSX.Element | null;
export declare const PolarisWCSubmitErrorBanner: (props: PolarisWCBannerProps) => React.JSX.Element | null;
export {};
