"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoPasswordInput = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const useActionForm_js_1 = require("../../../useActionForm.js");
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const ShadcnAutoEncryptedStringInput_js_1 = require("./ShadcnAutoEncryptedStringInput.js");
/**
 * The salted password hash is not retrieved from the DB.
 * Regardless of the password being defined or not, this placeholder is shown as exposing an unset password is a security risk.
 */
const existingPasswordPlaceholder = "********";
function makeShadcnAutoPasswordInput({ Input, Label, Button }) {
    const EncryptedInput = (0, ShadcnAutoEncryptedStringInput_js_1.makeShadcnAutoEncryptedStringInput)({ Input, Label, Button });
    function ShadcnAutoPasswordInput(props) {
        const { findBy } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
        const { path } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
        const { field: fieldProps } = (0, useActionForm_js_1.useController)({ name: path });
        const [isEditing, setIsEditing] = (0, react_1.useState)(!findBy);
        const startEditing = (0, react_1.useCallback)(() => {
            fieldProps.onChange(""); // Touch the field to mark it as dirty
            setIsEditing(true);
        }, [fieldProps]);
        return (react_1.default.createElement(EncryptedInput, { ...props, ...(isEditing
                ? { placeholder: "Password" }
                : {
                    placeholder: existingPasswordPlaceholder,
                    disabled: true,
                    className: "pr-20",
                    suffix: (react_1.default.createElement(Button, { variant: "ghost", size: "icon", type: "button", onClick: startEditing, className: "h-8 w-8", role: `${props.field}EditPasswordButton` },
                        react_1.default.createElement(lucide_react_1.PencilIcon, { className: "h-4 w-4" }))),
                }) }));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoPasswordInput);
}
exports.makeShadcnAutoPasswordInput = makeShadcnAutoPasswordInput;
//# sourceMappingURL=ShadcnAutoPasswordInput.js.map