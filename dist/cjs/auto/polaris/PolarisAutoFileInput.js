"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoFileInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const filesize_1 = require("filesize");
const react_1 = tslib_1.__importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const GadgetProvider_js_1 = require("../../GadgetProvider.js");
const validationSchema_js_1 = require("../../validationSchema.js");
const useFieldMetadata_js_1 = require("../hooks/useFieldMetadata.js");
const imageFileTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/gif"];
const PolarisAutoFileInput = (props) => {
    const [openFileDialog, setOpenFileDialog] = (0, react_1.useState)(false);
    const { field: fieldApiIdentifier, control, ...rest } = props;
    // For showing a preview of the file
    const [imageThumbnailURL, setImageThumbnailURL] = (0, react_1.useState)();
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(fieldApiIdentifier);
    const api = (0, GadgetProvider_js_1.useApi)();
    const { field: fieldProps, fieldState: { error }, } = (0, react_hook_form_1.useController)({
        control,
        name: path,
    });
    const rangeValidation = (0, react_1.useMemo)(() => metadata.configuration.validations.find((validation) => validation?.__typename === "GadgetRangeFieldValidation"), [metadata]);
    (0, react_1.useEffect)(() => {
        if (fieldProps.value && (0, validationSchema_js_1.isAutoFileFieldValue)(fieldProps.value) && fieldProps.value.url) {
            setImageThumbnailURL(fieldProps.value.url);
        }
    }, [fieldProps.value]);
    const onlyImages = (0, react_1.useMemo)(() => {
        const imageValidation = metadata.configuration.validations.find((validation) => validation?.__typename === "GadgetOnlyImageFileFieldValidation");
        if (!imageValidation)
            return;
        const acceptedTypes = [...imageFileTypes];
        if (imageValidation.allowAnimatedImages) {
            acceptedTypes.push("image/gif");
        }
        return { acceptedTypes, allowAnimatedImages: imageValidation.allowAnimatedImages };
    }, [metadata]);
    const handleDropZoneDrop = (0, react_1.useCallback)(async (_dropFiles, acceptedFiles, _rejectedFiles) => {
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
    const fileUpload = (0, react_1.useMemo)(() => {
        if (fieldProps.value)
            return null;
        const actionHintParts = ["Accepts"];
        if (onlyImages) {
            actionHintParts.push(`.jpg, .webp, .svg${onlyImages.allowAnimatedImages ? ", .gif" : ""}, and .png`);
        }
        if (rangeValidation) {
            if (rangeValidation.min) {
                if (rangeValidation.max) {
                    actionHintParts.push(`between ${(0, filesize_1.filesize)(rangeValidation.min)} and ${(0, filesize_1.filesize)(rangeValidation.max)}`);
                }
                else {
                    actionHintParts.push(`larger than than ${(0, filesize_1.filesize)(rangeValidation.min)}`);
                }
            }
            else {
                if (rangeValidation.max) {
                    actionHintParts.push(`smaller than ${(0, filesize_1.filesize)(rangeValidation.max)}`);
                }
            }
        }
        return react_1.default.createElement(polaris_1.DropZone.FileUpload, { actionTitle: "Add file", actionHint: actionHintParts.length === 1 ? "" : actionHintParts.join(" ") });
    }, [fieldProps.value, onlyImages, rangeValidation]);
    const uploadedFiles = (0, react_1.useMemo)(() => {
        const value = fieldProps.value;
        if (!value || !(0, validationSchema_js_1.isAutoFileFieldValue)(value))
            return null;
        return (react_1.default.createElement(polaris_1.Box, { padding: "100" },
            react_1.default.createElement(polaris_1.InlineStack, { gap: "200", blockAlign: "center" },
                react_1.default.createElement(polaris_1.Thumbnail, { size: "small", alt: value.fileName, source: imageThumbnailURL && imageFileTypes.includes(value.mimeType) ? imageThumbnailURL : polaris_icons_1.NoteIcon }),
                react_1.default.createElement("div", null,
                    value.$uploading ? "(Uploading) " : "",
                    value.fileName))));
    }, [fieldProps.value, imageThumbnailURL]);
    const dropZoneLabel = (react_1.default.createElement(react_1.default.Fragment, null,
        metadata.name,
        " ",
        metadata.requiredArgumentForInput ? react_1.default.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(polaris_1.DropZone, { variableHeight: true, openFileDialog: openFileDialog, label: dropZoneLabel, allowMultiple: false, onDrop: (...args) => {
                void handleDropZoneDrop(...args);
            }, onFileDialogClose: () => setOpenFileDialog((prev) => !prev), ...rest, accept: onlyImages?.acceptedTypes?.join(",") },
            uploadedFiles,
            fileUpload),
        error && error.message && (react_1.default.createElement("div", { style: { marginTop: "4px" } },
            react_1.default.createElement(polaris_1.InlineError, { fieldID: fieldApiIdentifier, message: error.message })))));
};
exports.PolarisAutoFileInput = PolarisAutoFileInput;
//# sourceMappingURL=PolarisAutoFileInput.js.map