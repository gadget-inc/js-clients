import { DropZone, InlineStack, Text, Thumbnail } from "@shopify/polaris";
import { NoteMinor } from "@shopify/polaris-icons";
import React, { useCallback } from "react";

export interface PolarisFileInputProps {
  label?: string;
  value?: File;
  onChange: (value: File) => void;
}
const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

export const PolarisFileInput = (props: PolarisFileInputProps) => {
  const handleDropZoneDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) => {
      props.onChange(acceptedFiles[0]);
    },
    [props.onChange]
  );

  const file = props.value;
  const fileUpload = !file && <DropZone.FileUpload />;
  const uploadedFiles = file && (
    <InlineStack>
      <Thumbnail size="small" alt={file.name} source={validImageTypes.includes(file.type) ? window.URL.createObjectURL(file) : NoteMinor} />
      <div>
        {file.name}{" "}
        <Text variant="bodySm" as="p">
          {file.size} bytes
        </Text>
      </div>
    </InlineStack>
  );

  return (
    <DropZone label={props.label} allowMultiple={false} onDrop={handleDropZoneDrop}>
      {uploadedFiles}
      {fileUpload}
    </DropZone>
  );
};
