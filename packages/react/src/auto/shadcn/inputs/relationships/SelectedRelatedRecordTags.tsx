import React from "react";
import { getRecordsAsOptions } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnSelectedItemBadgeComponent } from "../ShadcnAutoEnumInput.js";

export const makeSelectedRecordTags = ({ Badge, Button }: Pick<ShadcnElements, "Badge" | "Button">) => {
  const SelectedItemBadge = makeShadcnSelectedItemBadgeComponent({ Badge, Button });

  function SelectedRecordTags(props: {
    selectedRecords: Record<string, any>[];
    optionLabel: OptionLabel;
    onRemoveRecord: (record: Record<string, any>) => void;
  }) {
    const { selectedRecords, optionLabel, onRemoveRecord } = props;

    const options = getRecordsAsOptions(selectedRecords, { primary: optionLabel });

    if (!options.length) {
      return null;
    }

    return (
      <>
        {options.map((option, index) => {
          return (
            <SelectedItemBadge
              key={`option-${option.id || index}`}
              id={`selected-option-${option.primary}`}
              content={option.primary}
              ariaLabel={`Remove ${option.primary}`}
              onRemoveRecord={() => {
                const record = selectedRecords.find((record) => record.id === option.id);
                onRemoveRecord(record ?? { id: option.id });
              }}
            />
          );
        })}
      </>
    );
  }

  function getSelectedRecordTags(props: {
    selectedRecords: Record<string, any>[];
    optionLabel: OptionLabel;
    onRemoveRecord: (record: Record<string, any>) => void;
  }) {
    if (!props.selectedRecords.length) {
      return null;
    }
    return <SelectedRecordTags {...props} />;
  }

  return { SelectedRecordTags, getSelectedRecordTags };
};
