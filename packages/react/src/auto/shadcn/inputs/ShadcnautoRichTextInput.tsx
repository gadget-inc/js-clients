import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { MissingMdxEditorErrorMessage } from "../../shared/AutoRichTextInput.js";
import { type AutoRichTextInputProps } from "../../shared/AutoRichTextInputProps.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
import type { ShadcnElements } from "../elements.js";

// lazy load the component to reduce the bundle size and to avoid errors importing .css files in SSR bundles
const AutoRichTextInput = React.lazy(() =>
  import("../../shared/AutoRichTextInput.js").catch((error) => {
    const customError = new Error(MissingMdxEditorErrorMessage);
    // Preserve original error for debugging
    (customError as any).originalError = error;
    throw customError;
  })
);

export const makeShadcnAutoRichTextInput = ({ Label }: Pick<ShadcnElements, "Label">) => {
  function ShadcnAutoRichTextInput(props: AutoRichTextInputProps) {
    const controller = useStringInputController({ field: props.field, control: props.control });

    return (
      <div className="flex flex-col gap-2">
        <Label id={controller.id}>
          {props.label ?? controller.metadata.name}
          {controller.metadata.requiredArgumentForInput && <ShadcnRequired>*</ShadcnRequired>}
        </Label>
        <div className="border border-input rounded-[8px] focus-within:ring-ring/50 focus-within:ring-3 transition-shadow duration-200 ease-out overflow-hidden">
          <AutoRichTextInput {...props} />
        </div>
      </div>
    );
  }

  return autoInput(ShadcnAutoRichTextInput);
};
