"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoEnumInput = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const utils_js_1 = require("../../../utils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useEnumInputController_js_1 = require("../../hooks/useEnumInputController.js");
const ShadcnAutoComboInput_js_1 = require("./ShadcnAutoComboInput.js");
const makeShadcnAutoEnumInput = ({ Badge, Button, Command, CommandItem, CommandLoading, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, }) => {
    const ShadcnComboInput = (0, ShadcnAutoComboInput_js_1.makeShadcnAutoComboInput)({
        Command,
        CommandInput,
        CommandLoading,
        Label,
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
        ScrollArea,
    });
    function ShadcnAutoEnumInput(props) {
        const { field: fieldApiIdentifier, control, label: labelProp, ...comboboxProps } = props;
        const { allowMultiple, allowOther, onSelectionChange, selectedOptions, allOptions, filteredOptions, searchQuery, label, metadata, isError, errorMessage, } = (0, useEnumInputController_js_1.useEnumInputController)({ field: fieldApiIdentifier, control });
        const { value: searchValue, setValue: setSearchValue } = searchQuery;
        let selectedTagsElement = null;
        if (selectedOptions.length > 0) {
            selectedTagsElement = (react_1.default.createElement("div", { className: "flex flex-wrap gap-2" }, selectedOptions.map((tag) => (react_1.default.createElement(Badge, { key: `option-${tag}`, variant: "outline" },
                tag,
                react_1.default.createElement(Button, { variant: "ghost", size: "icon", "aria-label": `Remove ${tag}`, onClick: () => onSelectionChange(tag) },
                    react_1.default.createElement(lucide_react_1.XIcon, null)))))));
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
                react_1.default.createElement("span", { className: "font-bold" }, highlight),
                end));
        }, [searchValue]);
        const debouncedSearch = (0, react_1.useCallback)((0, utils_js_1.debounce)((value) => {
            setSearchValue(value);
        }, 400), [setSearchValue]);
        return (react_1.default.createElement(ShadcnComboInput, { ...props, options: filteredOptions.map((option) => ({ id: option, primary: option })), path: labelProp ?? label, metadata: metadata, label: labelProp ?? label, onChange: debouncedSearch, selectedRecordTag: selectedTagsElement, onSelect: (option) => {
                onSelectionChange(option.id);
            }, isLoading: false, checkSelected: (id) => {
                return selectedOptions.includes(id);
            }, id: `${props.field}-combobox-textfield`, errorMessage: errorMessage, allowMultiple: allowMultiple, records: [], allowOther: allowOther, onAddExtraOption: (value) => {
                onSelectionChange(value);
                setSearchValue("");
            }, formatOptionText: formatOptionText, emptyMessage: `No options found matching ` }));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoEnumInput);
};
exports.makeShadcnAutoEnumInput = makeShadcnAutoEnumInput;
//# sourceMappingURL=ShadcnAutoEnumInput.js.map