import { XIcon } from "lucide-react";
import React from "react";
import { useBelongsToInputController } from "../../../hooks/useBelongsToController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnAutoTextInput } from "../ShadcnAutoTextInput.js";
import { makeRelatedModelOption } from "./RelatedModelOption.js";

export const makeShadcnAutoBelongsToInput = ({
  Input,
  Badge,
  Button,
  Command,
  CommandItem,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
}: Pick<
  ShadcnElements,
  "Input" | "Badge" | "Button" | "Command" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Label"
>) => {
  const RelatedModelOption = makeRelatedModelOption({
    Command,
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandGroup,
  });

  const TextInput = makeShadcnAutoTextInput({ Input, Label });

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

    const onSelect = (record: Record<string, any>) => {
      const recordId = record.id;
      const idIsAlreadySelected = selectedRecord?.id === recordId;

      idIsAlreadySelected
        ? onRemoveRecord() // clear selection
        : onSelectRecord(record); // make single selection
    };

    return (
      <div>
        <div>{selectedRecordTag}</div>
        <TextInput
          required={metadata.requiredArgumentForInput}
          onFocus={() => {
            console.log("focus");
          }}
          onBlur={() => {
            console.log("blur");
          }}
          value={search.value}
          name={path}
          label={props.label ?? metadata.name}
          placeholder="Search"
          autoComplete="off"
          {...props}
        />
        <RelatedModelOption
          isLoading={isLoading}
          errorMessage={errorMessage}
          options={searchFilterOptions}
          records={relatedModel.records}
          onSelect={onSelect}
        />
      </div>
    );
  }

  return ShadcnAutoBelongsToInput;
};
