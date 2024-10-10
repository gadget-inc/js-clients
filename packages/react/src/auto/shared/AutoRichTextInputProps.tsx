import type { ForwardedRef } from "react";
import type { Control } from "../../useActionForm.js";

export interface MDXEditorMethods {
  setMarkdown: (markdown: string) => void;
}

export interface AutoRichTextInputProps {
  field: string;
  control?: Control<any>;
  editorRef?: ForwardedRef<MDXEditorMethods> | null;
  label?: string;
}
