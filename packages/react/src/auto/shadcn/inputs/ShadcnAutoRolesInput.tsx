import { default as React, useCallback, useMemo } from "react";
import { autoInput } from "../../AutoInput.js";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
import { type AutoRolesInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoComboInput } from "./ShadcnAutoComboInput.js";
import { makeSelectedRecordTags } from "./relationships/SelectedRelatedRecordTags.js";

export interface EnumOption {
  label: string;
  value: string;
}

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
  const ShadcnComboInput = makeShadcnAutoComboInput({
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
          primary: option.label,
        })) ?? [],
      [options]
    );

    const recordOptions = useMemo(
      () =>
        options?.map((option) => ({
          id: option.value,
          primary: option.label,
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
      <ShadcnComboInput
        {...props}
        options={roleOptions}
        path={fieldProps.name}
        metadata={metadata}
        selectedRecordTag={
          selectedOptions.length ? (
            <SelectedRecordTags
              selectedRecords={selectedOptions}
              optionLabel={"label"}
              onRemoveRecord={(option) => {
                onSelect({ value: option.value });
              }}
            />
          ) : null
        }
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
