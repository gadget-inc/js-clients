import type { TextFieldProps } from "@shopify/polaris";
import type { AutoNumberInputProps } from "../../shared/AutoInputTypes.js";
type PolarisAutoNumberInputProps = AutoNumberInputProps & Partial<Omit<TextFieldProps, "value" | "onChange">>;
/**
 * A number input within AutoForm.
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
export declare const PolarisAutoNumberInput: import("../../AutoInput.js").AutoInputComponent<PolarisAutoNumberInputProps>;
export {};
