import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
// lazy load the component to reduce the bundle size and to avoid errors importing .css files in SSR bundles
const AutoRichTextInput = React.lazy(() => import("../../shared/AutoRichTextInput.js"));
export const makeShadcnAutoRichTextInput = ({ Label }) => {
    function ShadcnAutoRichTextInput(props) {
        const controller = useStringInputController({ field: props.field, control: props.control });
        return (React.createElement("div", null,
            React.createElement(Label, { id: controller.id },
                props.label ?? controller.metadata.name,
                controller.metadata.requiredArgumentForInput && React.createElement(ShadcnRequired, null, "*")),
            React.createElement("div", { className: "border border-input rounded-[8px]" },
                React.createElement(AutoRichTextInput, { ...props }))));
    }
    return autoInput(ShadcnAutoRichTextInput);
};
//# sourceMappingURL=ShadcnautoRichTextInput.js.map