"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoEncryptedStringInput = void 0;
const tslib_1 = require("tslib");
const lucide_react_1 = require("lucide-react");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const ShadcnAutoStringInput_js_1 = require("./ShadcnAutoStringInput.js");
const makeShadcnAutoEncryptedStringInput = ({ Input, Label, Button }) => {
    const TextInput = (0, ShadcnAutoStringInput_js_1.makeShadcnAutoStringInput)({ Input, Label });
    function ShadcnAutoEncryptedStringInput(props) {
        const [isShown, setIsShown] = (0, react_1.useState)(false);
        const { suffix, ...restProps } = props;
        const showHideToggleButton = (react_1.default.createElement(Button, { variant: "ghost", size: "icon", type: "button", onClick: () => setIsShown(!isShown), className: "h-8 w-8", role: `${props.field}ToggleShowHideButton` }, isShown ? react_1.default.createElement(lucide_react_1.EyeOffIcon, { className: "h-4 w-4" }) : react_1.default.createElement(lucide_react_1.EyeIcon, { className: "h-4 w-4" })));
        return react_1.default.createElement(TextInput, { ...restProps, type: isShown ? "text" : "password", suffix: suffix ?? showHideToggleButton });
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoEncryptedStringInput);
};
exports.makeShadcnAutoEncryptedStringInput = makeShadcnAutoEncryptedStringInput;
//# sourceMappingURL=ShadcnAutoEncryptedStringInput.js.map