import { filesize } from "filesize";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useController, useFormContext, type Control } from "react-hook-form";
import { useApi } from "../../GadgetProvider.js";
import type { GadgetOnlyImageFileFieldValidation, GadgetRangeFieldValidation } from "../../internal/gql/graphql.js";
import type { AutoFileFieldValue } from "../../validationSchema.js";
import { RequiredValidationSpecId, isAutoFileFieldValue } from "../../validationSchema.js";
import { useFieldMetadata } from "./useFieldMetadata.js";

export const imageFileTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/webp"];

export const useFileInputController = (props: {
  field: string; // The field API identifier
  control?: Control<any>;
}) => {
  const { field: fieldApiIdentifier, control } = props;
  // For showing a preview of the file
  const [imageThumbnailURL, setImageThumbnailURL] = useState<string>();
  const { path, metadata } = useFieldMetadata(fieldApiIdentifier);
  const api = useApi();

  const {
    field: fieldProps,
    fieldState: { error: errorFromValidator },
  } = useController({
    control,
    name: path,
  });

  const { setError, clearErrors } = useFormContext();

  useEffect(() => {
    if (fieldProps.value && isAutoFileFieldValue(fieldProps.value) && fieldProps.value.url) {
      setImageThumbnailURL(fieldProps.value.url);
    }
  }, [fieldProps.value]);

  const canClearFileValue = useMemo(
    () => !metadata.configuration.validations.find((validation) => validation?.specID === RequiredValidationSpecId),
    [metadata.configuration.validations]
  );

  const fileSizeValidation = useMemo(
    () => metadata.configuration.validations.find((validation) => validation?.__typename === "GadgetRangeFieldValidation"),
    [metadata]
  ) as GadgetRangeFieldValidation | undefined;

  const onlyImagesValidation = useMemo(() => {
    const imageValidation = metadata.configuration.validations.find(
      (validation) => validation?.__typename === "GadgetOnlyImageFileFieldValidation"
    ) as GadgetOnlyImageFileFieldValidation | undefined;
    if (!imageValidation) return;

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

  const onFileUpload = useCallback(
    async (files: File[]) => {
      if (files.length === 0) {
        return;
      }

      const file = files[0];
      const baseFileValue = {
        fileName: file.name,
        mimeType: file.type,
      } satisfies AutoFileFieldValue;

      setImageThumbnailURL(window.URL.createObjectURL(file));

      if (
        fileSizeValidation &&
        ((fileSizeValidation.min && file.size < fileSizeValidation.min) || (fileSizeValidation.max && file.size > fileSizeValidation.max))
      ) {
        setError(path, {
          message: fileSizeValidationErrorMessage(fileSizeValidation, file.size),
          type: "validate",
        });

        fieldProps.onChange({
          ...baseFileValue,
          $invalidFileSize: file.size,
        } satisfies AutoFileFieldValue);

        return;
      }

      fieldProps.onChange({
        ...baseFileValue,
        $uploading: true,
      } satisfies AutoFileFieldValue);

      // Upload the file in the background
      const { url, token } = await (api as any).getDirectUploadToken();
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
      } satisfies AutoFileFieldValue);
    },
    [api, fieldProps, fileSizeValidation, path, setError]
  );

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

export const getFileSizeValidationMessage = (
  validation: GadgetRangeFieldValidation,
  messageMap: {
    min: (min: number) => string;
    max: (max: number) => string;
    inRange: (min: number, max: number) => string;
  }
) => {
  if (validation.min) {
    if (validation.max) {
      return messageMap.inRange(validation.min, validation.max);
    } else {
      return messageMap.min(validation.min);
    }
  } else {
    if (validation.max) {
      return messageMap.max(validation.max);
    }
  }
};

export const fileSizeValidationErrorMessage = (validation: GadgetRangeFieldValidation, fileSize: number) => {
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
