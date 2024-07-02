import React from "react";
import type { Control } from "react-hook-form";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
import { PolarisFixedOptionsCombobox, PolarisFixedOptionsMultiComboboxProps } from "../PolarisFixedOptionsCombobox.js";

export const PolarisAutoRolesInput = (
  props: {
    field: string; // Field API identifier
    control?: Control<any>;
  } & Partial<PolarisFixedOptionsMultiComboboxProps>
) => {
  const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = useRoleInputController(props);

  if (rolesError) {
    throw rolesError;
  }
  if (fieldError) {
    throw fieldError;
  }

  return (
    <PolarisFixedOptionsCombobox
      options={options}
      allowMultiple
      label={metadata.name}
      {...fieldProps}
      value={selectedRoleKeys}
      loading={loading}
    />
  );
};
