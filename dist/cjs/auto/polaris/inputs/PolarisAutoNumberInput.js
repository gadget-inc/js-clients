"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoNumberInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const PolarisAutoTextInput_js_1 = require("./PolarisAutoTextInput.js");
const PolarisAutoNumberInput = (props) => {
    const { field, control } = props;
    const { type, metadata } = (0, useStringInputController_js_1.useStringInputController)({ field, control });
    const fieldType = type;
    let step;
    if (fieldType === "number" &&
        metadata.configuration.__typename === "GadgetNumberConfig" &&
        metadata.configuration.decimals &&
        metadata.configuration.decimals > 0) {
        step = Number(`0.${"0".repeat(metadata.configuration.decimals - 1)}1`);
    }
    else {
        step = "any";
    }
    return (react_1.default.createElement(PolarisAutoTextInput_js_1.PolarisAutoTextInput, { step: step, ...props }));
};
exports.PolarisAutoNumberInput = PolarisAutoNumberInput;
//# sourceMappingURL=PolarisAutoNumberInput.js.map