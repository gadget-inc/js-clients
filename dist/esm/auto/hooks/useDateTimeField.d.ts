import { type AutoDateTimeInputProps } from "../shared/AutoInputTypes.js";
export declare const useDateTimeField: (props: AutoDateTimeInputProps) => {
    path: string;
    metadata: import("../../metadata.js").FieldMetadata;
    fieldProps: {
        onChange: (...args: any[]) => void;
        onBlur: import("../../useActionForm.js").Noop;
        value: any;
        disabled?: boolean | undefined;
        name: string;
        ref: import("../../useActionForm.js").RefCallBack;
    };
    fieldState: import("../../useActionForm.js").ControllerFieldState;
    localTz: string;
    localTime: Date | undefined;
};
