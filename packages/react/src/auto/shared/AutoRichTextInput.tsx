import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  DiffSourceToggleWrapper,
  ListsToggle,
  MDXEditor,
  Separator,
  UndoRedo,
  diffSourcePlugin,
  headingsPlugin,
  linkDialogPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import type { ForwardedRef } from "react";
import React from "react";
import { useFormContext, type Control } from "react-hook-form";
import { get } from "../../utils.js";
import { useStringInputController } from "../hooks/useStringInputController.js";

export default function AutoRichTextInput(
  props: {
    field: string;
    control?: Control<any>;
    editorRef?: ForwardedRef<MDXEditorMethods> | null;
  } & Omit<MDXEditorProps, "markdown" | "onChange">
) {
  const { formState } = useFormContext();
  const { field, control, editorRef, ...rest } = props;
  const controller = useStringInputController({ field, control });

  return (
    <MDXEditor
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        linkDialogPlugin(),
        diffSourcePlugin({
          diffMarkdown: get(formState.defaultValues, field)?.markdown ?? "",
          viewMode: "rich-text",
          readOnlyDiff: true,
        }),
        toolbarPlugin({
          toolbarContents: () => (
            <DiffSourceToggleWrapper>
              <UndoRedo />
              <BlockTypeSelect />
              <Separator />
              <BoldItalicUnderlineToggles />
              <ListsToggle />
              <CodeToggle />
              <CreateLink />
            </DiffSourceToggleWrapper>
          ),
        }),
      ]}
      contentEditableClassName="autoform-prose"
      {...rest}
      markdown={controller.value?.markdown ?? ""}
      onChange={(markdown) => controller.onChange({ markdown })}
      ref={editorRef}
    />
  );
}
