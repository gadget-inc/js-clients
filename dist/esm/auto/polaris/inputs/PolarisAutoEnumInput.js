import { AutoSelection, Box, Combobox, InlineStack, Listbox, Tag, Text } from "@shopify/polaris";
import React, { useCallback } from "react";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
export const PolarisAutoEnumInput = (props) => {
    const { field: fieldApiIdentifier, control, ...comboboxProps } = props;
    const { allowMultiple, allowOther, onSelectionChange, selectedOptions, allOptions, filteredOptions, searchQuery, label, metadata, isError, errorMessage, } = useEnumInputController({ field: fieldApiIdentifier, control });
    const { value: searchValue, setValue: setSearchValue } = searchQuery;
    let selectedTagsElement = null;
    if (selectedOptions.length > 0) {
        selectedTagsElement = (React.createElement(InlineStack, { gap: "150" }, selectedOptions.map((tag) => (React.createElement(Tag, { key: `option-${tag}`, onRemove: () => onSelectionChange(tag) }, tag)))));
    }
    const formatOptionText = useCallback((option) => {
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
    }, [searchValue]);
    let optionItemElement = null;
    if (allOptions.length > 0) {
        optionItemElement = filteredOptions.map((option) => {
            return (React.createElement(Listbox.Option, { key: option, value: option, selected: selectedOptions.includes(option), accessibilityLabel: option },
                React.createElement(Listbox.TextOption, { selected: selectedOptions.includes(option) }, formatOptionText(option))));
        });
    }
    let addExtraOptionElement = null;
    if (allowOther && searchValue && !allOptions.includes(searchValue) && searchValue.trim().length > 0) {
        addExtraOptionElement = React.createElement(Listbox.Action, { value: searchValue }, `Add "${searchValue}"`);
    }
    let emptyStateElement = null;
    if (!allowOther && (!optionItemElement || optionItemElement.length === 0) && searchValue) {
        emptyStateElement = (React.createElement(Box, { padding: "100" },
            React.createElement(Text, { as: "span", alignment: "center", tone: "subdued" }, `No options found matching "${searchValue}"`)));
    }
    let listBoxElement = null;
    if (optionItemElement || addExtraOptionElement || emptyStateElement) {
        listBoxElement = (React.createElement(Listbox, { autoSelection: AutoSelection.None, onSelect: (selected) => {
                onSelectionChange(selected);
                if (allowMultiple) {
                    setSearchValue("");
                }
            } },
            emptyStateElement,
            addExtraOptionElement,
            optionItemElement));
    }
    const inputLabel = (React.createElement(React.Fragment, null,
        label,
        " ",
        metadata.requiredArgumentForInput ? React.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
    return (React.createElement(Combobox, { allowMultiple: allowMultiple, activator: React.createElement(Combobox.TextField, { autoComplete: "off", label: inputLabel, value: searchValue, placeholder: "Search", verticalContent: selectedTagsElement, onChange: setSearchValue, id: `${props.field}-combobox-textfield`, error: errorMessage }), ...comboboxProps }, listBoxElement));
};
//# sourceMappingURL=PolarisAutoEnumInput.js.map