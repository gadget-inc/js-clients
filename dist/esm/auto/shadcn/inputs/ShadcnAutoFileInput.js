import { DeleteIcon, File } from "lucide-react";
import React, { useMemo } from "react";
import { isAutoFileFieldValue } from "../../../validationSchema.js";
import { autoInput } from "../../AutoInput.js";
import { useFileInputController } from "../../hooks/useFileInputController.js";
export const makeShadcnAutoFileInput = ({ Input, Label, Button, Avatar, AvatarImage, AvatarFallback, }) => {
    function ShadcnAutoFileInput(props) {
        const { field: fieldApiIdentifier, control, ...rest } = props;
        const { fieldProps, errorMessage, imageThumbnailURL, onFileUpload, clearFileValue, canClearFileValue, validations, metadata, actionHintParts, } = useFileInputController({
            field: fieldApiIdentifier,
            control,
        });
        const fileUploadContainer = useMemo(() => {
            if (!actionHintParts) {
                return null;
            }
            return (React.createElement("div", null,
                actionHintParts.length > 1 && (React.createElement(Label, null,
                    React.createElement("span", { className: "block text-sm text-gray-500 mb-2" }, actionHintParts.map((part, index) => (React.createElement("span", { key: index, className: "mr-1" }, part)))))),
                React.createElement(Input, { type: "file", ...props, accept: validations.onlyImages?.acceptedTypes?.join(","), onChange: (e) => {
                        if (e.target.files) {
                            void onFileUpload(Array.from(e.target.files));
                        }
                    } })));
        }, [actionHintParts, validations.onlyImages?.acceptedTypes, props, onFileUpload]);
        const inputLabel = props.label ?? (React.createElement("div", { style: { display: "flex", gap: "4px" } },
            metadata.name,
            metadata.requiredArgumentForInput ? React.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
        const filePreview = useMemo(() => {
            const value = fieldProps.value;
            if (!value || !isAutoFileFieldValue(value))
                return null;
            return (React.createElement("div", { className: "p-8 pr-16" },
                React.createElement("div", { className: "flex justify-between items-center gap-8" },
                    React.createElement("div", { className: "flex items-center gap-4" },
                        React.createElement(Avatar, null,
                            React.createElement(AvatarImage, { src: imageThumbnailURL }),
                            React.createElement(AvatarFallback, null,
                                React.createElement(File, null))),
                        React.createElement("div", { className: "text-sm" },
                            value.$uploading ? "(Uploading) " : "",
                            value.fileName)),
                    canClearFileValue && (React.createElement(Button, { variant: "ghost", size: "sm", onClick: () => clearFileValue(), id: `clear-file-${fieldApiIdentifier}` },
                        React.createElement(DeleteIcon, { className: "w-4 h-4" }))))));
        }, [canClearFileValue, clearFileValue, fieldApiIdentifier, fieldProps.value, imageThumbnailURL]);
        return (React.createElement("div", null,
            inputLabel,
            fileUploadContainer,
            filePreview,
            React.createElement("div", null, errorMessage && (React.createElement("div", { style: { marginTop: "4px" } },
                React.createElement(Label, { className: "text-red-500" }, errorMessage))))));
    }
    return autoInput(ShadcnAutoFileInput);
};
//# sourceMappingURL=ShadcnAutoFileInput.js.map