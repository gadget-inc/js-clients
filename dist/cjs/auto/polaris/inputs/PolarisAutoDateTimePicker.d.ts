import type { DatePickerProps, TextFieldProps } from "@shopify/polaris";
export declare const PolarisAutoDateTimePicker: import("../../AutoInput.js").AutoInputComponent<{
    field: string;
    id?: string | undefined;
    value?: Date | undefined;
    onChange?: ((value: Date) => void) | undefined;
    error?: string | undefined;
    includeTime?: boolean | undefined;
    hideTimePopover?: boolean | undefined;
    label?: string | undefined;
    datePickerProps?: Partial<DatePickerProps> | undefined;
    timePickerProps?: Partial<TextFieldProps> | undefined;
}>;
