import { ActionList, AutoSelection, BlockStack, Button, ButtonGroup, Divider, Icon, InlineGrid, InlineStack, Listbox, Modal, Popover, Text, } from "@shopify/polaris";
import { MenuHorizontalIcon, PlusCircleIcon } from "@shopify/polaris-icons";
import React from "react";
import { useHasOneForm } from "../../../../useHasOneForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";
export const PolarisAutoHasOneForm = autoRelationshipForm((props) => {
    const { path, setValue, getValues, record, actionsOpen, setActionsOpen, modalOpen, setModalOpen, searchOpen, setSearchOpen, search, searchFilterOptions, pagination, records, isLoading, pathPrefix, metaDataPathPrefix, hasRecord, recordOption, childName, } = useHasOneForm(props);
    return (React.createElement(React.Fragment, null,
        React.createElement(RelationshipContext.Provider, { value: {
                transformPath: (path) => pathPrefix + "." + path,
                transformMetadataPath: (path) => metaDataPathPrefix + "." + path,
            } },
            React.createElement(BlockStack, { gap: "300" },
                React.createElement(InlineGrid, { columns: "1fr auto" },
                    props.label ?? (React.createElement(Text, { as: "h2", variant: "headingSm" }, childName)),
                    hasRecord && (React.createElement(Popover, { active: actionsOpen, activator: React.createElement(Button, { onClick: () => setActionsOpen((prev) => !prev), icon: MenuHorizontalIcon }), onClose: () => setActionsOpen(false) },
                        React.createElement(ActionList, { actionRole: "hasOneFormMenuItem", items: [
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
                                        if (!record)
                                            return;
                                        const { __typename, id: recordId, ...rest } = record;
                                        const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                                        setValue(path, { ...nulledValues, __typename, _unlink: recordId });
                                        setActionsOpen(false);
                                    },
                                    destructive: true,
                                },
                            ] })))),
                hasRecord ? (props.renderSelectedRecord ? (props.renderSelectedRecord(record)) : (React.createElement(React.Fragment, null,
                    React.createElement(Divider, null),
                    React.createElement(InlineStack, { align: "space-between" },
                        React.createElement(BlockStack, { gap: "200" },
                            renderOptionLabel(recordOption.label, "primary"),
                            recordOption.secondaryLabel && renderOptionLabel(recordOption.secondaryLabel, "secondary")),
                        recordOption.tertiaryLabel && renderOptionLabel(recordOption.tertiaryLabel, "tertiary"))))) : (React.createElement(RelatedModelOptionsPopover, { active: searchOpen, activator: React.createElement(RelatedModelOptionsSearch, { modelName: childName, value: search.value, onChange: search.set, onFocus: () => setSearchOpen(true) }), onClose: () => setSearchOpen(false), onScrolledToBottom: pagination.loadNextPage, actions: [
                        React.createElement(Listbox.Action, { key: "add-new-record", value: "add-new-record", divider: true },
                            React.createElement(InlineStack, { gap: "200" },
                                React.createElement(Icon, { source: PlusCircleIcon }),
                                "Add ",
                                childName)),
                    ], options: searchFilterOptions, records: records, onSelect: (record) => {
                        if (record.id === "add-new-record") {
                            setModalOpen(true);
                        }
                        else {
                            setValue(path, { ...record, _link: record.id });
                        }
                    }, isLoading: isLoading, autoSelection: AutoSelection.None }))),
            React.createElement(Modal, { open: modalOpen, onClose: () => setModalOpen(false), title: `Add ${childName}` },
                React.createElement(Modal.Section, null, props.children),
                React.createElement(Modal.Section, null,
                    React.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                        React.createElement(ButtonGroup, null,
                            React.createElement(Button, { variant: "secondary", onClick: () => setModalOpen(false) }, "Cancel"),
                            React.createElement(Button, { variant: "primary", onClick: () => {
                                    const { _unlink, _link, ...rest } = getValues(path);
                                    setValue(path, rest);
                                    setModalOpen(false);
                                } }, "Save"))))))));
});
//# sourceMappingURL=PolarisAutoHasOneForm.js.map