import { FormControl, FormControlLabel, FormGroup, FormHelperText } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
export const MUIAutoFormControl = (props) => {
    const { path, metadata } = useFieldMetadata(props.field);
    const { fieldState: { error }, } = useController({
        name: path,
    });
    return (React.createElement(FormControl, { ...metadata, error: !!error },
        React.createElement(FormGroup, null,
            React.createElement(FormControlLabel, { label: metadata.name, control: props.children })),
        error && React.createElement(FormHelperText, null, error?.message)));
};
//# sourceMappingURL=MUIAutoFormControl.js.map