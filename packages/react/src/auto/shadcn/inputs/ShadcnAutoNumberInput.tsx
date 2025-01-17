import React from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import type { ShadcnElements } from "../elements.js";
import { makeShadcnAutoTextInput } from "./ShadcnAutoTextInput.js";


export const makeShadcnAutoNumberInput = ({ Input, Label }: Pick<ShadcnElements, "Input" | "Label">) => {
  const TextInput = makeShadcnAutoTextInput({ Input, Label });

  return autoInput((props: {
    field: string;
    control?: Control<any>;
    className?: string;
  }) => {
    const { field, control } = props;
    const { metadata, value } = useStringInputController({ field, control });

    const step =
      metadata.configuration.__typename === "GadgetNumberConfig" &&
      metadata.configuration.decimals &&
      metadata.configuration.decimals > 0
        ? getStepFromNumberOfDecimals(metadata.configuration.decimals)
        : value
        ? getStepFromNumberOfDecimals(countNumberOfDecimals(`${value}`))
        : 1;

    return (
      <TextInput
        {...props}
        step={step}
        type={"number"}
      />
    );
  });
};

// TODO: move to a shared location
  const getStepFromNumberOfDecimals = (numberOfDecimals: number) =>
    numberOfDecimals === 0 ? 1 : Number(`0.${"0".repeat(numberOfDecimals - 1)}1`);
  
  const countNumberOfDecimals = (value: string) => {
    if (value.includes("e")) {
      // +e scientific notation for large numbers does not get decimal steps
      return 0;
    }
    const [, decimals] = value.split(".");
    return decimals?.length ?? 0;
  };