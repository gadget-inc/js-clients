"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoEnumInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useEnumInputController_js_1 = require("../../hooks/useEnumInputController.js");
const PolarisWCDismissibleBadge_js_1 = require("../commonComponents/PolarisWCDismissibleBadge.js");
const PolarisWCTruncatedTextWithTooltip_js_1 = require("../commonComponents/PolarisWCTruncatedTextWithTooltip.js");
const PolarisWCCombobox_js_1 = require("./PolarisWCCombobox.js");
/**
 * An enum option picker within AutoForm using Polaris Web Components.
 * Uses a searchable combobox for single or multiple selection.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEnumInput field="enumField" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Enum field.
 * @param props.label - Label of the Enum input.
 * @returns The AutoEnumInput component.
 */
exports.PolarisWCAutoEnumInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { label: labelProp, placeholder, disabled } = props;
    const { allowMultiple, allowOther, onSelectionChange, selectedOptions, filteredOptions, searchQuery, label, metadata, errorMessage } = (0, useEnumInputController_js_1.useEnumInputController)(props);
    // Ensure label is always a string
    const inputLabel = typeof labelProp === "string" ? labelProp : String(label ?? "");
    // Single select: show selected value in input when not searching; otherwise show search text
    const singleSelectInputValue = searchQuery.value !== "" ? searchQuery.value : (selectedOptions[0] ?? "");
    const handleSingleInputChange = (0, react_1.useCallback)((value) => {
        searchQuery.setValue(value);
        if (value === "" && selectedOptions[0]) {
            onSelectionChange(null);
        }
    }, [searchQuery, selectedOptions, onSelectionChange]);
    const handleSingleOptionClick = (0, react_1.useCallback)((option) => {
        onSelectionChange(option);
    }, [onSelectionChange]);
    const handleMultiOptionClick = (0, react_1.useCallback)((option) => {
        onSelectionChange(option);
    }, [onSelectionChange]);
    const verticalContent = (0, react_1.useMemo)(() => {
        if (!allowMultiple || selectedOptions.length === 0)
            return undefined;
        return (react_1.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" } }, selectedOptions.map((value) => (react_1.default.createElement("div", { style: { maxWidth: "128px" }, key: value },
            react_1.default.createElement(PolarisWCDismissibleBadge_js_1.PolarisWCDismissibleBadge, { key: value, onDismiss: () => onSelectionChange(value) },
                react_1.default.createElement(PolarisWCTruncatedTextWithTooltip_js_1.PolarisWCTruncatedTextWithTooltip, { text: value })))))));
    }, [allowMultiple, selectedOptions, onSelectionChange]);
    return (react_1.default.createElement(PolarisWCCombobox_js_1.PolarisWCCombobox, { id: `${metadata.apiIdentifier}-combobox-textfield`, label: inputLabel, placeholder: placeholder ?? "Search...", value: allowMultiple ? searchQuery.value : singleSelectInputValue, onChange: allowMultiple ? searchQuery.setValue : handleSingleInputChange, allowMultiple: allowMultiple, required: metadata.requiredArgumentForInput, disabled: disabled, error: errorMessage, verticalContent: verticalContent },
        allowOther && searchQuery.value.trim() !== "" && !filteredOptions.includes(searchQuery.value.trim()) && (react_1.default.createElement(PolarisWCCombobox_js_1.PolarisWCComboboxOption, { key: `add-${searchQuery.value}`, text: `Add "${searchQuery.value.trim()}"`, selected: false, multiselect: false, onClick: () => allowMultiple ? handleMultiOptionClick(searchQuery.value.trim()) : handleSingleOptionClick(searchQuery.value.trim()) })),
        filteredOptions.map((option) => (react_1.default.createElement(PolarisWCCombobox_js_1.PolarisWCComboboxOption, { key: option, text: option, selected: allowMultiple ? selectedOptions.includes(option) : selectedOptions[0] === option, multiselect: allowMultiple, onClick: () => (allowMultiple ? handleMultiOptionClick(option) : handleSingleOptionClick(option)) }))),
        filteredOptions.length === 0 && !(allowOther && searchQuery.value.trim() !== "") && react_1.default.createElement("s-text", null, "No results found")));
});
//# sourceMappingURL=PolarisWCAutoEnumInput.js.map