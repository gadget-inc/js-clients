import type { AutoPasswordInputProps } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoPasswordInputProps = AutoPasswordInputProps & {
    placeholder?: string;
    disabled?: boolean;
};
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
