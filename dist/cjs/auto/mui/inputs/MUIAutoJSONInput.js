"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoJSONInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useFocus_js_1 = require("../../../useFocus.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useJSONInputController_js_1 = require("../../hooks/useJSONInputController.js");
exports.MUIAutoJSONInput = (0, AutoInput_js_1.autoInput)((props) => {
    const [isFocused, focusProps] = (0, useFocus_js_1.useFocus)();
    const { field: _field, control: _control, ...restOfProps } = props;
    const { type: _type, errorMessage, ...controller } = (0, useJSONInputController_js_1.useJSONInputController)(props);
    const inErrorState = !isFocused && !!errorMessage;
    const label = props.label ?? controller.label;
    return (react_1.default.createElement(material_1.TextField, { multiline: true, maxRows: 4, inputProps: { style: { fontFamily: "monospace" } }, error: inErrorState, helperText: inErrorState && `Invalid JSON: ${errorMessage}`, ...controller, ...focusProps, ...restOfProps, label: label, onChange: (event) => controller.onChange(event.target.value) }));
});
//# sourceMappingURL=MUIAutoJSONInput.js.map