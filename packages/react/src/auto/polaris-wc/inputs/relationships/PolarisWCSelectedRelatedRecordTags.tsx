import React from "react";
import { getRecordsAsOptions } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { PolarisWCDismissibleBadge } from "../../commonComponents/PolarisWCDismissibleBadge.js";

export const getSelectedRelatedRecordTags = (props: {
  selectedRecords: Record<string, any>[];
  optionLabel: OptionLabel;
  onRemoveRecord: (record: Record<string, any>) => void;
}) => {
  if (!props.selectedRecords.length) {
    // Return undefined instead of a wrapper element to avoid adding extra height to the text field
    return undefined;
  }
  return <PolarisWCSelectedRelatedRecordTags {...props} />;
};

const PolarisWCSelectedRelatedRecordTags = (props: {
  selectedRecords: Record<string, any>[];
  optionLabel: OptionLabel;
  onRemoveRecord: (record: Record<string, any>) => void;
}) => {
  const { selectedRecords, optionLabel, onRemoveRecord } = props;

  const options = getRecordsAsOptions(selectedRecords, { primary: optionLabel });

  return options.length ? (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" }}>
      {options.map((option) => {
        const onDismiss = () => {
          const record = selectedRecords.find((record) => record.id === option.id);
          onRemoveRecord(record ?? { id: option.id });
        };
        return (
          <PolarisWCDismissibleBadge key={`option${option.id}`} onDismiss={onDismiss}>
            {option.primary ?? `id: ${option.id}`}
          </PolarisWCDismissibleBadge>
        );
      })}
    </div>
  ) : null;
};
