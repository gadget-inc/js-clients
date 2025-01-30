import React, { useMemo } from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyInputController } from "../../../hooks/useHasManyController.js";
import { useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";
import { makeSelectedRecordTags } from "./SelectedRelatedRecordTags.js";

export const makeShadcnAutoHasManyInput = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandInput,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
}: Pick<
  ShadcnElements,
  "Badge" | "Button" | "Command" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "CommandInput" | "Label" | "Checkbox"
>) => {
  const { SelectedRecordTags } = makeSelectedRecordTags({ Badge, Button });
  const ShadcnComboInput = makeShadcnAutoComboInput({
    Command,
    CommandInput,
    Label,
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandGroup,
    Checkbox,
  });

  function ShadcnAutoHasManyInput(props: AutoRelationshipInputProps) {
    const { field } = props;

    const {
      fieldMetadata: { path, metadata },
      relatedModelOptions: { options, searchFilterOptions, search, pagination, relatedModel },
      selectedRecords,
      errorMessage,
      isLoading,

      onSelectRecord,
      onRemoveRecord,
    } = useHasManyInputController(props);

    const optionLabel = useOptionLabelForField(field, props.optionLabel);

    const selectedRecordIds = useMemo(() => {
      return selectedRecords.map((record) => record.id).filter((id) => !!id) as string[];
    }, [selectedRecords]);

    return (
      <ShadcnComboInput
        {...props}
        options={options}
        path={path}
        metadata={metadata}
        selectedRecordTag={
          <SelectedRecordTags selectedRecords={selectedRecords} optionLabel={optionLabel} onRemoveRecord={onRemoveRecord} />
        }
        onSelect={onSelectRecord}
        checkSelected={(id) => {
          return selectedRecordIds.includes(id);
        }}
        isLoading={isLoading}
        errorMessage={errorMessage}
        allowMultiple={true}
        records={relatedModel.records}
      />
    );
  }

  return autoInput(ShadcnAutoHasManyInput);
};
