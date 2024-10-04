import React from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyThroughInputController } from "../../../hooks/useHasManyThroughInputController.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";

export const PolarisAutoHasManyThroughInput = autoInput((props: AutoRelationshipInputProps) => {
  const { field } = props;
  const { fieldMetadata, relatedModelOptions } = useHasManyThroughInputController(props);

  console.log({ field, fieldMetadata, relatedModelOptions });

  return <div>hi</div>;
});
