import { Tag } from "@shopify/polaris";
import React from "react";
import { getRecordsAsOptions } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";

export const getSelectedRelatedRecordTags = (props: {
  selectedRecords: Record<string, any>[];
  optionLabel: OptionLabel;
  onRemoveRecord: (record: Record<string, any>) => void;
}) => {
  if (!props.selectedRecords.length) {
    // A separate component getter is used here to return null instead of <>null</> which adds extra height to the text field
    return null;
  }
  return <SelectedRelatedRecordTags {...props} />;
};

export const SelectedRelatedRecordTags = (props: {
  selectedRecords: Record<string, any>[];
  optionLabel: OptionLabel;
  onRemoveRecord: (record: Record<string, any>) => void;
}) => {
  const { selectedRecords, optionLabel, onRemoveRecord } = props;

  const options = getRecordsAsOptions(selectedRecords, { primary: optionLabel });

  return options.length
    ? options.map((option) => {
        return (
          <Tag
            key={`option${option.id}`}
            onRemove={() => {
              const record = selectedRecords.find((record) => record.id === option.id);
              onRemoveRecord(record ?? { id: option.id });
            }}
          >
            {option.primary ?? `id: ${option.id}`}
          </Tag>
        );
      })
    : null;
};
