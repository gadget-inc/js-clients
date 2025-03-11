import type { ForwardedRef, ReactNode } from "react";
import type { Control } from "../../useActionForm.js";

export interface MDXEditorMethods {
  /**
   * Sets the markdown content of the editor
   */
  setMarkdown: (markdown: string) => void;
}

export interface AutoRichTextInputProps {
  /**
   * The API identifier of the RichText field
   */
  field: string;
  /**
   * Control object from React Hook Form
   */
  control?: Control<any>;
  /**
   * Forwards ref object to setMarkdown content of the editor
   */
  editorRef?: ForwardedRef<MDXEditorMethods> | null;
  /**
   * The label for the input
   */
  label?: ReactNode;
}
