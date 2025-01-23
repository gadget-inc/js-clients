import { XIcon } from "lucide-react";
import React from "react";
import { useBelongsToInputController } from "../../../hooks/useBelongsToController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";

export const makeShadcnAutoBelongsToInput = ({ Input, Badge, Button }: Pick<ShadcnElements, "Input" | "Badge" | "Button">) => {
  function ShadcnAutoBelongsToInput(props: AutoRelationshipInputProps) {
    const {
      fieldMetadata: { path, metadata },
      relatedModelOptions: { options, searchFilterOptions, pagination, search, relatedModel },
      isLoading,
      errorMessage,
      selectedRecord,
      danglingSelectedRecordId,
      onSelectRecord,
      onRemoveRecord,
    } = useBelongsToInputController(props);

    const optionLabel = useOptionLabelForField(props.field, props.optionLabel);
    const selectedOption = selectedRecord ? getRecordAsOption(selectedRecord, optionLabel) : null;

    const selectedRecordTag =
      selectedOption && selectedOption.id ? (
        <Badge key={`selectedRecordTag_${selectedOption.id}`}>
          {selectedOption.label}
          <Button onClick={onRemoveRecord} variant="ghost" size="icon">
            <XIcon />
          </Button>
        </Badge>
      ) : danglingSelectedRecordId ? (
        <Badge key={`selectedRecordTag_${danglingSelectedRecordId}`}>
          <p id={`${danglingSelectedRecordId}`} style={{ color: "red" }}>
            id: {danglingSelectedRecordId}
          </p>
        </Badge>
      ) : null;

    return (
      <div>
        <div></div>
        <Input />
      </div>
    );
  }

  return ShadcnAutoBelongsToInput;
};
