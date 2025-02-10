import { filesize } from "filesize";
import { DeleteIcon } from "lucide-react";
import React, { HtmlHTMLAttributes, useMemo } from "react";
import type { Control } from "../../../useActionForm.js";
import { isAutoFileFieldValue } from "../../../validationSchema.js";
import { autoInput } from "../../AutoInput.js";
import { getFileSizeValidationMessage, imageFileTypes, useFileInputController } from "../../hooks/useFileInputController.js";
import { ShadcnElements } from "../elements.js";

export const makeShadcnAutoFileInput = ({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">) => {
  function ShadcnAutoFileInput(
    props: {
      field: string;
      control?: Control<any>;
      label?: string;
    } & HtmlHTMLAttributes<HTMLDivElement>
  ) {
    const { field: fieldApiIdentifier, control, ...rest } = props;

    const { fieldProps, errorMessage, imageThumbnailURL, onFileUpload, clearFileValue, canClearFileValue, validations, metadata } =
      useFileInputController({
        field: fieldApiIdentifier,
        control,
      });

    console.log(validations, "What is the validation here", fieldApiIdentifier);

    const fileUploadContainer = useMemo(() => {
      if (fieldProps.value) return null;

      const actionHintParts = ["Accepts"];
      if (validations.onlyImages) {
        actionHintParts.push(`.jpg, .webp, .svg${validations.onlyImages.allowAnimatedImages ? ", .gif" : ""}, and .png`);
      }

      console.log(actionHintParts, "What is the action here");

      if (validations.fileSize) {
        const validation = validations.fileSize;
        const message = getFileSizeValidationMessage(validation, {
          inRange: (min, max) => `between ${filesize(min)} and ${filesize(max)}`,
          max: (max) => `smaller than ${filesize(max)}`,
          min: (min) => `larger than ${filesize(min)}`,
        });
        if (message) actionHintParts.push(message);
      }

      return (
        <div>
          <Label>
            {actionHintParts.length > 0 && (
              <span className="block text-sm text-gray-500 mb-2">
                {actionHintParts.map((part, index) => (
                  <span key={index} className="mr-1">
                    {part}
                  </span>
                ))}
              </span>
            )}
          </Label>

          <Input
            type="file"
            {...props}
            accept={validations.onlyImages?.acceptedTypes?.join(",")}
            onChange={(e) => {
              if (e.target.files) {
                void onFileUpload(Array.from(e.target.files));
              }
            }}
          />
        </div>
      );
    }, [fieldProps.value, validations.fileSize, validations.onlyImages]);

    const inputLabel = props.label ?? (
      <div style={{ display: "flex", gap: "4px" }}>
        {metadata.name}
        {metadata.requiredArgumentForInput ? <span style={{ color: "var(--p-color-text-critical)" }}>{"*"}</span> : null}
      </div>
    );

    const filePreview = useMemo(() => {
      const value = fieldProps.value;
      if (!value || !isAutoFileFieldValue(value)) return null;

      return (
        <div className="p-8 pr-16">
          <div className="flex justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10"
                alt={value.fileName}
                src={imageThumbnailURL && [...imageFileTypes, "image/gif"].includes(value.mimeType) ? imageThumbnailURL : ""}
              />
              <div className="text-sm">
                {value.$uploading ? "(Uploading) " : ""}
                {value.fileName}
              </div>
            </div>

            {/* Delete Button */}
            {canClearFileValue && (
              <Button variant="ghost" size="sm" onClick={() => clearFileValue()} id={`clear-file-${fieldApiIdentifier}`}>
                <DeleteIcon className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      );
    }, [canClearFileValue, clearFileValue, fieldApiIdentifier, fieldProps.value, imageThumbnailURL]);

    return (
      <div>
        {inputLabel}
        {fileUploadContainer}
        {filePreview}
        <div>
          {errorMessage && (
            <div style={{ marginTop: "4px" }}>
              <Label className="text-red-500">{errorMessage}</Label>
            </div>
          )}
        </div>
      </div>
    );
  }

  return autoInput(ShadcnAutoFileInput);
};
