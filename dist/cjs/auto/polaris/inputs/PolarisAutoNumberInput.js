"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoNumberInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_js_1 = require("../../../utils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const PolarisAutoTextInput_js_1 = require("./PolarisAutoTextInput.js");
exports.PolarisAutoNumberInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field, control } = props;
    const { type, metadata, value } = (0, useStringInputController_js_1.useStringInputController)({ field, control });
    const fieldType = type;
    const step = fieldType === "number" &&
        metadata.configuration.__typename === "GadgetNumberConfig" &&
        metadata.configuration.decimals &&
        metadata.configuration.decimals > 0
        ? (0, utils_js_1.getStepFromNumberOfDecimals)(metadata.configuration.decimals)
        : value
            ? (0, utils_js_1.getStepFromNumberOfDecimals)((0, utils_js_1.countNumberOfDecimals)(`${value}`))
            : 1;
    return react_1.default.createElement(PolarisAutoTextInput_js_1.PolarisAutoTextInput, { step: step, ...props });
});
//# sourceMappingURL=PolarisAutoNumberInput.js.map