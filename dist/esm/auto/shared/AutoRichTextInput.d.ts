import { type MDXEditorMethods, type MDXEditorProps } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import type { ForwardedRef } from "react";
import React from "react";
import { type Control } from "react-hook-form";
export default function AutoRichTextInput(props: {
    field: string;
    control?: Control<any>;
    editorRef?: ForwardedRef<MDXEditorMethods> | null;
} & Omit<MDXEditorProps, "markdown" | "onChange">): React.JSX.Element;
