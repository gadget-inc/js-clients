"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoPasswordInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const usePasswordController_js_1 = require("../../hooks/usePasswordController.js");
const PolarisWCAutoEncryptedStringInput_js_1 = require("./PolarisWCAutoEncryptedStringInput.js");
/**
 * A password input within AutoForm using Polaris Web Components.
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
exports.PolarisWCAutoPasswordInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { isEditing, startEditing } = (0, usePasswordController_js_1.usePasswordController)(props);
    if (!isEditing) {
        return (react_1.default.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: "8px" } },
            react_1.default.createElement(PolarisWCAutoEncryptedStringInput_js_1.PolarisWCAutoEncryptedStringInput, { ...props, placeholder: usePasswordController_js_1.existingPasswordPlaceholder, disabled: true }),
            react_1.default.createElement("div", { style: { marginBottom: "2px" } },
                react_1.default.createElement("s-button", { variant: "tertiary", onClick: startEditing, icon: "edit", role: `${props.field}EditPasswordButton` }))));
    }
    return react_1.default.createElement(PolarisWCAutoEncryptedStringInput_js_1.PolarisWCAutoEncryptedStringInput, { ...props, placeholder: "Password" });
});
//# sourceMappingURL=PolarisWCAutoPasswordInput.js.map