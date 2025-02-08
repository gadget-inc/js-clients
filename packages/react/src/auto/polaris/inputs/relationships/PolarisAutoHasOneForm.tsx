import { BlockStack, Box, Button, Icon, InlineGrid, InlineStack, ResourceItem, Text } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import React from "react";
import { useHasOneForm } from "../../../../useHasOneForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { SearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";
import { renderOptionLabel } from "./utils.js";

export const PolarisAutoHasOneForm = autoRelationshipForm(
  (props: {
    field: string;
    children: React.ReactNode;
    label?: React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
  }) => {
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
                  {!isEditing ? (
                    <BlockStack as="ul">
                      <ResourceItem id={recordOption!.id} onClick={() => setIsEditing(true)}>
                        <InlineStack align="space-between">
                          <BlockStack gap="200">
                            {renderOptionLabel(recordOption!.label, "primary")}
                            {recordOption!.secondaryLabel && renderOptionLabel(recordOption!.secondaryLabel, "secondary")}
                          </BlockStack>
                          {recordOption!.tertiaryLabel && renderOptionLabel(recordOption!.tertiaryLabel, "tertiary")}
                        </InlineStack>
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
  }
);

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
