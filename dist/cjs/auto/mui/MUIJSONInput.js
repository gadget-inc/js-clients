"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIJSONInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importStar(require("react"));
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