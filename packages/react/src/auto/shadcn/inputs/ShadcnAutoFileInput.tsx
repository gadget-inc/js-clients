import { DeleteIcon, File } from "lucide-react";
import React, { HtmlHTMLAttributes, useMemo, type ReactNode } from "react";
import type { Control } from "../../../useActionForm.js";
import { isAutoFileFieldValue } from "../../../validationSchema.js";
import { autoInput } from "../../AutoInput.js";
import { useFileInputController } from "../../hooks/useFileInputController.js";
import { ShadcnElements } from "../elements.js";

export const makeShadcnAutoFileInput = ({
  Input,
  Label,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
}: Pick<ShadcnElements, "Input" | "Label" | "Button" | "Avatar" | "AvatarImage" | "AvatarFallback">) => {
  function ShadcnAutoFileInput(
    props: {
      field: string;
      control?: Control<any>;
      label?: ReactNode;
    } & HtmlHTMLAttributes<HTMLDivElement>
  ) {
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

      return (
        <div>
          {actionHintParts.length > 1 && (
            <Label>
              <span className="block text-sm text-gray-500 mb-2">
                {actionHintParts.map((part, index) => (
                  <span key={index} className="mr-1">
                    {part}
                  </span>
                ))}
              </span>
            </Label>
          )}

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
    }, [actionHintParts, validations.onlyImages?.acceptedTypes, props, onFileUpload]);

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
              <Avatar>
                <AvatarImage src={imageThumbnailURL} />
                <AvatarFallback>
                  <File />
                </AvatarFallback>
              </Avatar>

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
