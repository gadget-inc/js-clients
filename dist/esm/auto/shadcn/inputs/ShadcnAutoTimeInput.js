import React from "react";
import "./auto-date-time-input.css";
const ShadcnAutoTimeInput = (props) => {
    return (React.createElement("input", { type: "time", id: props.id ? `${props.id}-time` : undefined, "data-testid": props.id ? `${props.id}-time` : undefined, className: "shadcn-auto-form-time-input w-32 px-3 py-2 border rounded-md mt-2", value: props.timeString, onChange: (e) => props.handleTimeInput(e.target.value) }));
};
export default ShadcnAutoTimeInput;
//# sourceMappingURL=ShadcnAutoTimeInput.js.map