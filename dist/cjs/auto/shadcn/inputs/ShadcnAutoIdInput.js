"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoIdInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const ShadcnAutoTextInput_js_1 = require("./ShadcnAutoTextInput.js");
const makeShadcnAutoIdInput = (elements) => {
    const ShadcnAutoTextInput = (0, ShadcnAutoTextInput_js_1.makeShadcnAutoTextInput)(elements);
    function ShadcnAutoIdInput(props) {
        const { field, label } = props;
        const { name, metadata } = (0, useStringInputController_js_1.useStringInputController)({ field });
        if (metadata.fieldType !== metadata_js_1.FieldType.Id || field !== "id") {
            throw new Error(`ShadcnAutoIdInput: field ${field} is not of type Id`);
        }
        return react_1.default.createElement(ShadcnAutoTextInput, { field: field, type: "number", step: 1, min: 1, label: label || "ID", name: name });
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoIdInput);
};
exports.makeShadcnAutoIdInput = makeShadcnAutoIdInput;
//# sourceMappingURL=ShadcnAutoIdInput.js.map