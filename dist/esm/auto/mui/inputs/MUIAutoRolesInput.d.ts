import type { AutocompleteProps } from "@mui/material";
import React from "react";
import type { Control } from "react-hook-form";
export declare const MUIAutoRolesInput: (props: {
    field: string;
    control?: Control<any>;
} & Partial<AutocompleteProps<{
    id: string;
    label: string;
}, true, any, any>>) => React.JSX.Element;
