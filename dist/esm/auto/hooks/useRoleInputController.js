import { useMemo } from "react";
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
    const { roles, fetching, error: rolesError } = useRolesMetadata();
    const options = useMemo(() => {
        if (!roles)
            return [];
        return roles
            .filter((role) => !unselectableRoleKeys.includes(role.key))
            .map((role) => ({
            value: role.key,
            label: role.name,
        }));
    }, [roles]);
    const loading = fetching || options.length === 0; // There must always be at least one role option `unauthenticated`
    return {
        selectedRoleKeys: fieldProps.value ?? [],
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