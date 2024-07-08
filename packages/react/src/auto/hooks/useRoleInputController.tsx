import { useEffect, useMemo, useState } from "react";
import { Control, useController } from "react-hook-form";
import { useRolesMetadata } from "../../metadata.js";
import { useFieldMetadata } from "./useFieldMetadata.js";

export const useRoleInputController = (props: {
  field: string; // Field API identifier
  control?: Control<any>;
}) => {
  const { field, control } = props;
  const { path, metadata } = useFieldMetadata(field);

  const {
    field: fieldProps,
    fieldState: { error: fieldError },
  } = useController({
    control,
    name: path,
  });

  const [selectedRoleKeys, setSelectedRoleKeys] = useState<string[]>([]);

  useEffect(() => {
    if (!fieldProps.value) {
      return;
    }

    const updatedRoleKeys = fieldProps.value.map((role: string | { key: string }) => {
      // When retrieved from an existing value, fieldProps.value is an array of {key:string, name:string} objects
      // In order to send the roles to the Gadget app, useController must have them as an array of string keys
      return typeof role === "string" ? role : role.key;
    });
    setSelectedRoleKeys(updatedRoleKeys);
    fieldProps.onChange(updatedRoleKeys);
  }, [JSON.stringify(fieldProps.value)]);

  const { roles, fetching, error: rolesError } = useRolesMetadata();

  const options = useMemo(() => {
    if (!roles) return [];
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
