"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mdxModule = tslib_1.__importStar(require("@mdxeditor/editor"));
require("@mdxeditor/editor/style.css");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../useActionForm.js");
const utils_js_1 = require("../../utils.js");
const AutoInput_js_1 = require("../AutoInput.js");
const useStringInputController_js_1 = require("../hooks/useStringInputController.js");
const utils_js_2 = require("../hooks/utils.js");
require("./rich-text.css");
const { MDXEditor, BoldItalicUnderlineToggles, ListsToggle, CodeToggle, CreateLink, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, markdownShortcutPlugin, linkDialogPlugin, diffSourcePlugin, toolbarPlugin, DiffSourceToggleWrapper, UndoRedo, BlockTypeSelect, Separator, } = mdxModule;
const AutoRichTextInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { formState } = (0, useActionForm_js_1.useFormContext)();
    const { field, control, editorRef, ...rest } = props;
    const controller = (0, useStringInputController_js_1.useStringInputController)({ field, control });
    const innerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (innerRef.current) {
            innerRef.current.setMarkdown(controller.value?.markdown ?? "");
        }
    }, [controller.value]);
    const refs = (0, utils_js_2.multiref)(innerRef, editorRef);
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
        ], contentEditableClassName: "autoform-prose", markdown: controller.value?.markdown ?? "", onChange: (markdown) => controller.onChange({ markdown }), ...(refs && { ref: refs }), ...rest }));
});
exports.default = AutoRichTextInput;
//# sourceMappingURL=AutoRichTextInput.js.map