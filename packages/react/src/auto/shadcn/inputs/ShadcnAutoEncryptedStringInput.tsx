import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState, type ReactNode } from "react";
import { autoInput } from "../../AutoInput.js";
import { type AutoEncryptedStringInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoStringInput } from "./ShadcnAutoStringInput.js";

export const makeShadcnAutoEncryptedStringInput = ({ Input, Label, Button }: Pick<ShadcnElements, "Input" | "Label" | "Button">) => {
  const TextInput = makeShadcnAutoStringInput({ Input, Label });

  function ShadcnAutoEncryptedStringInput(props: AutoEncryptedStringInputProps & { className?: string; suffix?: ReactNode }) {
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
  }

  return autoInput(ShadcnAutoEncryptedStringInput);
};
