import { CheckIcon } from "lucide-react";
import React from "react";
import { getErrorMessage } from "../../../../utils.js";
export const makeShadcnListMessages = ({ CommandEmpty, CommandItem, Checkbox, Label, }) => {
    function NoRecordsMessage(props) {
        const { message = "No results" } = props;
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
        const className = `cursor-pointer ${selected ? "bg-muted" : ""}`;
        const labelElement = formatOptionText && typeof label === "string" ? formatOptionText(label) : label;
        return (React.createElement(CommandItem, { key: id, id: id, value: `${id}-${label}`, selected: selected, className: className, onMouseDown: (e) => {
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
            React.createElement(Label, { htmlFor: id, className: "flex-1 ml-2 cursor-pointer" }, labelElement))) : (React.createElement(React.Fragment, null,
            labelElement,
            selected && React.createElement(CheckIcon, { className: "ml-auto h-4 w-4" })))));
    }
    return {
        NoRecordsMessage,
        ShadcnSelectableOption,
        getErrorMessage,
        AddExtraOption,
    };
};
//# sourceMappingURL=ShadcnListMessages.js.map