"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoBooleanInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const MUIAutoInput_js_1 = require("./MUIAutoInput.js");
const MUIAutoBooleanInput = (props) => {
    const { field: fieldApiIdentifier, control, ...rest } = props;
    const { path } = (0, useFieldMetadata_js_1.useFieldMetadata)(fieldApiIdentifier);
    const { field: fieldProps } = (0, react_hook_form_1.useController)({
        control,
        name: path,
    });
    const { value: _value, ...restFieldProps } = fieldProps;
    return (react_1.default.createElement(MUIAutoInput_js_1.MUIAutoFormControl, { field: props.field },
        react_1.default.createElement(material_1.Checkbox, { ...restFieldProps, checked: fieldProps.value, ...rest })));
};
exports.MUIAutoBooleanInput = MUIAutoBooleanInput;
//# sourceMappingURL=MUIAutoBooleanInput.js.map