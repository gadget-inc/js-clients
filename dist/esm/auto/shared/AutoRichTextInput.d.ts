import React from "react";
import type { Control } from "react-hook-form";
import type { ForwardedRef } from "react";
import "./styles/mdxeditor/style.css";
interface MDXEditorMethods {
    setMarkdown: (markdown: string) => void;
}
interface AutoRichTextInputProps {
    field: string;
    control?: Control<any>;
    editorRef?: ForwardedRef<MDXEditorMethods> | null;
}
declare const AutoRichTextInput: React.FC<AutoRichTextInputProps>;
export default AutoRichTextInput;
