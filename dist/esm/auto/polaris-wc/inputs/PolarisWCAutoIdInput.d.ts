import type { StringOnlyLabel, AutoIdInputProps } from "../../shared/AutoInputTypes.js";
/**
 * An id input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoIdInput field="id" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Id field.
 * @param props.label - Label of the Id input.
 * @returns The AutoIdInput component
 */
export declare const PolarisWCAutoIdInput: import("../../AutoInput.js").AutoInputComponent<StringOnlyLabel<AutoIdInputProps>>;
