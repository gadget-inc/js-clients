import type { AutoNumberInputProps } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoNumberInputProps = AutoNumberInputProps & {
    placeholder?: string;
    disabled?: boolean;
};
/**
 * A number input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoNumberInput field="count" />
 * </AutoForm>
 * ```
 * @param props.field - The number field API identifier.
 * @param props.label - Label of the number input.
 * @returns The AutoNumberInput component
 */
export declare const PolarisWCAutoNumberInput: import("../../AutoInput.js").AutoInputComponent<PolarisWCAutoNumberInputProps>;
