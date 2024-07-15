import { Banner, Combobox, Icon } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React from "react";
import { useHasOneInputController } from "../../../hooks/useHasOneInputController.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModelOptions.js";
import { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";
import { getSelectedRelatedRecordTags } from "./SelectedRelatedRecordTags.js";

/**
 * TODO - Enable when API level 1-1 relationship mappings are maintained by calling updates on other records
 */
const showErrorBannerWhenTooManyRelatedRecords = false;

export const PolarisAutoHasOneInput = (props: AutoRelationshipInputProps) => {
  const { field } = props;
  const {
    fieldMetadata: { path, metadata },
    relatedModelOptions: { options, searchFilterOptions, selected, search, pagination },

    selectedRecordIds,
    errorMessage,
    isLoading,

    onSelectRecord,
    onRemoveRecord,
  } = useHasOneInputController(props);

  const hasMultipleRelatedRecords = selected.records && selected.records.length > 1;

  if (showErrorBannerWhenTooManyRelatedRecords && hasMultipleRelatedRecords) {
    return <Banner tone="warning">{`Multiple related records for hasOne field "${field}"`}</Banner>;
  }

  return (
    <>
      <Combobox
        activator={
          <Combobox.TextField
            prefix={<Icon source={SearchIcon} />}
            onChange={search.set}
            value={search.value}
            label={metadata.name}
            name={path}
            placeholder="Search"
            autoComplete="off"
            verticalContent={getSelectedRelatedRecordTags({
              selectedRecordIds,
              onRemoveRecord,
              options,
            })}
          />
        }
        onScrolledToBottom={pagination.loadNextPage}
        willLoadMoreOptions={pagination.hasNextPage && options.length >= optionRecordsToLoadCount}
      >
        <RelatedModelOptions
          isLoading={isLoading}
          errorMessage={errorMessage}
          checkSelected={(id) => selectedRecordIds.includes(id)}
          onSelect={onSelectRecord}
          options={searchFilterOptions}
        />
      </Combobox>
    </>
  );
};
