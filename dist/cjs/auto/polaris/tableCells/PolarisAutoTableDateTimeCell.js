"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableDateTimeCell = void 0;
const tslib_1 = require("tslib");
const date_fns_1 = require("date-fns");
const react_1 = tslib_1.__importDefault(require("react"));
const PolarisAutoTableTextCell_js_1 = require("./PolarisAutoTableTextCell.js");
const PolarisAutoTableDateTimeCell = (props) => {
    const { value, includeTime } = props;
    const timeFormat = includeTime ? "LLL d, y K:mm a" : "LLL d, y";
    return value instanceof Date ? react_1.default.createElement(PolarisAutoTableTextCell_js_1.PolarisAutoTableTextCell, { value: (0, date_fns_1.format)(value, timeFormat) }) : null;
};
exports.PolarisAutoTableDateTimeCell = PolarisAutoTableDateTimeCell;
//# sourceMappingURL=PolarisAutoTableDateTimeCell.js.map