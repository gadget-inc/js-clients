import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
export const MUIAutoRolesInput = (props) => {
    const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = useRoleInputController(props);
    if (rolesError) {
        throw rolesError;
    }
    if (fieldError) {
        throw fieldError;
    }
    const label = metadata.name;
    if (loading) {
        return React.createElement(TextField, { label: label, autoComplete: "off", disabled: loading });
    }
    return (React.createElement(Autocomplete, { disablePortal: true, id: `${label}_Autocomplete_Textfield`, multiple: true, renderInput: (params) => React.createElement(TextField, { ...params, label: label }), renderOption: (optionAttributes, option) => (React.createElement("li", { ...optionAttributes, "data-listbox-option-value": option.id }, option.label)), ...fieldProps, onChange: (_event, value) => {
            const uniqueSelectedRoleKeys = new Set(value.map((option) => (typeof option === "string" ? option : option.id)));
            fieldProps.onChange(Array.from(uniqueSelectedRoleKeys));
        }, value: options.filter((option) => selectedRoleKeys.includes(option.value)).map(idLabelMapper), options: options.map(idLabelMapper), ...props }));
};
const idLabelMapper = (option) => ({ id: option.value, label: option.label });
//# sourceMappingURL=MUIAutoRolesInput.js.map