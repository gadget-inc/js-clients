import { AutoSelection, Icon, InlineStack, Listbox } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import React from "react";
import { type useSingleRelatedRecordRelationshipForm } from "src/useSingleRelatedRecordRelationshipForm.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";

export const SearchableSingleRelatedModelRecordSelector = (props: {
  form: ReturnType<typeof useSingleRelatedRecordRelationshipForm>;
  override?: {
    addNewRecord?: () => void;
  };
}) => {
  const {
    search,
    searchOpen,
    setSearchOpen,
    pagination,
    records,
    isLoading,
    searchFilterOptions,
    relatedModelName,
    path,
    setValue,
    setIsEditing,
  } = props.form;
  return (
    <>
      <RelatedModelOptionsPopover
        active={searchOpen}
        activator={
          <RelatedModelOptionsSearch
            modelName={relatedModelName}
            value={search.value}
            onChange={search.set}
            onFocus={() => setSearchOpen(true)}
          />
        }
        onClose={() => setSearchOpen(false)}
        onScrolledToBottom={pagination.loadNextPage}
        actions={[
          <Listbox.Action key="add-new-record" value="add-new-record" divider>
            <InlineStack gap="200">
              <Icon source={PlusCircleIcon} />
              Add {relatedModelName}
            </InlineStack>
          </Listbox.Action>,
        ]}
        options={searchFilterOptions}
        records={records}
        onSelect={(record) => {
          if (record.id === "add-new-record") {
            props.override?.addNewRecord?.() ?? setIsEditing(true);
          } else {
            setValue(path, { ...record, _link: record.id });
          }
          setSearchOpen(false);
        }}
        isLoading={isLoading}
        autoSelection={AutoSelection.None}
      />
    </>
  );
};
