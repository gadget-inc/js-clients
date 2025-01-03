import * as mdxModule from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import React, { useEffect, useRef } from "react";
import { useFormContext } from "../../useActionForm.js";
import { get } from "../../utils.js";
import { autoInput } from "../AutoInput.js";
import { useStringInputController } from "../hooks/useStringInputController.js";
import { multiref } from "../hooks/utils.js";
import type { AutoRichTextInputProps, MDXEditorMethods } from "./AutoRichTextInputProps.js";

const {
  MDXEditor,
  BoldItalicUnderlineToggles,
  ListsToggle,
  CodeToggle,
  CreateLink,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkDialogPlugin,
  diffSourcePlugin,
  toolbarPlugin,
  DiffSourceToggleWrapper,
  UndoRedo,
  BlockTypeSelect,
  Separator,
} = mdxModule;

const AutoRichTextInput = autoInput<AutoRichTextInputProps>((props) => {
  const { formState } = useFormContext();
  const { field, control, editorRef, ...rest } = props;
  const controller = useStringInputController({ field, control });
  const innerRef = useRef<MDXEditorMethods>(null);

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.setMarkdown(controller.value?.markdown ?? "");
    }
  }, [controller.value]);

  const refs = multiref(innerRef, editorRef) as any;
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
      onChange={(markdown: any) => controller.onChange({ markdown })}
      {...(refs && { ref: refs })}
      {...rest}
    />
  );
});

export default AutoRichTextInput;
