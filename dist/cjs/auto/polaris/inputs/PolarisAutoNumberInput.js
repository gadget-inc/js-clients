"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoNumberInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const PolarisAutoTextInput_js_1 = require("./PolarisAutoTextInput.js");
const PolarisAutoNumberInput = (props) => {
    const { field, control } = props;
    const { type, metadata, value } = (0, useStringInputController_js_1.useStringInputController)({ field, control });
    const fieldType = type;
    const step = fieldType === "number" &&
        metadata.configuration.__typename === "GadgetNumberConfig" &&
        metadata.configuration.decimals &&
        metadata.configuration.decimals > 0
        ? getStepFromNumberOfDecimals(metadata.configuration.decimals)
        : value
            ? getStepFromNumberOfDecimals(countNumberOfDecimals(`${value}`))
            : 1;
    return react_1.default.createElement(PolarisAutoTextInput_js_1.PolarisAutoTextInput, { step: step, ...props });
};
exports.PolarisAutoNumberInput = PolarisAutoNumberInput;
const getStepFromNumberOfDecimals = (numberOfDecimals) => numberOfDecimals === 0 ? 1 : Number(`0.${"0".repeat(numberOfDecimals - 1)}1`);
const countNumberOfDecimals = (value) => {
    if (value.includes("e")) {
        // +e scientific notation for large numbers does not get decimal steps
        return 0;
    }
    const [, decimals] = value.split(".");
    return decimals?.length ?? 0;
};
//# sourceMappingURL=PolarisAutoNumberInput.js.map