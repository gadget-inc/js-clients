"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoleInputController = void 0;
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const metadata_js_1 = require("../../metadata.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const useRoleInputController = (props) => {
    const { field, control } = props;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    const { field: fieldProps, fieldState: { error: fieldError }, } = (0, react_hook_form_1.useController)({
        control,
        name: path,
    });
    const [selectedRoleKeys, setSelectedRoleKeys] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (!fieldProps.value) {
            return;
        }
        const updatedRoleKeys = fieldProps.value.map((role) => {
            // When retrieved from an existing value, fieldProps.value is an array of {key:string, name:string} objects
            // In order to send the roles to the Gadget app, useController must have them as an array of string keys
            return typeof role === "string" ? role : role.key;
        });
        setSelectedRoleKeys(updatedRoleKeys);
        fieldProps.onChange(updatedRoleKeys);
    }, [JSON.stringify(fieldProps.value)]);
    const { roles, fetching, error: rolesError } = (0, metadata_js_1.useRolesMetadata)();
    const options = (0, react_1.useMemo)(() => {
        if (!roles)
            return [];
        return roles
            .filter((role) => !unselectableRoleKeys.includes(role.key))
            .map((role) => ({
            value: role.key,
            label: role.name,
            selected: selectedRoleKeys.includes(role.key),
        }));
    }, [roles]);
    const loading = fetching || options.length === 0; // There must always be at least one role option `unauthenticated`
    return {
        selectedRoleKeys,
        metadata,
        options,
        fieldProps,
        loading,
        rolesError,
        fieldError,
    };
};
exports.useRoleInputController = useRoleInputController;
const unselectableRoleKeys = ["sysadmin"];
//# sourceMappingURL=useRoleInputController.js.map