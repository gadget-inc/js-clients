import * as mdxModule from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import React, { useEffect, useRef } from "react";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { autoInput } from "../AutoInput.js";
import { useStringInputController } from "../hooks/useStringInputController.js";
import { assertFieldType, multiref } from "../hooks/utils.js";
import "./styles/rich-text.css";
const { MDXEditor, BoldItalicUnderlineToggles, ListsToggle, CodeToggle, CreateLink, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, markdownShortcutPlugin, linkDialogPlugin, toolbarPlugin, UndoRedo, BlockTypeSelect, Separator, } = mdxModule;
const AutoRichTextInput = autoInput((props) => {
    const { field, control, editorRef, ...rest } = props;
    const controller = useStringInputController({ field, control });
    assertFieldType({
        fieldApiIdentifier: field,
        actualFieldType: controller.metadata.fieldType,
        expectedFieldType: GadgetFieldType.RichText,
    });
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
            toolbarPlugin({
                toolbarContents: () => (React.createElement(React.Fragment, null,
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
export const MissingMdxEditorErrorMessage = `Failed to load AutoRichTextInput. This component requires "@mdxeditor/editor" in your package.json. See https://docs.gadget.dev/reference/react/auto#autorichtextinput-`;
//# sourceMappingURL=AutoRichTextInput.js.map