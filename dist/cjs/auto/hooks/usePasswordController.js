"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existingPasswordPlaceholder = exports.usePasswordController = void 0;
const react_1 = require("react");
const graphql_js_1 = require("../../internal/gql/graphql.js");
const useActionForm_js_1 = require("../../useActionForm.js");
const AutoFormContext_js_1 = require("../AutoFormContext.js");
const useFieldMetadata_js_1 = require("./useFieldMetadata.js");
const utils_js_1 = require("./utils.js");
const usePasswordController = (props) => {
    const { findBy } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    (0, utils_js_1.assertFieldType)({
        fieldApiIdentifier: props.field,
        actualFieldType: metadata.fieldType,
        expectedFieldType: graphql_js_1.GadgetFieldType.Password,
    });
    const { field: fieldProps } = (0, useActionForm_js_1.useController)({ name: path });
    const [isEditing, setIsEditing] = (0, react_1.useState)(!findBy);
    const onChange = (0, react_1.useCallback)((...args) => {
        fieldProps.onChange(...args);
        props.afterChange?.(...args);
    }, [fieldProps, props.afterChange]);
    const startEditing = (0, react_1.useCallback)(() => {
        onChange(""); // Touch the field to mark it as dirty
        setIsEditing(true);
    }, [onChange]);
    return {
        isEditing,
        startEditing,
        fieldProps: { ...fieldProps, onChange },
    };
};
exports.usePasswordController = usePasswordController;
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
exports.existingPasswordPlaceholder = "********";
//# sourceMappingURL=usePasswordController.js.map