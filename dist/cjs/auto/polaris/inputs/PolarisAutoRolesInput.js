"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoRolesInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_js_1 = require("../../../utils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useRoleInputController_js_1 = require("../../hooks/useRoleInputController.js");
const PolarisFixedOptionsCombobox_js_1 = require("../PolarisFixedOptionsCombobox.js");
/**
 * A RoleList selector within AutoForm.
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
exports.PolarisAutoRolesInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { options, loading, rolesError, fieldError, selectedRoleKeys, fieldProps, metadata } = (0, useRoleInputController_js_1.useRoleInputController)(props);
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
    return (react_1.default.createElement(PolarisFixedOptionsCombobox_js_1.PolarisFixedOptionsCombobox, { options: options, allowMultiple: true, label: props.label ?? metadata.name, ...(0, utils_js_1.getPropsWithoutRef)(fieldProps), value: selectedRoleKeys }));
});
//# sourceMappingURL=PolarisAutoRolesInput.js.map