"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoDateTimePicker = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const x_date_pickers_1 = require("@mui/x-date-pickers");
const react_1 = tslib_1.__importDefault(require("react"));
const dateTimeUtils_js_1 = require("../../../dateTimeUtils.js");
const useActionForm_js_1 = require("../../../useActionForm.js");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const MUIAutoDateTimePicker = (props) => {
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const config = metadata.configuration;
    const isRequired = metadata.requiredArgumentForInput;
    const label = (props.label ?? metadata.name) + (isRequired ? " *" : "");
    const { field: fieldProps, fieldState } = (0, useActionForm_js_1.useController)({ name: path });
    return (react_1.default.createElement(material_1.Box, { sx: { display: "flex" } },
        react_1.default.createElement(x_date_pickers_1.DatePicker, { label: label, slotProps: { textField: { error: !!fieldState.error, helperText: fieldState.error?.message } }, onChange: (newValue) => {
                props.onChange?.((0, dateTimeUtils_js_1.zonedTimeToUtc)(new Date(newValue ?? ""), localTz));
                fieldProps.onChange((0, dateTimeUtils_js_1.zonedTimeToUtc)(new Date(newValue ?? ""), localTz));
            } }),
        config.includeTime && (react_1.default.createElement(x_date_pickers_1.TimePicker, { onChange: (newValue) => {
                props.onChange?.((0, dateTimeUtils_js_1.zonedTimeToUtc)(new Date(newValue ?? ""), localTz));
                fieldProps.onChange((0, dateTimeUtils_js_1.zonedTimeToUtc)(new Date(newValue ?? ""), localTz));
            } }))));
};
exports.MUIAutoDateTimePicker = MUIAutoDateTimePicker;
exports.default = exports.MUIAutoDateTimePicker;
//# sourceMappingURL=MUIAutoDateTimePicker.js.map