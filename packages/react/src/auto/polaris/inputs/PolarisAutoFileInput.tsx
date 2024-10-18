import type { DropZoneProps } from "@shopify/polaris";
import { Box, Button, DropZone, InlineError, InlineStack, Thumbnail } from "@shopify/polaris";
import { DeleteIcon, NoteIcon } from "@shopify/polaris-icons";
import { filesize } from "filesize";
import React, { useMemo } from "react";
import type { Control } from "../../../useActionForm.js";
import { isAutoFileFieldValue } from "../../../validationSchema.js";
import { getFileSizeValidationMessage, imageFileTypes, useFileInputController } from "../../hooks/useFileInputController.js";

export const PolarisAutoFileInput = (props: { field: string; control?: Control<any> } & Omit<DropZoneProps, "allowMultiple">) => {
  const { field: fieldApiIdentifier, control, ...rest } = props;
  const { fieldProps, errorMessage, imageThumbnailURL, onFileUpload, clearFileValue, canClearFileValue, validations, metadata } =
    useFileInputController({
      field: fieldApiIdentifier,
      control,
    });

  const fileUploadContainer = useMemo(() => {
    if (fieldProps.value) return null;

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
      if (message) actionHintParts.push(message);
    }

    return <DropZone.FileUpload actionTitle="Add file" actionHint={actionHintParts.length === 1 ? "" : actionHintParts.join(" ")} />;
  }, [fieldProps.value, validations.fileSize, validations.onlyImages]);

  const filePreview = useMemo(() => {
    const value = fieldProps.value;
    if (!value || !isAutoFileFieldValue(value)) return null;

    return (
      <Box padding="100" paddingInlineEnd={"400"}>
        <InlineStack align="space-between" gap="400">
          <InlineStack gap="200" blockAlign="center">
            <Thumbnail
              size="small"
              alt={value.fileName}
              source={imageThumbnailURL && [...imageFileTypes, "image/gif"].includes(value.mimeType) ? imageThumbnailURL : NoteIcon}
            />
            <div>
              {value.$uploading ? "(Uploading) " : ""}
              {value.fileName}
            </div>
          </InlineStack>
          {canClearFileValue && (
            <Button
              icon={DeleteIcon}
              variant="plain"
              accessibilityLabel="Delete file"
              onPointerDown={() => {
                clearFileValue();
              }}
              id={`clear-file-${fieldApiIdentifier}`}
            />
          )}
        </InlineStack>
      </Box>
    );
  }, [canClearFileValue, clearFileValue, fieldApiIdentifier, fieldProps.value, imageThumbnailURL]);

  const inputLabel = (
    <>
      {metadata.name} {metadata.requiredArgumentForInput ? <span style={{ color: "var(--p-color-text-critical)" }}>*</span> : null}
    </>
  );

  return (
    <>
      <DropZone
        variableHeight
        label={inputLabel}
        allowMultiple={false}
        onDrop={(_droppedFiles, acceptedFiles) => {
          void onFileUpload(acceptedFiles);
        }}
        {...rest}
        accept={validations.onlyImages?.acceptedTypes?.join(",")}
      >
        {filePreview}
        {fileUploadContainer}
      </DropZone>
      {errorMessage && (
        <div style={{ marginTop: "4px" }}>
          <InlineError fieldID={fieldApiIdentifier} message={errorMessage} />
        </div>
      )}
    </>
  );
};
