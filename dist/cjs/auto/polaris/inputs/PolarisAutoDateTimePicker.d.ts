import type { DatePickerProps, TextFieldProps } from "@shopify/polaris";
import React from "react";
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
export declare const PolarisAutoDateTimePicker: (props: {
    field: string;
    id?: string;
    value?: Date;
    onChange?: (value: Date) => void;
    error?: string;
    includeTime?: boolean;
    hideTimePopover?: boolean;
    datePickerProps?: Partial<DatePickerProps>;
    timePickerProps?: Partial<TextFieldProps>;
}) => React.JSX.Element;
