/**
 * A rich text input within AutoForm using Polaris Web Components.
 * Uses the MDX editor (same as the non-WC Polaris version).
 * Requires `"@mdxeditor/editor"` as a peer dependency.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoRichTextInput field="description" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the RichText field.
 * @param props.label - Label of the RichText input.
 * @returns The AutoRichTextInput component.
 */
declare const PolarisWCAutoRichTextInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoRichTextInputProps.js").AutoRichTextInputProps>;
export default PolarisWCAutoRichTextInput;
