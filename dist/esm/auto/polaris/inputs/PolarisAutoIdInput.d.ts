import { type AutoIdInputProps } from "../../shared/AutoInputTypes.js";
/**
 * An id input within Autoform
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
export declare const PolarisAutoIdInput: import("../../AutoInput.js").AutoInputComponent<AutoIdInputProps>;
