import { Box, DropZone, InlineError, InlineStack, Thumbnail } from "@shopify/polaris";
import { NoteIcon } from "@shopify/polaris-icons";
import { filesize } from "filesize";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useController } from "react-hook-form";
import { useApi } from "../../GadgetProvider.js";
import { isAutoFileFieldValue } from "../../validationSchema.js";
import { useFieldMetadata } from "../hooks/useFieldMetadata.js";
const imageFileTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/gif"];
export const PolarisAutoFileInput = (props) => {
    const [openFileDialog, setOpenFileDialog] = useState(false);
    const { field: fieldApiIdentifier, control, ...rest } = props;
    // For showing a preview of the file
    const [imageThumbnailURL, setImageThumbnailURL] = useState();
    const { path, metadata } = useFieldMetadata(fieldApiIdentifier);
    const api = useApi();
    const { field: fieldProps, fieldState: { error }, } = useController({
        control,
        name: path,
    });
    const rangeValidation = useMemo(() => metadata.configuration.validations.find((validation) => validation?.__typename === "GadgetRangeFieldValidation"), [metadata]);
    useEffect(() => {
        if (fieldProps.value && isAutoFileFieldValue(fieldProps.value) && fieldProps.value.url) {
            setImageThumbnailURL(fieldProps.value.url);
        }
    }, [fieldProps.value]);
    const onlyImages = useMemo(() => {
        const imageValidation = metadata.configuration.validations.find((validation) => validation?.__typename === "GadgetOnlyImageFileFieldValidation");
        if (!imageValidation)
            return;
        const acceptedTypes = [...imageFileTypes];
        if (imageValidation.allowAnimatedImages) {
            acceptedTypes.push("image/gif");
        }
        return { acceptedTypes, allowAnimatedImages: imageValidation.allowAnimatedImages };
    }, [metadata]);
    const handleDropZoneDrop = useCallback(async (_dropFiles, acceptedFiles, _rejectedFiles) => {
        const file = acceptedFiles[0];
        const baseFileValue = {
            fileName: file.name,
            mimeType: file.type,
        };
        setImageThumbnailURL(window.URL.createObjectURL(file));
        if (rangeValidation &&
            ((rangeValidation.min && file.size < rangeValidation.min) || (rangeValidation.max && file.size > rangeValidation.max))) {
            fieldProps.onChange({
                ...baseFileValue,
                $invalidFileSize: file.size,
            });
            return;
        }
        fieldProps.onChange({
            ...baseFileValue,
            $uploading: true,
        });
        // Upload the file in the background
        const { url, token } = await api.getDirectUploadToken();
        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": file.type,
            },
            body: file,
        });
        fieldProps.onChange({
            directUploadToken: token,
            ...baseFileValue,
        });
    }, [api, fieldProps, rangeValidation]);
    const fileUpload = useMemo(() => {
        if (fieldProps.value)
            return null;
        const actionHintParts = ["Accepts"];
        if (onlyImages) {
            actionHintParts.push(`.jpg, .webp, .svg${onlyImages.allowAnimatedImages ? ", .gif" : ""}, and .png`);
        }
        if (rangeValidation) {
            if (rangeValidation.min) {
                if (rangeValidation.max) {
                    actionHintParts.push(`between ${filesize(rangeValidation.min)} and ${filesize(rangeValidation.max)}`);
                }
                else {
                    actionHintParts.push(`larger than than ${filesize(rangeValidation.min)}`);
                }
            }
            else {
                if (rangeValidation.max) {
                    actionHintParts.push(`smaller than ${filesize(rangeValidation.max)}`);
                }
            }
        }
        return React.createElement(DropZone.FileUpload, { actionTitle: "Add file", actionHint: actionHintParts.length === 1 ? "" : actionHintParts.join(" ") });
    }, [fieldProps.value, onlyImages, rangeValidation]);
    const uploadedFiles = useMemo(() => {
        const value = fieldProps.value;
        if (!value || !isAutoFileFieldValue(value))
            return null;
        return (React.createElement(Box, { padding: "100" },
            React.createElement(InlineStack, { gap: "200", blockAlign: "center" },
                React.createElement(Thumbnail, { size: "small", alt: value.fileName, source: imageThumbnailURL && imageFileTypes.includes(value.mimeType) ? imageThumbnailURL : NoteIcon }),
                React.createElement("div", null,
                    value.$uploading ? "(Uploading) " : "",
                    value.fileName))));
    }, [fieldProps.value, imageThumbnailURL]);
    const dropZoneLabel = (React.createElement(React.Fragment, null,
        metadata.name,
        " ",
        metadata.requiredArgumentForInput ? React.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
    return (React.createElement(React.Fragment, null,
        React.createElement(DropZone, { variableHeight: true, openFileDialog: openFileDialog, label: dropZoneLabel, allowMultiple: false, onDrop: (...args) => {
                void handleDropZoneDrop(...args);
            }, onFileDialogClose: () => setOpenFileDialog((prev) => !prev), ...rest, accept: onlyImages?.acceptedTypes?.join(",") },
            uploadedFiles,
            fileUpload),
        error && error.message && (React.createElement("div", { style: { marginTop: "4px" } },
            React.createElement(InlineError, { fieldID: fieldApiIdentifier, message: error.message })))));
};
//# sourceMappingURL=PolarisAutoFileInput.js.map