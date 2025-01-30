import type { ComponentProps } from "react";
import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import AutoRichTextInput from "../../shared/AutoRichTextInput.js";
import "../../shared/styles/rich-text.css";
import { ShadcnRequired } from "../ShadcnRequired.js";
import type { ShadcnElements } from "../elements.js";

export const makeShadcnAutoRichTextInput = ({ Label }: Pick<ShadcnElements, "Label">) => {
  function ShadcnAutoRichTextInput(props: ComponentProps<typeof AutoRichTextInput>) {
    const controller = useStringInputController({ field: props.field, control: props.control });

    return (
      <div>
        <Label id={controller.id}>
          {props.label ?? controller.metadata.name}
          {controller.metadata.requiredArgumentForInput && <ShadcnRequired>*</ShadcnRequired>}
        </Label>
        <div className="">
          <AutoRichTextInput {...props} />
        </div>
      </div>
    );
  }

  return autoInput(ShadcnAutoRichTextInput);
};
