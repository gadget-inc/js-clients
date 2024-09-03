import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import type { Control } from "react-hook-form";
import { useStringInputController } from "../../hooks/useStringInputController.js";

export const ChakraAutoTextInput = (props: { field: string; control?: Control<any> }) => {
  const { field, control } = props;
  const stringInputController = useStringInputController({ field, control });

  return (
    <FormControl isRequired={stringInputController.metadata.requiredArgumentForInput}>
      <FormLabel>{stringInputController.metadata.name}</FormLabel>
      <Input placeholder="Enter text" />
    </FormControl>
  );
};
