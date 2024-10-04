import { BlockStack, Box, Button, Icon, InlineStack, ResourceItem, Text } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import type { useFieldArray } from "../../../../useActionForm.js";
import { useAutoFormMetadata } from "../../../AutoFormContext.js";
import { autoInput } from "../../../AutoInput.js";
import { useFieldMetadata } from "../../../hooks/useFieldMetadata.js";
import { useHasManyController } from "../../../hooks/useHasManyController.js";
import { getRecordAsOption, getRecordLabel, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";

export interface RelationshipContextValue {
  pathPrefix: string;
  fieldArray?: ReturnType<typeof useFieldArray>;
}

export const RelationshipContext = React.createContext<RelationshipContextValue | undefined>(undefined);

export const useRelationshipContext = () => {
  return React.useContext(RelationshipContext);
};

export const PolarisAutoRelationshipForm = autoInput(
  (props: { field: string; children: React.ReactNode; primaryLabel?: OptionLabel; secondaryLabel?: OptionLabel }) => {
    const { field } = props;
    const { model } = useAutoFormMetadata();

    if (!model) {
      return null;
    }

    const { path, metadata } = useFieldMetadata(field);

    const pathPrefix = path.replace(new RegExp(`^${model.apiIdentifier}\\.`), "");

    if (metadata.configuration.__typename === "GadgetBelongsToConfig") {
      return <PolarisAutoBelongsToRelationshipForm pathPrefix={pathPrefix}>{props.children}</PolarisAutoBelongsToRelationshipForm>;
    } else if (metadata.configuration.__typename === "GadgetHasManyConfig") {
      return (
        <PolarisAutoHasManyRelationshipForm field={field} pathPrefix={pathPrefix} primaryLabel={props.primaryLabel}>
          {props.children}
        </PolarisAutoHasManyRelationshipForm>
      );
    } else {
      return null;
    }
  }
);

const PolarisAutoBelongsToRelationshipForm = (props: { pathPrefix: string; children: React.ReactNode }) => {
  const { pathPrefix } = props;

  return <RelationshipContext.Provider value={{ pathPrefix }}>{props.children}</RelationshipContext.Provider>;
};

const PolarisAutoHasManyRelationshipForm = (props: {
  field: string;
  pathPrefix: string;
  children: React.ReactNode;
  primaryLabel?: OptionLabel;
  secondaryLabel?: OptionLabel;
}) => {
  const { field, pathPrefix } = props;

  const { fieldArray, records, fieldMetadata } = useHasManyController({ field });
  const { metadata } = fieldMetadata;
  const { fields, append, remove } = fieldArray;

  if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
    throw new Error("PolarisAutoHasManyRelationshipForm can only be used for HasMany fields");
  }

  const modelName = metadata.configuration.relatedModel?.name;

  const primaryLabel = useOptionLabelForField(field, props.primaryLabel);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  return (
    <Box borderColor="border" borderWidth="025" borderRadius="200">
      <BlockStack as="ul">
        {fields.map((field, idx) => {
          const record = records[idx];

          const primary = getRecordAsOption(record, primaryLabel);
          const secondary = props.secondaryLabel && getRecordLabel(record, props.secondaryLabel);

          return (
            <Box key={field._fieldArrayKey} borderColor="border" borderBlockEndWidth="025">
              {editingIndex == idx ? (
                <Box padding="300">
                  <BlockStack gap="300">
                    <RelationshipContext.Provider value={{ pathPrefix: `${pathPrefix}.${idx}`, fieldArray }}>
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
                <ResourceItem id={primary.id} name={primary.label ?? primary.id} onClick={() => setEditingIndex(idx)}>
                  {primary.label ? (
                    <BlockStack gap="200">
                      <Text variant="bodyMd" fontWeight="semibold" as="h3">
                        {primary.label}
                      </Text>
                      {secondary && (
                        <Text variant="bodyMd" as="p" tone="subdued">
                          {secondary}
                        </Text>
                      )}
                    </BlockStack>
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
};
