import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";
export interface DateTimeState {
    month: number;
    year: number;
    day: number;
    hour: string;
    minute: string;
    ampm: string;
}
declare const PolarisTimePicker: (props: {
    fieldProps: ControllerRenderProps<FieldValues, string>;
    onChange?: (value: Date) => void;
    localTime?: Date;
    id?: string;
    timeLabel?: string;
    timePickerProps?: Partial<TextFieldProps>;
    hideTimePopover?: boolean;
    localTz?: string;
}) => React.JSX.Element;
export default PolarisTimePicker;
