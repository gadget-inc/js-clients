import { type AutoBooleanInputProps } from "../shared/AutoInputTypes.js";
export declare const useBooleanInputController: (props: AutoBooleanInputProps) => {
    id: string;
    path: string;
    fieldProps: {
        onChange: (...args: any[]) => void;
        onBlur: import("react-hook-form/dist/types/utils.js").Noop;
        value: any;
        disabled?: boolean | undefined;
        name: string;
        ref: import("react-hook-form/dist/types/form.js").RefCallBack;
    };
    error: import("react-hook-form/dist/types/errors.js").FieldError | undefined;
    metadata: import("../../metadata.js").FieldMetadata;
};
