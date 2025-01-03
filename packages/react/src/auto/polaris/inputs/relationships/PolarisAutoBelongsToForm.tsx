import {
  ActionList,
  AutoSelection,
  BlockStack,
  Button,
  ButtonGroup,
  Icon,
  InlineGrid,
  InlineStack,
  Listbox,
  Modal,
  Popover,
  Text,
} from "@shopify/polaris";
import { MenuHorizontalIcon, PlusCircleIcon } from "@shopify/polaris-icons";
import React, { useEffect, useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { get } from "../../../../utils.js";
import { autoInput } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useBelongsToController } from "../../../hooks/useBelongsToController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";

export const PolarisAutoBelongsToForm = autoInput(
  (props: {
    field: string;
    children: React.ReactNode;
    renderSelectedRecord?: (record: Record<string, any>) => React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
  }) => {
    const { field } = props;
    const { path, metadata } = useAutoRelationship({ field });
    const {
      setValue,
      getValues,
      formState: { defaultValues, submitCount, isSubmitSuccessful },
    } = useFormContext();
    const { record, relatedModelOptions } = useBelongsToController(props);
    const [actionsOpen, setActionsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const {
      search,
      searchFilterOptions,
      pagination,
      relatedModel: { records, fetching: isLoading },
    } = relatedModelOptions;
    const relationshipContext = useRelationshipContext();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;

    const primaryLabel = useOptionLabelForField(field, props.primaryLabel);
    const hasRecord = !!(record && !("_unlink" in record && record._unlink));
    const recordOption = record ? getRecordAsOption(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel) : null;

    const defaultRecordId = get(defaultValues, path)?.id;

    // if the child record is created we need to set the id to the default record id
    // that comes from the response to the action mutation
    useEffect(() => {
      if (isSubmitSuccessful && record && !record.id && !("_link" in record) && !("_unlink" in record) && defaultRecordId) {
        setValue(path + ".id", defaultRecordId);
      }
    }, [record, defaultRecordId, path, setValue, submitCount, isSubmitSuccessful]);

    const parentName = metadata.name ?? "Unknown";

    return (
      <>
        <BlockStack gap="300">
          <InlineGrid columns="1fr auto">
            <Text as="h2" variant="headingSm">
              {parentName}
            </Text>
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
                        setModalOpen(true);
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
            props.renderSelectedRecord ? (
              props.renderSelectedRecord(record)
            ) : (
              <InlineStack align="space-between">
                <BlockStack gap="200">
                  {renderOptionLabel(recordOption!.label, "primary")}
                  {recordOption!.secondaryLabel && renderOptionLabel(recordOption!.secondaryLabel, "secondary")}
                </BlockStack>
                {recordOption!.tertiaryLabel && renderOptionLabel(recordOption!.tertiaryLabel, "tertiary")}
              </InlineStack>
            )
          ) : (
            <RelatedModelOptionsPopover
              active={searchOpen}
              activator={
                <RelatedModelOptionsSearch
                  modelName={parentName}
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
                    Add {parentName}
                  </InlineStack>
                </Listbox.Action>,
              ]}
              options={searchFilterOptions}
              records={records}
              onSelect={(record) => {
                if (record.id === "add-new-record") {
                  setModalOpen(true);
                } else {
                  setValue(path, { ...record, _link: record.id });
                }
              }}
              isLoading={isLoading}
              autoSelection={AutoSelection.None}
            />
          )}
        </BlockStack>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={`Add ${parentName}`}>
          <RelationshipContext.Provider value={{ transformPath: (path) => pathPrefix + "." + path }}>
            <Modal.Section>{props.children}</Modal.Section>
            <Modal.Section>
              <div style={{ float: "right", paddingBottom: "16px" }}>
                <ButtonGroup>
                  <Button variant="secondary" onClick={() => setModalOpen(false)}>
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
                      setModalOpen(false);
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
  }
);
