import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
// lazy load the component to reduce the bundle size and to avoid errors importing .css files in SSR bundles
const AutoRichTextInput = React.lazy(() => import("../../shared/AutoRichTextInput.js"));
export const makeShadcnAutoRichTextInput = ({ Label }) => {
    function ShadcnAutoRichTextInput(props) {
        const controller = useStringInputController({ field: props.field, control: props.control });
        return (React.createElement("div", { className: "flex flex-col gap-2" },
            React.createElement(Label, { id: controller.id },
                props.label ?? controller.metadata.name,
                controller.metadata.requiredArgumentForInput && React.createElement(ShadcnRequired, null, "*")),
            React.createElement("div", { className: "border border-input rounded-[8px] focus-within:ring-ring/50 focus-within:ring-3 transition-shadow duration-200 ease-out overflow-hidden" },
                React.createElement(AutoRichTextInput, { ...props }))));
    }
    return autoInput(ShadcnAutoRichTextInput);
};
//# sourceMappingURL=ShadcnautoRichTextInput.js.map