import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";
import { type AutoHiddenInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";

export const makeShadcnAutoHiddenInput = ({ Input }: Pick<ShadcnElements, "Input">) => {
  function ShadcnAutoHiddenInput(props: AutoHiddenInputProps) {
    const fieldProps = useHiddenInput(props);
    return <Input type="hidden" {...fieldProps} />;
  }

  return autoInput(ShadcnAutoHiddenInput);
};
