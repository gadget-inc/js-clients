import { ActionList, BlockStack, Button, ButtonGroup, Divider, InlineGrid, InlineStack, Modal, Popover, Text } from "@shopify/polaris";
import { MenuHorizontalIcon } from "@shopify/polaris-icons";
import React from "react";
import { useBelongsToForm } from "../../../../useBelongsToForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
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
                        renderOptionLabel(recordOption.primary, "primary"),
                        recordOption.secondary && renderOptionLabel(recordOption.secondary, "secondary")),
                    recordOption.tertiary && renderOptionLabel(recordOption.tertiary, "tertiary")))) : (React.createElement(SearchableSingleRelatedModelRecordSelector, { form: belongsToForm }))),
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