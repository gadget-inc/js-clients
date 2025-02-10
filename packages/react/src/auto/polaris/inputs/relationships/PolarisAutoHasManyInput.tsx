import { Combobox } from "@shopify/polaris";
import React, { useMemo } from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyInputController } from "../../../hooks/useHasManyController.js";
import { optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";
import { getSelectedRelatedRecordTags } from "./SelectedRelatedRecordTags.js";

export const PolarisAutoHasManyInput = autoInput((props: AutoRelationshipInputProps) => {
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
  console.log("optionLabel :", optionLabel);

  const selectedRecordIds = useMemo(() => {
    return selectedRecords.map((record) => record.id).filter((id) => !!id) as string[];
  }, [selectedRecords]);

  return (
    <>
      <Combobox
        activator={
          <Combobox.TextField
            onChange={search.set}
            value={search.value}
            label={props.label ?? metadata.name}
            name={path}
            placeholder="Search"
            autoComplete="off"
            verticalContent={getSelectedRelatedRecordTags({
              selectedRecords,
              onRemoveRecord,
              optionLabel,
            })}
          />
        }
        onScrolledToBottom={pagination.loadNextPage}
        allowMultiple
        willLoadMoreOptions={pagination.hasNextPage && options.length >= optionRecordsToLoadCount}
      >
        <RelatedModelOptions
          onSelect={onSelectRecord}
          records={relatedModel.records}
          options={searchFilterOptions}
          checkSelected={(id) => selectedRecordIds.includes(id)}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      </Combobox>
    </>
  );
});
