"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoPasswordInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const PolarisAutoEncryptedStringInput_js_1 = require("./PolarisAutoEncryptedStringInput.js");
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";
const PolarisAutoPasswordInput = (props) => {
    const { findBy } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const { path } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { field: fieldProps } = (0, react_hook_form_1.useController)({ name: path });
    const [isEditing, setIsEditing] = (0, react_1.useState)(!findBy);
    const startEditing = () => {
        fieldProps.onChange(""); // Touch the field to mark it as dirty
        setIsEditing(true);
    };
    const startEditingButton = (react_1.default.createElement("div", { style: { display: "flex" } },
        react_1.default.createElement(polaris_1.Button, { variant: "plain", size: "slim", icon: polaris_icons_1.EditIcon, onClick: startEditing, role: `${props.field}EditPasswordButton` })));
    return (react_1.default.createElement(PolarisAutoEncryptedStringInput_js_1.PolarisAutoEncryptedStringInput, { ...(isEditing
            ? { placeholder: "Password" }
            : {
                placeholder: existingPasswordPlaceholder,
                suffix: startEditingButton,
                disabled: true,
            }), ...props }));
};
exports.PolarisAutoPasswordInput = PolarisAutoPasswordInput;
//# sourceMappingURL=PolarisAutoPasswordInput.js.map