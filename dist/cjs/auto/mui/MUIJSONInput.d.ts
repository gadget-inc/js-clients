import type { TextFieldProps } from "@mui/material";
import React from "react";
export declare const MUIJSONInput: (props: Omit<TextFieldProps, "value" | "onChange"> & {
    value: any;
    onChange: (value: any) => void;
}) => React.JSX.Element;
