"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoTableTextCell = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const PolarisWCTruncatedTextWithTooltip_js_1 = require("../commonComponents/PolarisWCTruncatedTextWithTooltip.js");
const PolarisWCAutoTableTextCell = (props) => {
    const { value } = props;
    const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : value;
    return react_1.default.createElement(PolarisWCTruncatedTextWithTooltip_js_1.PolarisWCTruncatedTextWithTooltip, { text: stringifiedValue });
};
exports.PolarisWCAutoTableTextCell = PolarisWCAutoTableTextCell;
//# sourceMappingURL=PolarisWCAutoTableTextCell.js.map