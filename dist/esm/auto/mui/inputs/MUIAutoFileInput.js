import { Button, styled } from "@mui/material";
import React, { useCallback } from "react";
import { useController } from "react-hook-form";
import { useApi } from "../../../GadgetProvider.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});
export const MUIAutoFileInput = (props) => {
    const { field: fieldApiIdentifier, control } = props;
    const { path, metadata } = useFieldMetadata(fieldApiIdentifier);
    const api = useApi();
    const { field: fieldProps } = useController({
        control,
        name: path,
    });
    const uploadFile = useCallback(async (files) => {
        const { url, token } = await api.getDirectUploadToken();
        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": files[0].type,
            },
            body: files[0],
        });
        fieldProps.onChange({
            directUploadToken: token,
            fileName: files[0].name,
        });
    }, [api, fieldProps]);
    return (React.createElement(Button, { component: "label", variant: "contained" },
        metadata.name,
        " ",
        metadata.requiredArgumentForInput ? "*" : null,
        React.createElement(VisuallyHiddenInput, { type: "file", onChange: (event) => {
                if (event.target.files && event.target.files.length > 0) {
                    void uploadFile([event.target.files[0]]);
                }
            } })));
};
//# sourceMappingURL=MUIAutoFileInput.js.map