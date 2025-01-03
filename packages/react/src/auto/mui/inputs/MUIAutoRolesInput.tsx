import type { AutocompleteProps } from "@mui/material";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";

export const MUIAutoRolesInput = autoInput(
  (
    props: {
      field: string; // Field API identifier
      control?: Control<any>;
      label?: string;
    } & Partial<AutocompleteProps<{ id: string; label: string }, true, any, any>>
  ) => {
    const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = useRoleInputController(props);

    if (rolesError) {
      throw rolesError;
    }
    if (fieldError) {
      throw fieldError;
    }

    const label = props.label ?? metadata.name;
    if (loading) {
      return <TextField label={label} autoComplete="off" disabled={loading} />;
    }

    return (
      <Autocomplete
        disablePortal
        id={`${label}_Autocomplete_Textfield`}
        multiple
        renderInput={(params) => <TextField {...params} label={label} />}
        renderOption={(optionAttributes, option) => (
          <li {...optionAttributes} data-listbox-option-value={option.id}>
            {option.label}
          </li>
        )}
        {...fieldProps}
        onChange={(_event, value) => {
          const uniqueSelectedRoleKeys = new Set(value.map((option) => (typeof option === "string" ? option : option.id)));
          fieldProps.onChange(Array.from(uniqueSelectedRoleKeys));
        }}
        value={options.filter((option) => selectedRoleKeys.includes(option.value)).map(idLabelMapper)}
        options={options.map(idLabelMapper)}
        {...props}
      />
    );
  }
);

const idLabelMapper = (option: { value: string; label: string }) => ({ id: option.value, label: option.label });
