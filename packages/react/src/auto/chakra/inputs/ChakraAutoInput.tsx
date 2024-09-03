import React from "react";
import { FieldType } from "../../../metadata.js";
import { useFieldMetadata } from "../../hooks/useFieldMetadata.js";
import { ChakraAutoBooleanInput } from "./ChakraAutoBooleanInput.js";
import ChakraAutoNumberInput from "./ChakraAutoNumberInput.js";
import { ChakraAutoTextInput } from "./ChakraAutoTextInput.js";

export const ChakraAutoInput = (props: { field: string }) => {
  const { metadata } = useFieldMetadata(props.field);
  const config = metadata.configuration;

  switch (config.fieldType) {
    case FieldType.String: {
      return <ChakraAutoTextInput field={props.field} />;
    }
    case FieldType.Boolean: {
      return <ChakraAutoBooleanInput field={props.field} />;
    }
    case FieldType.Number: {
      return <ChakraAutoNumberInput field={props.field} />;
    }
  }
};
