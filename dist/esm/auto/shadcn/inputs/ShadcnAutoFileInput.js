import { DeleteIcon, File } from "lucide-react";
import React, { useEffect, useMemo } from "react";
import { isAutoFileFieldValue } from "../../../validationSchema.js";
import { autoInput } from "../../AutoInput.js";
import { useFileInputController } from "../../hooks/useFileInputController.js";
export const makeShadcnAutoFileInput = ({ Input, Label, Button, Avatar, AvatarImage, AvatarFallback, }) => {
    function ShadcnAutoFileInput(props) {
        const { field: fieldApiIdentifier, control, ...rest } = props;
        const [isFilePickerOpen, setIsFilePickerOpen] = React.useState(false);
        // Handle when the system file picker is closed
        useEffect(() => {
            // When window regains focus, file picker must be closed
            const handleFocus = () => setIsFilePickerOpen(false);
            window.addEventListener("focus", handleFocus);
            return () => window.removeEventListener("focus", handleFocus);
        }, []);
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
                React.createElement(Input, { className: `cursor-pointer ${isFilePickerOpen ? "ring-1 ring-ring" : ""}`, type: "file", ...props, title: "" // to prevent the tooltip
                    , accept: validations.onlyImages?.acceptedTypes?.join(","), onClick: () => setIsFilePickerOpen(true), onChange: (e) => {
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
            return (React.createElement("div", { className: "flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors" },
                React.createElement("div", { className: "flex items-center gap-4" },
                    React.createElement(Avatar, null,
                        React.createElement(AvatarImage, { src: imageThumbnailURL }),
                        React.createElement(AvatarFallback, null,
                            React.createElement(File, null))),
                    React.createElement("div", { className: "text-sm" },
                        value.$uploading ? "(Uploading) " : "",
                        value.fileName)),
                React.createElement(Button, { variant: "ghost", size: "sm", onClick: () => clearFileValue(), id: `clear-file-${fieldApiIdentifier}`, className: "ml-auto my-auto flex items-center" },
                    React.createElement(DeleteIcon, { className: "w-4 h-4" }))));
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