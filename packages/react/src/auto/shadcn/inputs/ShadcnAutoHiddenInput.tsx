import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";
import type { ShadcnElements } from "../elements.js";

export const makeShadcnAutoHiddenInput = ({ Input }: Pick<ShadcnElements, "Input">) => {
  function ShadcnAutoHiddenInput(props: {
    field: string; // The field API identifier
    value: any;
  }) {
    const fieldProps = useHiddenInput(props);
    return <Input type="hidden" {...fieldProps} />;
  }

  return autoInput(ShadcnAutoHiddenInput);
};
