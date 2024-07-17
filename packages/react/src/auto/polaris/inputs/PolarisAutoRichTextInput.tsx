import { Label } from "@shopify/polaris";
import type { ComponentProps } from "react";
import React from "react";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";
import "../styles/rich-text.css";

export default function PolarisAutoRichTextInput(props: ComponentProps<typeof AutoRichTextInput>) {
  const controller = useStringInputController({ field: props.field, control: props.control });

  return (
    <div className="Polaris-FormLayout__Item">
      <div className="Polaris-Labelled__LabelWrapper">
        <Label id={controller.id} requiredIndicator={controller.metadata.requiredArgumentForInput}>
          {controller.metadata.name}
        </Label>
      </div>
      <div className="Autoform-RichTextInput">
        <AutoRichTextInput {...props} />
      </div>
    </div>
  );
}
