"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoFileInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const validationSchema_js_1 = require("../../../validationSchema.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useFileInputController_js_1 = require("../../hooks/useFileInputController.js");
/**
 * A file input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoFileInput field="fileField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the File field.
 * @param props.label - Label of the File input.
 * @returns The AutoFileInput component.
 */
exports.PolarisWCAutoFileInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field: fieldApiIdentifier, control, disabled, label: _label, ...rest } = props;
    const { fieldProps, errorMessage, imageThumbnailURL, onFileUpload, clearFileValue, canClearFileValue, validations, metadata, actionHintParts, } = (0, useFileInputController_js_1.useFileInputController)({
        field: fieldApiIdentifier,
        control,
    });
    const handleChange = (0, react_1.useCallback)((event) => {
        const target = event.currentTarget;
        const files = target.files || [];
        if (files.length > 0) {
            void onFileUpload([files[0]]);
        }
    }, [onFileUpload]);
    const filePreview = (0, react_1.useMemo)(() => {
        const value = fieldProps.value;
        if (!value || !(0, validationSchema_js_1.isAutoFileFieldValue)(value))
            return null;
        const isImage = imageThumbnailURL && [...useFileInputController_js_1.imageFileTypes, "image/gif"].includes(value.mimeType);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            isImage && imageThumbnailURL ? (react_1.default.createElement("s-thumbnail", { size: "small", src: imageThumbnailURL, alt: value.fileName })) : (react_1.default.createElement("s-thumbnail", { size: "small", alt: value.fileName })),
            react_1.default.createElement("div", { style: { flex: 1 } },
                value.$uploading ? "(Uploading) " : "",
                value.fileName),
            canClearFileValue && (react_1.default.createElement("s-button", { variant: "tertiary", onClick: (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    clearFileValue();
                }, icon: "delete" }))));
    }, [canClearFileValue, clearFileValue, fieldProps.value, imageThumbnailURL]);
    // Ensure label is always a string
    const label = (props.label ?? String(metadata.name ?? ""));
    return (react_1.default.createElement("div", { style: { position: "relative" } },
        react_1.default.createElement("s-drop-zone", { accept: validations.onlyImages?.acceptedTypes?.join(","), onChange: handleChange, disabled: disabled, label: label, error: errorMessage, required: metadata.requiredArgumentForInput, ...rest }, !filePreview && actionHintParts ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("s-text", null, "Add file"),
            actionHintParts && react_1.default.createElement("s-text", { color: "subdued" }, actionHintParts.length === 1 ? "" : actionHintParts.join(" ")))) : (
        // Need this stack here since s-drop-zone will automatically add content otherwise.
        // The file preview can't be in here because s-drop-zone will prevent pointer events from reaching custom content
        react_1.default.createElement("s-stack", null))),
        filePreview && (react_1.default.createElement("div", { style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                zIndex: 2,
                pointerEvents: "auto",
                background: "transparent",
            } }, filePreview))));
});
//# sourceMappingURL=PolarisWCAutoFileInput.js.map