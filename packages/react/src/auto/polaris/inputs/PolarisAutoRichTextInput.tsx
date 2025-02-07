import { Label } from "@shopify/polaris";
import type { ComponentProps } from "react";
import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";

/**
 * Prefer using the LazyLoadedMUIAutoRichTextInput.tsx variant of this component to reduce the bundle size by default.
 */
const PolarisAutoRichTextInput = autoInput((props: ComponentProps<typeof AutoRichTextInput>) => {
  const controller = useStringInputController({ field: props.field, control: props.control });

  return (
    <div className="Polaris-FormLayout__Item">
      <div className="Polaris-Labelled__LabelWrapper">
        <Label id={controller.id} requiredIndicator={controller.metadata.requiredArgumentForInput}>
          {props.label ?? controller.metadata.name}
        </Label>
      </div>
      <div className="Autoform-RichTextInput">
        <AutoRichTextInput {...props} />
      </div>
    </div>
  );
});

export default PolarisAutoRichTextInput;
