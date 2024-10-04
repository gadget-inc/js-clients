import { BlockStack, Box, Button, Icon, InlineStack, ResourceItem, Text } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { autoInput } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship } from "../../../hooks/useAutoRelationship.js";
import { useHasManyController } from "../../../hooks/useHasManyController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { renderOptionLabel } from "./utils.js";

export const PolarisAutoHasManyForm = autoInput(
  (props: {
    field: string;
    children: React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
  }) => {
    const { field } = props;
    const { pathPrefix, metadata } = useAutoRelationship({ field });
    const { getValues } = useFormContext();
    const { fieldArray, fieldArrayPath } = useHasManyController({ field });
    const { fields, append, remove } = fieldArray;

    if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
      throw new Error("PolarisAutoHasManyForm can only be used for HasMany fields");
    }

    const modelName = metadata.configuration.relatedModel?.name;

    const primaryLabel = useOptionLabelForField(field, props.primaryLabel);

    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    return (
      <Box borderColor="border" borderWidth="025" borderRadius="200">
        <BlockStack as="ul">
          {fields.flatMap((field, idx) => {
            // since we don't put full data in the field array when we append, we need to
            // get the value directly from the form state
            const record = getValues(`${fieldArrayPath}.${idx}`);

            if (!record) {
              return [];
            }

            const option = getRecordAsOption(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel);

            return (
              <Box key={field._fieldArrayKey} borderColor="border" borderBlockEndWidth="025">
                {editingIndex == idx ? (
                  <Box padding="300">
                    <BlockStack gap="300">
                      <RelationshipContext.Provider
                        value={{
                          transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                          transformMetadataPath: (path) => `${pathPrefix}.${path}`,
                          fieldArray,
                        }}
                      >
                        {props.children}
                      </RelationshipContext.Provider>
                      <InlineStack align="space-between">
                        <Button tone="critical" onClick={() => remove(idx)}>
                          Delete
                        </Button>
                        <Button variant="primary" onClick={() => setEditingIndex(null)}>
                          Confirm
                        </Button>
                      </InlineStack>
                    </BlockStack>
                  </Box>
                ) : (
                  <ResourceItem id={option.id} name={option.label?.toString() ?? option.id} onClick={() => setEditingIndex(idx)}>
                    {option.label ? (
                      <InlineStack align="space-between">
                        <BlockStack gap="200">
                          {renderOptionLabel(option.label, "primary")}
                          {option.secondaryLabel && renderOptionLabel(option.secondaryLabel, "secondary")}
                        </BlockStack>
                        {option.tertiaryLabel && renderOptionLabel(option.tertiaryLabel, "tertiary")}
                      </InlineStack>
                    ) : (
                      <Text variant="bodyMd" as="h3" tone="subdued">
                        Click to edit...
                      </Text>
                    )}
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
    );
  }
);
