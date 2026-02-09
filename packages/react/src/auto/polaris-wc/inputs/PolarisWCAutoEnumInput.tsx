import React, { useCallback, useMemo } from "react";
import { autoInput } from "../../AutoInput.js";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
import { type AutoEnumInputProps } from "../../shared/AutoInputTypes.js";
import { PolarisWCDismissibleBadge } from "../commonComponents/PolarisWCDismissibleBadge.js";
import { PolarisWCTruncatedTextWithTooltip } from "../commonComponents/PolarisWCTruncatedTextWithTooltip.js";
import { PolarisWCCombobox, PolarisWCComboboxOption } from "./PolarisWCCombobox.js";

export type PolarisWCAutoEnumInputProps = AutoEnumInputProps & {
  placeholder?: string;
  disabled?: boolean;
};

/**
 * An enum option picker within AutoForm using Polaris Web Components.
 * Uses a searchable combobox for single or multiple selection.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEnumInput field="enumField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Enum field.
 * @param props.label - Label of the Enum input.
 * @returns The AutoEnumInput component.
 */
export const PolarisWCAutoEnumInput = autoInput((props: PolarisWCAutoEnumInputProps) => {
  const { label: labelProp, placeholder, disabled } = props;
  const { allowMultiple, allowOther, onSelectionChange, selectedOptions, filteredOptions, searchQuery, label, metadata, errorMessage } =
    useEnumInputController(props);

  // Ensure label is always a string
  const inputLabel: string = typeof labelProp === "string" ? labelProp : String(label ?? "");

  // Single select: show selected value in input when not searching; otherwise show search text
  const singleSelectInputValue = searchQuery.value !== "" ? searchQuery.value : selectedOptions[0] ?? "";

  const handleSingleInputChange = useCallback(
    (value: string) => {
      searchQuery.setValue(value);
      if (value === "" && selectedOptions[0]) {
        onSelectionChange(null);
      }
    },
    [searchQuery, selectedOptions, onSelectionChange]
  );

  const handleSingleOptionClick = useCallback(
    (option: string) => {
      onSelectionChange(option);
    },
    [onSelectionChange]
  );

  const handleMultiOptionClick = useCallback(
    (option: string) => {
      onSelectionChange(option);
    },
    [onSelectionChange]
  );

  const verticalContent = useMemo(() => {
    if (!allowMultiple || selectedOptions.length === 0) return undefined;
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" }}>
        {selectedOptions.map((value) => (
          <div style={{ maxWidth: "128px" }} key={value}>
            <PolarisWCDismissibleBadge key={value} onDismiss={() => onSelectionChange(value)}>
              <PolarisWCTruncatedTextWithTooltip text={value} />
            </PolarisWCDismissibleBadge>
          </div>
        ))}
      </div>
    );
  }, [allowMultiple, selectedOptions, onSelectionChange]);

  return (
    <PolarisWCCombobox
      id={`${metadata.apiIdentifier}-combobox-textfield`}
      label={inputLabel}
      placeholder={placeholder ?? "Search..."}
      value={allowMultiple ? searchQuery.value : singleSelectInputValue}
      onChange={allowMultiple ? searchQuery.setValue : handleSingleInputChange}
      allowMultiple={allowMultiple}
      required={metadata.requiredArgumentForInput}
      disabled={disabled}
      error={errorMessage}
      verticalContent={verticalContent}
    >
      {allowOther && searchQuery.value.trim() !== "" && !filteredOptions.includes(searchQuery.value.trim()) && (
        <PolarisWCComboboxOption
          key={`add-${searchQuery.value}`}
          text={`Add "${searchQuery.value.trim()}"`}
          selected={false}
          multiselect={false}
          onClick={() =>
            allowMultiple ? handleMultiOptionClick(searchQuery.value.trim()) : handleSingleOptionClick(searchQuery.value.trim())
          }
        />
      )}
      {filteredOptions.map((option) => (
        <PolarisWCComboboxOption
          key={option}
          text={option}
          selected={allowMultiple ? selectedOptions.includes(option) : selectedOptions[0] === option}
          multiselect={allowMultiple}
          onClick={() => (allowMultiple ? handleMultiOptionClick(option) : handleSingleOptionClick(option))}
        />
      ))}
      {filteredOptions.length === 0 && !(allowOther && searchQuery.value.trim() !== "") && <s-text>No results found</s-text>}
    </PolarisWCCombobox>
  );
});
