import { ActionList, AutoSelection, BlockStack, Button, ButtonGroup, Icon, InlineGrid, InlineStack, Listbox, Modal, Popover, Text, } from "@shopify/polaris";
import { MenuHorizontalIcon, PlusCircleIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { autoInput } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship } from "../../../hooks/useAutoRelationship.js";
import { useBelongsToController } from "../../../hooks/useBelongsToController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import { RelatedModelOptionsPopover, RelatedModelOptionsSearch } from "./RelatedModelOptions.js";
import { renderOptionLabel } from "./utils.js";
export const PolarisAutoBelongsToForm = autoInput((props) => {
    const { field } = props;
    const { pathPrefix, path, metadata } = useAutoRelationship({ field });
    const { setValue, getValues } = useFormContext();
    const { record, relatedModelOptions } = useBelongsToController(props);
    const [actionsOpen, setActionsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const configuration = metadata.configuration;
    const { search, searchFilterOptions, pagination, relatedModel: { records, fetching: isLoading }, } = relatedModelOptions;
    const primaryLabel = useOptionLabelForField(field, props.primaryLabel);
    const hasRecord = !!(record && !("_unlink" in record && record._unlink));
    const recordOption = record ? getRecordAsOption(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel) : null;
    const parentName = configuration.relatedModel?.name ?? "Unknown";
    return (React.createElement(React.Fragment, null,
        React.createElement(BlockStack, { gap: "300" },
            React.createElement(InlineGrid, { columns: "1fr auto" },
                React.createElement(Text, { as: "h2", variant: "headingSm" }, parentName),
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
            hasRecord ? (props.renderParent ? (props.renderParent(record)) : (React.createElement(InlineStack, { align: "space-between" },
                React.createElement(BlockStack, { gap: "200" },
                    renderOptionLabel(recordOption.label, "primary"),
                    recordOption.secondaryLabel && renderOptionLabel(recordOption.secondaryLabel, "secondary")),
                recordOption.tertiaryLabel && renderOptionLabel(recordOption.tertiaryLabel, "tertiary")))) : (React.createElement(RelatedModelOptionsPopover, { active: searchOpen, activator: React.createElement(RelatedModelOptionsSearch, { modelName: parentName, value: search.value, onChange: search.set, onFocus: () => setSearchOpen(true) }), onClose: () => setSearchOpen(false), onScrolledToBottom: pagination.loadNextPage, actions: [
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
            React.createElement(RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path } },
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
//# sourceMappingURL=PolarisAutoBelongsToForm.js.map