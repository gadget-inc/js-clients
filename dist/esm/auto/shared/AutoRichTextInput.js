import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { get } from "../../utils.js";
import { useStringInputController } from "../hooks/useStringInputController.js";
import { multiref } from "../hooks/utils.js";
const AutoRichTextInput = React.lazy(async () => {
    const [{ MDXEditor, BoldItalicUnderlineToggles, ListsToggle, CodeToggle, CreateLink, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, markdownShortcutPlugin, linkDialogPlugin, diffSourcePlugin, toolbarPlugin, DiffSourceToggleWrapper, UndoRedo, BlockTypeSelect, Separator, }, _,] = await Promise.all([import("@mdxeditor/editor"), import("@mdxeditor/editor/style.css")]);
    const RichTextInput = (props) => {
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
    };
    return { default: RichTextInput };
});
export default AutoRichTextInput;
//# sourceMappingURL=AutoRichTextInput.js.map