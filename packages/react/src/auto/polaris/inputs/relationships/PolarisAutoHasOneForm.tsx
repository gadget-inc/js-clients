import { BlockStack, Box, Button, Icon, InlineGrid, InlineStack, ResourceItem, Text } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import React from "react";
import { useHasOneForm } from "../../../../useHasOneForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { EditableOptionLabelButton } from "./EditableOptionLabelButton.js";
import { SearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";

/**
 * A hasOne field form component for use within <AutoForm></AutoForm> components
 * This component allows a single related model record to be created, updated, or deleted from the current model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.car.create}>
 *   <AutoHasOneForm field="engine" >
 *     <AutoInput field="horsepower" />
 *   </AutoHasOneForm>
 * </AutoForm>
 * ```
 * @param props.field - The hasOne field API identifier
 * @param props.label - The label of the hasOne form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/> and will be rendered for each child record.
 * @param props.recordLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasOne field form component
 */
export const PolarisAutoHasOneForm = autoRelationshipForm((props: Omit<AutoRelationshipFormProps, "recordFilter">) => {
  const hasOneForm = useHasOneForm(props);
  const {
    isEditing,
    setIsEditing,
    isCreatingRecord,
    pathPrefix,
    metaDataPathPrefix,
    hasRecord,
    recordOption,
    relatedModelName,
    confirmEdit,
    removeRecord,
  } = hasOneForm;

  return (
    <>
      <RelationshipContext.Provider
        value={{ transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path }}
      >
        <BlockStack gap="300">
          <InlineGrid columns="1fr auto">
            {props.label ?? (
              <Text as="h2" variant="headingSm">
                {relatedModelName}
              </Text>
            )}
          </InlineGrid>

          {hasRecord || isCreatingRecord ? (
            <>
              <Box borderColor="border" borderWidth="025" borderRadius="200">
                {!isEditing && recordOption ? (
                  <BlockStack as="ul">
                    <ResourceItem id={recordOption.id} onClick={() => setIsEditing(true)}>
                      <EditableOptionLabelButton option={recordOption} />
                    </ResourceItem>
                  </BlockStack>
                ) : (
                  <>
                    <Box padding="300">
                      <BlockStack gap="300">
                        {props.children}
                        <InlineStack align="space-between">
                          <Button tone="critical" onClick={removeRecord}>
                            Remove
                          </Button>
                          <Button variant="primary" onClick={confirmEdit}>
                            Confirm
                          </Button>
                        </InlineStack>
                      </BlockStack>
                    </Box>
                  </>
                )}
              </Box>
            </>
          ) : (
            <EmptyFormComponent form={hasOneForm} />
          )}
        </BlockStack>
      </RelationshipContext.Provider>
    </>
  );
});

/**
 * TODO - If this gets enabled fix this:
 *    - Workflow
 *      - existingSelectedRecord
 *      - removeSelection
 *      - reselectTheSameRecordInDropdown
 *      - removeSelection
 *      - send
 *    - Right now, this workflow sends null as the hasOne field value, which does nothing. It should be _unlink
 */
const canSelectExistingRecord = false;

const EmptyFormComponent = (props: { form: ReturnType<typeof useHasOneForm> }) => {
  const { form } = props;

  if (canSelectExistingRecord) {
    return <SearchableSingleRelatedModelRecordSelector form={form} override={{ addNewRecord: form.startCreatingRecord }} />;
  }
  return <CreateNewChildButton form={form} />;
};

const CreateNewChildButton = (props: { form: ReturnType<typeof useHasOneForm> }) => {
  const { relatedModelName, startCreatingRecord } = props.form;

  return (
    <>
      <Box borderColor="border" borderWidth="025" borderRadius="200">
        <BlockStack as="ul">
          <ResourceItem id={"add"} onClick={startCreatingRecord}>
            <InlineStack align="start" gap="200">
              <Box>
                <Icon source={PlusCircleIcon} />
              </Box>
              <Text as="p" variant="bodyMd" fontWeight="semibold">
                Add {relatedModelName}
              </Text>
            </InlineStack>
          </ResourceItem>
        </BlockStack>
      </Box>
    </>
  );
};
