import type { CheckboxProps } from "@chakra-ui/react";
import { Checkbox, FormControl } from "@chakra-ui/react";
import React from "react";
import type { Control } from "react-hook-form";
import { useController } from "react-hook-form";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";

export const ChakraAutoBooleanInput = (props: { field: string; control?: Control<any> & Partial<CheckboxProps> }) => {
  const { field: fieldApiIdentifier, control } = props;

  const { path, metadata } = useFieldMetadata(fieldApiIdentifier);

  const {
    field: fieldProps,
    fieldState: { error },
  } = useController({
    control,
    name: path,
  });

  const { value: _value, ...restFieldProps } = fieldProps;

  return (
    <FormControl>
      <Checkbox {...restFieldProps} isChecked={!!fieldProps.value}>
        {metadata.name}
      </Checkbox>
    </FormControl>
  );
};
