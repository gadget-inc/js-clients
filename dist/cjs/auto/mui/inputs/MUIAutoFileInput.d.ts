import React from "react";
import type { Control } from "../../../useActionForm.js";
export interface MUIFileInputProps {
    label?: string;
    value?: File;
    onChange: (value: File) => void;
}
export declare const MUIAutoFileInput: (props: {
    field: string;
    control?: Control<any>;
    label?: string;
}) => React.JSX.Element;
