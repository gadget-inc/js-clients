"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoTableDateTimeCell = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const dateTimeUtils_js_1 = require("../../../dateTimeUtils.js");
const PolarisWCAutoTableTextCell_js_1 = require("./PolarisWCAutoTableTextCell.js");
const PolarisWCAutoTableDateTimeCell = (props) => {
    const { value, includeTime } = props;
    return value instanceof Date ? react_1.default.createElement(PolarisWCAutoTableTextCell_js_1.PolarisWCAutoTableTextCell, { value: (0, dateTimeUtils_js_1.formatLongDateTimeString)(value, includeTime) }) : null;
};
exports.PolarisWCAutoTableDateTimeCell = PolarisWCAutoTableDateTimeCell;
//# sourceMappingURL=PolarisWCAutoTableDateTimeCell.js.map