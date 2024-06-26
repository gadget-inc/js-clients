import { InlineError } from "@shopify/polaris";
import type { CSSProperties } from "react";
import React from "react";
import type { Control } from "react-hook-form";
import { SharedCodeEditor } from "../../_shared/CodeEditor/SharedCodeEditor.js";
import { useJSONInputController } from "../../hooks/useJSONInputController.js";

export const PolarisAutoJSONInput = (props: {
  field: string; // The field API identifier
  control?: Control<any>;
  style?: CSSProperties;
}) => {
  const { onStringValueChange, error, stringValue, originalController } = useJSONInputController(props);

  return (
    <>
      <div
        style={{
          marginBottom: "4px",
        }}
      >
        {originalController.label}
      </div>
      <div
        style={{
          borderColor: "#8A8A8A",
          borderWidth: "0.66px",
          borderStyle: "solid",
          borderRadius: "8px",
          ...props.style,
        }}
      >
        <SharedCodeEditor value={stringValue} onChange={onStringValueChange} testId={`polaris-json-input-${props.field}`} />
      </div>
      {error && <InlineError message={`Invalid JSON: ${error.message}`} fieldID="" />}
    </>
  );
};
