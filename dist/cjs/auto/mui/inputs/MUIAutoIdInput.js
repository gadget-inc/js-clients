"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIAutoIdInput = void 0;
const tslib_1 = require("tslib");
const metadata_js_1 = require("../../../metadata.js");
const react_1 = tslib_1.__importDefault(require("react"));
const useStringInputController_js_1 = require("../../hooks/useStringInputController.js");
const MUIAutoTextInput_js_1 = require("./MUIAutoTextInput.js");
const MUIAutoIdInput = (props) => {
    const { field } = props;
    const { name, metadata } = (0, useStringInputController_js_1.useStringInputController)({ field });
    if (metadata.fieldType !== metadata_js_1.FieldType.Id || field !== "id") {
        throw new Error(`PolarisAutoIdInput: field ${field} is not of type Id`);
    }
    return (react_1.default.createElement(MUIAutoTextInput_js_1.MUIAutoTextInput, { field: field, label: "ID", name: name, InputProps: {
            inputProps: { min: 1, step: 1 },
        }, type: "number" }));
};
exports.MUIAutoIdInput = MUIAutoIdInput;
//# sourceMappingURL=MUIAutoIdInput.js.map