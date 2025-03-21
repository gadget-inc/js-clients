import React from "react";
import { useFocus } from "../../../useFocus.js";
import { getPropsWithoutRef } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";
import { type AutoJSONInputProps } from "../../shared/AutoInputTypes.js";
import { ShadcnRequired } from "../ShadcnRequired.js";
import type { ShadcnElements } from "../elements.js";

export const makeShadcnAutoJSONInput = ({ Label, Textarea }: Pick<ShadcnElements, "Input" | "Label" | "Textarea">) => {
  function ShadcnAutoJSONInput(props: AutoJSONInputProps & Partial<React.HTMLAttributes<HTMLTextAreaElement>>) {
    const [isFocused, focusProps] = useFocus();
    const { field: _field, control: _control, ...restOfProps } = props;
    const { type: _type, errorMessage, ...controller } = useJSONInputController(props);
    const requiredIndicator = controller.metadata.requiredArgumentForInput ? <ShadcnRequired>*</ShadcnRequired> : null;
    const label = props.label ?? controller.label;
    const id = props.id ?? `${props.field}-input`;
    return (
      <div>
        <Label htmlFor={id}>
          {label} {requiredIndicator}
        </Label>
        <Textarea
          {...getPropsWithoutRef(controller)}
          {...getPropsWithoutRef(focusProps)}
          {...restOfProps}
          onChange={(e) => {
            controller.onChange(e.currentTarget.value);
          }}
          id={id}
          className="font-mono"
        />
        {!isFocused && errorMessage && <p className="text-sm text-red-500">{`Invalid JSON: ${errorMessage}`}</p>}
      </div>
    );
  }

  return autoInput(ShadcnAutoJSONInput);
};
