import type { AutocompleteProps, TextFieldProps } from "@mui/material";
import { Autocomplete, TextField } from "@mui/material";
import React, { useMemo } from "react";
import { useRolesMetadata } from "../../../metadata.js";

export const MUIRolesCombobox = (
  props: Omit<AutocompleteProps<{ id: string; label: string }, true, any, any>, "multiple" | "options" | "renderInput"> & TextFieldProps
) => {
  const { roles, fetching, error } = useRolesMetadata();
  const options = useMemo(() => {
    if (!roles) return [];
    return roles.map((role) => ({ id: role.name, label: role.name }));
  }, [roles]);

  if (error) throw error;
  if (fetching) return <TextField label={props.label} autoComplete="off" disabled={fetching} />;

  return (
    <Autocomplete
      disablePortal
      multiple
      options={options}
      {...props}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};
