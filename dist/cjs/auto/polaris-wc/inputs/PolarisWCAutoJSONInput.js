"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoJSONInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useFocus_js_1 = require("../../../useFocus.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useJSONInputController_js_1 = require("../../hooks/useJSONInputController.js");
/**
 * A JSON editor within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoJSONInput field="fieldA" label="Field A" />
 * </AutoForm>
 * ```
 * @param props.field - The JSON field API identifier.
 * @param props.label - Label of the JSON editor.
 * @returns The AutoJSONInput component
 */
exports.PolarisWCAutoJSONInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { placeholder, disabled, label: _label, ...restProps } = props;
    const [isFocused, focusProps] = (0, useFocus_js_1.useFocus)();
    const { type: _type, id, errorMessage, label: controllerLabel, metadata, value, onChange } = (0, useJSONInputController_js_1.useJSONInputController)(restProps);
    const handleChange = (0, react_1.useCallback)((event) => {
        const target = event.currentTarget;
        onChange(target.value ?? "");
    }, [onChange]);
    // Ensure label is always a string
    const label = (props.label ?? String(controllerLabel ?? ""));
    const displayError = !isFocused && errorMessage ? `Invalid JSON: ${errorMessage}` : undefined;
    const { onFocus, onBlur } = focusProps;
    const handleFocus = (0, react_1.useCallback)((event) => {
        onFocus?.(event);
    }, [onFocus]);
    const handleBlur = (0, react_1.useCallback)((event) => {
        onBlur?.(event);
    }, [onBlur]);
    return (react_1.default.createElement("s-text-area", { id: id, label: label, value: value ?? "", rows: 4, placeholder: placeholder, disabled: disabled, required: metadata.requiredArgumentForInput, error: displayError, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, ...restProps }));
});
//# sourceMappingURL=PolarisWCAutoJSONInput.js.map