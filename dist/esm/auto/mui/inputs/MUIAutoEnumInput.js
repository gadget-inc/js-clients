import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
export const MUIAutoEnumInput = (props) => {
    const { allowMultiple, selectedOptions, onSelectionChange, allOptions, label } = useEnumInputController(props);
    return (React.createElement(Autocomplete, { disablePortal: true, multiple: allowMultiple, options: allOptions, renderInput: (params) => React.createElement(TextField, { ...params, label: props.label ?? label }), value: allowMultiple ? selectedOptions : selectedOptions[0], onChange: (event, value) => {
            if (value === null || (Array.isArray(value) && value.length === 0)) {
                onSelectionChange(null);
                return;
            }
            if (typeof value === "string") {
                onSelectionChange(value);
            }
            else {
                for (const option of value) {
                    onSelectionChange(option);
                }
            }
        } }));
};
//# sourceMappingURL=MUIAutoEnumInput.js.map