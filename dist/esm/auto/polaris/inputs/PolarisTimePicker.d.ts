import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
interface DateTimeState {
    month: number;
    year: number;
    day: number;
    hour: string;
    minute: string;
    ampm: string;
}
declare const PolarisTimePicker: (props: {
    field: string;
    dateTimeState: DateTimeState;
    setDateTimeState: React.Dispatch<React.SetStateAction<DateTimeState>>;
    onChange?: (value: Date) => void;
    localTime?: Date;
    id?: string;
    timeLabel?: string;
    timePickerProps?: Partial<TextFieldProps>;
    hideTimePopover?: boolean;
    localTz?: string;
}) => React.JSX.Element;
export default PolarisTimePicker;
