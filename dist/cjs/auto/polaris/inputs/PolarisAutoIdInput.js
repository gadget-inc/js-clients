"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoIdInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const PolarisAutoTextInput_js_1 = require("./PolarisAutoTextInput.js");
const PolarisAutoIdInput = (props) => {
    const { field } = props;
    const { name, metadata } = (0, useStringInputController_js_1.useStringInputController)({ field });
    if (metadata.fieldType !== metadata_js_1.FieldType.Id || field !== "id") {
        throw new Error(`PolarisAutoIdInput: field ${field} is not of type Id`);
    }
    return react_1.default.createElement(PolarisAutoTextInput_js_1.PolarisAutoTextInput, { step: 1, field: field, min: 1, type: "number", label: "ID", name: name });
};
exports.PolarisAutoIdInput = PolarisAutoIdInput;
//# sourceMappingURL=PolarisAutoIdInput.js.map