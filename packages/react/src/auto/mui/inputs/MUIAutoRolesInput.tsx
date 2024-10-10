import type { AutocompleteProps } from "@mui/material";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
import { AutoRolesInputProps } from "../../shared/AutoInputTypes.js";

type MUIAutoRolesInputProps = AutoRolesInputProps & Partial<AutocompleteProps<{ id: string; label: string }, true, any, any>>;

/**
 * A role list input component for use within <AutoForm></AutoForm> components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoRolesInput field="roles" />
 * </AutoForm>
 * ```
 * @param props.field - The role list field API identifier
 * @param props.label - The label of the role list field
 * @returns The Polaris Auto Roles Input component
 */
export const MUIAutoRolesInput = (props: MUIAutoRolesInputProps) => {
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
};

const idLabelMapper = (option: { value: string; label: string }) => ({ id: option.value, label: option.label });
