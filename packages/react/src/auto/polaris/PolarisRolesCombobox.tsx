import { TextField } from "@shopify/polaris";
import React, { useMemo } from "react";
import { useRolesMetadata } from "../../metadata.js";
import type { PolarisFixedOptionsMultiComboboxProps } from "./PolarisFixedOptionsCombobox";
import { PolarisFixedOptionsCombobox } from "./PolarisFixedOptionsCombobox.js";

export const PolarisRolesCombobox = (props: Omit<PolarisFixedOptionsMultiComboboxProps, "allowMultiple" | "options">) => {
  const { roles, fetching, error } = useRolesMetadata();
  const options = useMemo(() => {
    if (!roles) return [];
    return roles.map((role) => ({ value: role.name, label: role.name }));
  }, [roles]);

  if (error) throw error;
  if (fetching) return <TextField label={props.label} autoComplete="off" disabled={fetching} />;

  return <PolarisFixedOptionsCombobox options={options} allowMultiple {...props} />;
};
