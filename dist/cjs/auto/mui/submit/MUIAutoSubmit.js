"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoSubmit = void 0;
const tslib_1 = require("tslib");
const lab_1 = require("@mui/lab");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoFormContext_js_1 = require("../../AutoFormContext.js");
/**
 * Button for submitting the AutoForm values
 *
 * The submission is handled by the `type="submit"` property on the LoadingButton component
 * Alternatively, the `submit` function from useAutoFormMetadata can be used to submit the form
 *
 * const { submit } = useAutoFormMetadata();
 *
 */
const MUIAutoSubmit = (props) => {
    const { submitResult } = (0, AutoFormContext_js_1.useAutoFormMetadata)();
    const isSubmitting = submitResult?.isSubmitting;
    return (react_1.default.createElement(lab_1.LoadingButton, { type: "submit", loading: isSubmitting, ...props }, props.children ?? "Submit"));
};
exports.MUIAutoSubmit = MUIAutoSubmit;
//# sourceMappingURL=MUIAutoSubmit.js.map