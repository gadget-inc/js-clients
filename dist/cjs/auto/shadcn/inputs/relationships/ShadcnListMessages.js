"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnListMessages = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_js_1 = require("../../../../utils.js");
const makeShadcnListMessages = ({ CommandEmpty, CommandItem, Checkbox, Label, }) => {
    function NoRecordsMessage(props) {
        const { message = "No records found" } = props;
        return react_1.default.createElement(CommandEmpty, null, message);
    }
    function AddExtraOption(props) {
        const { message = "Add extra option", onSelect } = props;
        return (react_1.default.createElement(CommandItem, { onMouseDown: (e) => {
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
            return (react_1.default.createElement(CommandItem, { key: id, id: id, selected: selected, className: className, value: label, onMouseDown: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }, onSelect: () => {
                    onSelect?.(id);
                }, onKeyDown: (e) => {
                    if (e.key === "Enter") {
                        onSelect?.(id);
                    }
                } }, allowMultiple ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Checkbox, { id: id, checked: selected, onCheckedChange: (_state) => {
                        onSelect?.(id);
                    } }),
                react_1.default.createElement(Label, { htmlFor: id, className: "flex-1 ml-2" }, formatOptionText ? formatOptionText(label) : label))) : formatOptionText ? (formatOptionText(label)) : (label)));
        }
        return null;
    }
    return {
        NoRecordsMessage,
        ShadcnSelectableOption,
        getErrorMessage: utils_js_1.getErrorMessage,
        AddExtraOption,
    };
};
exports.makeShadcnListMessages = makeShadcnListMessages;
//# sourceMappingURL=ShadcnListMessages.js.map