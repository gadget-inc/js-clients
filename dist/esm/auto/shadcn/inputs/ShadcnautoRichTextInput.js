import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";
import "../../shared/styles/rich-text.css";
import { ShadcnRequired } from "../ShadcnRequired.js";
export const makeShadcnAutoRichTextInput = ({ Label }) => {
    function ShadcnAutoRichTextInput(props) {
        const controller = useStringInputController({ field: props.field, control: props.control });
        return (React.createElement("div", null,
            React.createElement(Label, { id: controller.id },
                props.label ?? controller.metadata.name,
                controller.metadata.requiredArgumentForInput && React.createElement(ShadcnRequired, null, "*")),
            React.createElement("div", { className: "Autoform-RichTextInput" },
                React.createElement(AutoRichTextInput, { ...props }))));
    }
    return autoInput(ShadcnAutoRichTextInput);
};
//# sourceMappingURL=ShadcnautoRichTextInput.js.map