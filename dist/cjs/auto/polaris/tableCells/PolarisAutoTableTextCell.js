"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableTextCell = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const PolarisAutoTableTextCell = (props) => {
    const { value } = props;
    const stringifiedValue = typeof value === "object" ? ("markdown" in value ? value.markdown : JSON.stringify(value)) : value;
    return (react_1.default.createElement(polaris_1.Text, { as: "span", truncate: true }, stringifiedValue));
};
exports.PolarisAutoTableTextCell = PolarisAutoTableTextCell;
//# sourceMappingURL=PolarisAutoTableTextCell.js.map