"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoRichTextInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const LazyLoadedPolarisWCAutoRichTextInput = react_1.default.lazy(() => Promise.resolve().then(() => tslib_1.__importStar(require("./PolarisWCAutoRichTextInput.js"))));
/**
 * A rich text input component for use within <AutoForm></AutoForm> using Polaris Web Components.
 * Lazy-loads the MDX editor to reduce bundle size.
 * Requires `"@mdxeditor/editor"` as a peer dependency to be rendered.
 *
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
exports.PolarisWCAutoRichTextInput = (0, AutoInput_js_1.autoInput)((props) => {
    return react_1.default.createElement(LazyLoadedPolarisWCAutoRichTextInput, { ...props });
});
//# sourceMappingURL=LazyLoadedPolarisWCAutoRichTextInput.js.map