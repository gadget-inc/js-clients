import React from "react";
import { getErrorMessage } from "../../../../utils.js";
export const makeShadcnListMessages = ({ CommandEmpty, CommandItem, Checkbox, Label, }) => {
    function NoRecordsMessage(props) {
        const { message = "No records found" } = props;
        return React.createElement(CommandEmpty, null, message);
    }
    function AddExtraOption(props) {
        const { message = "Add extra option", onSelect } = props;
        return (React.createElement(CommandItem, { onMouseDown: (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, onKeyDown: (e) => {
                if (e.key === "Enter") {
                    onSelect?.();
                }
            }, onSelect: () => {
                onSelect?.();
            } }, message));
    }
    function ShadcnSelectableOption(props) {
        const { label, id, selected, onSelect, allowMultiple, formatOptionText } = props;
        const className = selected ? "bg-muted" : "";
        if (typeof label === "string") {
            return (React.createElement(CommandItem, { key: id, id: id, selected: selected, className: className, value: label, onMouseDown: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }, onSelect: () => {
                    onSelect?.(id);
                }, onKeyDown: (e) => {
                    if (e.key === "Enter") {
                        onSelect?.(id);
                    }
                } }, allowMultiple ? (React.createElement(React.Fragment, null,
                React.createElement(Checkbox, { id: id, checked: selected, onCheckedChange: (_state) => {
                        onSelect?.(id);
                    } }),
                React.createElement(Label, { htmlFor: id, className: "flex-1 ml-2" }, formatOptionText ? formatOptionText(label) : label))) : formatOptionText ? (formatOptionText(label)) : (label)));
        }
        return null;
    }
    return {
        NoRecordsMessage,
        ShadcnSelectableOption,
        getErrorMessage,
        AddExtraOption,
    };
};
//# sourceMappingURL=ShadcnListMessages.js.map