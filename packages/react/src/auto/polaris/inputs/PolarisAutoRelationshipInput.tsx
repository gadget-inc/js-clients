import { Combobox, Icon, Listbox, Tag, Text } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React from "react";
import { ErrorWrapper } from "../../../utils.js";
import { numberOfRecordsToLoad, useRelationshipInputController } from "../../hooks/useRelationshipInputController.js";
import { AutoRelationshipInputProps } from "../../interfaces/AutoRelationshipInputProps.js";

export const PolarisAutoBelongsToInput = (props: AutoRelationshipInputProps) => {
  return <PolarisAutoRelationshipInput {...props} />;
};

export const PolarisAutoRelationshipInput = (props: AutoRelationshipInputProps) => {
  const { field, control, optionLabel } = props;

  const { path, isHasMany, relatedModel, metadata, pagination, search, selection } = useRelationshipInputController({
    field: field,
    control: control,
    optionLabel: optionLabel,
  });

  if (isHasMany) {
    // TODO - Update to account for HasMany relationship. Multiselect functionality and more advanced hook
    return null;
  }

  const selectedRecordTag = (
    <Tag onRemove={() => selection.set(undefined)}>
      <p style={{ color: selection.error ? "red" : undefined }} id={`${selection.id}_${selection.label}`}>
        {selection.label}
      </p>
    </Tag>
  );

  return (
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
          verticalContent={selection.id && selectedRecordTag}
        />
      }
      onScrolledToBottom={pagination.loadNextPageOfRecords}
      onClose={pagination.resetPagination}
      willLoadMoreOptions={relatedModel.hasNextPage && relatedModel.options.length >= numberOfRecordsToLoad}
    >
      <RelatedModelOptions relatedModel={relatedModel} selection={selection} />
    </Combobox>
  );
};

export const RelatedModelOptions = (props: {
  relatedModel: { options: any[]; error?: ErrorWrapper; hasNextPage: boolean; isLoadingRelatedRecords: boolean };
  selection: { id?: string; label: string; error?: ErrorWrapper; set: (selectedId?: string | undefined) => void };
}) => {
  const { relatedModel, selection } = props;

  return (
    <Listbox onSelect={(recordId) => selection.set(selection.id === recordId ? undefined : recordId)}>
      {relatedModel.options.length ? (
        relatedModel.options.map((option) => (
          <SelectableOption {...option} selected={selection.id === option.recordId} key={option.recordId} />
        ))
      ) : (
        <NoRecordsMessage />
      )}
      {relatedModel.isLoadingRelatedRecords && <Listbox.Loading accessibilityLabel="Loading" />}
    </Listbox>
  );
};

const SelectableOption = (props: { label: string; recordId: string; selected: boolean }) => {
  const { label, recordId, selected } = props;
  return (
    <Listbox.Option key={recordId} value={recordId} selected={selected}>
      {label}
    </Listbox.Option>
  );
};

const NoRecordsMessage = () => (
  <div style={{ padding: "16px" }}>
    <Text as="p" tone="subdued">
      No records found
    </Text>
  </div>
);
