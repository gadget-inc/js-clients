import { Box, Button, DropZone, InlineError, InlineStack, Thumbnail } from "@shopify/polaris";
import { DeleteIcon, NoteIcon } from "@shopify/polaris-icons";
import { filesize } from "filesize";
import React, { useMemo } from "react";
import { isAutoFileFieldValue } from "../../../validationSchema.js";
import { autoInput } from "../../AutoInput.js";
import { getFileSizeValidationMessage, imageFileTypes, useFileInputController } from "../../hooks/useFileInputController.js";
export const PolarisAutoFileInput = autoInput((props) => {
    const { field: fieldApiIdentifier, control, ...rest } = props;
    const { fieldProps, errorMessage, imageThumbnailURL, onFileUpload, clearFileValue, canClearFileValue, validations, metadata } = useFileInputController({
        field: fieldApiIdentifier,
        control,
    });
    const fileUploadContainer = useMemo(() => {
        if (fieldProps.value)
            return null;
        const actionHintParts = ["Accepts"];
        if (validations.onlyImages) {
            actionHintParts.push(`.jpg, .webp, .svg${validations.onlyImages.allowAnimatedImages ? ", .gif" : ""}, and .png`);
        }
        if (validations.fileSize) {
            const validation = validations.fileSize;
            const message = getFileSizeValidationMessage(validation, {
                inRange: (min, max) => `between ${filesize(min)} and ${filesize(max)}`,
                max: (max) => `smaller than ${filesize(max)}`,
                min: (min) => `larger than ${filesize(min)}`,
            });
            if (message)
                actionHintParts.push(message);
        }
        return React.createElement(DropZone.FileUpload, { actionTitle: "Add file", actionHint: actionHintParts.length === 1 ? "" : actionHintParts.join(" ") });
    }, [fieldProps.value, validations.fileSize, validations.onlyImages]);
    const filePreview = useMemo(() => {
        const value = fieldProps.value;
        if (!value || !isAutoFileFieldValue(value))
            return null;
        return (React.createElement(Box, { padding: "100", paddingInlineEnd: "400" },
            React.createElement(InlineStack, { align: "space-between", gap: "400" },
                React.createElement(InlineStack, { gap: "200", blockAlign: "center" },
                    React.createElement(Thumbnail, { size: "small", alt: value.fileName, source: imageThumbnailURL && [...imageFileTypes, "image/gif"].includes(value.mimeType) ? imageThumbnailURL : NoteIcon }),
                    React.createElement("div", null,
                        value.$uploading ? "(Uploading) " : "",
                        value.fileName)),
                canClearFileValue && (React.createElement(Button, { icon: DeleteIcon, variant: "plain", accessibilityLabel: "Delete file", onPointerDown: () => {
                        clearFileValue();
                    }, id: `clear-file-${fieldApiIdentifier}` })))));
    }, [canClearFileValue, clearFileValue, fieldApiIdentifier, fieldProps.value, imageThumbnailURL]);
    const inputLabel = props.label ?? (React.createElement("div", { style: { display: "flex", gap: "4px" } },
        metadata.name,
        metadata.requiredArgumentForInput ? React.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
    return (React.createElement(React.Fragment, null,
        inputLabel,
        React.createElement(DropZone, { variableHeight: true, allowMultiple: false, onDrop: (_droppedFiles, acceptedFiles) => {
                void onFileUpload(acceptedFiles);
            }, ...rest, accept: validations.onlyImages?.acceptedTypes?.join(",") },
            filePreview,
            fileUploadContainer),
        errorMessage && (React.createElement("div", { style: { marginTop: "4px" } },
            React.createElement(InlineError, { fieldID: fieldApiIdentifier, message: errorMessage })))));
});
//# sourceMappingURL=PolarisAutoFileInput.js.map