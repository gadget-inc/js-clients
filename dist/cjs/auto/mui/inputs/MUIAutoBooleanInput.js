"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoBooleanInput = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useActionForm_js_1 = require("../../../useActionForm.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const MUIAutoFormControl_js_1 = require("./MUIAutoFormControl.js");
const MUIAutoBooleanInput = (props) => {
    const { field: fieldApiIdentifier, label, control, ...rest } = props;
    const { path } = (0, useFieldMetadata_js_1.useFieldMetadata)(fieldApiIdentifier);
    const { field: fieldProps } = (0, useActionForm_js_1.useController)({
        control,
        name: path,
    });
    const { value: _value, ...restFieldProps } = fieldProps;
    return (react_1.default.createElement(MUIAutoFormControl_js_1.MUIAutoFormControl, { field: props.field, label: label },
        react_1.default.createElement(material_1.Checkbox, { ...restFieldProps, checked: fieldProps.value, ...rest })));
};
exports.MUIAutoBooleanInput = MUIAutoBooleanInput;
//# sourceMappingURL=MUIAutoBooleanInput.js.map