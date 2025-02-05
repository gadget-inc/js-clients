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
import React from "react";
import { useHasOneForm } from "../../../../useHasOneForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";

export const PolarisAutoHasOneForm = autoRelationshipForm(
  (props: {
    field: string;
    children: React.ReactNode;
    renderSelectedRecord?: (record: Record<string, any>) => React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
  }) => {
    const {
      path,
      setValue,
      getValues,
      record,
      actionsOpen,
      setActionsOpen,
      modalOpen,
      setModalOpen,
      searchOpen,
      setSearchOpen,
      search,
      searchFilterOptions,
      pagination,
      records,
      isLoading,
      pathPrefix,
      hasRecord,
      recordOption,
      childName,
    } = useHasOneForm(props);

    return (
      <>
        <RelationshipContext.Provider value={{ transformPath: (path) => pathPrefix + "." + path }}>
          <BlockStack gap="300">
            <InlineGrid columns="1fr auto">
              <Text as="h2" variant="headingSm">
                {childName}
              </Text>
              {hasRecord && (
                <Popover
                  active={actionsOpen}
                  activator={<Button onClick={() => setActionsOpen((prev) => !prev)} icon={MenuHorizontalIcon} />}
                  onClose={() => setActionsOpen(false)}
                >
                  <ActionList
                    actionRole="hasOneFormMenuItem"
                    items={[
                      {
                        content: `Edit ${childName.toLocaleLowerCase()}`,
                        onAction: () => {
                          setModalOpen(true);
                          setActionsOpen(false);
                        },
                      },
                      {
                        content: `Remove ${childName.toLocaleLowerCase()}`,
                        onAction: () => {
                          if (!record) return;
                          const { __typename, id: recordId, ...rest } = record;
                          const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                          setValue(path, { ...nulledValues, __typename, _unlink: recordId });
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
                props.renderSelectedRecord(record as Record<string, any>)
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
                    modelName={childName}
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
                      Add {childName}
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
          <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={`Add ${childName}`}>
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
                      const { _unlink, _link, ...rest } = getValues(path);
                      setValue(path, rest);
                      setModalOpen(false);
                    }}
                  >
                    Save
                  </Button>
                </ButtonGroup>
              </div>
            </Modal.Section>
          </Modal>
        </RelationshipContext.Provider>
      </>
    );
  }
);
