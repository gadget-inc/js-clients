import { Button, styled } from "@mui/material";
import React from "react";
import { useFileInputController } from "../../hooks/useFileInputController.js";
import { MUIAutoFormControl } from "./MUIAutoInput.js";
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
    const { onFileUpload, metadata } = useFileInputController({
        field: fieldApiIdentifier,
        control,
    });
    return (React.createElement(MUIAutoFormControl, { field: props.field },
        React.createElement(Button, { component: "label", variant: "contained" },
            metadata.name,
            " ",
            metadata.requiredArgumentForInput ? "*" : null,
            React.createElement(VisuallyHiddenInput, { type: "file", onChange: (event) => {
                    if (event.target.files && event.target.files.length > 0) {
                        void onFileUpload([event.target.files[0]]);
                    }
                } }))));
};
//# sourceMappingURL=MUIAutoFileInput.js.map