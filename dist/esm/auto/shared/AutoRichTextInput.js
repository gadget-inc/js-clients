import { BlockTypeSelect, BoldItalicUnderlineToggles, CodeToggle, CreateLink, DiffSourceToggleWrapper, ListsToggle, MDXEditor, Separator, UndoRedo, diffSourcePlugin, headingsPlugin, linkDialogPlugin, listsPlugin, markdownShortcutPlugin, quotePlugin, thematicBreakPlugin, toolbarPlugin, } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { get } from "../../utils.js";
import { useStringInputController } from "../hooks/useStringInputController.js";
import { multiref } from "../hooks/utils.js";
export default function AutoRichTextInput(props) {
    const { formState } = useFormContext();
    const { field, control, editorRef, ...rest } = props;
    const controller = useStringInputController({ field, control });
    const innerRef = useRef(null);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.setMarkdown(controller.value?.markdown ?? "");
        }
    }, [controller.value]);
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
}
//# sourceMappingURL=AutoRichTextInput.js.map