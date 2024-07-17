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
import React, { useEffect, useRef } from "react";
import { useFormContext, type Control } from "react-hook-form";
import { get } from "../../utils.js";
import { useStringInputController } from "../hooks/useStringInputController.js";
import { multiref } from "../hooks/utils.js";

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
  const innerRef = useRef<MDXEditorMethods>(null);

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.setMarkdown(controller.value?.markdown ?? "");
    }
  }, [controller.value]);

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
      markdown={controller.value?.markdown ?? ""}
      onChange={(markdown) => controller.onChange({ markdown })}
      ref={multiref(innerRef, editorRef)}
      {...rest}
    />
  );
}
