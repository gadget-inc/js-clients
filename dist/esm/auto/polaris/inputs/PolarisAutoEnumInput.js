import { AutoSelection, Combobox, EmptySearchResult, Icon, InlineStack, Listbox, Tag, Text } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React, { useEffect, useMemo } from "react";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
export const PolarisAutoEnumInput = (props) => {
    const { field: fieldApiIdentifier, control, ...comboboxProps } = props;
    const { allowMultiple, allowOther, onSelectionChange, selectedOptions, allOptions, filteredOptions, searchQuery, label, metadata, isError, errorMessage, } = useEnumInputController({ field: fieldApiIdentifier, control });
    const { value: searchValue, setValue: setSearchValue } = searchQuery;
    const selectedTagsElement = useMemo(() => allowMultiple && selectedOptions.length > 0 ? (React.createElement(InlineStack, { gap: "150" }, selectedOptions.map((tag) => (React.createElement(Tag, { key: `option-${tag}`, onRemove: () => onSelectionChange(tag) }, tag))))) : null, [allowMultiple, onSelectionChange, selectedOptions]);
    const optionItemElement = useMemo(() => {
        if (allOptions.length === 0)
            return null;
        const formatOptionText = (option) => {
            const trimValue = searchValue.trim().toLocaleLowerCase();
            const matchIndex = option.toLocaleLowerCase().indexOf(trimValue);
            if (!searchValue || matchIndex === -1)
                return option;
            const start = option.slice(0, matchIndex);
            const highlight = option.slice(matchIndex, matchIndex + trimValue.length);
            const end = option.slice(matchIndex + trimValue.length, option.length);
            return (React.createElement("p", null,
                start,
                React.createElement(Text, { fontWeight: "bold", as: "span" }, highlight),
                end));
        };
        return filteredOptions.map((option) => {
            return (React.createElement(Listbox.Option, { key: option, value: option, selected: selectedOptions.includes(option), accessibilityLabel: option },
                React.createElement(Listbox.TextOption, { selected: selectedOptions.includes(option) }, formatOptionText(option))));
        });
    }, [allOptions.length, filteredOptions, searchValue, selectedOptions]);
    const addExtraOptionElement = useMemo(() => {
        if (!allowOther)
            return null;
        const noResults = searchValue && !allOptions.includes(searchValue);
        return noResults ? React.createElement(Listbox.Action, { value: searchValue }, `Add "${searchValue}"`) : null;
    }, [allOptions, allowOther, searchValue]);
    const emptyStateElement = useMemo(() => {
        if (allowOther || (optionItemElement && optionItemElement.length > 0) || !searchValue)
            return null;
        return React.createElement(EmptySearchResult, { title: "", description: `No  found matching "${searchValue}"` });
    }, [allowOther, optionItemElement, searchValue]);
    useEffect(() => {
        if (allowMultiple) {
            setSearchValue("");
            return;
        }
        if (selectedOptions.length > 0) {
            // Set the search value to show the selected option in the input field
            setSearchValue(selectedOptions[0]);
        }
        else {
            setSearchValue("");
        }
    }, [allowMultiple, selectedOptions, setSearchValue]);
    const listBoxElement = useMemo(() => optionItemElement || addExtraOptionElement || emptyStateElement ? (React.createElement(Listbox, { autoSelection: AutoSelection.None, onSelect: (selected) => {
            onSelectionChange(selected);
            console.log("selectedOptions:", selectedOptions);
            if (allowMultiple) {
                setSearchValue("");
            }
            else if (selectedOptions.length > 0) {
                setSearchValue(selectedOptions[0]);
            }
        } },
        emptyStateElement,
        addExtraOptionElement,
        optionItemElement)) : null, [addExtraOptionElement, allowMultiple, emptyStateElement, onSelectionChange, optionItemElement, selectedOptions, setSearchValue]);
    const inputLabel = (React.createElement(React.Fragment, null,
        label,
        " ",
        metadata.requiredArgumentForInput ? React.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
    return (React.createElement(Combobox, { ...comboboxProps, allowMultiple: allowMultiple, activator: React.createElement(Combobox.TextField, { autoComplete: "off", prefix: React.createElement(Icon, { source: SearchIcon }), label: inputLabel, value: searchValue, placeholder: "Search", verticalContent: selectedTagsElement, onChange: setSearchValue, id: `${props.field}-combobox-textfield`, error: isError, helpText: errorMessage }) }, listBoxElement));
};
//# sourceMappingURL=PolarisAutoEnumInput.js.map