import type { AutocompleteProps } from "@shopify/polaris";
import { Autocomplete, InlineStack, Tag } from "@shopify/polaris";
import React, { useCallback, useMemo, useState, type ReactNode } from "react";

export interface EnumOption {
  /**
   * The label for the option
   */
  label: string;
  /**
   * The value for the option
   */
  value: string;
}

type BaseComboboxProps = Omit<AutocompleteProps, "selected" | "onSelect" | "textField"> & {
  /**
   * The label for the combobox
   */
  label?: ReactNode;

  /**
   * The selectable options in the combobox
   */
  options: EnumOption[];
};

export type PolarisFixedOptionsSingleComboboxProps = BaseComboboxProps & {
  /**
   * The selected value
   */
  value?: string;
  /**
   * Called with the new selected value on value change
   */
  onChange: (value: string) => void;
  /**
   * Indicates that the combobox does not allow multiple selections
   */
  allowMultiple?: false;
};

export type PolarisFixedOptionsMultiComboboxProps = BaseComboboxProps & {
  /**
   * The selected values
   */
  value?: string[];
  /**
   * Called with the new selected values on value change
   */
  onChange: (value: string[]) => void;
  /**
   * Indicates that the combobox allows multiple selections
   */
  allowMultiple: true;
};

export type PolarisFixedOptionsComboboxProps = PolarisFixedOptionsSingleComboboxProps | PolarisFixedOptionsMultiComboboxProps;

export const PolarisFixedOptionsCombobox = (props: PolarisFixedOptionsComboboxProps) => {
  const { label, options: allOptions, value, onChange, allowMultiple, ...rest } = props;
  const selectedValues = useMemo(() => (value ? (allowMultiple ? value : [value]) : []), [allowMultiple, value]);
  const selectedOptions = allOptions.filter((option) => selectedValues.includes(option.value));

  const [inputValue, setInputValue] = useState(allowMultiple ? "" : selectedOptions[0]?.label ?? "");
  const [options, setOptions] = useState(props.options);

  const callOnChange = useCallback(
    (newValues: string[]) => {
      onChange(allowMultiple ? newValues : (newValues[0] as any));
    },
    [allowMultiple, onChange]
  );

  const updateText = useCallback(
    (value: string) => {
      setInputValue(value);

      if (value === "") {
        setOptions(props.options);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = props.options.filter((option) => option.label.match(filterRegex));
      setOptions(resultOptions);
    },
    [props.options]
  );

  const updateSelection = useCallback(
    (selected: string[]) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.value;
      });

      callOnChange(selected);
      if (!allowMultiple) {
        setInputValue(selectedValue[0] || "");
      }
    },
    [callOnChange, options]
  );

  const removeOption = useCallback(
    (value: string) => () => {
      const options = [...selectedValues];
      options.splice(options.indexOf(value), 1);
      callOnChange(options);
    },
    [callOnChange, selectedValues]
  );

  const verticalContentMarkup =
    selectedOptions.length > 0 && props.allowMultiple ? (
      <InlineStack gap="200">
        {selectedOptions.map((option) => {
          return (
            <Tag key={`option-${option.value}`} onRemove={removeOption(option.value)}>
              {option.label}
            </Tag>
          );
        })}
      </InlineStack>
    ) : null;

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label={label}
      value={inputValue}
      verticalContent={verticalContentMarkup}
      placeholder="Search"
      autoComplete="off"
      id={`${label}_Autocomplete_Textfield`}
    />
  );

  return (
    <Autocomplete
      options={options}
      {...rest}
      selected={selectedValues}
      onSelect={updateSelection}
      textField={textField}
      id={`${label}_Autocomplete`}
      allowMultiple={allowMultiple}
    />
  );
};
