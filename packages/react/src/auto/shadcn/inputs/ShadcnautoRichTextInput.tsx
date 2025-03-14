import type { ComponentProps } from "react";
import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
import type { ShadcnElements } from "../elements.js";

// lazy load the component to reduce the bundle size and to avoid errors importing .css files in SSR bundles
const AutoRichTextInput = React.lazy(() => import("../../shared/AutoRichTextInput.js"));

export const makeShadcnAutoRichTextInput = ({ Label }: Pick<ShadcnElements, "Label">) => {
  function ShadcnAutoRichTextInput(props: ComponentProps<typeof AutoRichTextInput>) {
    const controller = useStringInputController({ field: props.field, control: props.control });

    return (
      <div>
        <Label id={controller.id}>
          {props.label ?? controller.metadata.name}
          {controller.metadata.requiredArgumentForInput && <ShadcnRequired>*</ShadcnRequired>}
        </Label>
        <div className="border border-input rounded-[8px]">
          <AutoRichTextInput {...props} />
        </div>
      </div>
    );
  }

  return autoInput(ShadcnAutoRichTextInput);
};
