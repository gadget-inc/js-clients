"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisWCAutoIdInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const PolarisWCAutoTextInput_js_1 = require("./PolarisWCAutoTextInput.js");
/**
 * An id input within AutoForm using Polaris Web Components.
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoIdInput field="id" />
 * </AutoForm>
 * ```
 * @param props.field - The API identifier of the Id field.
 * @param props.label - Label of the Id input.
 * @returns The AutoIdInput component
 */
exports.PolarisWCAutoIdInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field, label, ...rest } = props;
    const { name, metadata } = (0, useStringInputController_js_1.useStringInputController)({ field });
    if (metadata.fieldType !== metadata_js_1.FieldType.Id || field !== "id") {
        throw new Error(`PolarisWCAutoIdInput: field ${field} is not of type Id`);
    }
    return react_1.default.createElement(PolarisWCAutoTextInput_js_1.PolarisWCAutoTextInput, { field: field, label: label || "ID", min: 1, step: 1, type: "number", ...rest });
});
//# sourceMappingURL=PolarisWCAutoIdInput.js.map