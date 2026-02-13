import React, { useMemo } from "react";
import type { DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
import { shouldShowOptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { renderOptionLabel } from "./utils.js";

export const PolarisWCEditableOptionLabelButton = ({ option }: { option?: DisplayedRecordOption }) => {
  const showOptionLabel = useMemo(() => shouldShowOptionLabel(option), [option]);

  return (
    <>
      {showOptionLabel && option ? (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {renderOptionLabel(option.primary, "primary")}
            {option.secondary && renderOptionLabel(option.secondary, "secondary")}
          </div>
          {option.tertiary && renderOptionLabel(option.tertiary, "tertiary")}
        </div>
      ) : (
        <s-text>Click to edit...</s-text>
      )}
    </>
  );
};
