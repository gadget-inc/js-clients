import type { AlertProps } from "@mui/material";
import React from "react";
export declare const MUISubmitResultBanner: (props: {
    successBannerProps?: AlertProps;
    errorBannerProps?: AlertProps;
}) => React.JSX.Element;
export declare const MUISubmitSuccessfulBanner: (props: AlertProps) => React.JSX.Element | null;
export declare const MUISubmitErrorBanner: (props: AlertProps) => React.JSX.Element | null;
