"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIJSONInput = void 0;
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const useFocus_js_1 = require("../../useFocus.js");
const MUIJSONInput = (props) => {
    const { value, onChange, ...rest } = props;
    const [json, setJSON] = (0, react_1.useState)(value);
    const [error, setError] = (0, react_1.useState)(false);
    const [string, setString] = (0, react_1.useState)(JSON.stringify(json, null, 2));
    const [isFocused, focusProps] = (0, useFocus_js_1.useFocus)();
    const onStringChange = (0, react_1.useCallback)((event) => {
        const newString = event.target.value;
        setString(newString);
        try {
            const newJSON = JSON.parse(newString);
            setJSON(newJSON);
            setError(false);
            onChange(newJSON);
        }
        catch (error) {
            setError(error);
        }
    }, [onChange]);
    const inErrorState = !isFocused && !!error;
    return (react_1.default.createElement(material_1.TextField, { multiline: true, maxRows: 4, inputProps: { style: { fontFamily: "monospace" } }, value: string, onChange: onStringChange, error: inErrorState, helperText: inErrorState && `Invalid JSON: ${error.message}`, ...focusProps, ...rest }));
};
exports.MUIJSONInput = MUIJSONInput;
//# sourceMappingURL=MUIJSONInput.js.map