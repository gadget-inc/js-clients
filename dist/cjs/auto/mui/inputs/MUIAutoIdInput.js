"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoIdInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const MUIAutoTextInput_js_1 = require("./MUIAutoTextInput.js");
exports.MUIAutoIdInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field } = props;
    const { name, metadata } = (0, useStringInputController_js_1.useStringInputController)({ field });
    if (metadata.fieldType !== metadata_js_1.FieldType.Id || field !== "id") {
        throw new Error(`PolarisAutoIdInput: field ${field} is not of type Id`);
    }
    return (react_1.default.createElement(MUIAutoTextInput_js_1.MUIAutoTextInput, { field: field, label: "ID", name: name, InputProps: {
            inputProps: { min: 1, step: 1 },
        }, type: "number" }));
});
//# sourceMappingURL=MUIAutoIdInput.js.map