import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { get } from "../../utils.js";
import { useStringInputController } from "../hooks/useStringInputController.js";
import { multiref } from "../hooks/utils.js";
const AutoRichTextInput = (props) => {
    const { formState } = useFormContext();
    const { field, control, editorRef, ...rest } = props;
    const controller = useStringInputController({ field, control });
    const innerRef = useRef(null);
    const [isEditorLoaded, setIsEditorLoaded] = useState(false);
    const [mdxModule, setMdxModule] = useState(null);
    useEffect(() => {
        const loadEditor = async () => {
            try {
                const module = await import("@mdxeditor/editor");
                setMdxModule(module);
                setIsEditorLoaded(true);
            }
            catch (error) {
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
        return React.createElement("div", null, "Loading editor...");
    }
    const { MDXEditor, BoldItalicUnderlineToggles, ListsToggle, CodeToggle, CreateLink, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, markdownShortcutPlugin, linkDialogPlugin, diffSourcePlugin, toolbarPlugin, DiffSourceToggleWrapper, UndoRedo, BlockTypeSelect, Separator, } = mdxModule;
    return (React.createElement(MDXEditor, { plugins: [
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
                toolbarContents: () => (React.createElement(DiffSourceToggleWrapper, null,
                    React.createElement(UndoRedo, null),
                    React.createElement(BlockTypeSelect, null),
                    React.createElement(Separator, null),
                    React.createElement(BoldItalicUnderlineToggles, null),
                    React.createElement(ListsToggle, null),
                    React.createElement(CodeToggle, null),
                    React.createElement(CreateLink, null))),
            }),
        ], contentEditableClassName: "autoform-prose", markdown: controller.value?.markdown ?? "", onChange: (markdown) => controller.onChange({ markdown }), ref: multiref(innerRef, editorRef), ...rest }));
};
export default AutoRichTextInput;
//# sourceMappingURL=AutoRichTextInput.js.map