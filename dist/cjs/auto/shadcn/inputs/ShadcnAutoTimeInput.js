"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
require("./auto-date-time-input.css");
const ShadcnAutoTimeInput = (props) => {
    return (react_1.default.createElement("input", { type: "time", id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, className: "shadcn-auto-form-time-input w-32 px-3 py-2 border rounded-md mt-2", value: props.timeString, onChange: (e) => props.handleTimeInput(e.target.value) }));
};
exports.default = ShadcnAutoTimeInput;
//# sourceMappingURL=ShadcnAutoTimeInput.js.map