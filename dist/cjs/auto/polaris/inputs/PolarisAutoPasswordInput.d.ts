import type { TextFieldProps } from "@shopify/polaris";
import type { AutoPasswordInputProps } from "../../shared/AutoInputTypes.js";
type PolarisAutoPasswordInputProps = AutoPasswordInputProps & Partial<TextFieldProps>;
/**
 * A password input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoPasswordInput field="passwordFieldApiId" />
 * </AutoForm>
 * ```
 * @param props.field - The password field API identifier.
 * @param props.label - Label of the password input.
 * @returns The AutoPasswordInput component.
 */
export declare const PolarisAutoPasswordInput: import("../../AutoInput.js").AutoInputComponent<PolarisAutoPasswordInputProps>;
export {};
