import type { TextFieldProps } from "@shopify/polaris";
import React from "react";
import type { ControllerRenderProps, FieldValues } from "../../../useActionForm.js";
export interface DateTimeState {
    month: number;
    year: number;
    day: number;
    hour: string;
    minute: string;
    ampm: string;
}
declare const PolarisAutoTimePicker: (props: {
    fieldProps: ControllerRenderProps<FieldValues, string>;
    value?: Date;
    onChange?: (value: Date) => void;
    localTime?: Date;
    id?: string;
    timePickerProps?: Partial<TextFieldProps>;
    hideTimePopover?: boolean;
    localTz?: string;
}) => React.JSX.Element;
export default PolarisAutoTimePicker;
