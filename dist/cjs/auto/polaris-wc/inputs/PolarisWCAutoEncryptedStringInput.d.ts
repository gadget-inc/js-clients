import { type ComponentProps } from "react";
import { type AutoEncryptedStringInputProps, type StringOnlyLabel } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoEncryptedStringInputProps = StringOnlyLabel<AutoEncryptedStringInputProps> & Partial<ComponentProps<"s-password-field">>;
/**
 * An encrypted string input within AutoForm using Polaris Web Components.
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
export declare const PolarisWCAutoEncryptedStringInput: import("../../AutoInput.js").AutoInputComponent<PolarisWCAutoEncryptedStringInputProps>;
