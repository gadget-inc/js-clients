"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoEncryptedStringInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importStar(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const MUIAutoTextInput_js_1 = require("./MUIAutoTextInput.js");
exports.MUIAutoEncryptedStringInput = (0, AutoInput_js_1.autoInput)((props) => {
    const [isShown, setIsShown] = (0, react_1.useState)(false);
    const showHideToggleButton = react_1.default.createElement(material_1.IconButton, { onClick: () => setIsShown(!isShown) }, isShown ? `🔒` : `👁️`);
    return react_1.default.createElement(MUIAutoTextInput_js_1.MUIAutoTextInput, { InputProps: { endAdornment: showHideToggleButton }, type: isShown ? "text" : "password", ...props });
});
//# sourceMappingURL=MUIAutoEncryptedStringInput.js.map