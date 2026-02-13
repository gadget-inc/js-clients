import React, { useCallback, useMemo, useState } from "react";
import { autoInput } from "../../AutoInput.js";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
import { type AutoRolesInputProps, type StringOnlyLabel } from "../../shared/AutoInputTypes.js";
import { PolarisWCDismissibleBadge } from "../commonComponents/PolarisWCDismissibleBadge.js";
import { PolarisWCTruncatedTextWithTooltip } from "../commonComponents/PolarisWCTruncatedTextWithTooltip.js";
import { PolarisWCCombobox, PolarisWCComboboxOption } from "./PolarisWCCombobox.js";

export type PolarisWCAutoRolesInputProps = StringOnlyLabel<AutoRolesInputProps> & {
  placeholder?: string;
  disabled?: boolean;
};

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
export const PolarisWCAutoRolesInput = autoInput((props: PolarisWCAutoRolesInputProps) => {
  const { disabled, placeholder } = props;
  const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = useRoleInputController(props);

  const [searchValue, setSearchValue] = useState("");

  if (rolesError) {
    throw rolesError;
  }
  if (fieldError) {
    throw fieldError;
  }

  const filteredOptions = useMemo(
    () => (options ?? []).filter((opt) => !searchValue || opt.label.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())),
    [options, searchValue]
  );

  const { onChange } = fieldProps;
  const handleOptionClick = useCallback(
    (roleKey: string) => {
      const next = new Set(selectedRoleKeys);
      if (next.has(roleKey)) {
        next.delete(roleKey);
      } else {
        next.add(roleKey);
      }
      onChange([...next]);
    },
    [onChange, selectedRoleKeys]
  );

  const handleDismissBadge = useCallback(
    (roleKey: string) => {
      onChange(selectedRoleKeys.filter((k: string) => k !== roleKey));
    },
    [onChange, selectedRoleKeys]
  );

  const verticalContent = useMemo(() => {
    if (selectedRoleKeys.length === 0) return undefined;
    const selectedOptions = (options ?? []).filter((o) => selectedRoleKeys.includes(o.value));
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" }}>
        {selectedOptions.map((opt) => (
          <div key={opt.value} style={{ maxWidth: "128px" }}>
            <PolarisWCDismissibleBadge onDismiss={() => handleDismissBadge(opt.value)}>
              <PolarisWCTruncatedTextWithTooltip text={opt.label} />
            </PolarisWCDismissibleBadge>
          </div>
        ))}
      </div>
    );
  }, [selectedRoleKeys, options, handleDismissBadge]);

  if (loading || !options || options.length === 0) {
    // Don't render until role options exist. There must always be at least one role option `unauthenticated`
    return null;
  }

  const label: string = typeof props.label === "string" ? props.label : String(metadata.name ?? "");

  return (
    <>
      <PolarisWCCombobox
        label={label}
        placeholder={placeholder ?? "Search roles..."}
        value={searchValue}
        onChange={setSearchValue}
        allowMultiple
        disabled={disabled}
        verticalContent={verticalContent}
      >
        {filteredOptions.map((opt) => (
          <PolarisWCComboboxOption
            key={opt.value}
            text={opt.label}
            selected={selectedRoleKeys.includes(opt.value)}
            multiselect
            onClick={() => handleOptionClick(opt.value)}
          />
        ))}
        {filteredOptions.length === 0 && <div style={{ padding: "8px 12px" }}>No roles found</div>}
      </PolarisWCCombobox>
    </>
  );
});
