import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
import type { Control } from "react-hook-form";
export declare const PolarisAutoJSONInput: (props: {
    field: string;
    control?: Control<any>;
} & Partial<Omit<TextFieldProps, "onChange">>) => React.JSX.Element;
