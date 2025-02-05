import { AutoSelection, BlockStack, Box, Button, Icon, InlineGrid, InlineStack, Listbox, Text } from "@shopify/polaris";
import { PlusIcon, XCircleIcon } from "@shopify/polaris-icons";
import React, { useEffect, useMemo, useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { extractPathsFromChildren } from "../../..//AutoForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasManyThroughController } from "../../../hooks/useHasManyThroughController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { Option, OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";

export const PolarisAutoHasManyThroughForm = autoRelationshipForm(
  (props: {
    field: string;
    label?: React.ReactNode;
    children: React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
  }) => {
    const { field, children } = props;
    const { metadata } = useAutoRelationship({ field });
    const { setValue } = useFormContext();

    const childPaths = children && extractPathsFromChildren(children);
    const hasChildForm = childPaths && childPaths.length > 0;

    const { fieldArrayPath, fieldArray, records, relatedModelOptions, inverseRelatedModelField, joinModelField, joinModelApiIdentifier } =
      useHasManyThroughController(props);

    const { fields, append, remove } = fieldArray;
    const relationshipContext = useRelationshipContext();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
    const metaDataPathPrefix = relationshipContext?.transformMetadataPath
      ? relationshipContext.transformMetadataPath(props.field)
      : pathPrefix;

    useEffect(() => {
      for (const [index, field] of fields.entries()) {
        if (
          inverseRelatedModelField &&
          (field as any)[inverseRelatedModelField] &&
          (field as any)[inverseRelatedModelField].id &&
          !("_link" in field)
        ) {
          // use setValue so that we don't trigger a re-render
          setValue(`${fieldArrayPath}.${index}.${inverseRelatedModelField}._link`, (field as any)[inverseRelatedModelField].id);
        }
      }
    }, [setValue, inverseRelatedModelField, fields, fieldArrayPath]);

    const [addingSibling, setAddingSibling] = useState(false);
    const listboxId = `HasManyThroughListboxInPopover-${field}`;

    if (metadata?.configuration.__typename !== "GadgetHasManyThroughConfig") {
      throw new Error("PolarisAutoHasManyThroughForm can only be used for HasManyThrough fields");
    }

    const {
      search,
      searchFilterOptions: siblingModelOptions,
      relatedModel: { fetching: siblingRecordsLoading, records: siblingRecords },
      pagination: siblingPagination,
    } = relatedModelOptions;
    const siblingModelName = metadata.name ?? "Unknown";

    const joinRecords = useMemo(() => {
      return fields.flatMap((field, idx): [string, number, Record<string, any>][] => {
        const record = records[idx];

        if (!record) {
          return [];
        }

        return [[field._fieldArrayKey, idx, record]];
      });
    }, [fields, records]);

    const primaryLabel = useOptionLabelForField(field, props.primaryLabel);

    return (
      <BlockStack gap="200">
        <InlineGrid columns="1fr auto">
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
          <BlockStack as="ul">
            {joinRecords.map(([fieldKey, idx, record]) => {
              const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];

              const siblingOption = getRecordAsOption(siblingRecord, primaryLabel, props.secondaryLabel, props.tertiaryLabel);

              return (
                <Box key={fieldKey} padding="300">
                  <InlineGrid columns="1fr auto" gap="200" alignItems="center">
                    <Box borderColor="border" borderWidth="025" borderRadius="200">
                      <div style={{ display: "flex", padding: "8px" }}>
                        <Box>
                          <InlineStack gap="200">
                            {renderOptionLabel(siblingOption.label, "primary")}
                            {siblingOption?.tertiaryLabel && renderOptionLabel(siblingOption.tertiaryLabel, "tertiary")}
                          </InlineStack>
                          {siblingOption?.secondaryLabel && renderOptionLabel(siblingOption.secondaryLabel, "secondary")}
                        </Box>
                        <div style={{ marginLeft: "auto", alignSelf: "center" }}>
                          <Button
                            id={`deleteButton_${pathPrefix}.${idx}`}
                            variant="tertiary"
                            icon={XCircleIcon}
                            onClick={() => remove(idx)}
                          />
                        </div>
                      </div>
                      {hasChildForm && (
                        <Box borderColor="border" borderBlockStartWidth="025">
                          <Box padding="200">
                            <RelationshipContext.Provider
                              value={{
                                transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                                transformMetadataPath: (path) => `${metaDataPathPrefix}.${path}`,
                                fieldArray,
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
  }
);

const SiblingOption = (props: { option: Option }) => {
  const { option } = props;

  return (
    <Listbox.Action key={option.id} value={option.id}>
      <div style={{ display: "flex", gap: "200", width: "100%" }}>
        <BlockStack gap="050">
          {renderOptionLabel(option.label, "primary")}
          {option.secondaryLabel && renderOptionLabel(option.secondaryLabel, "secondary")}
        </BlockStack>
        <div style={{ marginLeft: "auto", alignSelf: "center" }}>
          <Icon source={PlusIcon} />
        </div>
      </div>
    </Listbox.Action>
  );
};
