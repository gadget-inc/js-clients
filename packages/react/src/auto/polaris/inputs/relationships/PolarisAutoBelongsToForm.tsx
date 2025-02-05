import {
  ActionList,
  AutoSelection,
  BlockStack,
  Button,
  ButtonGroup,
  Divider,
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
import { useHasBelongsForm } from "../../../../useHasBelongsForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";

export const PolarisAutoBelongsToForm = autoRelationshipForm(
  (props: {
    field: string;
    children: React.ReactNode;
    label?: React.ReactNode;
    renderSelectedRecord?: (record: Record<string, any>) => React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
  }) => {
    const {
      record,
      actionsOpen,
      modalOpen,
      setActionsOpen,
      searchOpen,
      setSearchOpen,
      setModalOpen,
      search,
      searchFilterOptions,
      pagination,
      records,
      isLoading,
      pathPrefix,
      hasRecord,
      recordOption,
      parentName,
      path,
      setValue,
      getValues,
    } = useHasBelongsForm(props);

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
              <>
                <Divider />
                <InlineStack align="space-between">
                  <BlockStack gap="200">
                    {renderOptionLabel(recordOption!.label, "primary")}
                    {recordOption!.secondaryLabel && renderOptionLabel(recordOption!.secondaryLabel, "secondary")}
                  </BlockStack>
                  {recordOption!.tertiaryLabel && renderOptionLabel(recordOption!.tertiaryLabel, "tertiary")}
                </InlineStack>
              </>
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
