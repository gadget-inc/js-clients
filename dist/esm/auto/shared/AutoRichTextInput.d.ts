import "@mdxeditor/editor/style.css";
import type { AutoRichTextInputProps } from "./AutoRichTextInputProps.js";
import "./styles/rich-text.css";
declare const AutoRichTextInput: import("../AutoInput.js").AutoInputComponent<AutoRichTextInputProps>;
export default AutoRichTextInput;
export declare const MissingMdxEditorErrorMessage = "Failed to load AutoRichTextInput. This component requires \"@mdxeditor/editor\" in your package.json. See https://docs.gadget.dev/reference/react/auto#autorichtextinput-";
