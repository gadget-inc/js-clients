"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoDateTimePicker = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const x_date_pickers_1 = require("@mui/x-date-pickers");
const date_fns_tz_1 = require("date-fns-tz");
const react_1 = tslib_1.__importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const MUIAutoDateTimePicker = (props) => {
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const { path, metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    const config = metadata.configuration;
    const { field: fieldProps } = (0, react_hook_form_1.useController)({
        name: path,
    });
    return (react_1.default.createElement(material_1.Box, { sx: { display: "flex" } },
        react_1.default.createElement(x_date_pickers_1.DatePicker, { label: metadata.name, onChange: (newValue) => {
                props.onChange?.((0, date_fns_tz_1.zonedTimeToUtc)(new Date(newValue ?? ""), localTz));
                fieldProps.onChange((0, date_fns_tz_1.zonedTimeToUtc)(new Date(newValue ?? ""), localTz));
            } }),
        config.includeTime && (react_1.default.createElement(x_date_pickers_1.TimePicker, { onChange: (newValue) => {
                props.onChange?.((0, date_fns_tz_1.zonedTimeToUtc)(new Date(newValue ?? ""), localTz));
                fieldProps.onChange((0, date_fns_tz_1.zonedTimeToUtc)(new Date(newValue ?? ""), localTz));
            } }))));
};
exports.MUIAutoDateTimePicker = MUIAutoDateTimePicker;
exports.default = exports.MUIAutoDateTimePicker;
//# sourceMappingURL=MUIAutoDateTimePicker.js.map