import type { ComboboxProps } from "@shopify/polaris";
import { type AutoEnumInputProps } from "../../shared/AutoInputTypes.js";
export type PolarisAutoEnumInputProps = AutoEnumInputProps & Partial<Omit<ComboboxProps, "allowMultiple">>;
/**
 * An enum option picker within AutoForm.
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
export declare const PolarisAutoEnumInput: import("../../AutoInput.js").AutoInputComponent<PolarisAutoEnumInputProps>;
