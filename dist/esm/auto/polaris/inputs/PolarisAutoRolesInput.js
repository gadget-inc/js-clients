import React from "react";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
import { PolarisFixedOptionsCombobox } from "../PolarisFixedOptionsCombobox.js";
export const PolarisAutoRolesInput = (props) => {
    const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = useRoleInputController(props);
    if (rolesError) {
        throw rolesError;
    }
    if (fieldError) {
        throw fieldError;
    }
    return (React.createElement(PolarisFixedOptionsCombobox, { options: options, allowMultiple: true, label: metadata.name, ...fieldProps, value: selectedRoleKeys, loading: loading }));
};
//# sourceMappingURL=PolarisAutoRolesInput.js.map