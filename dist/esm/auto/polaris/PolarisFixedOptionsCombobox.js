import { Autocomplete, InlineStack, Tag } from "@shopify/polaris";
import React, { useCallback, useMemo, useState } from "react";
export const PolarisFixedOptionsCombobox = (props) => {
    const { label, options: allOptions, value, onChange, allowMultiple, ...rest } = props;
    const selectedValues = useMemo(() => (value ? (allowMultiple ? value : [value]) : []), [allowMultiple, value]);
    const selectedOptions = allOptions.filter((option) => selectedValues.includes(option.value));
    const [inputValue, setInputValue] = useState(allowMultiple ? "" : selectedOptions[0]?.label ?? "");
    const [options, setOptions] = useState(props.options);
    const callOnChange = useCallback((newValues) => {
        onChange(allowMultiple ? newValues : newValues[0]);
    }, [allowMultiple, onChange]);
    const updateText = useCallback((value) => {
        setInputValue(value);
        if (value === "") {
            setOptions(props.options);
            return;
        }
        const filterRegex = new RegExp(value, "i");
        const resultOptions = props.options.filter((option) => option.label.match(filterRegex));
        setOptions(resultOptions);
    }, [props.options]);
    const updateSelection = useCallback((selected) => {
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
    }, [callOnChange, options]);
    const removeOption = useCallback((value) => () => {
        const options = [...selectedValues];
        options.splice(options.indexOf(value), 1);
        callOnChange(options);
    }, [callOnChange, selectedValues]);
    const verticalContentMarkup = selectedOptions.length > 0 && props.allowMultiple ? (React.createElement(InlineStack, { gap: "200" }, selectedOptions.map((option) => {
        return (React.createElement(Tag, { key: `option-${option.value}`, onRemove: removeOption(option.value) }, option.label));
    }))) : null;
    const textField = (React.createElement(Autocomplete.TextField, { onChange: updateText, label: label, value: inputValue, verticalContent: verticalContentMarkup, placeholder: "Search", autoComplete: "off", id: `${label}_Autocomplete_Textfield` }));
    return (React.createElement(Autocomplete, { options: options, ...rest, selected: selectedValues, onSelect: updateSelection, textField: textField, id: `${label}_Autocomplete`, allowMultiple: allowMultiple }));
};
//# sourceMappingURL=PolarisFixedOptionsCombobox.js.map