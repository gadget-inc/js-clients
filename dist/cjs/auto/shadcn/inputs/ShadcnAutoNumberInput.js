"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoNumberInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_js_1 = require("../../../utils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const ShadcnAutoTextInput_js_1 = require("./ShadcnAutoTextInput.js");
const makeShadcnAutoNumberInput = ({ Input, Label }) => {
    const ShadcnAutoTextInput = (0, ShadcnAutoTextInput_js_1.makeShadcnAutoTextInput)({ Input, Label });
    function ShadcnAutoNumberInput(props) {
        const { field, control } = props;
        const { metadata, value } = (0, useStringInputController_js_1.useStringInputController)({ field, control });
        const step = metadata.configuration.__typename === "GadgetNumberConfig" && metadata.configuration.decimals && metadata.configuration.decimals > 0
            ? (0, utils_js_1.getStepFromNumberOfDecimals)(metadata.configuration.decimals)
            : value
                ? (0, utils_js_1.getStepFromNumberOfDecimals)((0, utils_js_1.countNumberOfDecimals)(`${value}`))
                : 1;
        return react_1.default.createElement(ShadcnAutoTextInput, { ...props, step: step, type: "number" });
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoNumberInput);
};
exports.makeShadcnAutoNumberInput = makeShadcnAutoNumberInput;
//# sourceMappingURL=ShadcnAutoNumberInput.js.map