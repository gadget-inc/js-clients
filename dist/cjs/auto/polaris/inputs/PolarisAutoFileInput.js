"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoFileInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const validationSchema_js_1 = require("../../../validationSchema.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useFileInputController_js_1 = require("../../hooks/useFileInputController.js");
exports.PolarisAutoFileInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field: fieldApiIdentifier, control, ...rest } = props;
    const { fieldProps, errorMessage, imageThumbnailURL, onFileUpload, clearFileValue, canClearFileValue, validations, metadata, actionHintParts, } = (0, useFileInputController_js_1.useFileInputController)({
        field: fieldApiIdentifier,
        control,
    });
    const fileUploadContainer = (0, react_1.useMemo)(() => {
        if (!actionHintParts) {
            return null;
        }
        return react_1.default.createElement(polaris_1.DropZone.FileUpload, { actionTitle: "Add file", actionHint: actionHintParts.length === 1 ? "" : actionHintParts.join(" ") });
    }, [actionHintParts]);
    const filePreview = (0, react_1.useMemo)(() => {
        const value = fieldProps.value;
        if (!value || !(0, validationSchema_js_1.isAutoFileFieldValue)(value))
            return null;
        return (react_1.default.createElement(polaris_1.Box, { padding: "100", paddingInlineEnd: "400" },
            react_1.default.createElement(polaris_1.InlineStack, { align: "space-between", gap: "400" },
                react_1.default.createElement(polaris_1.InlineStack, { gap: "200", blockAlign: "center" },
                    react_1.default.createElement(polaris_1.Thumbnail, { size: "small", alt: value.fileName, source: imageThumbnailURL && [...useFileInputController_js_1.imageFileTypes, "image/gif"].includes(value.mimeType) ? imageThumbnailURL : polaris_icons_1.NoteIcon }),
                    react_1.default.createElement("div", null,
                        value.$uploading ? "(Uploading) " : "",
                        value.fileName)),
                canClearFileValue && (react_1.default.createElement(polaris_1.Button, { icon: polaris_icons_1.DeleteIcon, variant: "plain", accessibilityLabel: "Delete file", onPointerDown: () => {
                        clearFileValue();
                    }, id: `clear-file-${fieldApiIdentifier}` })))));
    }, [canClearFileValue, clearFileValue, fieldApiIdentifier, fieldProps.value, imageThumbnailURL]);
    const inputLabel = props.label ?? (react_1.default.createElement("div", { style: { display: "flex", gap: "4px" } },
        metadata.name,
        metadata.requiredArgumentForInput ? react_1.default.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        inputLabel,
        react_1.default.createElement(polaris_1.DropZone, { variableHeight: true, allowMultiple: false, onDrop: (_droppedFiles, acceptedFiles) => {
                void onFileUpload(acceptedFiles);
            }, ...rest, accept: validations.onlyImages?.acceptedTypes?.join(",") },
            filePreview,
            fileUploadContainer),
        errorMessage && (react_1.default.createElement("div", { style: { marginTop: "4px" } },
            react_1.default.createElement(polaris_1.InlineError, { fieldID: fieldApiIdentifier, message: errorMessage })))));
});
//# sourceMappingURL=PolarisAutoFileInput.js.map