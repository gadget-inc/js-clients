import { useEffect, useMemo, useState } from "react";
import { useController } from "react-hook-form";
import { useRolesMetadata } from "../../metadata.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
export const useRoleInputController = (props) => {
    const { field, control } = props;
    const { path, metadata } = useFieldMetadata(field);
    const { field: fieldProps, fieldState: { error: fieldError }, } = useController({
        control,
        name: path,
    });
    const [selectedRoleKeys, setSelectedRoleKeys] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            if (!fieldProps.value) {
                return;
            }
            const updatedRoleKeys = fieldProps.value.map((role) => {
                // When retrieved from an existing value, fieldProps.value is an array of {key:string, name:string} objects
                // In order to send the roles to the Gadget app, useController must have them as an array of string keys
                return typeof role === "string" ? role : role.key;
            });
            setSelectedRoleKeys(updatedRoleKeys);
            fieldProps.onChange(updatedRoleKeys);
        }, 5000);
    }, [JSON.stringify(fieldProps.value)]);
    const { roles, fetching, error: rolesError } = useRolesMetadata();
    const options = useMemo(() => {
        if (!roles)
            return [];
        return roles
            .filter((role) => !unselectableRoleKeys.includes(role.key))
            .map((role) => ({
            value: role.key,
            label: role.name,
            selected: selectedRoleKeys.includes(role.key),
        }));
    }, [roles]);
    const loading = fetching || options.length === 0; // There must always be at least one role option `unauthenticated`
    return {
        selectedRoleKeys,
        metadata,
        options,
        fieldProps,
        loading,
        rolesError,
        fieldError,
    };
};
const unselectableRoleKeys = ["sysadmin"];
//# sourceMappingURL=useRoleInputController.js.map