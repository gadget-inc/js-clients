import type { CheckboxProps } from "@mui/material";
import React from "react";
import { type Control } from "react-hook-form";
export declare const MUIBooleanInput: (props: {
    field: string;
    control?: Control<any>;
} & Partial<CheckboxProps>) => React.JSX.Element;
