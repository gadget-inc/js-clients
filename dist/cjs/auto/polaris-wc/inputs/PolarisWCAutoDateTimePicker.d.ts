import type { AutoDateTimeInputProps, StringOnlyLabel } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoDateTimePickerProps = StringOnlyLabel<AutoDateTimeInputProps> & {
    /**
     * The HTML ID of the DateTime field.
     */
    id?: string;
    /**
     * Hides the time input.
     */
    hideTime?: boolean;
};
/**
 * A date and time picker within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoDateTimePicker field="dueDate" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the DateTime field.
 * @param props.label - Label of the DateTime picker.
 * @param props.hideTime - Hide the time input.
 * @returns The AutoDateTimePicker component.
 */
export declare const PolarisWCAutoDateTimePicker: import("../../AutoInput.js").AutoInputComponent<PolarisWCAutoDateTimePickerProps>;
