"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoEnumInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const useEnumInputController_js_1 = require("../../hooks/useEnumInputController.js");
const PolarisAutoEnumInput = (props) => {
    const { field: fieldApiIdentifier, control, ...comboboxProps } = props;
    const { allowMultiple, allowOther, onSelectionChange, selectedOptions, allOptions, filteredOptions, searchQuery, label, metadata, isError, errorMessage, } = (0, useEnumInputController_js_1.useEnumInputController)({ field: fieldApiIdentifier, control });
    const { value: searchValue, setValue: setSearchValue } = searchQuery;
    const selectedTagsElement = (0, react_1.useMemo)(() => allowMultiple && selectedOptions.length > 0 ? (react_1.default.createElement(polaris_1.InlineStack, { gap: "150" }, selectedOptions.map((tag) => (react_1.default.createElement(polaris_1.Tag, { key: `option-${tag}`, onRemove: () => onSelectionChange(tag) }, tag))))) : null, [allowMultiple, onSelectionChange, selectedOptions]);
    const optionItemElement = (0, react_1.useMemo)(() => {
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
            return (react_1.default.createElement("p", null,
                start,
                react_1.default.createElement(polaris_1.Text, { fontWeight: "bold", as: "span" }, highlight),
                end));
        };
        return filteredOptions.map((option) => {
            return (react_1.default.createElement(polaris_1.Listbox.Option, { key: option, value: option, selected: selectedOptions.includes(option), accessibilityLabel: option },
                react_1.default.createElement(polaris_1.Listbox.TextOption, { selected: selectedOptions.includes(option) }, formatOptionText(option))));
        });
    }, [allOptions.length, filteredOptions, searchValue, selectedOptions]);
    const addExtraOptionElement = (0, react_1.useMemo)(() => {
        if (!allowOther)
            return null;
        const noResults = searchValue && !allOptions.includes(searchValue);
        return noResults ? react_1.default.createElement(polaris_1.Listbox.Action, { value: searchValue }, `Add "${searchValue}"`) : null;
    }, [allOptions, allowOther, searchValue]);
    const emptyStateElement = (0, react_1.useMemo)(() => {
        if (allowOther || (optionItemElement && optionItemElement.length > 0) || !searchValue)
            return null;
        return react_1.default.createElement(polaris_1.EmptySearchResult, { title: "", description: `No  found matching "${searchValue}"` });
    }, [allowOther, optionItemElement, searchValue]);
    (0, react_1.useEffect)(() => {
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
    const listBoxElement = (0, react_1.useMemo)(() => optionItemElement || addExtraOptionElement || emptyStateElement ? (react_1.default.createElement(polaris_1.Listbox, { autoSelection: polaris_1.AutoSelection.None, onSelect: (selected) => {
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
    const inputLabel = (react_1.default.createElement(react_1.default.Fragment, null,
        label,
        " ",
        metadata.requiredArgumentForInput ? react_1.default.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
    return (react_1.default.createElement(polaris_1.Combobox, { ...comboboxProps, allowMultiple: allowMultiple, activator: react_1.default.createElement(polaris_1.Combobox.TextField, { autoComplete: "off", prefix: react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.SearchIcon }), label: inputLabel, value: searchValue, placeholder: "Search", verticalContent: selectedTagsElement, onChange: setSearchValue, id: `${props.field}-combobox-textfield`, error: isError, helpText: errorMessage }) }, listBoxElement));
};
exports.PolarisAutoEnumInput = PolarisAutoEnumInput;
//# sourceMappingURL=PolarisAutoEnumInput.js.map