"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoEncryptedStringInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const PolarisAutoTextInput_js_1 = require("./PolarisAutoTextInput.js");
/**
 * An encrypted string input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEncryptedStringInput field="encryptedStringField" />
 * </AutoForm>
 * ```
 * @param props.field - API identifier of the EncryptedString field.
 * @param props.label - Label of the EncryptedString input.
 * @returns The AutoEncryptedStringInput component.
 */
exports.PolarisAutoEncryptedStringInput = (0, AutoInput_js_1.autoInput)((props) => {
    const [isShown, setIsShown] = (0, react_1.useState)(false);
    const showHideToggleButton = (react_1.default.createElement("div", { style: { display: "flex" } },
        react_1.default.createElement(polaris_1.Button, { variant: "plain", size: "slim", icon: isShown ? polaris_icons_1.HideIcon : polaris_icons_1.ViewIcon, onClick: () => setIsShown(!isShown), role: `${props.field}ToggleShowHideButton` })));
    return react_1.default.createElement(PolarisAutoTextInput_js_1.PolarisAutoTextInput, { type: isShown ? "text" : "password", suffix: showHideToggleButton, ...props });
});
//# sourceMappingURL=PolarisAutoEncryptedStringInput.js.map