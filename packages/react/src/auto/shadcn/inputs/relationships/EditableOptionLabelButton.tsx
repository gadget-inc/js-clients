import React, { useMemo } from "react";
import { shouldShowOptionLabel, type DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";

export const makeShadcnEditableOptionLabelButton = ({ Badge, Button, Label }: Pick<ShadcnElements, "Badge" | "Button" | "Label">) => {
  const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });

  return function ({ option }: { option?: DisplayedRecordOption | null }) {
    const showOptionLabel = useMemo(() => shouldShowOptionLabel(option), [option]);
    return (
      <>
        {showOptionLabel && option ? (
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col gap-1 items-start">
              {renderOptionLabel(option.primary, "primary")}
              {option.secondary && renderOptionLabel(option.secondary, "secondary")}
            </div>

            {option.tertiary && <div className="flex items-center">{renderOptionLabel(option.tertiary, "tertiary")}</div>}
          </div>
        ) : (
          <Label>Click to edit...</Label>
        )}
      </>
    );
  };
};
