import { Autocomplete, TextField } from "@mui/material";
import React, { useMemo } from "react";
import { useRolesMetadata } from "../../../metadata.js";
export const MUIRolesCombobox = (props) => {
    const { roles, fetching, error } = useRolesMetadata();
    const options = useMemo(() => {
        if (!roles)
            return [];
        return roles.map((role) => ({ id: role.name, label: role.name }));
    }, [roles]);
    if (error)
        throw error;
    if (fetching)
        return React.createElement(TextField, { label: props.label, autoComplete: "off", disabled: fetching });
    return (React.createElement(Autocomplete, { disablePortal: true, multiple: true, options: options, ...props, renderInput: (params) => React.createElement(TextField, { ...params, label: props.label }) }));
};
//# sourceMappingURL=MUIRolesCombobox.js.map