"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoRolesInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useRoleInputController_js_1 = require("../../hooks/useRoleInputController.js");
const MUIAutoRolesInput = (props) => {
    const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = (0, useRoleInputController_js_1.useRoleInputController)(props);
    if (rolesError) {
        throw rolesError;
    }
    if (fieldError) {
        throw fieldError;
    }
    const label = metadata.name;
    if (loading) {
        return react_1.default.createElement(material_1.TextField, { label: label, autoComplete: "off", disabled: loading });
    }
    return (react_1.default.createElement(material_1.Autocomplete, { disablePortal: true, id: `${label}_Autocomplete_Textfield`, multiple: true, renderInput: (params) => react_1.default.createElement(material_1.TextField, { ...params, label: label }), renderOption: (optionAttributes, option) => (react_1.default.createElement("li", { ...optionAttributes, "data-listbox-option-value": option.id }, option.label)), ...fieldProps, onChange: (_event, value) => {
            const uniqueSelectedRoleKeys = new Set(value.map((option) => (typeof option === "string" ? option : option.id)));
            fieldProps.onChange(Array.from(uniqueSelectedRoleKeys));
        }, value: options.filter((option) => selectedRoleKeys.includes(option.value)).map(idLabelMapper), options: options.map(idLabelMapper), ...props }));
};
exports.MUIAutoRolesInput = MUIAutoRolesInput;
const idLabelMapper = (option) => ({ id: option.value, label: option.label });
//# sourceMappingURL=MUIAutoRolesInput.js.map