import { AutoSelection, BlockStack, Box, Button, Icon, InlineGrid, InlineStack, Listbox, Text } from "@shopify/polaris";
import { PlusIcon, XCircleIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useHasManyThroughForm } from "../../../../useHasManyThroughForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { getRecordAsOption } from "../../../hooks/useRelatedModel.js";
import type { AutoHasManyThroughFormProps, DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";

/**
 * A hasManyThrough field form component for use within <AutoForm></AutoForm> components
 * This component allows sibling model relationships to be defined through creating, updating, or deleting records on the sibling model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.course.create}>
 *   <AutoInput // `name` field on `course` model
 *     field="name"
 *   />
 *   <AutoHasManyThroughForm // `students` field on `course` model - `course` hasMany `students` through `registration`
 *     field="students"
 *   >
 *     <AutoHasManyThroughJoinModelForm // Join model field inputs
 *     >
 *       <AutoInput // `isTuitionPaid` field on `registration` model
 *         field="isTuitionPaid"
 *       />
 *     </AutoHasManyThroughJoinModelForm>
 *     <AutoInput // Sibling model field inputs
 *       field="firstName"
 *     />
 *   </AutoHasManyThroughForm>
 *   <AutoSubmit />
 * </AutoForm>
 * ```
 * @param props.field - The hasMany field API identifier
 * @param props.label - The label of the hasMany form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/> and will be rendered for each sibling model record.
 * @param props.recordLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasManyThrough field form component
 */
export const PolarisAutoHasManyThroughForm = autoRelationshipForm((props: AutoHasManyThroughFormProps) => {
  const [addingSibling, setAddingSibling] = useState(false);
  const {
    append,
    remove,
    joinRecords,
    listboxId,
    pathPrefix,
    metaDataPathPrefix,
    recordLabel,
    siblingModelName,
    siblingRecordsLoading,
    siblingRecords,
    siblingPagination,
    search,
    joinModelField,
    joinModelApiIdentifier,
    siblingModelOptions,
    inverseRelatedModelField,
    fieldArray,
  } = useHasManyThroughForm(props);

  return (
    <BlockStack gap="300">
      <InlineGrid columns="1fr auto" alignItems="center">
        {props.label ?? (
          <Text as="h2" variant="headingSm">
            {siblingModelName}
          </Text>
        )}
        <RelatedModelOptionsPopover
          active={addingSibling}
          activator={
            <Button onClick={() => setAddingSibling((prev) => !prev)} disclosure>
              Add {siblingModelName ?? "related model"}
            </Button>
          }
          onClose={() => setAddingSibling(false)}
          onScrolledToBottom={siblingPagination.loadNextPage}
          search={
            <RelatedModelOptionsSearch modelName={siblingModelName} value={search.value} onChange={search.set} ariaControls={listboxId} />
          }
          options={siblingModelOptions}
          records={siblingRecords}
          onSelect={(record) => {
            inverseRelatedModelField && append({ [inverseRelatedModelField]: { ...record, _link: record.id } });
          }}
          isLoading={siblingRecordsLoading}
          autoSelection={AutoSelection.None}
          renderOption={(option) => <SiblingOption option={option} />}
        />
      </InlineGrid>

      {joinRecords.length > 0 ? (
        <BlockStack as="ul" gap="300">
          {joinRecords.map(([fieldKey, idx, record]) => {
            const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];

            const siblingOption = getRecordAsOption(siblingRecord, {
              primary: recordLabel.primary,
              secondary: recordLabel.secondary,
              tertiary: recordLabel.tertiary,
            });

            return (
              <Box key={fieldKey}>
                <InlineGrid columns="1fr auto" alignItems="center">
                  <Box borderColor="border" borderWidth="025" borderRadius="200">
                    <div style={{ display: "flex", padding: "8px" }}>
                      <Box>
                        <InlineStack gap="200">
                          {renderOptionLabel(siblingOption.primary, "primary")}
                          {siblingOption?.tertiary && renderOptionLabel(siblingOption.tertiary, "tertiary")}
                        </InlineStack>
                        {siblingOption?.secondary && renderOptionLabel(siblingOption.secondary, "secondary")}
                      </Box>
                      <div style={{ marginLeft: "auto", alignSelf: "center", height: "100%" }}>
                        <Button
                          id={`deleteButton_${pathPrefix}.${idx}`}
                          variant="tertiary"
                          icon={XCircleIcon}
                          onClick={() => remove(idx)}
                        ></Button>
                      </div>
                    </div>
                    {props.children && (
                      <Box borderColor="border" borderBlockStartWidth="025">
                        <Box padding="200">
                          <RelationshipContext.Provider
                            value={{
                              transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                              transformMetadataPath: (path) => `${metaDataPathPrefix}.${path}`,
                              fieldArray,
                              hasManyThrough: { joinModelApiIdentifier, inverseRelatedModelField },
                            }}
                          >
                            {props.children}
                          </RelationshipContext.Provider>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </InlineGrid>
              </Box>
            );
          })}
        </BlockStack>
      ) : (
        <Box borderColor="border" borderWidth="025" borderRadius="200">
          <Box padding="300">
            <InlineStack align="center">
              <Text as="p" variant="bodyMd" tone="subdued">
                No {siblingModelName} yet
              </Text>
            </InlineStack>
          </Box>
        </Box>
      )}
    </BlockStack>
  );
});

const SiblingOption = (props: { option: DisplayedRecordOption }) => {
  const { option } = props;

  return (
    <Listbox.Action key={option.id} value={option.id}>
      <div style={{ display: "flex", gap: "200", width: "100%" }}>
        <BlockStack gap="050">
          {renderOptionLabel(option.primary, "primary")}
          {option.secondary && renderOptionLabel(option.secondary, "secondary")}
        </BlockStack>
        <div style={{ marginLeft: "auto", alignSelf: "center" }}>
          <Icon source={PlusIcon} />
        </div>
      </div>
    </Listbox.Action>
  );
};
