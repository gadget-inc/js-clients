import type { ForwardedRef } from "react";
import React from "react";
import type { Control } from "react-hook-form";
interface MDXEditorMethods {
    setMarkdown: (markdown: string) => void;
}
interface AutoRichTextInputProps {
    field: string;
    control?: Control<any>;
    editorRef?: ForwardedRef<MDXEditorMethods> | null;
}
declare const AutoRichTextInput: React.LazyExoticComponent<React.FC<AutoRichTextInputProps>>;
export default AutoRichTextInput;
