import React from "react";
export interface MUIFileInputProps {
    label?: string;
    value?: File;
    onChange: (value: File) => void;
}
export declare const MUIFileInput: (props: MUIFileInputProps) => React.JSX.Element;
