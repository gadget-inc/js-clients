"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const editor_1 = require("@mdxeditor/editor");
require("@mdxeditor/editor/style.css");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../useActionForm.js");
const utils_js_1 = require("../../utils.js");
const AutoInput_js_1 = require("../AutoInput.js");
const useStringInputController_js_1 = require("../hooks/useStringInputController.js");
const utils_js_2 = require("../hooks/utils.js");
const AutoEagerLoadedRichTextInput = (0, AutoInput_js_1.autoInput)((props) => {
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
    return (react_1.default.createElement(editor_1.MDXEditor, { plugins: [
            (0, editor_1.headingsPlugin)(),
            (0, editor_1.listsPlugin)(),
            (0, editor_1.quotePlugin)(),
            (0, editor_1.thematicBreakPlugin)(),
            (0, editor_1.markdownShortcutPlugin)(),
            (0, editor_1.linkDialogPlugin)(),
            (0, editor_1.diffSourcePlugin)({
                diffMarkdown: (0, utils_js_1.get)(formState.defaultValues, field)?.markdown ?? "",
                viewMode: "rich-text",
                readOnlyDiff: true,
            }),
            (0, editor_1.toolbarPlugin)({
                toolbarContents: () => (react_1.default.createElement(editor_1.DiffSourceToggleWrapper, null,
                    react_1.default.createElement(editor_1.UndoRedo, null),
                    react_1.default.createElement(editor_1.BlockTypeSelect, null),
                    react_1.default.createElement(editor_1.Separator, null),
                    react_1.default.createElement(editor_1.BoldItalicUnderlineToggles, null),
                    react_1.default.createElement(editor_1.ListsToggle, null),
                    react_1.default.createElement(editor_1.CodeToggle, null),
                    react_1.default.createElement(editor_1.CreateLink, null))),
            }),
        ], contentEditableClassName: "autoform-prose", markdown: controller.value?.markdown ?? "", onChange: (markdown) => controller.onChange({ markdown }), ...(refs && { ref: refs }), ...rest }));
});
exports.default = AutoEagerLoadedRichTextInput;
//# sourceMappingURL=AutoEagerLoadedRichTextInput.js.map