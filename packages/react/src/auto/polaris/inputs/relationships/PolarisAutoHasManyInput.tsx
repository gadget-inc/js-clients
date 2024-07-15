import { GadgetRecordList } from "@gadgetinc/api-client-core";
import { Banner, Combobox, Icon } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React from "react";
import { useHasManyInputController } from "../../../hooks/useHasManyInputController.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModelOptions.js";
import { AutoRelationshipInputProps } from "../../../interfaces/AutoRelationshipInputProps.js";
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
