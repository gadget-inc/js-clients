import type { DropZoneProps } from "@shopify/polaris";
import { Box, Button, DropZone, InlineError, InlineStack, Thumbnail } from "@shopify/polaris";
import { DeleteIcon, NoteIcon } from "@shopify/polaris-icons";
import React, { useMemo } from "react";
import { isAutoFileFieldValue } from "../../../validationSchema.js";
import { autoInput } from "../../AutoInput.js";
import { imageFileTypes, useFileInputController } from "../../hooks/useFileInputController.js";
import { type AutoFileInputProps } from "../../shared/AutoInputTypes.js";

export type PolarisAutoFileInputProps = AutoFileInputProps & Omit<DropZoneProps, "allowMultiple">;

/**
 * A file input for use within <AutoForm></AutoForm> components
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoFileInput field="fileField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the File field
 * @param props.label - The label of the File field
 * @param props.onChange - called when the file input changes
 * @returns The file input component
 */
export const PolarisAutoFileInput = autoInput((props: PolarisAutoFileInputProps) => {
  const { field: fieldApiIdentifier, control, ...rest } = props;

  const {
    fieldProps,
    errorMessage,
    imageThumbnailURL,
    onFileUpload,
    clearFileValue,
    canClearFileValue,
    validations,
    metadata,
    actionHintParts,
  } = useFileInputController({
    field: fieldApiIdentifier,
    control,
  });

  const fileUploadContainer = useMemo(() => {
    if (!actionHintParts) {
      return null;
    }

    return <DropZone.FileUpload actionTitle="Add file" actionHint={actionHintParts.length === 1 ? "" : actionHintParts.join(" ")} />;
  }, [actionHintParts]);

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

  const inputLabel = props.label ?? (
    <div style={{ display: "flex", gap: "4px" }}>
      {metadata.name}
      {metadata.requiredArgumentForInput ? <span style={{ color: "var(--p-color-text-critical)" }}>{"*"}</span> : null}
    </div>
  );

  return (
    <>
      {inputLabel}
      <DropZone
        variableHeight
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
});
