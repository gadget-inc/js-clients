"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoComboInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useClickOutside_js_1 = require("../../../useClickOutside.js");
const useIntersectionObserver_js_1 = require("../../../useIntersectionObserver.js");
const ShadcnRequired_js_1 = require("../ShadcnRequired.js");
const RelatedModelOption_js_1 = require("./relationships/RelatedModelOption.js");
const makeShadcnAutoComboInput = ({ Command, CommandInput, Label, CommandItem, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
    const { RelatedModelOption } = (0, RelatedModelOption_js_1.makeRelatedModelOption)({
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
        Label,
    });
    function ShadcnAutoComboInput(props) {
        const inputRef = (0, react_1.useRef)(null);
        const outsideBoxRef = (0, react_1.useRef)(null);
        const sentinelRef = (0, useIntersectionObserver_js_1.useIntersectionObserver)(() => {
            props.onScrolledToBottom?.();
        }, outsideBoxRef, { threshold: 1.0 });
        const [open, setOpen] = (0, react_1.useState)(false);
        const [inputValue, setInputValue] = (0, react_1.useState)(props.defaultValue || "");
        const id = props.id || `${props.path}-input`;
        const inputLabel = props.label || props.metadata.name;
        const requiredIndicator = props.metadata.requiredArgumentForInput ? react_1.default.createElement(ShadcnRequired_js_1.ShadcnRequired, null, "*") : null;
        (0, useClickOutside_js_1.useClickOutside)(outsideBoxRef, () => {
            if (open) {
                setOpen(false);
            }
        });
        return (react_1.default.createElement("div", { ref: outsideBoxRef },
            !props.hideLabel && (react_1.default.createElement(Label, { htmlFor: id },
                inputLabel,
                " ",
                requiredIndicator)),
            react_1.default.createElement("div", { className: `relative ${open ? "ring-1 ring-ring rounded-md border" : "border rounded-md"}` },
                props.selectedRecordTag && react_1.default.createElement("div", { className: "py-2 px-2 pt-2 pb-1" }, props.selectedRecordTag),
                react_1.default.createElement(Command, { className: "overflow-visible z-50" },
                    react_1.default.createElement(CommandInput, { name: props.path, ref: inputRef, "data-testid": id, value: inputValue, onValueChange: (value) => {
                            setInputValue(value);
                            props.onChange?.(value);
                        }, onFocus: () => setOpen(true), placeholder: "Search", className: "ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1" }),
                    open && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(RelatedModelOption, { onAddExtraOption: props.onAddExtraOption, isLoading: props.isLoading, errorMessage: props.errorMessage, options: props.options, records: props.records, actions: props.actions, onSelect: props.onSelect, checkSelected: props.checkSelected, allowMultiple: props.allowMultiple, renderOption: props.renderOption, allowOther: props.allowOther, searchValue: inputValue, setSearchValue: setInputValue, formatOptionText: props.formatOptionText, emptyMessage: props.emptyMessage ? `${props.emptyMessage} "${inputValue}"` : undefined, loadMoreRef: props.willLoadMoreOptions ? sentinelRef : undefined })))))));
    }
    return ShadcnAutoComboInput;
};
exports.makeShadcnAutoComboInput = makeShadcnAutoComboInput;
//# sourceMappingURL=ShadcnAutoComboInput.js.map