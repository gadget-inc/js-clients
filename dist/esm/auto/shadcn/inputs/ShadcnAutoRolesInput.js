import React, { useCallback, useMemo } from "react";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useRoleInputController } from "../../hooks/useRoleInputController.js";
import { makeShadcnAutoComboInput } from "./ShadcnAutoComboInput.js";
import { makeSelectedRecordTags } from "./relationships/SelectedRelatedRecordTags.js";
export const makeShadcnAutoRolesInput = ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, CommandLoading, Input, Popover, PopoverContent, PopoverTrigger, }) => {
    const { SelectedRecordTags } = makeSelectedRecordTags({ Badge, Button });
    const ComboInput = makeShadcnAutoComboInput({
        Command,
        CommandInput,
        CommandLoading,
        Label,
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
        ScrollArea,
    });
    function AutoRolesInput(props) {
        const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = useRoleInputController(props);
        const callOnChange = useCallback((newValues) => {
            fieldProps.onChange(newValues);
        }, [fieldProps]);
        const selectedValues = useMemo(() => (selectedRoleKeys ? (selectedRoleKeys.length > 0 ? selectedRoleKeys : [selectedRoleKeys]) : []), [selectedRoleKeys]);
        const selectedOptions = options.filter((option) => selectedValues.includes(option.value));
        const onSelect = (record) => {
            const existingValues = selectedOptions?.map((option) => option.value) ?? [];
            const newValues = existingValues.includes(record.value)
                ? existingValues.filter((value) => value !== record.value)
                : [...existingValues, record.value];
            callOnChange(newValues);
        };
        const roleOptions = useMemo(() => options?.map((option) => ({
            id: option.value,
            primary: option.label,
        })) ?? [], [options]);
        const recordOptions = useMemo(() => options?.map((option) => ({
            id: option.value,
            primary: option.label,
            value: option.value,
        })) ?? [], [options]);
        if (rolesError) {
            throw rolesError;
        }
        if (fieldError) {
            throw fieldError;
        }
        if (loading || !options || options.length === 0) {
            // Don't render until role options exist. There must always be at least one role option `unauthenticated`
            return null;
        }
        return (React.createElement(ComboInput, { ...props, options: roleOptions, path: fieldProps.name, metadata: metadata, selectedRecordTag: React.createElement(SelectedRecordTags, { selectedRecords: selectedOptions, optionLabel: "label", onRemoveRecord: (option) => {
                    onSelect({ value: option.value });
                } }), ...getPropsWithoutRef(fieldProps), onSelect: onSelect, isLoading: loading, checkSelected: (id) => {
                return selectedValues.includes(id);
            }, errorMessage: fieldError, allowMultiple: true, records: recordOptions }));
    }
    return autoInput(AutoRolesInput);
};
//# sourceMappingURL=ShadcnAutoRolesInput.js.map