"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIDateTimePicker = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const x_date_pickers_1 = require("@mui/x-date-pickers");
const TimePicker_1 = require("@mui/x-date-pickers/TimePicker");
const react_1 = tslib_1.__importDefault(require("react"));
const useFieldMetadata_js_1 = require("../../hooks/useFieldMetadata.js");
const MUIDateTimePicker = (props) => {
    const { metadata } = (0, useFieldMetadata_js_1.useFieldMetadata)(props.field);
    return (react_1.default.createElement(material_1.Box, { sx: { display: "flex" } },
        react_1.default.createElement(x_date_pickers_1.DatePicker, { label: metadata.name }),
        react_1.default.createElement(TimePicker_1.TimePicker, null)));
};
exports.MUIDateTimePicker = MUIDateTimePicker;
exports.default = exports.MUIDateTimePicker;
//# sourceMappingURL=MUIDateTimePicker.js.map