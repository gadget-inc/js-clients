import { filesize } from "filesize";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useApi } from "../../hooks.js";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useController, useFormContext } from "../../useActionForm.js";
import { RequiredValidationSpecId, isAutoFileFieldValue } from "../../validationSchema.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { assertFieldType } from "./utils.js";
export const imageFileTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/webp"];
export const useFileInputController = (props) => {
    const { field: fieldApiIdentifier, control } = props;
    // For showing a preview of the file
    const [imageThumbnailURL, setImageThumbnailURL] = useState();
    const { path, metadata } = useFieldMetadata(fieldApiIdentifier);
    assertFieldType({ fieldApiIdentifier, actualFieldType: metadata.fieldType, expectedFieldType: GadgetFieldType.File });
    const api = useApi();
    const { field: fieldProps, fieldState: { error: errorFromValidator }, } = useController({
        control,
        name: path,
    });
    const { setError, clearErrors } = useFormContext();
    useEffect(() => {
        if (fieldProps.value && isAutoFileFieldValue(fieldProps.value) && fieldProps.value.url) {
            setImageThumbnailURL(fieldProps.value.url);
        }
    }, [fieldProps.value]);
    const canClearFileValue = useMemo(() => !metadata.configuration.validations.find((validation) => validation?.specID === RequiredValidationSpecId), [metadata.configuration.validations]);
    const fileSizeValidation = useMemo(() => metadata.configuration.validations.find((validation) => validation?.__typename === "GadgetRangeFieldValidation"), [metadata]);
    const onlyImagesValidation = useMemo(() => {
        const imageValidation = metadata.configuration.validations.find((validation) => validation?.__typename === "GadgetOnlyImageFileFieldValidation");
        if (!imageValidation)
            return;
        const acceptedTypes = [...imageFileTypes];
        if (imageValidation.allowAnimatedImages) {
            acceptedTypes.push("image/gif");
        }
        return { acceptedTypes, allowAnimatedImages: imageValidation.allowAnimatedImages };
    }, [metadata]);
    const clearFileValue = useCallback(() => {
        fieldProps.onChange(null);
        setImageThumbnailURL(undefined);
        clearErrors(path);
    }, [clearErrors, fieldProps, path]);
    const onFileUpload = useCallback(async (files) => {
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
                message: fileSizeValidationErrorMessage(fileSizeValidation, file.size),
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
    const validations = {
        fileSize: fileSizeValidation,
        onlyImages: onlyImagesValidation,
    };
    const actionHintParts = useMemo(() => {
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
        return actionHintParts;
    }, [fieldProps.value, validations.fileSize, validations.onlyImages?.allowAnimatedImages]);
    return {
        fieldProps,
        isError: !!errorFromValidator,
        errorMessage: errorFromValidator?.message,
        imageThumbnailURL,
        onFileUpload,
        clearFileValue,
        validations,
        metadata,
        canClearFileValue,
        actionHintParts,
    };
};
export const getFileSizeValidationMessage = (validation, messageMap) => {
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
export const fileSizeValidationErrorMessage = (validation, fileSize) => {
    let message = getFileSizeValidationMessage(validation, {
        inRange: (min, max) => `must be a file between ${filesize(min)} and ${filesize(max)} big`,
        max: (max) => `must be a file smaller than ${filesize(max)}`,
        min: (min) => `must be a file larger than than ${filesize(min)}`,
    });
    if (message) {
        message = `must be a file ${message}, and this file's size is ${filesize(fileSize)}.`;
    }
    return message;
};
//# sourceMappingURL=useFileInputController.js.map