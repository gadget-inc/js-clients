"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoSubmit = void 0;
const tslib_1 = require("tslib");
const lab_1 = require("@mui/lab");
const react_1 = tslib_1.__importDefault(require("react"));
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
    return (react_1.default.createElement(lab_1.LoadingButton, { type: "submit", ...props }, props.children ?? "Submit"));
};
exports.MUIAutoSubmit = MUIAutoSubmit;
//# sourceMappingURL=MUIAutoSubmit.js.map