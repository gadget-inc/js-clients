import type { TextFieldProps } from "@shopify/polaris";
import { type AutoJSONInputProps } from "../../shared/AutoInputTypes.js";
type PolarisAutoJSONInputProps = AutoJSONInputProps & Partial<Omit<TextFieldProps, "value" | "onChange">>;
/**
 * A JSON editor within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoJSONInput field="fieldA" label="Field A" />
 * </AutoForm>
 * ```
 * @param props.field - The JSON field API identifier.
 * @param props.label - Label of the JSON editor.
 * @returns The AutoJSONInput component
 */
export declare const PolarisAutoJSONInput: import("../../AutoInput.js").AutoInputComponent<PolarisAutoJSONInputProps>;
export {};
