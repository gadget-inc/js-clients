"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoRichTextInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoRichTextInput_js_1 = require("src/auto/shared/AutoRichTextInput.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const LazyLoadedPolarisAutoRichTextInput = react_1.default.lazy(() => Promise.resolve().then(() => tslib_1.__importStar(require("./PolarisAutoRichTextInput.js"))).catch((error) => {
    const customError = new Error(AutoRichTextInput_js_1.MissingMdxEditorErrorMessage);
    // Preserve original error for debugging
    customError.originalError = error;
    throw customError;
}));
/**
 * A rich text input component for use within <AutoForm></AutoForm>
 * Requires `"@mdxeditor/editor"` as a peer dependency to be rendered
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoRichTextInput field="richTextField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the RichText field.
 * @param props.label - Label of the RichText input.
 * @returns The AutoRichTextInput component.
 */
exports.PolarisAutoRichTextInput = (0, AutoInput_js_1.autoInput)((props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(LazyLoadedPolarisAutoRichTextInput, { ...props })));
});
//# sourceMappingURL=LazyLoadedPolarisAutoRichTextInput.js.map