"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeShadcnAutoBooleanInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useBooleanInputController_js_1 = require("../../../auto/hooks/useBooleanInputController.js");
const AutoInput_js_1 = require("../../AutoInput.js");
const ShadcnRequired_js_1 = require("../ShadcnRequired.js");
const makeShadcnAutoBooleanInput = ({ Checkbox, Label }) => {
    function ShadcnAutoBooleanInput(props) {
        const { field: _field, control: _control, ...rest } = props;
        const { path, error, fieldProps, metadata } = (0, useBooleanInputController_js_1.useBooleanInputController)(props);
        // UUID prefix for the id that links the label and checkbox so the label won't link to the wrong checkbox if there are multiple checkboxes with the same path
        const uuidPrefix = (0, react_1.useMemo)(() => crypto.randomUUID(), []);
        const { value: _value, ...restFieldProps } = fieldProps;
        const label = props.label ?? metadata.name;
        return (react_1.default.createElement("div", { className: "flex items-center gap-2" },
            react_1.default.createElement(Checkbox, { ...restFieldProps, id: `${uuidPrefix}-${path}`, checked: _value, "aria-invalid": !!error, ...rest, disabled: props.disabled ?? false, onCheckedChange: fieldProps.onChange }),
            react_1.default.createElement(Label, { htmlFor: `${uuidPrefix}-${path}`, className: `${props.className ?? ""} ${error ? "text-red-500" : ""} cursor-pointer` }, label),
            error && react_1.default.createElement(ShadcnRequired_js_1.ShadcnRequired, null, error.message)));
    }
    return (0, AutoInput_js_1.autoInput)(ShadcnAutoBooleanInput);
};
exports.makeShadcnAutoBooleanInput = makeShadcnAutoBooleanInput;
//# sourceMappingURL=ShadcnAutoBooleanInput.js.map