import React, { useRef, useState } from "react";
import { useClickOutside } from "../../../useClickOutside.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
import { makeRelatedModelOption } from "./relationships/RelatedModelOption.js";
export const makeShadcnAutoComboInput = ({ Command, CommandInput, Label, CommandItem, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
    const { RelatedModelOption } = makeRelatedModelOption({
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
        Label,
    });
    function ShadcnAutoComboInput(props) {
        const inputRef = useRef(null);
        const outsideBoxRef = useRef(null);
        const [open, setOpen] = useState(false);
        const [inputValue, setInputValue] = useState(props.defaultValue || "");
        const id = props.id || `${props.path}-input`;
        const inputLabel = props.label || props.metadata.name;
        const requiredIndicator = props.metadata.requiredArgumentForInput ? React.createElement(ShadcnRequired, null, "*") : null;
        useClickOutside(outsideBoxRef, () => {
            if (open) {
                setOpen(false);
            }
        });
        return (React.createElement("div", { ref: outsideBoxRef },
            !props.hideLabel && (React.createElement(Label, { htmlFor: id },
                inputLabel,
                " ",
                requiredIndicator)),
            React.createElement("div", { className: `relative rounded-md border ${open ? "ring-1 ring-ring" : ""}` },
                props.selectedRecordTag && React.createElement("div", { className: "py-2 px-2 pt-2 pb-1" }, props.selectedRecordTag),
                React.createElement(Command, { className: "overflow-visible z-50" },
                    React.createElement(CommandInput, { name: props.path, ref: inputRef, "data-testid": id, value: inputValue, onValueChange: (value) => {
                            setInputValue(value);
                            props.onChange?.(value);
                        }, onFocus: () => setOpen(true), placeholder: props.placeholder, className: "ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1" }),
                    open && (React.createElement(React.Fragment, null,
                        React.createElement(RelatedModelOption, { onAddExtraOption: props.onAddExtraOption, isLoading: props.isLoading, errorMessage: props.errorMessage, options: props.options, records: props.records, actions: props.actions, onSelect: props.onSelect, checkSelected: props.checkSelected, allowMultiple: props.allowMultiple, renderOption: props.renderOption, allowOther: props.allowOther, searchValue: inputValue, setSearchValue: setInputValue, formatOptionText: props.formatOptionText, emptyMessage: props.emptyMessage, canLoadMore: props.willLoadMoreOptions, onLoadMore: props.onScrolledToBottom })))))));
    }
    return ShadcnAutoComboInput;
};
//# sourceMappingURL=ShadcnAutoComboInput.js.map