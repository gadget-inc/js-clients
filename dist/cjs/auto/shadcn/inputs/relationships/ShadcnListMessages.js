"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnListMessages = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_js_1 = require("../../../../utils.js");
const makeShadcnListMessages = ({ CommandEmpty, CommandItem, Checkbox, Label, }) => {
    function NoRecordsMessage(props) {
        const { message = "No results" } = props;
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
        const className = `cursor-pointer ${selected ? "bg-muted" : ""}`;
        const labelElement = formatOptionText && typeof label === "string" ? formatOptionText(label) : label;
        return (react_1.default.createElement(CommandItem, { key: id, id: id, value: `${id}-${label}`, selected: selected, className: className, onMouseDown: (e) => {
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
            react_1.default.createElement(Label, { htmlFor: id, className: "flex-1 ml-2 cursor-pointer" }, labelElement))) : (react_1.default.createElement(react_1.default.Fragment, null,
            labelElement,
            selected && react_1.default.createElement(lucide_react_1.CheckIcon, { className: "ml-auto h-4 w-4" })))));
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