import { type ComponentProps } from "react";
import type { AutoPasswordInputProps, StringOnlyLabel } from "../../shared/AutoInputTypes.js";
import { PolarisWCAutoEncryptedStringInput } from "./PolarisWCAutoEncryptedStringInput.js";
export type PolarisWCAutoPasswordInputProps = StringOnlyLabel<AutoPasswordInputProps> & Partial<ComponentProps<typeof PolarisWCAutoEncryptedStringInput>>;
/**
 * A password input within AutoForm using Polaris Web Components.
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
export declare const PolarisWCAutoPasswordInput: import("../../AutoInput.js").AutoInputComponent<PolarisWCAutoPasswordInputProps>;
