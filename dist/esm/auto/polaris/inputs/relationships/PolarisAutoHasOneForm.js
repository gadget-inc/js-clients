import { BlockStack, Box, Button, Icon, InlineGrid, InlineStack, ResourceItem, Text } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import React from "react";
import { useHasOneForm } from "../../../../useHasOneForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { EditableOptionLabelButton } from "./EditableOptionLabelButton.js";
import { SearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";
/**
 * A hasOne field form component for use within <AutoForm></AutoForm> components
 * This component allows a single related model record to be created, updated, or deleted from the current model.
 * Fields on the related model record are controlled with the nested <AutoInput/> child components.
 *
 * @example
 * ```tsx
 * <AutoForm action={api.car.create}>
 *   <AutoHasOneForm field="engine" >
 *     <AutoInput field="horsepower" />
 *   </AutoHasOneForm>
 * </AutoForm>
 * ```
 * @param props.field - The hasOne field API identifier
 * @param props.label - The label of the hasOne form component
 * @param props.children - The child components to be rendered within the form. This is intended to be used with <AutoInput/> and will be rendered for each child record.
 * @param props.recordLabel - Controls how records on the related model are displayed as options in the relationship field input component.
 *                            When using a string, the string will indicate the field on the related model record to be displayed as the option label.
 *                            When using a function, the function will be called with the record to return a ReactNode to be displayed as the option label
 * @returns The hasOne field form component
 */
export const PolarisAutoHasOneForm = autoRelationshipForm((props) => {
    const hasOneForm = useHasOneForm(props);
    const { isEditing, setIsEditing, isCreatingRecord, pathPrefix, metaDataPathPrefix, hasRecord, recordOption, relatedModelName, confirmEdit, removeRecord, } = hasOneForm;
    return (React.createElement(React.Fragment, null,
        React.createElement(RelationshipContext.Provider, { value: { transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path } },
            React.createElement(BlockStack, { gap: "300" },
                React.createElement(InlineGrid, { columns: "1fr auto" }, props.label ?? (React.createElement(Text, { as: "h2", variant: "headingSm" }, relatedModelName))),
                hasRecord || isCreatingRecord ? (React.createElement(React.Fragment, null,
                    React.createElement(Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" }, !isEditing && recordOption ? (React.createElement(BlockStack, { as: "ul" },
                        React.createElement(ResourceItem, { id: recordOption.id, onClick: () => setIsEditing(true) },
                            React.createElement(EditableOptionLabelButton, { option: recordOption })))) : (React.createElement(React.Fragment, null,
                        React.createElement(Box, { padding: "300" },
                            React.createElement(BlockStack, { gap: "300" },
                                props.children,
                                React.createElement(InlineStack, { align: "space-between" },
                                    React.createElement(Button, { tone: "critical", onClick: removeRecord }, "Remove"),
                                    React.createElement(Button, { variant: "primary", onClick: confirmEdit }, "Confirm"))))))))) : (React.createElement(EmptyFormComponent, { form: hasOneForm }))))));
});
/**
 * TODO - If this gets enabled fix this:
 *    - Workflow
 *      - existingSelectedRecord
 *      - removeSelection
 *      - reselectTheSameRecordInDropdown
 *      - removeSelection
 *      - send
 *    - Right now, this workflow sends null as the hasOne field value, which does nothing. It should be _unlink
 */
const canSelectExistingRecord = false;
const EmptyFormComponent = (props) => {
    const { form } = props;
    if (canSelectExistingRecord) {
        return React.createElement(SearchableSingleRelatedModelRecordSelector, { form: form, override: { addNewRecord: form.startCreatingRecord } });
    }
    return React.createElement(CreateNewChildButton, { form: form });
};
const CreateNewChildButton = (props) => {
    const { relatedModelName, startCreatingRecord } = props.form;
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { borderColor: "border", borderWidth: "025", borderRadius: "200" },
            React.createElement(BlockStack, { as: "ul" },
                React.createElement(ResourceItem, { id: "add", onClick: startCreatingRecord },
                    React.createElement(InlineStack, { align: "start", gap: "200" },
                        React.createElement(Box, null,
                            React.createElement(Icon, { source: PlusCircleIcon })),
                        React.createElement(Text, { as: "p", variant: "bodyMd", fontWeight: "semibold" },
                            "Add ",
                            relatedModelName)))))));
};
//# sourceMappingURL=PolarisAutoHasOneForm.js.map