"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoPasswordInput = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importDefault(require("react"));
const usePasswordController_js_1 = require("../../../auto/hooks/usePasswordController.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const ShadcnAutoEncryptedStringInput_js_1 = require("./ShadcnAutoEncryptedStringInput.js");
function makeShadcnAutoPasswordInput({ Input, Label, Button }) {
    const EncryptedInput = (0, ShadcnAutoEncryptedStringInput_js_1.makeShadcnAutoEncryptedStringInput)({ Input, Label, Button });
    function ShadcnAutoPasswordInput(props) {
        const { isEditing, startEditing } = (0, usePasswordController_js_1.usePasswordController)(props);
        return (react_1.default.createElement(EncryptedInput, { ...props, ...(isEditing
                ? { placeholder: "Password" }
                : {
                    placeholder: usePasswordController_js_1.existingPasswordPlaceholder,
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