import type { AutocompleteProps } from "@mui/material";
import React from "react";
import type { Control } from "../../../useActionForm.js";
export declare const MUIAutoRolesInput: (props: {
    field: string;
    control?: Control<any>;
    label?: string;
} & Partial<AutocompleteProps<{
    id: string;
    label: string;
}, true, any, any>>) => React.JSX.Element;
