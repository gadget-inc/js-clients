"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoEnumInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useEnumInputController_js_1 = require("../../hooks/useEnumInputController.js");
exports.MUIAutoEnumInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { allowMultiple, selectedOptions, onSelectionChange, allOptions, label } = (0, useEnumInputController_js_1.useEnumInputController)(props);
    return (react_1.default.createElement(material_1.Autocomplete, { disablePortal: true, multiple: allowMultiple, options: allOptions, renderInput: (params) => react_1.default.createElement(material_1.TextField, { ...params, label: props.label ?? label }), value: allowMultiple ? selectedOptions : selectedOptions[0], onChange: (event, value) => {
            if (value === null || (Array.isArray(value) && value.length === 0)) {
                onSelectionChange(null);
                return;
            }
            if (typeof value === "string") {
                onSelectionChange(value);
            }
            else {
                for (const option of value) {
                    onSelectionChange(option);
                }
            }
        } }));
});
//# sourceMappingURL=MUIAutoEnumInput.js.map