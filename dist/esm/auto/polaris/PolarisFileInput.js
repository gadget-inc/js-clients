import { DropZone, HorizontalStack, Text, Thumbnail } from "@shopify/polaris";
import { NoteMinor } from "@shopify/polaris-icons";
import React, { useCallback } from "react";
const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
export const PolarisFileInput = (props) => {
    const handleDropZoneDrop = useCallback((_dropFiles, acceptedFiles, _rejectedFiles) => {
        props.onChange(acceptedFiles[0]);
    }, [props.onChange]);
    const file = props.value;
    const fileUpload = !file && React.createElement(DropZone.FileUpload, null);
    const uploadedFiles = file && (React.createElement(HorizontalStack, null,
        React.createElement(Thumbnail, { size: "small", alt: file.name, source: validImageTypes.includes(file.type) ? window.URL.createObjectURL(file) : NoteMinor }),
        React.createElement("div", null,
            file.name,
            " ",
            React.createElement(Text, { variant: "bodySm", as: "p" },
                file.size,
                " bytes"))));
    return (React.createElement(DropZone, { label: props.label, allowMultiple: false, onDrop: handleDropZoneDrop },
        uploadedFiles,
        fileUpload));
};
//# sourceMappingURL=PolarisFileInput.js.map