"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const utils_js_1 = require("../../utils.js");
const useStringInputController_js_1 = require("../hooks/useStringInputController.js");
const utils_js_2 = require("../hooks/utils.js");
const AutoRichTextInput = react_1.default.lazy(async () => {
    const [{ MDXEditor, BoldItalicUnderlineToggles, ListsToggle, CodeToggle, CreateLink, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, markdownShortcutPlugin, linkDialogPlugin, diffSourcePlugin, toolbarPlugin, DiffSourceToggleWrapper, UndoRedo, BlockTypeSelect, Separator, }, _,] = await Promise.all([Promise.resolve().then(() => tslib_1.__importStar(require("@mdxeditor/editor"))), Promise.resolve().then(() => tslib_1.__importStar(require("@mdxeditor/editor/style.css")))]);
    const RichTextInput = (props) => {
        const { formState } = (0, react_hook_form_1.useFormContext)();
        const { field, control, editorRef, ...rest } = props;
        const controller = (0, useStringInputController_js_1.useStringInputController)({ field, control });
        const innerRef = (0, react_1.useRef)(null);
        (0, react_1.useEffect)(() => {
            if (innerRef.current) {
                innerRef.current.setMarkdown(controller.value?.markdown ?? "");
            }
        }, [controller.value]);
        return (react_1.default.createElement(MDXEditor, { plugins: [
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                linkDialogPlugin(),
                diffSourcePlugin({
                    diffMarkdown: (0, utils_js_1.get)(formState.defaultValues, field)?.markdown ?? "",
                    viewMode: "rich-text",
                    readOnlyDiff: true,
                }),
                toolbarPlugin({
                    toolbarContents: () => (react_1.default.createElement(DiffSourceToggleWrapper, null,
                        react_1.default.createElement(UndoRedo, null),
                        react_1.default.createElement(BlockTypeSelect, null),
                        react_1.default.createElement(Separator, null),
                        react_1.default.createElement(BoldItalicUnderlineToggles, null),
                        react_1.default.createElement(ListsToggle, null),
                        react_1.default.createElement(CodeToggle, null),
                        react_1.default.createElement(CreateLink, null))),
                }),
            ], contentEditableClassName: "autoform-prose", markdown: controller.value?.markdown ?? "", onChange: (markdown) => controller.onChange({ markdown }), ref: (0, utils_js_2.multiref)(innerRef, editorRef), ...rest }));
    };
    return { default: RichTextInput };
});
exports.default = AutoRichTextInput;
//# sourceMappingURL=AutoRichTextInput.js.map