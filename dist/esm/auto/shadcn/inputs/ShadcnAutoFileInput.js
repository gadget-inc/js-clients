import { filesize } from "filesize";
import React, { useMemo } from "react";
import { autoInput } from "../../AutoInput.js";
import { getFileSizeValidationMessage, useFileInputController } from "../../hooks/useFileInputController.js";
export const makeShadcnAutoFileInput = ({ Input, Label }) => {
    function ShadcnAutoFileInput(props) {
        const { field: fieldApiIdentifier, control, ...rest } = props;
        const { fieldProps, errorMessage, imageThumbnailURL, onFileUpload, clearFileValue, canClearFileValue, validations, metadata } = useFileInputController({
            field: fieldApiIdentifier,
            control,
        });
        const fileUploadContainer = useMemo(() => {
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
            return (React.createElement("div", null,
                React.createElement(Label, null, actionHintParts.length > 0 && (React.createElement("span", { className: "block text-sm text-gray-500 mb-2" }, actionHintParts.map((part, index) => (React.createElement("span", { key: index, className: "mr-1" }, part)))))),
                React.createElement(Input, { type: "file", ...props })));
        }, [fieldProps.value, validations.fileSize, validations.onlyImages]);
        return React.createElement("div", null, fileUploadContainer);
    }
    return autoInput(ShadcnAutoFileInput);
};
//# sourceMappingURL=ShadcnAutoFileInput.js.map