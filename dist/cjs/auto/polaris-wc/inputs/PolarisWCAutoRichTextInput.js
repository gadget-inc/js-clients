"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const AutoRichTextInput_js_1 = tslib_1.__importDefault(require("../../shared/AutoRichTextInput.js"));
/**
 * A rich text input within AutoForm using Polaris Web Components.
 * Uses the MDX editor (same as the non-WC Polaris version).
 * Requires `"@mdxeditor/editor"` as a peer dependency.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoRichTextInput field="description" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the RichText field.
 * @param props.label - Label of the RichText input.
 * @returns The AutoRichTextInput component.
 */
const PolarisWCAutoRichTextInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const label = typeof props.label === "string" ? props.label : String(metadata.name ?? "");
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px" } },
        label && (react_1.default.createElement("s-text", null,
            label,
            metadata.requiredArgumentForInput && (react_1.default.createElement("span", { style: { marginLeft: "2px", color: "var(--p-color-text-critical, #d72c0d)" } }, "*")))),
        react_1.default.createElement("div", { className: "Autoform-RichTextInput" },
            react_1.default.createElement(AutoRichTextInput_js_1.default, { ...props }))));
});
exports.default = PolarisWCAutoRichTextInput;
//# sourceMappingURL=PolarisWCAutoRichTextInput.js.map