"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoComboInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const RelatedModelOption_js_1 = require("./relationships/RelatedModelOption.js");
const makeShadcnAutoComboInput = ({ Command, CommandInput, Label, CommandItem, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
    const RelatedModelOption = (0, RelatedModelOption_js_1.makeRelatedModelOption)({
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
        Label,
    });
    function ShadcnAutoComboInput(props) {
        const inputRef = (0, react_1.useRef)(null);
        const [open, setOpen] = (0, react_1.useState)(false);
        const [inputValue, setInputValue] = (0, react_1.useState)(props.defaultValue || "");
        const id = props.id || `${props.path}-input`;
        const inputLabel = props.label || props.metadata.name;
        const requiredIndicator = props.metadata.requiredArgumentForInput ? react_1.default.createElement("span", { className: "text-red-500" }, "*") : null;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Label, { htmlFor: id },
                inputLabel,
                " ",
                requiredIndicator),
            react_1.default.createElement("div", { className: `relative ${open ? "ring-1 ring-ring rounded-md border" : "border rounded-md"}` },
                props.selectedRecordTag && react_1.default.createElement("div", { className: "py-2 px-2 pt-2 pb-1" }, props.selectedRecordTag),
                react_1.default.createElement(Command, { className: "overflow-visible z-50 h-[300px]" },
                    react_1.default.createElement(CommandInput, { name: props.path, ref: inputRef, "data-testid": id, value: inputValue, onValueChange: setInputValue, onBlur: () => setOpen(false), onFocus: () => setOpen(true), placeholder: "Search", className: "ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1" }),
                    react_1.default.createElement("div", { className: "relative" }, open && props.options.length > 0 ? (react_1.default.createElement("div", { className: "" },
                        react_1.default.createElement(RelatedModelOption, { onAddExtraOption: props.onAddExtraOption, isLoading: props.isLoading, errorMessage: props.errorMessage, options: props.options, records: props.records, onSelect: props.onSelect, checkSelected: props.checkSelected, allowMultiple: props.allowMultiple, renderOption: props.renderOption, allowOther: props.allowOther, searchValue: inputValue, setSearchValue: setInputValue, formatOptionText: props.formatOptionText, emptyMessage: props.emptyMessage ? `${props.emptyMessage} "${inputValue}"` : "" }))) : null)))));
    }
    return ShadcnAutoComboInput;
};
exports.makeShadcnAutoComboInput = makeShadcnAutoComboInput;
//# sourceMappingURL=ShadcnAutoComboInput.js.map