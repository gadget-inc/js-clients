"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoTextInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
exports.MUIAutoTextInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field, control } = props;
    const stringInputController = (0, useStringInputController_js_1.useStringInputController)({ field, control });
    const isRequired = stringInputController.metadata.requiredArgumentForInput;
    const label = (props.label ?? stringInputController.label) + (isRequired ? " *" : "");
    return (react_1.default.createElement(material_1.TextField, { ...stringInputController, error: stringInputController.isError, helperText: stringInputController.errorMessage, ...props, label: label }));
});
//# sourceMappingURL=MUIAutoTextInput.js.map