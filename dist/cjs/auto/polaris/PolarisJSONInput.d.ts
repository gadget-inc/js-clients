import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
export declare const PolarisJSONInput: (props: Omit<TextFieldProps, "value" | "onChange"> & {
    value: any;
    onChange: (value: any) => void;
}) => React.JSX.Element;
