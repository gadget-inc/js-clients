"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoPasswordInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importDefault(require("react"));
const usePasswordController_js_1 = require("../../../auto/hooks/usePasswordController.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const PolarisAutoEncryptedStringInput_js_1 = require("./PolarisAutoEncryptedStringInput.js");
/**
 * A password input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoPasswordInput field="passwordFieldApiId" />
 * </AutoForm>
 * ```
 * @param props.field - The password field API identifier.
 * @param props.label - Label of the password input.
 * @returns The AutoPasswordInput component.
 */
exports.PolarisAutoPasswordInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { isEditing, startEditing } = (0, usePasswordController_js_1.usePasswordController)(props);
    const startEditingButton = (react_1.default.createElement("div", { style: { display: "flex" } },
        react_1.default.createElement(polaris_1.Button, { variant: "plain", size: "slim", icon: polaris_icons_1.EditIcon, onClick: startEditing, role: `${props.field}EditPasswordButton` })));
    return (react_1.default.createElement(PolarisAutoEncryptedStringInput_js_1.PolarisAutoEncryptedStringInput, { ...(isEditing
            ? { placeholder: "Password" }
            : {
                placeholder: usePasswordController_js_1.existingPasswordPlaceholder,
                suffix: startEditingButton,
                disabled: true,
            }), ...props }));
});
//# sourceMappingURL=PolarisAutoPasswordInput.js.map