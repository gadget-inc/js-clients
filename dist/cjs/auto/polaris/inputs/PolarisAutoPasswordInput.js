"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoPasswordInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
const PolarisAutoEncryptedStringInput_js_1 = require("./PolarisAutoEncryptedStringInput.js");
/**
 * The salted password hash is not retrieved from the DB
 * Regardless of the password is defined or not, this placeholder is shown as exposing an unset password is a security risk
 */
const existingPasswordPlaceholder = "********";
const PolarisAutoPasswordInput = (props) => {
    const { findBy } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const [isEditing, setIsEditing] = (0, react_1.useState)(!findBy);
    const startEditingButton = (react_1.default.createElement("div", { style: { display: "flex" } },
        react_1.default.createElement(polaris_1.Button, { variant: "plain", size: "slim", icon: polaris_icons_1.EditIcon, onClick: () => setIsEditing(true), role: `${props.field}EditPasswordButton` })));
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