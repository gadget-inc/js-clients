import React, { useCallback, useMemo } from "react";
import type { Control } from "../../../useActionForm.js";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoComboInput } from "./ShadcnAutoComboInput.js";
import { makeSelectedRecordTags } from "./relationships/SelectedRelatedRecordTags.js";

export interface EnumOption {
  label: string;
  value: string;
}

export type AutoRolesInputProps = {
  field: string; // Field API identifier
  control?: Control<any>;
  label?: string;
  options?: EnumOption[];
};

export const makeShadcnAutoRolesInput = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandInput,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
}: Pick<
  ShadcnElements,
  "Badge" | "Button" | "Command" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "CommandInput" | "Label" | "Checkbox"
>) => {
  const { SelectedRecordTags } = makeSelectedRecordTags({ Badge, Button });
  const ComboInput = makeShadcnAutoComboInput({
    Command,
    CommandInput,
    Label,
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandGroup,
    Checkbox,
  });

  function AutoRolesInput(props: AutoRolesInputProps) {
    const { field } = props;
    const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = useRoleInputController(props);

    const callOnChange = useCallback(
      (newValues: string[]) => {
        fieldProps.onChange(newValues);
      },
      [fieldProps]
    );

    const selectedValues = useMemo(
      () => (selectedRoleKeys ? (selectedRoleKeys.length > 0 ? selectedRoleKeys : [selectedRoleKeys]) : []),
      [selectedRoleKeys]
    );
    const selectedOptions = options.filter((option) => selectedValues.includes(option.value));

    const onSelect = (record: Record<string, any>) => {
      const existingValues = selectedOptions?.map((option) => option.value) ?? [];
      const newValues = existingValues.includes(record.value)
        ? existingValues.filter((value) => value !== record.value)
        : [...existingValues, record.value];
      callOnChange(newValues);
    };

    const roleOptions = useMemo(
      () =>
        options?.map((option) => ({
          id: option.value,
          label: option.label,
        })) ?? [],
      [options]
    );

    const recordOptions = useMemo(
      () =>
        options?.map((option) => ({
          id: option.value,
          label: option.label,
          value: option.value,
        })) ?? [],
      [options]
    );

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
      <ComboInput
        {...props}
        options={roleOptions}
        path={fieldProps.name}
        metadata={metadata}
        selectedRecordTag={
          <SelectedRecordTags
            selectedRecords={selectedOptions}
            optionLabel={"label"}
            onRemoveRecord={(option) => {
              onSelect({ value: option.value });
            }}
          />
        }
        {...getPropsWithoutRef(fieldProps)}
        onSelect={onSelect}
        isLoading={loading}
        checkSelected={(id) => {
          return selectedValues.includes(id);
        }}
        errorMessage={fieldError}
        allowMultiple={true}
        records={recordOptions}
      />
    );
  }

  return autoInput(AutoRolesInput);
};
