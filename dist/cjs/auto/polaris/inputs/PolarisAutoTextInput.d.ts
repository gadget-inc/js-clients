import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
import type { Control } from "react-hook-form";
export declare const PolarisAutoTextInput: (props: {
    field: string;
    control?: Control<any>;
} & Partial<TextFieldProps>) => React.JSX.Element;
