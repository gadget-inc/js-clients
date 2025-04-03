import React from "react";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
import { type AutoRolesInputProps } from "../../shared/AutoInputTypes.js";
import type { PolarisFixedOptionsMultiComboboxProps } from "../PolarisFixedOptionsCombobox.js";
import { PolarisFixedOptionsCombobox } from "../PolarisFixedOptionsCombobox.js";

type PolarisAutoRolesInputProps = AutoRolesInputProps &
  Partial<Omit<PolarisFixedOptionsMultiComboboxProps, "allowMultiple" | "value" | "onChange">>;

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
export const PolarisAutoRolesInput = autoInput((props: PolarisAutoRolesInputProps) => {
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

  return (
    <PolarisFixedOptionsCombobox
      options={options}
      allowMultiple
      label={props.label ?? metadata.name}
      {...getPropsWithoutRef(fieldProps)}
      value={selectedRoleKeys}
      placeholder={props.placeholder}
    />
  );
});
