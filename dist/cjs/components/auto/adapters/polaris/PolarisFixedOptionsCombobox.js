"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisFixedOptionsCombobox = void 0;
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = __importStar(require("react"));
const PolarisFixedOptionsCombobox = (props) => {
    const { label, options: allOptions, value, onChange, allowMultiple, ...rest } = props;
    const selectedValues = (0, react_1.useMemo)(() => (value ? (allowMultiple ? value : [value]) : []), [allowMultiple, value]);
    const selectedOptions = allOptions.filter((option) => selectedValues.includes(option.value));
    const [inputValue, setInputValue] = (0, react_1.useState)(allowMultiple ? "" : selectedOptions[0]?.label ?? "");
    const [options, setOptions] = (0, react_1.useState)(props.options);
    const callOnChange = (0, react_1.useCallback)((newValues) => {
        onChange(allowMultiple ? newValues : newValues[0]);
    }, [allowMultiple, onChange]);
    const updateText = (0, react_1.useCallback)((value) => {
        setInputValue(value);
        if (value === "") {
            setOptions(props.options);
            return;
        }
        const filterRegex = new RegExp(value, "i");
        const resultOptions = props.options.filter((option) => option.label.match(filterRegex));
        setOptions(resultOptions);
    }, [props.options]);
    const updateSelection = (0, react_1.useCallback)((selected) => {
        const selectedValue = selected.map((selectedItem) => {
            const matchedOption = options.find((option) => {
                return option.value.match(selectedItem);
            });
            return matchedOption && matchedOption.value;
        });
        callOnChange(selected);
        if (!allowMultiple) {
            setInputValue(selectedValue[0] || "");
        }
    }, [callOnChange, options]);
    const removeOption = (0, react_1.useCallback)((value) => () => {
        const options = [...selectedValues];
        options.splice(options.indexOf(value), 1);
        callOnChange(options);
    }, [callOnChange, selectedValues]);
    const verticalContentMarkup = selectedOptions.length > 0 && props.allowMultiple ? (react_1.default.createElement(polaris_1.HorizontalStack, { gap: "2" }, selectedOptions.map((option) => {
        return (react_1.default.createElement(polaris_1.Tag, { key: `option-${option.value}`, onRemove: removeOption(option.value) }, option.label));
    }))) : null;
    const textField = (react_1.default.createElement(polaris_1.Autocomplete.TextField, { onChange: updateText, label: label, value: inputValue, prefix: allowMultiple ? undefined : react_1.default.createElement(polaris_1.Icon, { source: polaris_icons_1.SearchMinor, color: "base" }), verticalContent: verticalContentMarkup, placeholder: "Search", autoComplete: "off" }));
    return (react_1.default.createElement(polaris_1.Autocomplete, { options: options, ...rest, selected: selectedValues, onSelect: updateSelection, textField: textField, allowMultiple: allowMultiple }));
};
exports.PolarisFixedOptionsCombobox = PolarisFixedOptionsCombobox;
//# sourceMappingURL=PolarisFixedOptionsCombobox.js.map