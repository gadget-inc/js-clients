"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoleInputController = void 0;
const react_1 = require("react");
const graphql_js_1 = require("../../internal/gql/graphql.js");
const metadata_js_1 = require("../../metadata.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const utils_js_1 = require("./utils.js");
const useRoleInputController = (props) => {
    const { field, control } = props;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(field);
    (0, utils_js_1.assertFieldType)({
        fieldApiIdentifier: field,
        actualFieldType: metadata.fieldType,
        expectedFieldType: graphql_js_1.GadgetFieldType.RoleAssignments,
    });
    const { field: fieldProps, fieldState: { error: fieldError }, } = (0, useActionForm_js_1.useController)({
        control,
        name: path,
    });
    const { roles, fetching, error: rolesError } = (0, metadata_js_1.useRolesMetadata)();
    const options = (0, react_1.useMemo)(() => {
        if (!roles)
            return [];
        return roles
            .filter((role) => !unselectableRoleKeys.includes(role.key))
            .map((role) => ({
            value: role.key,
            label: role.name,
        }));
    }, [roles]);
    const loading = fetching || options.length === 0; // There must always be at least one role option `unauthenticated`
    return {
        selectedRoleKeys: fieldProps.value ?? [],
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