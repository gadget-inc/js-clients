"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoNumberInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_js_1 = require("../../../utils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const PolarisWCAutoTextInput_js_1 = require("./PolarisWCAutoTextInput.js");
/**
 * A number input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoNumberInput field="count" />
 * </AutoForm>
 * ```
 * @param props.field - The number field API identifier.
 * @param props.label - Label of the number input.
 * @returns The AutoNumberInput component
 */
exports.PolarisWCAutoNumberInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { textFieldProps, stringInputController } = (0, PolarisWCAutoTextInput_js_1.usePolarisWCTextInputProps)(props);
    const { type, metadata, value } = stringInputController;
    const step = type === "number" &&
        metadata.configuration.__typename === "GadgetNumberConfig" &&
        metadata.configuration.decimals &&
        metadata.configuration.decimals > 0
        ? (0, utils_js_1.getStepFromNumberOfDecimals)(metadata.configuration.decimals)
        : value
            ? (0, utils_js_1.getStepFromNumberOfDecimals)((0, utils_js_1.countNumberOfDecimals)(`${value}`))
            : 1;
    return (react_1.default.createElement("s-number-field", { id: stringInputController.id, step: step, ...textFieldProps, value: textFieldProps.value, placeholder: props.placeholder ?? textFieldProps.placeholder }));
});
//# sourceMappingURL=PolarisWCAutoNumberInput.js.map