import type { DatePickerProps, TextFieldProps } from "@shopify/polaris";
import type { AutoDateTimeInputProps } from "../../shared/AutoInputTypes.js";
export interface PolarisAutoDateTimePickerProps extends AutoDateTimeInputProps {
    /**
     * The HTML ID of the DateTime field.
     */
    id?: string;
    /**
     * Hides the time popover.
     */
    hideTimePopover?: boolean;
    /**
     * Additional Polaris DatePicker props.
     */
    datePickerProps?: Partial<DatePickerProps>;
    /**
     * Additional Polaris TimePicker props.
     */
    timePickerProps?: Partial<TextFieldProps>;
}
/**
 * A date and time picker within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoDateTimePicker field="dueDate" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the DateTime field.
 * @param props.label - Label of the DateTime picker.
 * @param props.includeTime - Show the time picker component. Defaults to the metadata config.
 * @param props.hideTimePopover - Hide the time popover.
 * @param props.datePickerProps - Additional Polaris DatePicker props.
 * @param props.timePickerProps - Additional Polaris TimePicker props.
 * @returns The AutoDateTimePicker component.
 */
export declare const PolarisAutoDateTimePicker: import("../../AutoInput.js").AutoInputComponent<PolarisAutoDateTimePickerProps>;
