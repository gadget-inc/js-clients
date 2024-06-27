import React from "react";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";

export const PolarisAutoHiddenInput = (props: {
  field: string; // The field API identifier
  value: any;
}) => {
  const fieldProps = useHiddenInput(props);

  return <input type="hidden" {...fieldProps} />;
};
