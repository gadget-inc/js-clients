"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSizeValidationErrorMessage = exports.getFileSizeValidationMessage = exports.useFileInputController = exports.imageFileTypes = void 0;
const filesize_1 = require("filesize");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const GadgetProvider_js_1 = require("../../GadgetProvider.js");
const validationSchema_js_1 = require("../../validationSchema.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
exports.imageFileTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/webp"];
const useFileInputController = (props) => {
    const { field: fieldApiIdentifier, control } = props;
    // For showing a preview of the file
    const [imageThumbnailURL, setImageThumbnailURL] = (0, react_1.useState)();
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(fieldApiIdentifier);
    const api = (0, GadgetProvider_js_1.useApi)();
    const { field: fieldProps, fieldState: { error: errorFromValidator }, } = (0, react_hook_form_1.useController)({
        control,
        name: path,
    });
    const { setError, clearErrors } = (0, react_hook_form_1.useFormContext)();
    (0, react_1.useEffect)(() => {
        if (fieldProps.value && (0, validationSchema_js_1.isAutoFileFieldValue)(fieldProps.value) && fieldProps.value.url) {
            setImageThumbnailURL(fieldProps.value.url);
        }
    }, [fieldProps.value]);
    const canClearFileValue = (0, react_1.useMemo)(() => !metadata.configuration.validations.find((validation) => validation?.specID === validationSchema_js_1.RequiredValidationSpecId), [metadata.configuration.validations]);
    const fileSizeValidation = (0, react_1.useMemo)(() => metadata.configuration.validations.find((validation) => validation?.__typename === "GadgetRangeFieldValidation"), [metadata]);
    const onlyImagesValidation = (0, react_1.useMemo)(() => {
        const imageValidation = metadata.configuration.validations.find((validation) => validation?.__typename === "GadgetOnlyImageFileFieldValidation");
        if (!imageValidation)
            return;
        const acceptedTypes = [...exports.imageFileTypes];
        if (imageValidation.allowAnimatedImages) {
            acceptedTypes.push("image/gif");
        }
        return { acceptedTypes, allowAnimatedImages: imageValidation.allowAnimatedImages };
    }, [metadata]);
    const clearFileValue = (0, react_1.useCallback)(() => {
        fieldProps.onChange(undefined);
        setImageThumbnailURL(undefined);
        clearErrors(path);
    }, [clearErrors, fieldProps, path]);
    const onFileUpload = (0, react_1.useCallback)(async (files) => {
        if (files.length === 0) {
            return;
        }
        const file = files[0];
        const baseFileValue = {
            fileName: file.name,
            mimeType: file.type,
        };
        setImageThumbnailURL(window.URL.createObjectURL(file));
        if (fileSizeValidation &&
            ((fileSizeValidation.min && file.size < fileSizeValidation.min) || (fileSizeValidation.max && file.size > fileSizeValidation.max))) {
            setError(path, {
                message: (0, exports.fileSizeValidationErrorMessage)(fileSizeValidation, file.size),
                type: "validate",
            });
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
    }, [api, fieldProps, fileSizeValidation, path, setError]);
    return {
        fieldProps,
        isError: !!errorFromValidator,
        errorMessage: errorFromValidator?.message,
        imageThumbnailURL,
        onFileUpload,
        clearFileValue,
        validations: {
            fileSize: fileSizeValidation,
            onlyImages: onlyImagesValidation,
        },
        metadata,
        canClearFileValue,
    };
};
exports.useFileInputController = useFileInputController;
const getFileSizeValidationMessage = (validation, messageMap) => {
    if (validation.min) {
        if (validation.max) {
            return messageMap.inRange(validation.min, validation.max);
        }
        else {
            return messageMap.min(validation.min);
        }
    }
    else {
        if (validation.max) {
            return messageMap.max(validation.max);
        }
    }
};
exports.getFileSizeValidationMessage = getFileSizeValidationMessage;
const fileSizeValidationErrorMessage = (validation, fileSize) => {
    let message = (0, exports.getFileSizeValidationMessage)(validation, {
        inRange: (min, max) => `must be a file between ${(0, filesize_1.filesize)(min)} and ${(0, filesize_1.filesize)(max)} big`,
        max: (max) => `must be a file smaller than ${(0, filesize_1.filesize)(max)}`,
        min: (min) => `must be a file larger than than ${(0, filesize_1.filesize)(min)}`,
    });
    if (message) {
        message = `must be a file ${message}, and this file's size is ${(0, filesize_1.filesize)(fileSize)}.`;
    }
    return message;
};
exports.fileSizeValidationErrorMessage = fileSizeValidationErrorMessage;
//# sourceMappingURL=useFileInputController.js.map