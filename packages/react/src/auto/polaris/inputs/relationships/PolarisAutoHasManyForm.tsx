import { BlockStack, Box, Button, Icon, InlineStack, ResourceItem, Text } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasManyController } from "../../../hooks/useHasManyController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { useRequiredChildComponentsValidator } from "../../../hooks/useRequiredChildComponentsValidator.js";
import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { getRecordLabelObject } from "../../../interfaces/AutoRelationshipInputProps.js";
import { EditableOptionLabelButton } from "./EditableOptionLabelButton.js";

type HasManyFormProps = Omit<AutoRelationshipFormProps, "recordFilter">;

const useRecordLabelObjectFromProps = (props: HasManyFormProps) => {
  const recordLabelObject = getRecordLabelObject(props.recordLabel);
  const primaryLabel = useOptionLabelForField(props.field, recordLabelObject?.primary);
  return { ...recordLabelObject, primary: primaryLabel };
};

/**
 * A hasMany field form component for use within <AutoForm></AutoForm> components
 * This component allows related model records to be created, updated, or deleted from the current model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.author.create}>
 *   <AutoHasManyForm field="books" >
 *     <AutoInput field="title" />
 *   </AutoHasManyForm>
 * </AutoForm>
 * ```
 * @param props.field - The hasMany field API identifier
 * @param props.label - The label of the hasMany form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/> and will be rendered for each child record.
 * @param props.recordLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasMany field form component
 */
export const PolarisAutoHasManyForm = autoRelationshipForm((props: HasManyFormProps) => {
  useRequiredChildComponentsValidator(props, "AutoHasManyForm");
  const { metadata } = useAutoRelationship({ field: props.field });
  const { getValues } = useFormContext();

  const { fieldArray, fieldArrayPath } = useHasManyController({ field: props.field });
  const { fields, append, remove } = fieldArray;
  const relationshipContext = useRelationshipContext();

  if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
    throw new Error("PolarisAutoHasManyForm can only be used for HasMany fields");
  }

  const modelName = metadata.configuration.relatedModel?.name;

  const recordLabel = useRecordLabelObjectFromProps(props);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        {props.label ?? (
          <Text as="h2" variant="headingSm">
            {metadata.name}
          </Text>
        )}
      </div>
      <Box borderColor="border" borderWidth="025" borderRadius="200">
        <BlockStack as="ul">
          {fields.flatMap((field, idx) => {
            // since we don't put full data in the field array when we append, we need to
            // get the value directly from the form state
            const record = getValues(`${fieldArrayPath}.${idx}`);

            if (!record) {
              return [];
            }

            const option = getRecordAsOption(record, recordLabel);

            const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
            const metadataPathPrefix = relationshipContext?.transformMetadataPath
              ? relationshipContext.transformMetadataPath(props.field)
              : props.field;

            return (
              <Box key={field._fieldArrayKey} borderColor="border" borderBlockEndWidth="025" id={`${pathPrefix}.${idx}`}>
                {editingIndex == idx ? (
                  <Box padding="300">
                    <BlockStack gap="300">
                      <RelationshipContext.Provider
                        value={{
                          transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                          transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                          fieldArray,
                        }}
                      >
                        {props.children}
                      </RelationshipContext.Provider>
                      <InlineStack align="space-between">
                        <Button tone="critical" onClick={() => remove(idx)} id={`deleteButton_${metadataPathPrefix}.${idx}`}>
                          Delete
                        </Button>
                        <Button variant="primary" onClick={() => setEditingIndex(null)} id={`confirmButton_${metadataPathPrefix}.${idx}`}>
                          Confirm
                        </Button>
                      </InlineStack>
                    </BlockStack>
                  </Box>
                ) : (
                  <ResourceItem id={option.id} name={option.primary?.toString() ?? option.id} onClick={() => setEditingIndex(idx)}>
                    <EditableOptionLabelButton option={option} />
                  </ResourceItem>
                )}
              </Box>
            );
          })}
          <Box>
            <ResourceItem
              id="add"
              name="Add"
              onClick={() => {
                append({});
                setEditingIndex(fields.length);
              }}
            >
              <InlineStack align="start" gap="200">
                <Box>
                  <Icon source={PlusCircleIcon} />
                </Box>
                <Text as="p" variant="bodyMd" fontWeight="semibold">
                  Add {modelName}
                </Text>
              </InlineStack>
            </ResourceItem>
          </Box>
        </BlockStack>
      </Box>
    </>
  );
});
