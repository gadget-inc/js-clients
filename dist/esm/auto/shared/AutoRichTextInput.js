import * as mdxModule from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import React, { useEffect, useRef } from "react";
import { useFormContext } from "../../useActionForm.js";
import { get } from "../../utils.js";
import { autoInput } from "../AutoInput.js";
import { useStringInputController } from "../hooks/useStringInputController.js";
import { multiref } from "../hooks/utils.js";
import "./styles/rich-text.css";
const { MDXEditor, BoldItalicUnderlineToggles, ListsToggle, CodeToggle, CreateLink, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, markdownShortcutPlugin, linkDialogPlugin, diffSourcePlugin, toolbarPlugin, DiffSourceToggleWrapper, UndoRedo, BlockTypeSelect, Separator, } = mdxModule;
const AutoRichTextInput = autoInput((props) => {
    const { formState } = useFormContext();
    const { field, control, editorRef, ...rest } = props;
    const controller = useStringInputController({ field, control });
    const innerRef = useRef(null);
    useEffect(() => {
        if (innerRef.current) {
            innerRef.current.setMarkdown(controller.value?.markdown ?? "");
        }
    }, [controller.value]);
    const refs = multiref(innerRef, editorRef);
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
        ], contentEditableClassName: "autoform-prose", markdown: controller.value?.markdown ?? "", onChange: (markdown) => controller.onChange({ markdown }), ...(refs && { ref: refs }), ...rest }));
});
export default AutoRichTextInput;
//# sourceMappingURL=AutoRichTextInput.js.map