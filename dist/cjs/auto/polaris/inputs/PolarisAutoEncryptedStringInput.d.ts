import type { TextFieldProps } from "@shopify/polaris";
import { type AutoEncryptedStringInputProps } from "../../shared/AutoInputTypes.js";
export type PolarisAutoEncryptedStringInputProps = AutoEncryptedStringInputProps & Partial<Omit<TextFieldProps, "value" | "onChange">>;
/**
 * An encrypted string input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEncryptedStringInput field="encryptedStringField" />
 * </AutoForm>
 * ```
 * @param props.field - API identifier of the EncryptedString field.
 * @param props.label - Label of the EncryptedString input.
 * @returns The AutoEncryptedStringInput component.
 */
export declare const PolarisAutoEncryptedStringInput: import("../../AutoInput.js").AutoInputComponent<PolarisAutoEncryptedStringInputProps>;
