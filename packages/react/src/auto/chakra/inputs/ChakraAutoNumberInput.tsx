import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  type NumberInputProps,
} from "@chakra-ui/react";
import React from "react";
import type { Control } from "react-hook-form";
import { useStringInputController } from "../../hooks/useStringInputController.js";
import { countNumberOfDecimals, getStepFromNumberOfDecimals } from "../../shared/sharedUtils.js";

export const ChakraAutoNumberInput = (
  props: {
    field: string;
    control?: Control<any>;
  } & Partial<NumberInputProps>
) => {
  const { field, control } = props;
  const { type, metadata, value } = useStringInputController({ field, control });

  const step =
    type === "number" &&
    metadata.configuration.__typename === "GadgetNumberConfig" &&
    metadata.configuration.decimals &&
    metadata.configuration.decimals > 0
      ? getStepFromNumberOfDecimals(metadata.configuration.decimals)
      : value
      ? getStepFromNumberOfDecimals(countNumberOfDecimals(`${value}`))
      : 1;

  return (
    <FormControl isRequired={metadata.requiredArgumentForInput}>
      <FormLabel>{metadata.name}</FormLabel>
      <NumberInput step={step}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export default ChakraAutoNumberInput;
