"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoTableBooleanCell = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const polaris_icons_1 = require("@shopify/polaris-icons");
const react_1 = tslib_1.__importDefault(require("react"));
const PolarisAutoTableBooleanCell = (props) => {
    const { value } = props;
    return (react_1.default.createElement(polaris_1.InlineStack, { blockAlign: "center" }, value ? react_1.default.createElement(polaris_icons_1.CheckIcon, { width: 20 }) : react_1.default.createElement(polaris_icons_1.XIcon, { width: 20, fill: "var(--p-color-icon-disabled)" })));
};
exports.PolarisAutoTableBooleanCell = PolarisAutoTableBooleanCell;
//# sourceMappingURL=PolarisAutoTableBooleanCell.js.map