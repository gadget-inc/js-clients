"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoEnumInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const useEnumInputController_js_1 = require("../../hooks/useEnumInputController.js");
const PolarisAutoEnumInput = (props) => {
    const { field: fieldApiIdentifier, control, label: labelProp, ...comboboxProps } = props;
    const { allowMultiple, allowOther, onSelectionChange, selectedOptions, allOptions, filteredOptions, searchQuery, label, metadata, isError, errorMessage, } = (0, useEnumInputController_js_1.useEnumInputController)({ field: fieldApiIdentifier, control });
    const { value: searchValue, setValue: setSearchValue } = searchQuery;
    let selectedTagsElement = null;
    if (selectedOptions.length > 0) {
        selectedTagsElement = (react_1.default.createElement(polaris_1.InlineStack, { gap: "150" }, selectedOptions.map((tag) => (react_1.default.createElement(polaris_1.Tag, { key: `option-${tag}`, onRemove: () => onSelectionChange(tag) }, tag)))));
    }
    const formatOptionText = (0, react_1.useCallback)((option) => {
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
    }, [searchValue]);
    let optionItemElement = null;
    if (allOptions.length > 0) {
        optionItemElement = filteredOptions.map((option) => {
            return (react_1.default.createElement(polaris_1.Listbox.Option, { key: option, value: option, selected: selectedOptions.includes(option), accessibilityLabel: option },
                react_1.default.createElement(polaris_1.Listbox.TextOption, { selected: selectedOptions.includes(option) }, formatOptionText(option))));
        });
    }
    let addExtraOptionElement = null;
    if (allowOther && searchValue && !allOptions.includes(searchValue) && searchValue.trim().length > 0) {
        addExtraOptionElement = react_1.default.createElement(polaris_1.Listbox.Action, { value: searchValue }, `Add "${searchValue}"`);
    }
    let emptyStateElement = null;
    if (!allowOther && (!optionItemElement || optionItemElement.length === 0) && searchValue) {
        emptyStateElement = (react_1.default.createElement(polaris_1.Box, { padding: "100" },
            react_1.default.createElement(polaris_1.Text, { as: "span", alignment: "center", tone: "subdued" }, `No options found matching "${searchValue}"`)));
    }
    let listBoxElement = null;
    if (optionItemElement || addExtraOptionElement || emptyStateElement) {
        listBoxElement = (react_1.default.createElement(polaris_1.Listbox, { autoSelection: polaris_1.AutoSelection.None, onSelect: (selected) => {
                onSelectionChange(selected);
                if (allowMultiple) {
                    setSearchValue("");
                }
            } },
            emptyStateElement,
            addExtraOptionElement,
            optionItemElement));
    }
    const inputLabel = (react_1.default.createElement(react_1.default.Fragment, null,
        labelProp ?? label,
        " ",
        metadata.requiredArgumentForInput ? react_1.default.createElement("span", { style: { color: "var(--p-color-text-critical)" } }, "*") : null));
    return (react_1.default.createElement(polaris_1.Combobox, { allowMultiple: allowMultiple, activator: react_1.default.createElement(polaris_1.Combobox.TextField, { autoComplete: "off", label: inputLabel, value: searchValue, placeholder: "Search", verticalContent: selectedTagsElement, onChange: setSearchValue, id: `${props.field}-combobox-textfield`, error: errorMessage }), ...comboboxProps }, listBoxElement));
};
exports.PolarisAutoEnumInput = PolarisAutoEnumInput;
//# sourceMappingURL=PolarisAutoEnumInput.js.map