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
export interface PolarisAutoTimePickerProps {
    /**
     * React Hook Form ControllerRenderProps object that controls the DateTime field
     */
    fieldProps: ControllerRenderProps<FieldValues, string>;
    /**
     * The value of the DateTime field
     */
    value?: Date;
    /**
     * Called when the value of the DateTime field changes
     */
    onChange?: (value: Date) => void;
    /**
     * The HTML ID of the DateTime field
     */
    id?: string;
    /**
     * Props to pass to the Polaris TimePicker component
     */
    timePickerProps?: Partial<TextFieldProps>;
    /**
     * Indicates if the time popover should be hidden
     */
    hideTimePopover?: boolean;
    /**
     * The local time of the DateTime field
     */
    localTime?: Date;
    /**
     * The local time zone of the DateTime field
     */
    localTz?: string;
}
declare const PolarisAutoTimePicker: (props: PolarisAutoTimePickerProps) => React.JSX.Element;
export default PolarisAutoTimePicker;
