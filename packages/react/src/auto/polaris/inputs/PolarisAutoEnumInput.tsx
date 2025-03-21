import type { ComboboxProps } from "@shopify/polaris";
import { AutoSelection, Box, Combobox, InlineStack, Listbox, Tag, Text } from "@shopify/polaris";
import React, { useCallback } from "react";
import { autoInput } from "../../AutoInput.js";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
import { type AutoEnumInputProps } from "../../shared/AutoInputTypes.js";

export type PolarisAutoEnumInputProps = AutoEnumInputProps & Partial<Omit<ComboboxProps, "allowMultiple">>;

/**
 * An enum option picker within AutoForm.
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
export const PolarisAutoEnumInput = autoInput((props: PolarisAutoEnumInputProps) => {
  const { field: fieldApiIdentifier, control, label: labelProp, ...comboboxProps } = props;
  const {
    allowMultiple,
    allowOther,
    onSelectionChange,
    selectedOptions,
    allOptions,
    filteredOptions,
    searchQuery,
    label,
    metadata,
    isError,
    errorMessage,
  } = useEnumInputController({ field: fieldApiIdentifier, control });
  const { value: searchValue, setValue: setSearchValue } = searchQuery;

  let selectedTagsElement = null;
  if (selectedOptions.length > 0) {
    selectedTagsElement = (
      <InlineStack gap="150">
        {selectedOptions.map((tag) => (
          <Tag key={`option-${tag}`} onRemove={() => onSelectionChange(tag)}>
            {tag}
          </Tag>
        ))}
      </InlineStack>
    );
  }

  const formatOptionText = useCallback(
    (option: string) => {
      const trimValue = searchValue.trim().toLocaleLowerCase();
      const matchIndex = option.toLocaleLowerCase().indexOf(trimValue);

      if (!searchValue || matchIndex === -1) return option;

      const start = option.slice(0, matchIndex);
      const highlight = option.slice(matchIndex, matchIndex + trimValue.length);
      const end = option.slice(matchIndex + trimValue.length, option.length);

      return (
        <p>
          {start}
          <Text fontWeight="bold" as="span">
            {highlight}
          </Text>
          {end}
        </p>
      );
    },
    [searchValue]
  );

  let optionItemElement = null;
  if (allOptions.length > 0) {
    optionItemElement = filteredOptions.map((option) => {
      return (
        <Listbox.Option key={option} value={option} selected={selectedOptions.includes(option)} accessibilityLabel={option}>
          <Listbox.TextOption selected={selectedOptions.includes(option)}>{formatOptionText(option)}</Listbox.TextOption>
        </Listbox.Option>
      );
    });
  }

  let addExtraOptionElement = null;
  if (allowOther && searchValue && !allOptions.includes(searchValue) && searchValue.trim().length > 0) {
    addExtraOptionElement = <Listbox.Action value={searchValue}>{`Add "${searchValue}"`}</Listbox.Action>;
  }

  let emptyStateElement = null;
  if (!allowOther && (!optionItemElement || optionItemElement.length === 0) && searchValue) {
    emptyStateElement = (
      <Box padding="100">
        <Text as="span" alignment="center" tone="subdued">{`No options found matching "${searchValue}"`}</Text>
      </Box>
    );
  }

  let listBoxElement = null;
  if (optionItemElement || addExtraOptionElement || emptyStateElement) {
    listBoxElement = (
      <Listbox
        autoSelection={AutoSelection.None}
        onSelect={(selected) => {
          onSelectionChange(selected);
          if (allowMultiple) {
            setSearchValue("");
          }
        }}
      >
        {emptyStateElement}
        {addExtraOptionElement}
        {optionItemElement}
      </Listbox>
    );
  }

  const inputLabel = (
    <>
      {labelProp ?? label} {metadata.requiredArgumentForInput ? <span style={{ color: "var(--p-color-text-critical)" }}>*</span> : null}
    </>
  );

  return (
    <Combobox
      allowMultiple={allowMultiple}
      activator={
        <Combobox.TextField
          autoComplete="off"
          label={inputLabel}
          value={searchValue}
          placeholder="Search"
          verticalContent={selectedTagsElement}
          onChange={setSearchValue}
          id={`${props.field}-combobox-textfield`}
          error={errorMessage}
        />
      }
      {...comboboxProps}
    >
      {listBoxElement}
    </Combobox>
  );
});
