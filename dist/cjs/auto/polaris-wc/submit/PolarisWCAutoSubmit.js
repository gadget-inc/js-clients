"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoSubmit = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
/**
 * Button for submitting the AutoForm values using Polaris Web Components
 *
 * The submission is handled by the form's onSubmit handler
 * Alternatively, the `submit` function from useAutoFormMetadata can be used to submit the form
 *
 * const { submit } = useAutoFormMetadata();
 *
 */
const PolarisWCAutoSubmit = (props) => {
    const { submitResult } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const isSubmitting = submitResult.isSubmitting;
    const { children, isSubmitting: propsIsSubmitting, variant = "primary", tone, disabled, ...rest } = props;
    return (react_1.default.createElement("s-button", { type: "submit", loading: propsIsSubmitting ?? isSubmitting, variant: variant, tone: tone, disabled: disabled, ...rest }, children ?? "Submit"));
};
exports.PolarisWCAutoSubmit = PolarisWCAutoSubmit;
//# sourceMappingURL=PolarisWCAutoSubmit.js.map