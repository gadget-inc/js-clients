"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoPasswordInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../../useActionForm.js");
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const MUIAutoEncryptedStringInput_js_1 = require("./MUIAutoEncryptedStringInput.js");
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";
const pencilEmoji = `✏️`;
exports.MUIAutoPasswordInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { findBy } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const { path } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { field: fieldProps } = (0, useActionForm_js_1.useController)({ name: path });
    const [isEditing, setIsEditing] = (0, react_1.useState)(!findBy);
    const startEditing = () => {
        fieldProps.onChange(""); // Touch the field to mark it as dirty
        setIsEditing(true);
    };
    const startEditingButton = (react_1.default.createElement(material_1.IconButton, { onClick: startEditing, role: `${props.field}EditPasswordButton` }, pencilEmoji));
    return (react_1.default.createElement(MUIAutoEncryptedStringInput_js_1.MUIAutoEncryptedStringInput, { ...(isEditing
            ? { placeholder: "Password" }
            : {
                InputProps: { endAdornment: startEditingButton },
                placeholder: existingPasswordPlaceholder,
                disabled: true,
            }), ...props }));
});
//# sourceMappingURL=MUIAutoPasswordInput.js.map