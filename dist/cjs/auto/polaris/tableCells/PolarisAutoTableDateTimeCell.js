"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableDateTimeCell = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const dateTimeUtils_js_1 = require("../../../dateTimeUtils.js");
const PolarisAutoTableTextCell_js_1 = require("./PolarisAutoTableTextCell.js");
const PolarisAutoTableDateTimeCell = (props) => {
    const { value, includeTime } = props;
    return value instanceof Date ? react_1.default.createElement(PolarisAutoTableTextCell_js_1.PolarisAutoTableTextCell, { value: (0, dateTimeUtils_js_1.formatLongDateTimeString)(value, includeTime) }) : null;
};
exports.PolarisAutoTableDateTimeCell = PolarisAutoTableDateTimeCell;
//# sourceMappingURL=PolarisAutoTableDateTimeCell.js.map