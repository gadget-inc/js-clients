interface DateTimeFieldProps {
    field: string;
    value?: Date;
    onChange?: (value: Date) => void;
}
export declare const useDateTimeField: (props: DateTimeFieldProps) => {
    path: string;
    metadata: import("../../metadata.js").FieldMetadata;
    fieldProps: import("../../useActionForm.js").ControllerRenderProps<import("../../useActionForm.js").FieldValues, string>;
    fieldState: import("../../useActionForm.js").ControllerFieldState;
    localTz: string;
    localTime: Date | undefined;
    onChange: ((value: Date) => void) | undefined;
    value: Date | undefined;
};
export {};
