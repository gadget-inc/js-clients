import { XIcon } from "lucide-react";
import React from "react";
import { getRecordsAsOptions } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";

export const makeSelectedRecordTags = ({ Badge, Button }: Pick<ShadcnElements, "Badge" | "Button">) => {
  function SelectedRecordTags(props: {
    selectedRecords: Record<string, any>[];
    optionLabel: OptionLabel;
    onRemoveRecord: (record: Record<string, any>) => void;
  }) {
    const { selectedRecords, optionLabel, onRemoveRecord } = props;

    const options = getRecordsAsOptions(selectedRecords, optionLabel);

    if (!options.length) {
      return null;
    }

    return (
      <>
        {options.map((option) => {
          return (
            <Badge key={`option-${option.id}`}>
              {option.label}
              <Button
                onClick={() => {
                  const record = selectedRecords.find((record) => record.id === option.id);
                  onRemoveRecord(record ?? { id: option.id });
                }}
                variant="ghost"
                size="icon"
              >
                <XIcon />
              </Button>
            </Badge>
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
