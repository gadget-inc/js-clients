import { type AutoEnumInputProps, type StringOnlyLabel } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoEnumInputProps = StringOnlyLabel<AutoEnumInputProps> & {
    placeholder?: string;
    disabled?: boolean;
};
/**
 * An enum option picker within AutoForm using Polaris Web Components.
 * Uses a searchable combobox for single or multiple selection.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEnumInput field="enumField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Enum field.
 * @param props.label - Label of the Enum input.
 * @returns The AutoEnumInput component.
 */
export declare const PolarisWCAutoEnumInput: import("../../AutoInput.js").AutoInputComponent<PolarisWCAutoEnumInputProps>;
