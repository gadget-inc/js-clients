interface DateTimeFieldProps {
    field: string;
    value?: Date;
    onChange?: (value?: Date) => void;
}
export declare const useDateTimeField: (props: DateTimeFieldProps) => {
    path: string;
    metadata: import("../../metadata.js").FieldMetadata;
    fieldProps: import("react-hook-form/dist/types/controller.js").ControllerRenderProps<import("react-hook-form/dist/types/fields.js").FieldValues, string>;
    fieldState: import("react-hook-form/dist/types/controller.js").ControllerFieldState;
    localTz: string;
    localTime: Date | undefined;
    onChange: ((value?: Date) => void) | undefined;
    value: Date | undefined;
};
export {};
