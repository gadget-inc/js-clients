import { Box, Button, DropZone, InlineError, InlineStack, Thumbnail } from "@shopify/polaris";
import { DeleteIcon, NoteIcon } from "@shopify/polaris-icons";
import { filesize } from "filesize";
import React, { useMemo } from "react";
import { isAutoFileFieldValue } from "../../../validationSchema.js";
import { getFileSizeValidationMessage, imageFileTypes, useFileInputController } from "../../hooks/useFileInputController.js";
export const PolarisAutoFileInput = (props) => {
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
                max: (max) => `larger than ${filesize(max)}`,
                min: (min) => `smaller than ${filesize(min)}`,
            });
            if (message)
                actionHintParts.push(message);
        }
        return React.createElement(DropZone.FileUpload, { actionTitle: "Add file", actionHint: actionHintParts.length === 1 ? "" : actionHintParts.join(" ") });
    }, [fieldProps.value, validations.fileSize, validations.onlyImages]);
    let filePreview = null;
    if (fieldProps.value && isAutoFileFieldValue(fieldProps.value)) {
        filePreview = (React.createElement(Box, { padding: "100" },
            React.createElement(InlineStack, { align: "space-between" },
                React.createElement(InlineStack, { gap: "200", blockAlign: "center" },
                    React.createElement(Thumbnail, { size: "small", alt: fieldProps.value.fileName, source: imageThumbnailURL && [...imageFileTypes, "image/gif"].includes(fieldProps.value.mimeType) ? imageThumbnailURL : NoteIcon }),
                    React.createElement("div", null,
                        fieldProps.value.$uploading ? "(Uploading) " : "",
                        fieldProps.value.fileName)),
                canClearFileValue && (
                // <div
                //   onClick={(event) => {
                //     event.preventDefault();
                //     event.stopPropagation();
                //     clearFileValue();
                //   }}
                // >
                //   Delete file
                // </div>
                React.createElement(Button, { icon: DeleteIcon, variant: "plain", accessibilityLabel: "Delete file", onPointerDown: () => {
                        clearFileValue();
                    }, id: `clear-file-${fieldApiIdentifier}` })))));
    }
    const inputLabel = (React.createElement(React.Fragment, null,
        metadata.name,
        " ",
        metadata.requiredArgumentForInput ? React.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
    return (React.createElement(React.Fragment, null,
        React.createElement(DropZone, { variableHeight: true, label: inputLabel, allowMultiple: false, onDrop: (_droppedFiles, acceptedFiles) => {
                void onFileUpload(acceptedFiles);
            }, ...rest, accept: validations.onlyImages?.acceptedTypes?.join(",") },
            filePreview,
            fileUploadContainer),
        errorMessage && (React.createElement("div", { style: { marginTop: "4px" } },
            React.createElement(InlineError, { fieldID: fieldApiIdentifier, message: errorMessage })))));
};
//# sourceMappingURL=PolarisAutoFileInput.js.map