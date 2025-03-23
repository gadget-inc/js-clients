import { DeleteIcon, File } from "lucide-react";
import { default as React, useEffect, useMemo, type HtmlHTMLAttributes } from "react";
import { isAutoFileFieldValue } from "../../../validationSchema.js";
import { autoInput } from "../../AutoInput.js";
import { useFileInputController } from "../../hooks/useFileInputController.js";
import { type AutoFileInputProps } from "../../shared/AutoInputTypes.js";
import { type ShadcnElements } from "../elements.js";

export const makeShadcnAutoFileInput = ({
  Input,
  Label,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
}: Pick<ShadcnElements, "Input" | "Label" | "Button" | "Avatar" | "AvatarImage" | "AvatarFallback">) => {
  function ShadcnAutoFileInput(props: AutoFileInputProps & HtmlHTMLAttributes<HTMLDivElement>) {
    const { field: fieldApiIdentifier, control } = props;

    const [isFilePickerOpen, setIsFilePickerOpen] = React.useState(false);

    // Handle when the system file picker is closed
    useEffect(() => {
      // When window regains focus, file picker must be closed
      const handleFocus = () => setIsFilePickerOpen(false);
      window.addEventListener("focus", handleFocus);
      return () => window.removeEventListener("focus", handleFocus);
    }, []);

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
            className={`cursor-pointer ${isFilePickerOpen ? "ring-1 ring-ring" : ""}`}
            type="file"
            {...props}
            title="" // to prevent the tooltip
            accept={validations.onlyImages?.acceptedTypes?.join(",")}
            onClick={() => setIsFilePickerOpen(true)}
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
        <div className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors">
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
          <Button
            variant="ghost"
            size="sm"
            onClick={() => clearFileValue()}
            id={`clear-file-${fieldApiIdentifier}`}
            className="ml-auto my-auto flex items-center"
          >
            <DeleteIcon className="w-4 h-4" />
          </Button>
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
