import type { CheckboxProps } from "@shopify/polaris";
import { type AutoBooleanInputProps } from "../../shared/AutoInputTypes.js";
export type PolarisAutoBooleanInputProps = AutoBooleanInputProps & Partial<CheckboxProps>;
/**
 * A boolean checkbox within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBooleanInput field="isActive" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Boolean field.
 * @param props.label - Label of the Boolean checkbox.
 * @returns The AutoBooleanInput component.
 */
export declare const PolarisAutoBooleanInput: import("../../AutoInput.js").AutoInputComponent<PolarisAutoBooleanInputProps>;
