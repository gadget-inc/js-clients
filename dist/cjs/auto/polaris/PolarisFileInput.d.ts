import React from "react";
export interface PolarisFileInputProps {
    label?: string;
    value?: File;
    onChange: (value: File) => void;
}
export declare const PolarisFileInput: (props: PolarisFileInputProps) => React.JSX.Element;
