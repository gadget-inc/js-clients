import React, { useRef, useState } from "react";
import { makeRelatedModelOption } from "./relationships/RelatedModelOption.js";
export const makeShadcnAutoComboInput = ({ Command, CommandInput, Label, CommandItem, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
    const RelatedModelOption = makeRelatedModelOption({
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
        Label,
    });
    function ShadcnAutoComboInput(props) {
        const inputRef = useRef(null);
        const [open, setOpen] = useState(false);
        const [inputValue, setInputValue] = useState(props.defaultValue || "");
        const id = props.id || `${props.path}-input`;
        const inputLabel = props.label || props.metadata.name;
        const requiredIndicator = props.metadata.requiredArgumentForInput ? React.createElement("span", { className: "text-red-500" }, "*") : null;
        return (React.createElement("div", null,
            React.createElement(Label, { htmlFor: id },
                inputLabel,
                " ",
                requiredIndicator),
            React.createElement("div", { className: `relative ${open ? "ring-1 ring-ring rounded-md border" : "border rounded-md"}` },
                props.selectedRecordTag && React.createElement("div", { className: "py-2 px-2 pt-2 pb-1" }, props.selectedRecordTag),
                React.createElement(Command, { className: "overflow-visible z-50 h-[300px]" },
                    React.createElement(CommandInput, { name: props.path, ref: inputRef, id: id, value: inputValue, onValueChange: setInputValue, onBlur: () => setOpen(false), onFocus: () => setOpen(true), placeholder: "Search", className: "ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1" }),
                    React.createElement("div", { className: "relative" }, open && props.options.length > 0 ? (React.createElement("div", { className: "" },
                        React.createElement(RelatedModelOption, { onAddExtraOption: props.onAddExtraOption, isLoading: props.isLoading, errorMessage: props.errorMessage, options: props.options, records: props.records, onSelect: props.onSelect, checkSelected: props.checkSelected, allowMultiple: props.allowMultiple, renderOption: props.renderOption, allowOther: props.allowOther, searchValue: inputValue, setSearchValue: setInputValue, formatOptionText: props.formatOptionText, emptyMessage: props.emptyMessage ? `${props.emptyMessage} "${inputValue}"` : "" }))) : null)))));
    }
    return ShadcnAutoComboInput;
};
//# sourceMappingURL=ShadcnAutoComboInput.js.map