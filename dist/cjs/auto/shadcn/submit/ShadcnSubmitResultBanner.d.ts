import React from "react";
import type { AlertProps, ShadcnElements } from "../elements.js";
export declare const makeSubmitResultBanner: <Elements extends Partial<ShadcnElements>>({ Alert, AlertTitle, AlertDescription, Button, }: Elements) => {
    SubmitResultBanner: (props: {
        successBannerProps?: AlertProps;
        errorBannerProps?: AlertProps;
    }) => React.JSX.Element;
    SubmitSuccessfulBanner: (props: AlertProps) => React.JSX.Element | null;
    SubmitErrorBanner: (props: AlertProps) => React.JSX.Element | null;
};
