"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("@mdxeditor/editor/style.css"); // Static import for styles
const react_1 = tslib_1.__importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const utils_js_1 = require("../../utils.js");
const useStringInputController_js_1 = require("../hooks/useStringInputController.js");
const utils_js_2 = require("../hooks/utils.js");
const AutoRichTextInput = (props) => {
    const { formState } = (0, react_hook_form_1.useFormContext)();
    const { field, control, editorRef, ...rest } = props;
    const controller = (0, useStringInputController_js_1.useStringInputController)({ field, control });
    const innerRef = (0, react_1.useRef)(null);
    const [isEditorLoaded, setIsEditorLoaded] = (0, react_1.useState)(false);
    const [mdxModule, setMdxModule] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const loadEditor = async () => {
            try {
                const module = await Promise.resolve().then(() => tslib_1.__importStar(require("@mdxeditor/editor")));
                setMdxModule(module);
                setIsEditorLoaded(true);
            }
            catch (error) {
                console.warn("Optional dependency not found, some features may not be available.");
            }
        };
        void loadEditor();
    }, []);
    (0, react_1.useEffect)(() => {
        if (innerRef.current && isEditorLoaded) {
            innerRef.current.setMarkdown(controller.value?.markdown ?? "");
        }
    }, [controller.value, isEditorLoaded]);
    if (!isEditorLoaded || !mdxModule) {
        return react_1.default.createElement("div", null, "Loading editor...");
    }
    const { MDXEditor, BoldItalicUnderlineToggles, ListsToggle, CodeToggle, CreateLink, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, markdownShortcutPlugin, linkDialogPlugin, diffSourcePlugin, toolbarPlugin, DiffSourceToggleWrapper, UndoRedo, BlockTypeSelect, Separator, } = mdxModule;
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
exports.default = AutoRichTextInput;
//# sourceMappingURL=AutoRichTextInput.js.map