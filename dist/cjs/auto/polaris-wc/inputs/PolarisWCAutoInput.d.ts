import { type AutoInputProps, type StringOnlyLabel } from "../../shared/AutoInputTypes.js";
/**
 * An auto-generated input based on the given field types used within AutoForm.
 * Uses Polaris Web Components for rendering.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoInput field="stringField" />
 *   <AutoInput field="booleanField" />
 *   <AutoInput field="numberField" label="Count" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the field.
 * @param props.label - Label of the component.
 * @returns The AutoInput component.
 */
export declare const PolarisWCAutoInput: import("../../AutoInput.js").AutoInputComponent<StringOnlyLabel<AutoInputProps>>;
