import type { AutocompleteProps } from "@mui/material";
import React from "react";
export declare const MUIAutoEnumInput: <Value, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends React.ElementType<any, keyof React.JSX.IntrinsicElements> = "div">(props: {
    field: string;
} & Partial<AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>>) => React.JSX.Element;
