import { useMemo } from "react";
import { GadgetFieldType } from "../../internal/gql/graphql.js";
import { useRolesMetadata } from "../../metadata.js";
import type { Control } from "../../useActionForm.js";
import { useController } from "../../useActionForm.js";
import { useFieldMetadata } from "./useFieldMetadata.js";
import { assertFieldType } from "./utils.js";

export const useRoleInputController = (props: {
  field: string; // Field API identifier
  control?: Control<any>;
}) => {
  const { field, control } = props;
  const { path, metadata } = useFieldMetadata(field);
  assertFieldType({
    fieldApiIdentifier: field,
    actualFieldType: metadata.fieldType,
    expectedFieldType: GadgetFieldType.RoleAssignments,
  });

  const {
    field: fieldProps,
    fieldState: { error: fieldError },
  } = useController({
    control,
    name: path,
  });

  const { roles, fetching, error: rolesError } = useRolesMetadata();

  const options = useMemo(() => {
    if (!roles) return [];
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
