import React, { type ComponentProps } from "react";
import { countNumberOfDecimals, getStepFromNumberOfDecimals } from "../../../utils.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { type AutoNumberInputProps } from "../../shared/AutoInputTypes.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoStringInput } from "./ShadcnAutoStringInput.js";

export const makeShadcnAutoNumberInput = ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => {
  const AutoStringInput = makeShadcnAutoStringInput({ Input, Label });

  function AutoNumberInput(props: AutoNumberInputProps & Omit<ComponentProps<typeof AutoStringInput>, "step" | "type">) {
    const { metadata, value } = useStringInputController(props);

    const step =
      metadata.configuration.__typename === "GadgetNumberConfig" && metadata.configuration.decimals && metadata.configuration.decimals > 0
        ? getStepFromNumberOfDecimals(metadata.configuration.decimals)
        : value
        ? getStepFromNumberOfDecimals(countNumberOfDecimals(`${value}`))
        : 1;

    return <AutoStringInput {...props} step={step} type={"number"} />;
  }

  return autoInput(AutoNumberInput);
};
