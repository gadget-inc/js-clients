import { XIcon } from "lucide-react";
import React, { useCallback } from "react";
import { debounce } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
import { makeShadcnAutoComboInput } from "./ShadcnAutoComboInput.js";
export const makeShadcnAutoEnumInput = ({ Badge, Button, Checkbox, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Label, }) => {
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
    function ShadcnAutoEnumInput(props) {
        const { field: fieldApiIdentifier, control, label: labelProp, ...comboboxProps } = props;
        const { allowMultiple, allowOther, onSelectionChange, selectedOptions, allOptions, filteredOptions, searchQuery, label, path, metadata, isError, errorMessage, } = useEnumInputController({ field: fieldApiIdentifier, control });
        const { value: searchValue, setValue: setSearchValue } = searchQuery;
        let selectedTagsElement = null;
        if (selectedOptions.length > 0) {
            selectedTagsElement = (React.createElement("div", { className: "flex flex-wrap gap-2" }, selectedOptions.map((tag) => (React.createElement(Badge, { key: `option-${tag}`, variant: "outline" },
                tag,
                React.createElement(Button, { variant: "ghost", size: "icon", "aria-label": `Remove ${tag}`, onClick: () => onSelectionChange(tag) },
                    React.createElement(XIcon, null)))))));
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
                React.createElement("span", { className: "font-bold" }, highlight),
                end));
        }, [searchValue]);
        const debouncedSearch = useCallback(debounce((value) => {
            setSearchValue(value);
        }, 400), [setSearchValue]);
        return (React.createElement(ShadcnComboInput, { ...props, options: filteredOptions.map((option) => ({ id: option, primary: option })), path: path, metadata: metadata, label: labelProp ?? label, onChange: debouncedSearch, selectedRecordTag: selectedTagsElement, onSelect: (option) => {
                onSelectionChange(option.id);
            }, isLoading: false, checkSelected: (id) => {
                return selectedOptions.includes(id);
            }, id: `${props.field}-combobox-textfield`, errorMessage: errorMessage, allowMultiple: allowMultiple, records: [], allowOther: allowOther, onAddExtraOption: (value) => {
                onSelectionChange(value);
                setSearchValue("");
            }, formatOptionText: formatOptionText, emptyMessage: `No options found matching ` }));
    }
    return autoInput(ShadcnAutoEnumInput);
};
//# sourceMappingURL=ShadcnAutoEnumInput.js.map