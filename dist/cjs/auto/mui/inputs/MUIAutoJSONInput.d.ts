import type { TextFieldProps } from "@mui/material";
import React from "react";
import type { Control } from "react-hook-form";
export declare const MUIAutoJSONInput: (props: {
    field: string;
    control?: Control<any>;
} & Partial<Omit<TextFieldProps, "onChange">>) => React.JSX.Element;
