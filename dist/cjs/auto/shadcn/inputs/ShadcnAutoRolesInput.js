"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoRolesInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const utils_js_1 = require("../../../utils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useRoleInputController_js_1 = require("../../hooks/useRoleInputController.js");
const ShadcnAutoComboInput_js_1 = require("./ShadcnAutoComboInput.js");
const SelectedRelatedRecordTags_js_1 = require("./relationships/SelectedRelatedRecordTags.js");
const makeShadcnAutoRolesInput = ({ Badge, Button, Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }) => {
    const { SelectedRecordTags } = (0, SelectedRelatedRecordTags_js_1.makeSelectedRecordTags)({ Badge, Button });
    const ShadcnComboInput = (0, ShadcnAutoComboInput_js_1.makeShadcnAutoComboInput)({
        Command,
        CommandInput,
        Label,
        CommandItem,
        CommandList,
        CommandEmpty,
        CommandGroup,
        Checkbox,
    });
    function ShadcnAutoRolesInput(props) {
        const { field } = props;
        const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = (0, useRoleInputController_js_1.useRoleInputController)(props);
        const callOnChange = (0, react_1.useCallback)((newValues) => {
            fieldProps.onChange(newValues);
        }, [fieldProps]);
        const selectedValues = (0, react_1.useMemo)(() => (selectedRoleKeys ? (selectedRoleKeys.length > 0 ? selectedRoleKeys : [selectedRoleKeys]) : []), [selectedRoleKeys]);
        const selectedOptions = options.filter((option) => selectedValues.includes(option.value));
        const onSelect = (record) => {
            const existingValues = selectedOptions?.map((option) => option.value) ?? [];
            const newValues = existingValues.includes(record.value)
                ? existingValues.filter((value) => value !== record.value)
                : [...existingValues, record.value];
            callOnChange(newValues);
        };
        const roleOptions = (0, react_1.useMemo)(() => options?.map((option) => ({
            id: option.value,
            label: option.label,
        })) ?? [], [options]);
        const recordOptions = (0, react_1.useMemo)(() => options?.map((option) => ({
            id: option.value,
            label: option.label,
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
        return (react_1.default.createElement(ShadcnComboInput, { ...props, options: roleOptions, path: fieldProps.name, metadata: metadata, selectedRecordTag: react_1.default.createElement(SelectedRecordTags, { selectedRecords: selectedOptions, optionLabel: "label", onRemoveRecord: (option) => {
                    onSelect({ value: option.value });
                } }), ...(0, utils_js_1.getPropsWithoutRef)(fieldProps), onSelect: onSelect, isLoading: loading, checkSelected: (id) => {
                return selectedValues.includes(id);
            }, errorMessage: fieldError, allowMultiple: true, records: recordOptions }));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoRolesInput);
};
exports.makeShadcnAutoRolesInput = makeShadcnAutoRolesInput;
//# sourceMappingURL=ShadcnAutoRolesInput.js.map