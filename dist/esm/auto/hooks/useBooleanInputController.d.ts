import { type AutoBooleanInputProps } from "../shared/AutoInputTypes.js";
export declare const useBooleanInputController: (props: AutoBooleanInputProps) => {
    id: string;
    path: string;
    fieldProps: {
        onChange: (...args: any[]) => void;
        onBlur: import("../../useActionForm.js").Noop;
        value: any;
        disabled?: boolean | undefined;
        name: string;
        ref: import("../../useActionForm.js").RefCallBack;
    };
    error: import("../../useActionForm.js").FieldError | undefined;
    metadata: import("../../metadata.js").FieldMetadata;
};
