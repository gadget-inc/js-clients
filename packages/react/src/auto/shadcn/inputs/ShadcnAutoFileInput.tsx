import { filesize } from "filesize";
import React, { HtmlHTMLAttributes, useMemo } from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { getFileSizeValidationMessage, useFileInputController } from "../../hooks/useFileInputController.js";
import { ShadcnElements } from "../elements.js";

export const makeShadcnAutoFileInput = ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => {
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

      console.log(actionHintParts, "actionHintParts");

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
          <Input type="file" {...props} />
        </div>
      );
    }, [fieldProps.value, validations.fileSize, validations.onlyImages]);

    return <div>{fileUploadContainer}</div>;
  }

  return autoInput(ShadcnAutoFileInput);
};
