import type { BannerProps } from "@shopify/polaris";
import React from "react";
type PolarisSubmitResultBannerProps = {
    successBannerProps?: BannerProps;
    errorBannerProps?: BannerProps;
};
/**
 * A banner that displays the result of an AutoForm submission.
 * @param props.successBannerProps - The props for the successful banner
 * @param props.errorBannerProps - The props for the error banner
 * @returns The banner component
 */
export declare const PolarisSubmitResultBanner: (props: PolarisSubmitResultBannerProps) => React.JSX.Element;
export declare const PolarisSubmitSuccessfulBanner: (props: BannerProps) => React.JSX.Element | null;
export declare const PolarisSubmitErrorBanner: (props: BannerProps) => React.JSX.Element | null;
export {};
