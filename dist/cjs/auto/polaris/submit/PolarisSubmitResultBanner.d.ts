import type { BannerProps } from "@shopify/polaris";
import React from "react";
export declare const PolarisSubmitResultBanner: (props: {
    successBannerProps?: BannerProps;
    errorBannerProps?: BannerProps;
}) => React.JSX.Element;
export declare const PolarisSubmitSuccessfulBanner: (props: BannerProps) => React.JSX.Element | null;
export declare const PolarisSubmitErrorBanner: (props: BannerProps) => React.JSX.Element | null;
