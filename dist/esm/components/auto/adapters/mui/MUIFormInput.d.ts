import type { ReactElement } from "react";
import React from "react";
import type { Control } from "react-hook-form";
import type { FieldMetadata } from "../../../../metadata";
export declare const MUIAutoFormControl: (props: {
    path: string;
    control: Control<any>;
    field: FieldMetadata;
    children: ReactElement;
}) => React.JSX.Element;
export declare const MUIFormInput: (props: {
    path: string;
    field: FieldMetadata;
    control: Control<any>;
}) => React.JSX.Element | null;
