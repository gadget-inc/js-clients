import React from "react";
import type { ShadcnElements } from "../elements.js";
export declare const makeSubmitResultBanner: <Elements extends Partial<ShadcnElements>>({ Alert, AlertTitle, AlertDescription, Button, }: Elements) => {
    ShadcnSubmitResultBanner: (props: {
        successBannerProps?: any;
        errorBannerProps?: any;
    }) => React.JSX.Element;
    ShadcnSubmitSuccessfulBanner: (props: any) => React.JSX.Element | null;
    ShadcnSubmitErrorBanner: (props: any) => React.JSX.Element | null;
};
