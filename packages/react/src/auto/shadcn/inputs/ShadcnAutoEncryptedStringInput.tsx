import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoTextInput } from "./ShadcnAutoTextInput.js";

export const makeShadcnAutoEncryptedStringInput = ({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">) => {
  const TextInput = makeShadcnAutoTextInput({ Input, Label });

  return autoInput((props: { field: string; control?: Control<any>; className?: string; suffix?: React.ReactNode }) => {
    const [isShown, setIsShown] = useState(false);
    const { suffix, ...restProps } = props;

    const showHideToggleButton = (
      <Button
        variant="ghost"
        size="icon"
        type="button"
        onClick={() => setIsShown(!isShown)}
        className="h-8 w-8"
        role={`${props.field}ToggleShowHideButton`}
      >
        {isShown ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
      </Button>
    );

    return <TextInput {...restProps} type={isShown ? "text" : "password"} suffix={suffix ?? showHideToggleButton} />;
  });
};
