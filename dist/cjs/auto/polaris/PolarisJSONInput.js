"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisJSONInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const useFocus_js_1 = require("../../useFocus.js");
const PolarisJSONInput = (props) => {
    const { value, onChange, ...rest } = props;
    const [json, setJSON] = (0, react_1.useState)(value);
    const [error, setError] = (0, react_1.useState)(false);
    const [string, setString] = (0, react_1.useState)(JSON.stringify(json, null, 2));
    const [isFocused, focusProps] = (0, useFocus_js_1.useFocus)();
    const onStringChange = (0, react_1.useCallback)((newString) => {
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
    return (react_1.default.createElement(polaris_1.TextField, { multiline: 4, monospaced: true, value: string, onChange: onStringChange, error: !isFocused && error && `Invalid JSON: ${error.message}`, ...focusProps, ...rest }));
};
exports.PolarisJSONInput = PolarisJSONInput;
//# sourceMappingURL=PolarisJSONInput.js.map