import type { DatePickerProps, TextFieldProps } from "@shopify/polaris";
import type { DateTimeState } from "./PolarisAutoTimePicker.js";
export declare const copyTime: (to: Date, input: Date) => void;
export declare const getDateTimeObjectFromDate: (dateTime: Date) => {
    month: number;
    year: number;
    day: number;
    hour: string;
    minute: string;
    ampm: string;
};
export declare const getDateFromDateTimeObject: (dateTime: DateTimeState) => Date;
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
