"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoRolesInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useRoleInputController_js_1 = require("../../hooks/useRoleInputController.js");
const PolarisWCDismissibleBadge_js_1 = require("../commonComponents/PolarisWCDismissibleBadge.js");
const PolarisWCTruncatedTextWithTooltip_js_1 = require("../commonComponents/PolarisWCTruncatedTextWithTooltip.js");
const PolarisWCCombobox_js_1 = require("./PolarisWCCombobox.js");
/**
 * A RoleList selector within AutoForm using Polaris Web Components.
 * Uses a searchable combobox for multiple role selection.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoRolesInput field="roles" />
 * </AutoForm>
 * ```
 * @param props.field - The RoleList field API identifier.
 * @param props.label - Label of the RoleList selector.
 * @returns The AutoRolesInput component
 */
exports.PolarisWCAutoRolesInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { disabled, placeholder } = props;
    const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = (0, useRoleInputController_js_1.useRoleInputController)(props);
    const [searchValue, setSearchValue] = (0, react_1.useState)("");
    if (rolesError) {
        throw rolesError;
    }
    if (fieldError) {
        throw fieldError;
    }
    const filteredOptions = (0, react_1.useMemo)(() => (options ?? []).filter((opt) => !searchValue || opt.label.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())), [options, searchValue]);
    const handleOptionClick = (0, react_1.useCallback)((roleKey) => {
        const next = new Set(selectedRoleKeys);
        if (next.has(roleKey)) {
            next.delete(roleKey);
        }
        else {
            next.add(roleKey);
        }
        fieldProps.onChange([...next]);
    }, [fieldProps.onChange, selectedRoleKeys]);
    const handleDismissBadge = (0, react_1.useCallback)((roleKey) => {
        fieldProps.onChange(selectedRoleKeys.filter((k) => k !== roleKey));
    }, [fieldProps.onChange, selectedRoleKeys]);
    const verticalContent = (0, react_1.useMemo)(() => {
        if (selectedRoleKeys.length === 0)
            return undefined;
        const selectedOptions = (options ?? []).filter((o) => selectedRoleKeys.includes(o.value));
        return (react_1.default.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" } }, selectedOptions.map((opt) => (react_1.default.createElement("div", { key: opt.value, style: { maxWidth: "128px" } },
            react_1.default.createElement(PolarisWCDismissibleBadge_js_1.PolarisWCDismissibleBadge, { onDismiss: () => handleDismissBadge(opt.value) },
                react_1.default.createElement(PolarisWCTruncatedTextWithTooltip_js_1.PolarisWCTruncatedTextWithTooltip, { text: opt.label })))))));
    }, [selectedRoleKeys, options, handleDismissBadge]);
    if (loading || !options || options.length === 0) {
        // Don't render until role options exist. There must always be at least one role option `unauthenticated`
        return null;
    }
    const label = typeof props.label === "string" ? props.label : String(metadata.name ?? "");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PolarisWCCombobox_js_1.PolarisWCCombobox, { label: label, placeholder: placeholder ?? "Search roles...", value: searchValue, onChange: setSearchValue, allowMultiple: true, disabled: disabled, verticalContent: verticalContent },
            filteredOptions.map((opt) => (react_1.default.createElement(PolarisWCCombobox_js_1.PolarisWCComboboxOption, { key: opt.value, text: opt.label, selected: selectedRoleKeys.includes(opt.value), multiselect: true, onClick: () => handleOptionClick(opt.value) }))),
            filteredOptions.length === 0 && react_1.default.createElement("div", { style: { padding: "8px 12px" } }, "No roles found"))));
});
//# sourceMappingURL=PolarisWCAutoRolesInput.js.map