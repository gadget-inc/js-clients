import React from "react";
import { useFocus } from "../../../useFocus.js";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
export const makeShadcnAutoJSONInput = ({ Label, Textarea }) => {
    function ShadcnAutoJSONInput(props) {
        const [isFocused, focusProps] = useFocus();
        const { field: _field, control: _control, ...restOfProps } = props;
        const { type: _type, errorMessage, ...controller } = useJSONInputController(props);
        const requiredIndicator = controller.metadata.requiredArgumentForInput ? React.createElement(ShadcnRequired, null, "*") : null;
        const label = props.label ?? controller.label;
        const id = props.id ?? `${props.field}-input`;
        return (React.createElement("div", null,
            React.createElement(Label, { htmlFor: id },
                label,
                " ",
                requiredIndicator),
            React.createElement(Textarea, { ...getPropsWithoutRef(controller), ...getPropsWithoutRef(focusProps), id: id, className: "font-mono", ...restOfProps, onChange: (e) => {
                    controller.onChange(e.currentTarget.value);
                } }),
            !isFocused && errorMessage && React.createElement("p", { className: "text-sm text-red-500" }, `Invalid JSON: ${errorMessage}`)));
    }
    return autoInput(ShadcnAutoJSONInput);
};
//# sourceMappingURL=ShadcnAutoJSONInput.js.map