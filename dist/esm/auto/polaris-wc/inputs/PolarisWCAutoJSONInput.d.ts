import { type ComponentProps } from "react";
import { type AutoJSONInputProps, type StringOnlyLabel } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoJSONInputProps = StringOnlyLabel<AutoJSONInputProps> & Partial<ComponentProps<"s-text-area">>;
/**
 * A JSON editor within AutoForm using Polaris Web Components.
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
export declare const PolarisWCAutoJSONInput: import("../../AutoInput.js").AutoInputComponent<PolarisWCAutoJSONInputProps>;
