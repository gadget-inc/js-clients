import { ActionList, AutoSelection, BlockStack, Button, ButtonGroup, Divider, Icon, InlineGrid, InlineStack, Listbox, Modal, Popover, Text, } from "@shopify/polaris";
import { MenuHorizontalIcon, PlusCircleIcon } from "@shopify/polaris-icons";
import React from "react";
import { useBelongsToForm } from "../../../../useBelongsToForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";
export const PolarisAutoBelongsToForm = autoRelationshipForm((props) => {
    const { record, actionsOpen, modalOpen, setActionsOpen, searchOpen, setSearchOpen, setModalOpen, search, searchFilterOptions, pagination, records, isLoading, pathPrefix, hasRecord, recordOption, parentName, path, setValue, getValues, metaDataPathPrefix, } = useBelongsToForm(props);
    return (React.createElement(React.Fragment, null,
        React.createElement(BlockStack, { gap: "300" },
            React.createElement(InlineGrid, { columns: "1fr auto" },
                props.label ?? (React.createElement(Text, { as: "h2", variant: "headingSm" }, parentName)),
                hasRecord && (React.createElement(Popover, { active: actionsOpen, activator: React.createElement(Button, { onClick: () => setActionsOpen((prev) => !prev), icon: MenuHorizontalIcon }), onClose: () => setActionsOpen(false) },
                    React.createElement(ActionList, { actionRole: "menuitem", items: [
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
                        ] })))),
            hasRecord ? (props.renderSelectedRecord ? (props.renderSelectedRecord(record)) : (React.createElement(React.Fragment, null,
                React.createElement(Divider, null),
                React.createElement(InlineStack, { align: "space-between" },
                    React.createElement(BlockStack, { gap: "200" },
                        renderOptionLabel(recordOption.label, "primary"),
                        recordOption.secondaryLabel && renderOptionLabel(recordOption.secondaryLabel, "secondary")),
                    recordOption.tertiaryLabel && renderOptionLabel(recordOption.tertiaryLabel, "tertiary"))))) : (React.createElement(RelatedModelOptionsPopover, { active: searchOpen, activator: React.createElement(RelatedModelOptionsSearch, { modelName: parentName, value: search.value, onChange: search.set, onFocus: () => setSearchOpen(true) }), onClose: () => setSearchOpen(false), onScrolledToBottom: pagination.loadNextPage, actions: [
                    React.createElement(Listbox.Action, { key: "add-new-record", value: "add-new-record", divider: true },
                        React.createElement(InlineStack, { gap: "200" },
                            React.createElement(Icon, { source: PlusCircleIcon }),
                            "Add ",
                            parentName)),
                ], options: searchFilterOptions, records: records, onSelect: (record) => {
                    if (record.id === "add-new-record") {
                        setModalOpen(true);
                    }
                    else {
                        setValue(path, { ...record, _link: record.id });
                    }
                }, isLoading: isLoading, autoSelection: AutoSelection.None }))),
        React.createElement(Modal, { open: modalOpen, onClose: () => setModalOpen(false), title: `Add ${parentName}` },
            React.createElement(RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
                React.createElement(Modal.Section, null, props.children),
                React.createElement(Modal.Section, null,
                    React.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                        React.createElement(ButtonGroup, null,
                            React.createElement(Button, { variant: "secondary", onClick: () => setModalOpen(false) }, "Cancel"),
                            React.createElement(Button, { variant: "primary", onClick: () => {
                                    const { _unlink, _link, id: recordId, ...rest } = getValues(path);
                                    if (recordId) {
                                        setValue(path, { ...rest, id: recordId });
                                    }
                                    else {
                                        setValue(path, rest);
                                    }
                                    setModalOpen(false);
                                } }, "Save"))))))));
});
//# sourceMappingURL=PolarisAutoBelongsToForm.js.map