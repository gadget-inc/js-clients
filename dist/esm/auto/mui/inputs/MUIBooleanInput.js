import { Checkbox } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { MUIAutoFormControl } from "./MUIAutoInput.js";
export const MUIBooleanInput = (props) => {
    const { field: fieldApiIdentifier, control, ...rest } = props;
    const { path } = useFieldMetadata(fieldApiIdentifier);
    const { field: fieldProps } = useController({
        control,
        name: path,
    });
    return (React.createElement(MUIAutoFormControl, { field: props.field },
        React.createElement(Checkbox, { checked: fieldProps.value, onChange: fieldProps.onChange, onBlur: fieldProps.onBlur, disabled: fieldProps.disabled, ...rest })));
};
//# sourceMappingURL=MUIBooleanInput.js.map