"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoTableBooleanCell = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const PolarisWCAutoTableBooleanCell = (props) => {
    const { value } = props;
    return (react_1.default.createElement("s-stack", { direction: "inline", alignItems: "center" },
        react_1.default.createElement("s-icon", { type: value ? "check" : "x", tone: value ? "success" : "neutral" })));
};
exports.PolarisWCAutoTableBooleanCell = PolarisWCAutoTableBooleanCell;
//# sourceMappingURL=PolarisWCAutoTableBooleanCell.js.map