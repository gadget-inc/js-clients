import { type Control } from "react-hook-form";
export declare const useBooleanInputController: (props: {
    field: string;
    control?: Control<any>;
}) => {
    id: string;
    path: string;
    fieldProps: import("react-hook-form").ControllerRenderProps<any, string>;
    error: import("react-hook-form").FieldError | undefined;
    metadata: import("../../metadata.js").FieldMetadata;
};
