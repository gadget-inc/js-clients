import { Label } from "@shopify/polaris";
import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";
/**
 * @deprecated Use the LazyLoadedPolarisAutoRichTextInput.tsx variant of this component to reduce the bundle size by default.
 */
const PolarisAutoRichTextInput = autoInput((props) => {
    const controller = useStringInputController({ field: props.field, control: props.control });
    return (React.createElement("div", { className: "Polaris-FormLayout__Item" },
        React.createElement("div", { className: "Polaris-Labelled__LabelWrapper" },
            React.createElement(Label, { id: controller.id, requiredIndicator: controller.metadata.requiredArgumentForInput }, props.label ?? controller.metadata.name)),
        React.createElement("div", { className: "Autoform-RichTextInput" },
            React.createElement(AutoRichTextInput, { ...props }))));
});
export default PolarisAutoRichTextInput;
//# sourceMappingURL=PolarisAutoRichTextInput.js.map