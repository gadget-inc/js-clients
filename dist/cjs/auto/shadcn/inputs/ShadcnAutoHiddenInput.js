"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoHiddenInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useHiddenInput_js_1 = require("../../hooks/useHiddenInput.js");
const makeShadcnAutoHiddenInput = ({ Input }) => {
    function ShadcnAutoHiddenInput(props) {
        const fieldProps = (0, useHiddenInput_js_1.useHiddenInput)(props);
        return react_1.default.createElement(Input, { type: "hidden", ...fieldProps });
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoHiddenInput);
};
exports.makeShadcnAutoHiddenInput = makeShadcnAutoHiddenInput;
//# sourceMappingURL=ShadcnAutoHiddenInput.js.map