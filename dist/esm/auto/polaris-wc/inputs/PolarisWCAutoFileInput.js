import React, { useCallback, useMemo } from "react";
import { isAutoFileFieldValue } from "../../../validationSchema.js";
import { autoInput } from "../../AutoInput.js";
import { imageFileTypes, useFileInputController } from "../../hooks/useFileInputController.js";
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
export const PolarisWCAutoFileInput = autoInput((props) => {
    const { field: fieldApiIdentifier, control, disabled, label: _label, ...rest } = props;
    const { fieldProps, errorMessage, imageThumbnailURL, onFileUpload, clearFileValue, canClearFileValue, validations, metadata, actionHintParts, } = useFileInputController({
        field: fieldApiIdentifier,
        control,
    });
    const handleChange = useCallback((event) => {
        const target = event.currentTarget;
        const files = target.files || [];
        if (files.length > 0) {
            void onFileUpload([files[0]]);
        }
    }, [onFileUpload]);
    const filePreview = useMemo(() => {
        const value = fieldProps.value;
        if (!value || !isAutoFileFieldValue(value))
            return null;
        const isImage = imageThumbnailURL && [...imageFileTypes, "image/gif"].includes(value.mimeType);
        return (React.createElement(React.Fragment, null,
            isImage && imageThumbnailURL ? (React.createElement("s-thumbnail", { size: "small", src: imageThumbnailURL, alt: value.fileName })) : (React.createElement("s-thumbnail", { size: "small", alt: value.fileName })),
            React.createElement("div", { style: { flex: 1 } },
                value.$uploading ? "(Uploading) " : "",
                value.fileName),
            canClearFileValue && (React.createElement("s-button", { variant: "tertiary", onClick: (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    clearFileValue();
                }, icon: "delete" }))));
    }, [canClearFileValue, clearFileValue, fieldProps.value, imageThumbnailURL]);
    // Ensure label is always a string
    const label = (props.label ?? String(metadata.name ?? ""));
    return (React.createElement("div", { style: { position: "relative" } },
        React.createElement("s-drop-zone", { accept: validations.onlyImages?.acceptedTypes?.join(","), onChange: handleChange, disabled: disabled, label: label, error: errorMessage, required: metadata.requiredArgumentForInput, ...rest }, !filePreview && actionHintParts ? (React.createElement(React.Fragment, null,
            React.createElement("s-text", null, "Add file"),
            actionHintParts && React.createElement("s-text", { color: "subdued" }, actionHintParts.length === 1 ? "" : actionHintParts.join(" ")))) : (
        // Need this stack here since s-drop-zone will automatically add content otherwise.
        // The file preview can't be in here because s-drop-zone will prevent pointer events from reaching custom content
        React.createElement("s-stack", null))),
        filePreview && (React.createElement("div", { style: {
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