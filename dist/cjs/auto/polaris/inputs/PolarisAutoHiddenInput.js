"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHiddenInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useHiddenInput_js_1 = require("../../hooks/useHiddenInput.js");
const PolarisAutoHiddenInput = (props) => {
    const fieldProps = (0, useHiddenInput_js_1.useHiddenInput)(props);
    return react_1.default.createElement("input", { type: "hidden", ...fieldProps });
};
exports.PolarisAutoHiddenInput = PolarisAutoHiddenInput;
//# sourceMappingURL=PolarisAutoHiddenInput.js.map