import { Combobox } from "@shopify/polaris";
import React, { useMemo } from "react";
import { autoInput } from "../../../AutoInput.js";
import { useHasManyInputController } from "../../../hooks/useHasManyController.js";
import { optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";
import { getSelectedRelatedRecordTags } from "./SelectedRelatedRecordTags.js";

/**
 * A hasMany field input component for use within <AutoForm></AutoForm> components
 * This component is used to configure relationships with records from a related model
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoHasManyInput field="children" label="Related children" />
 * </AutoForm>
 * ```
 * @param props.field - The hasMany field API identifier
 * @param props.label - The label of the hasMany field input component
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasMany field input component
 */
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
