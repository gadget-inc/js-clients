import { type AutoDateTimeInputProps } from "../shared/AutoInputTypes.js";
export declare const useDateTimeField: (props: AutoDateTimeInputProps) => {
    path: string;
    metadata: import("../../metadata.js").FieldMetadata;
    fieldProps: {
        onChange: (...args: any[]) => void;
        onBlur: import("react-hook-form/dist/types/utils.js").Noop;
        value: any;
        disabled?: boolean | undefined;
        name: string;
        ref: import("react-hook-form/dist/types/form.js").RefCallBack;
    };
    fieldState: import("react-hook-form/dist/types/controller.js").ControllerFieldState;
    localTz: string;
    localTime: Date | undefined;
};
