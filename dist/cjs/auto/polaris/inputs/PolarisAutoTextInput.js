"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoUrlInput = exports.PolarisAutoStringInput = exports.PolarisAutoEmailInput = exports.PolarisAutoTextInput = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_js_1 = require("../../../utils.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
/**
 * A text input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoTextInput field="fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The field API identifier.
 * @param props.label - Label of the input.
 * @returns The AutoTextInput component.
 */
exports.PolarisAutoTextInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field, control } = props;
    const stringInputController = (0, useStringInputController_js_1.useStringInputController)({ field, control });
    return (react_1.default.createElement(polaris_1.TextField, { ...(0, utils_js_1.getPropsWithoutRef)(stringInputController), requiredIndicator: stringInputController.metadata.requiredArgumentForInput, type: stringInputController.type, error: stringInputController.errorMessage, ...props, label: props.label || stringInputController.metadata.name }));
});
/**
 * An email input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoEmailInput field="fieldA" />
 * </AutoForm>
 * ```
 * @param props.field - The email field API identifier
 * @param props.label - Label of the email input.
 * @returns The AutoEmailInput component
 */
const PolarisAutoEmailInput = (props) => react_1.default.createElement(exports.PolarisAutoTextInput, { ...props });
exports.PolarisAutoEmailInput = PolarisAutoEmailInput;
/**
 * A string input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoStringInput field="name" />
 * </AutoForm>
 * ```
 * @param props.field - The string field API identifier.
 * @param props.label - Label of the string input.
 * @returns The AutoStringInput component
 */
const PolarisAutoStringInput = (props) => react_1.default.createElement(exports.PolarisAutoTextInput, { ...props });
exports.PolarisAutoStringInput = PolarisAutoStringInput;
/**
 * A url input within AutoForm.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoUrlInput field="website" />
 * </AutoForm>
 * ```
 * @param props.field - The url field API identifier.
 * @param props.label - Label of the url input.
 * @returns The AutoUrlInput component
 */
const PolarisAutoUrlInput = (props) => react_1.default.createElement(exports.PolarisAutoTextInput, { ...props });
exports.PolarisAutoUrlInput = PolarisAutoUrlInput;
//# sourceMappingURL=PolarisAutoTextInput.js.map