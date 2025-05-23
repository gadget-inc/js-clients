import { ActionList, BlockStack, Button, ButtonGroup, Divider, InlineGrid, InlineStack, Modal, Popover, Text } from "@shopify/polaris";
import { MenuHorizontalIcon } from "@shopify/polaris-icons";
import React from "react";
import { useBelongsToForm } from "../../../../useBelongsToForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import { SearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";
import { renderOptionLabel } from "./utils.js";

/**
 * A belongsTo field form component for use within <AutoForm></AutoForm> components
 * This component allows related model records to be created or updated from the current model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.modelA.create}>
 *   <AutoBelongsToForm field="parentModel" >
 *     <AutoInput field="parentModelField" />
 *   </AutoBelongsToForm>
 * </AutoForm>
 * ```
 * @param props.field - The belongsTo field API identifier
 * @param props.label - The label of the belongTo form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/>.
 * @param props.optionLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The belongsTo field form component
 */
export const PolarisAutoBelongsToForm = autoRelationshipForm((props: AutoRelationshipFormProps) => {
  const belongsToForm = useBelongsToForm(props);

  const {
    record,
    actionsOpen,
    isEditing,
    setActionsOpen,
    setIsEditing,
    pathPrefix,
    hasRecord,
    recordOption,
    relatedModelName: parentName,
    path,
    setValue,
    getValues,
    metaDataPathPrefix,
  } = belongsToForm;

  return (
    <>
      <BlockStack gap="300">
        <InlineGrid columns="1fr auto">
          {props.label ?? (
            <Text as="h2" variant="headingSm">
              {parentName}
            </Text>
          )}
          {hasRecord && (
            <Popover
              active={actionsOpen}
              activator={<Button onClick={() => setActionsOpen((prev) => !prev)} icon={MenuHorizontalIcon} />}
              onClose={() => setActionsOpen(false)}
            >
              <ActionList
                actionRole="menuitem"
                items={[
                  {
                    content: `Edit ${parentName.toLocaleLowerCase()}`,
                    onAction: () => {
                      setIsEditing(true);
                      setActionsOpen(false);
                    },
                  },
                  {
                    content: `Remove ${parentName.toLocaleLowerCase()}`,
                    onAction: () => {
                      const { __typename, ...rest } = record;
                      const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                      setValue(path, { ...nulledValues, __typename, _unlink: true });
                      setActionsOpen(false);
                    },
                    destructive: true,
                  },
                ]}
              />
            </Popover>
          )}
        </InlineGrid>
        {hasRecord ? (
          <>
            <Divider />
            <InlineStack align="space-between">
              <BlockStack gap="200">
                {renderOptionLabel(recordOption!.primary, "primary")}
                {recordOption!.secondary && renderOptionLabel(recordOption!.secondary, "secondary")}
              </BlockStack>
              {recordOption!.tertiary && renderOptionLabel(recordOption!.tertiary, "tertiary")}
            </InlineStack>
          </>
        ) : (
          <SearchableSingleRelatedModelRecordSelector form={belongsToForm} />
        )}
      </BlockStack>
      <Modal open={isEditing} onClose={() => setIsEditing(false)} title={`Add ${parentName}`}>
        <RelationshipContext.Provider
          value={{ transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path }}
        >
          <Modal.Section>{props.children}</Modal.Section>
          <Modal.Section>
            <div style={{ float: "right", paddingBottom: "16px" }}>
              <ButtonGroup>
                <Button variant="secondary" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    const { _unlink, _link, id: recordId, ...rest } = getValues(path);

                    if (recordId) {
                      setValue(path, { ...rest, id: recordId });
                    } else {
                      setValue(path, rest);
                    }
                    setIsEditing(false);
                  }}
                >
                  Save
                </Button>
              </ButtonGroup>
            </div>
          </Modal.Section>
        </RelationshipContext.Provider>
      </Modal>
    </>
  );
});
