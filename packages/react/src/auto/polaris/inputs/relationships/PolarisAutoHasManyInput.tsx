import type { GadgetRecordList } from "@gadgetinc/api-client-core";
import { Banner, Combobox } from "@shopify/polaris";
import React from "react";
import { useHasManyInputController } from "../../../hooks/useHasManyInputController.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptions } from "./RelatedModelOptions.js";
import { getSelectedRelatedRecordTags } from "./SelectedRelatedRecordTags.js";

export const PolarisAutoHasManyInput = (props: AutoRelationshipInputProps) => {
  const { field } = props;

  const {
    fieldMetadata: { path, metadata },
    relatedModelOptions: { options, searchFilterOptions, selected, search, pagination },

    selectedRecordIds,
    errorMessage,
    isLoading,

    onSelectRecord,
    onRemoveRecord,
  } = useHasManyInputController(props);

  if ((selected.records as GadgetRecordList<never>)?.hasNextPage) {
    return <Banner tone="warning">{`Too many related records for ${field}. Cannot edit`}</Banner>;
  }

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
              selectedRecordIds,
              onRemoveRecord,
              options,
            })}
          />
        }
        onScrolledToBottom={pagination.loadNextPage}
        allowMultiple
        willLoadMoreOptions={pagination.hasNextPage && options.length >= optionRecordsToLoadCount}
      >
        <RelatedModelOptions
          onSelect={onSelectRecord}
          options={searchFilterOptions}
          checkSelected={(id) => selectedRecordIds.includes(id)}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      </Combobox>
    </>
  );
};
