import { TextField } from "@shopify/polaris";
import React, { useMemo } from "react";
import { useRolesMetadata } from "../../metadata.js";
import { PolarisFixedOptionsCombobox } from "./PolarisFixedOptionsCombobox.js";
export const PolarisRolesCombobox = (props) => {
    const { roles, fetching, error } = useRolesMetadata();
    const options = useMemo(() => {
        if (!roles)
            return [];
        return roles.map((role) => ({ value: role.name, label: role.name }));
    }, [roles]);
    if (error)
        throw error;
    if (fetching)
        return React.createElement(TextField, { label: props.label, autoComplete: "off", disabled: fetching });
    return React.createElement(PolarisFixedOptionsCombobox, { options: options, allowMultiple: true, ...props });
};
//# sourceMappingURL=PolarisRolesCombobox.js.map