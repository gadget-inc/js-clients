"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoPasswordInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importStar(require("react"));
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
const MUIAutoEncryptedStringInput_js_1 = require("./MUIAutoEncryptedStringInput.js");
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";
const pencilEmoji = `✏️`;
const MUIAutoPasswordInput = (props) => {
    const { findBy } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const [isEditing, setIsEditing] = (0, react_1.useState)(!findBy);
    const startEditingButton = (react_1.default.createElement(material_1.IconButton, { onClick: () => setIsEditing(true), role: `${props.field}EditPasswordButton` }, pencilEmoji));
    return (react_1.default.createElement(MUIAutoEncryptedStringInput_js_1.MUIAutoEncryptedStringInput, { ...(isEditing
            ? { placeholder: "Password" }
            : {
                InputProps: { endAdornment: startEditingButton },
                placeholder: existingPasswordPlaceholder,
                disabled: true,
            }), ...props }));
};
exports.MUIAutoPasswordInput = MUIAutoPasswordInput;
//# sourceMappingURL=MUIAutoPasswordInput.js.map