"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoFormControl = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importDefault(require("react"));
const useActionForm_js_1 = require("../../../useActionForm.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const MUIAutoFormControl = (props) => {
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const { fieldState: { error }, } = (0, useActionForm_js_1.useController)({
        name: path,
    });
    return (react_1.default.createElement(material_1.FormControl, { ...metadata, error: !!error },
        react_1.default.createElement(material_1.FormGroup, null,
            react_1.default.createElement(material_1.FormControlLabel, { label: props.label ?? metadata.name, control: props.children })),
        error && react_1.default.createElement(material_1.FormHelperText, null, error?.message)));
};
exports.MUIAutoFormControl = MUIAutoFormControl;
//# sourceMappingURL=MUIAutoFormControl.js.map