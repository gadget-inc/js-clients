import React from "react";
import type { Control } from "react-hook-form";
export interface MUIFileInputProps {
    label?: string;
    value?: File;
    onChange: (value: File) => void;
}
export declare const MUIAutoFileInput: (props: {
    field: string;
    control?: Control<any>;
}) => React.JSX.Element;
