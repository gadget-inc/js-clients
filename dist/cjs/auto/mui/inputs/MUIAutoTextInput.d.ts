import type { TextFieldProps } from "@mui/material";
import React from "react";
import type { Control } from "react-hook-form";
export declare const MUIAutoTextInput: (props: {
    field: string;
    control?: Control<any>;
} & Partial<TextFieldProps>) => React.JSX.Element;
