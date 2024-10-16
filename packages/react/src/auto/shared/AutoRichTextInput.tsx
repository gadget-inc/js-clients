import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "../../useActionForm.js";
import { get } from "../../utils.js";
import { autoInput } from "../AutoInput.js";
import { useStringInputController } from "../hooks/useStringInputController.js";
import { multiref } from "../hooks/utils.js";
import type { AutoRichTextInputProps, MDXEditorMethods } from "./AutoRichTextInputProps.js";

const AutoRichTextInput = autoInput<AutoRichTextInputProps>((props) => {
  const { formState } = useFormContext();
  const { field, control, editorRef, ...rest } = props;
  const controller = useStringInputController({ field, control });
  const innerRef = useRef<MDXEditorMethods>(null);
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);
  const [mdxModule, setMdxModule] = useState<any>(null);

  useEffect(() => {
    const loadEditor = async () => {
      try {
        const module = await import("@mdxeditor/editor");
        await import("@mdxeditor/editor/style.css");
        setMdxModule(module);
        setIsEditorLoaded(true);
      } catch (error) {
        console.warn("Optional dependency not found, some features may not be available.");
      }
    };

    void loadEditor();
  }, []);

  useEffect(() => {
    if (innerRef.current && isEditorLoaded) {
      innerRef.current.setMarkdown(controller.value?.markdown ?? "");
    }
  }, [controller.value, isEditorLoaded]);

  if (!isEditorLoaded || !mdxModule) {
    return <div>Loading editor...</div>;
  }

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
      ref={multiref(innerRef, editorRef)}
      {...rest}
    />
  );
});

export default AutoRichTextInput;
