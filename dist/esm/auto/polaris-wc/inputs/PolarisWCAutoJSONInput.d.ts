import { type AutoJSONInputProps } from "../../shared/AutoInputTypes.js";
export type PolarisWCAutoJSONInputProps = AutoJSONInputProps & {
    placeholder?: string;
    disabled?: boolean;
};
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
