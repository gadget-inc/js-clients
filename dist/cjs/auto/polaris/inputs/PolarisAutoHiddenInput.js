"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHiddenInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../AutoInput.js");
const useHiddenInput_js_1 = require("../../hooks/useHiddenInput.js");
/**
 * A hidden input within AutoForm. The value is included in form submission without rendering an input.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoHiddenInput field="fieldA" value="Value included in submission for fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of field.
 * @param props.value - The value included in form submission.
 * @returns The AutoHiddenInput component.
 */
exports.PolarisAutoHiddenInput = (0, AutoInput_js_1.autoInput)((props) => {
    const fieldProps = (0, useHiddenInput_js_1.useHiddenInput)(props);
    return react_1.default.createElement("input", { type: "hidden", ...fieldProps });
});
//# sourceMappingURL=PolarisAutoHiddenInput.js.map