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

    const options = getRecordsAsOptions(selectedRecords, { primary: optionLabel });

    if (!options.length) {
      return null;
    }

    //TODO: why is the key not the id?
    return (
      <>
        {options.map((option, index) => {
          return (
            <Badge key={`option-${option.id || index}`} variant={"outline"}>
              {option.primary}
              <Button
                onClick={() => {
                  const record = selectedRecords.find((record) => record.id === option.id);
                  onRemoveRecord(record ?? { id: option.id });
                }}
                variant="ghost"
                aria-label={`Remove`}
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
