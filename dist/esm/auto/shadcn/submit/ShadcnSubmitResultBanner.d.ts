import React from "react";
import type { ShadcnElements } from "../elements.js";
export declare const makeSubmitResultBanner: <Elements extends Partial<ShadcnElements>>({ Alert, AlertTitle, AlertDescription, Button, }: Elements) => {
    SubmitResultBanner: (props: {
        successBannerProps?: any;
        errorBannerProps?: any;
    }) => React.JSX.Element;
    SubmitSuccessfulBanner: (props: any) => React.JSX.Element | null;
    SubmitErrorBanner: (props: any) => React.JSX.Element | null;
};
