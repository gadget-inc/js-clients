import { Label } from "@shopify/polaris";
import React from "react";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";
import "../styles/rich-text.css";
import "../../shared/styles/mdxeditor/style.css";
export default function PolarisAutoRichTextInput(props) {
    const controller = useStringInputController({ field: props.field, control: props.control });
    return (React.createElement("div", { className: "Polaris-FormLayout__Item" },
        React.createElement("div", { className: "Polaris-Labelled__LabelWrapper" },
            React.createElement(Label, { id: controller.id, requiredIndicator: controller.metadata.requiredArgumentForInput }, controller.metadata.name)),
        React.createElement("div", { className: "Autoform-RichTextInput" },
            React.createElement(AutoRichTextInput, { ...props }))));
}
//# sourceMappingURL=PolarisAutoRichTextInput.js.map