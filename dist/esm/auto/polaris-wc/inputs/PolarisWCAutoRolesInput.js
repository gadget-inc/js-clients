import React, { useCallback, useMemo, useState } from "react";
import { autoInput } from "../../AutoInput.js";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
import { PolarisWCDismissibleBadge } from "../commonComponents/PolarisWCDismissibleBadge.js";
import { PolarisWCTruncatedTextWithTooltip } from "../commonComponents/PolarisWCTruncatedTextWithTooltip.js";
import { PolarisWCCombobox, PolarisWCComboboxOption } from "./PolarisWCCombobox.js";
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
export const PolarisWCAutoRolesInput = autoInput((props) => {
    const { disabled, placeholder } = props;
    const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = useRoleInputController(props);
    const [searchValue, setSearchValue] = useState("");
    if (rolesError) {
        throw rolesError;
    }
    if (fieldError) {
        throw fieldError;
    }
    const filteredOptions = useMemo(() => (options ?? []).filter((opt) => !searchValue || opt.label.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())), [options, searchValue]);
    const handleOptionClick = useCallback((roleKey) => {
        const next = new Set(selectedRoleKeys);
        if (next.has(roleKey)) {
            next.delete(roleKey);
        }
        else {
            next.add(roleKey);
        }
        fieldProps.onChange([...next]);
    }, [fieldProps.onChange, selectedRoleKeys]);
    const handleDismissBadge = useCallback((roleKey) => {
        fieldProps.onChange(selectedRoleKeys.filter((k) => k !== roleKey));
    }, [fieldProps.onChange, selectedRoleKeys]);
    const verticalContent = useMemo(() => {
        if (selectedRoleKeys.length === 0)
            return undefined;
        const selectedOptions = (options ?? []).filter((o) => selectedRoleKeys.includes(o.value));
        return (React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" } }, selectedOptions.map((opt) => (React.createElement("div", { key: opt.value, style: { maxWidth: "128px" } },
            React.createElement(PolarisWCDismissibleBadge, { onDismiss: () => handleDismissBadge(opt.value) },
                React.createElement(PolarisWCTruncatedTextWithTooltip, { text: opt.label })))))));
    }, [selectedRoleKeys, options, handleDismissBadge]);
    if (loading || !options || options.length === 0) {
        // Don't render until role options exist. There must always be at least one role option `unauthenticated`
        return null;
    }
    const label = typeof props.label === "string" ? props.label : String(metadata.name ?? "");
    return (React.createElement(React.Fragment, null,
        React.createElement(PolarisWCCombobox, { label: label, placeholder: placeholder ?? "Search roles...", value: searchValue, onChange: setSearchValue, allowMultiple: true, disabled: disabled, verticalContent: verticalContent },
            filteredOptions.map((opt) => (React.createElement(PolarisWCComboboxOption, { key: opt.value, text: opt.label, selected: selectedRoleKeys.includes(opt.value), multiselect: true, onClick: () => handleOptionClick(opt.value) }))),
            filteredOptions.length === 0 && React.createElement("div", { style: { padding: "8px 12px" } }, "No roles found"))));
});
//# sourceMappingURL=PolarisWCAutoRolesInput.js.map