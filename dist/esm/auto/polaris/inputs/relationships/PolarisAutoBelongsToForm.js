import { ActionList, BlockStack, Button, ButtonGroup, Divider, InlineGrid, InlineStack, Modal, Popover, Text } from "@shopify/polaris";
import { MenuHorizontalIcon } from "@shopify/polaris-icons";
import React from "react";
import { useBelongsToForm } from "../../../../useBelongsToForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { SearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";
import { renderOptionLabel } from "./utils.js";
export const PolarisAutoBelongsToForm = autoRelationshipForm((props) => {
    const belongsToForm = useBelongsToForm(props);
    const { record, actionsOpen, isEditing, setActionsOpen, setIsEditing, pathPrefix, hasRecord, recordOption, relatedModelName: parentName, path, setValue, getValues, metaDataPathPrefix, } = belongsToForm;
    return (React.createElement(React.Fragment, null,
        React.createElement(BlockStack, { gap: "300" },
            React.createElement(InlineGrid, { columns: "1fr auto" },
                props.label ?? (React.createElement(Text, { as: "h2", variant: "headingSm" }, parentName)),
                hasRecord && (React.createElement(Popover, { active: actionsOpen, activator: React.createElement(Button, { onClick: () => setActionsOpen((prev) => !prev), icon: MenuHorizontalIcon }), onClose: () => setActionsOpen(false) },
                    React.createElement(ActionList, { actionRole: "menuitem", items: [
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
                        ] })))),
            hasRecord ? (React.createElement(React.Fragment, null,
                React.createElement(Divider, null),
                React.createElement(InlineStack, { align: "space-between" },
                    React.createElement(BlockStack, { gap: "200" },
                        renderOptionLabel(recordOption.label, "primary"),
                        recordOption.secondaryLabel && renderOptionLabel(recordOption.secondaryLabel, "secondary")),
                    recordOption.tertiaryLabel && renderOptionLabel(recordOption.tertiaryLabel, "tertiary")))) : (React.createElement(SearchableSingleRelatedModelRecordSelector, { form: belongsToForm }))),
        React.createElement(Modal, { open: isEditing, onClose: () => setIsEditing(false), title: `Add ${parentName}` },
            React.createElement(RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
                React.createElement(Modal.Section, null, props.children),
                React.createElement(Modal.Section, null,
                    React.createElement("div", { style: { float: "right", paddingBottom: "16px" } },
                        React.createElement(ButtonGroup, null,
                            React.createElement(Button, { variant: "secondary", onClick: () => setIsEditing(false) }, "Cancel"),
                            React.createElement(Button, { variant: "primary", onClick: () => {
                                    const { _unlink, _link, id: recordId, ...rest } = getValues(path);
                                    if (recordId) {
                                        setValue(path, { ...rest, id: recordId });
                                    }
                                    else {
                                        setValue(path, rest);
                                    }
                                    setIsEditing(false);
                                } }, "Save"))))))));
});
//# sourceMappingURL=PolarisAutoBelongsToForm.js.map