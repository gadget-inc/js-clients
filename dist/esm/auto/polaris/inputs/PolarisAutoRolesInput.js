import React from "react";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
import { PolarisFixedOptionsCombobox } from "../PolarisFixedOptionsCombobox.js";
/**
 * A RoleList selector within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoRolesInput field="roles" />
 * </AutoForm>
 * ```
 * @param props.field - The RoleList field API identifier.
 * @param props.label - Label of the RoleList selector.
 * @returns The AutoRolesInput component
 */
export const PolarisAutoRolesInput = autoInput((props) => {
    const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = useRoleInputController(props);
    if (rolesError) {
        throw rolesError;
    }
    if (fieldError) {
        throw fieldError;
    }
    if (loading || !options || options.length === 0) {
        // Don't render until role options exist. There must always be at least one role option `unauthenticated`
        return null;
    }
    return (React.createElement(PolarisFixedOptionsCombobox, { options: options, allowMultiple: true, label: props.label ?? metadata.name, ...getPropsWithoutRef(fieldProps), value: selectedRoleKeys, placeholder: props.placeholder }));
});
//# sourceMappingURL=PolarisAutoRolesInput.js.map