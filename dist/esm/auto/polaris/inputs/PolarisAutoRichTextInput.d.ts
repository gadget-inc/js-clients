import "../styles/rich-text.css";
/**
 * Prefer using the LazyLoadedMUIAutoRichTextInput.tsx variant of this component to reduce the bundle size by default.
 */
declare const PolarisAutoRichTextInput: import("../../AutoInput.js").AutoInputComponent<import("../../shared/AutoRichTextInputProps.js").AutoRichTextInputProps & {
    selectPaths?: string[] | undefined;
}>;
export default PolarisAutoRichTextInput;
