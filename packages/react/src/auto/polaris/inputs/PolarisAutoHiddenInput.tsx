import React from "react";
import { autoInput } from "../../AutoInput.js";
import { useHiddenInput } from "../../hooks/useHiddenInput.js";

export const PolarisAutoHiddenInput = autoInput(
  (props: {
    field: string; // The field API identifier
    value: any;
  }) => {
    const fieldProps = useHiddenInput(props);

    return <input type="hidden" {...fieldProps} />;
  }
);
