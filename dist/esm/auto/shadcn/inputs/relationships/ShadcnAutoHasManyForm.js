import { PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasManyController } from "../../../hooks/useHasManyController.js";
import { getRecordAsOption, useRecordLabelObjectFromProps } from "../../../hooks/useRelatedModel.js";
import { useRequiredChildComponentsValidator } from "../../../hooks/useRequiredChildComponentsValidator.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
export const makeShadcnAutoHasManyForm = ({ Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Button, Label, }) => {
    const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });
    function ShadcnAutoHasManyForm(props) {
        useRequiredChildComponentsValidator(props, "AutoHasManyForm");
        const { metadata } = useAutoRelationship({ field: props.field });
        const { getValues } = useFormContext();
        const { fieldArray, fieldArrayPath } = useHasManyController({ field: props.field });
        const { fields, append, remove } = fieldArray;
        const relationshipContext = useRelationshipContext();
        if (metadata.configuration.__typename !== "GadgetHasManyConfig") {
            throw new Error("ShadcnAutoHasManyForm can only be used for HasMany fields");
        }
        const modelName = metadata.configuration.relatedModel?.name;
        const recordLabel = useRecordLabelObjectFromProps(props);
        const [editingIndex, setEditingIndex] = useState(null);
        return (React.createElement("div", null,
            React.createElement("div", { style: { marginBottom: "8px" } }, props.label ?? React.createElement(Label, { className: "text-sm font-semibold" }, metadata.name)),
            React.createElement("div", null,
                React.createElement(Accordion, { type: "single", collapsible: true, value: editingIndex !== null ? `${fieldArrayPath}.${editingIndex}` : undefined, className: "w-full" }, fields.flatMap((field, idx) => {
                    // since we don't put full data in the field array when we append, we need to
                    // get the value directly from the form state
                    const record = getValues(`${fieldArrayPath}.${idx}`);
                    if (!record) {
                        return [];
                    }
                    const option = getRecordAsOption(record, recordLabel);
                    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
                    const metadataPathPrefix = relationshipContext?.transformMetadataPath
                        ? relationshipContext.transformMetadataPath(props.field)
                        : props.field;
                    const isEditing = editingIndex === idx;
                    if (isEditing) {
                        return (React.createElement(AccordionItem, { key: field._fieldArrayKey, value: `${fieldArrayPath}.${idx}`, id: `${pathPrefix}.${idx}` },
                            React.createElement(AccordionContent, { className: "border border-gray-300 rounded-md p-3" },
                                React.createElement(RelationshipContext.Provider, { value: {
                                        transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                                        transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                                        fieldArray,
                                    } }, props.children),
                                React.createElement("div", { className: "flex justify-between p-4" },
                                    React.createElement(Button, { variant: "destructive", id: `deleteButton_${metadataPathPrefix}.${idx}`, onClick: () => remove(idx) }, "Delete"),
                                    React.createElement(Button, { variant: "default", type: "button", id: `confirmButton_${metadataPathPrefix}.${idx}`, onClick: (e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setEditingIndex(null);
                                        } }, "Confirm")))));
                    }
                    return (React.createElement(AccordionItem, { key: field._fieldArrayKey, value: `${fieldArrayPath}.${idx}`, id: `${pathPrefix}.${idx}`, onClick: () => setEditingIndex(idx), className: "" },
                        React.createElement(AccordionTrigger, { onClick: (e) => e.preventDefault() }, option.primary ? (React.createElement("div", { className: "flex justify-between w-full items-center" },
                            React.createElement("div", { className: "flex flex-col gap-1 items-start" },
                                renderOptionLabel(option.primary, "primary"),
                                option.secondary && renderOptionLabel(option.secondary, "secondary")),
                            option.tertiary && React.createElement("div", { className: "flex items-center" }, renderOptionLabel(option.tertiary, "tertiary")))) : (React.createElement(Label, null, "Click to edit..."))),
                        React.createElement(AccordionContent, { className: "border border-gray-300 rounded-md p-3" },
                            React.createElement(RelationshipContext.Provider, { value: {
                                    transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                                    transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                                    fieldArray,
                                } }, props.children))));
                })),
                React.createElement(Button, { type: "button", variant: "default", className: "flex gap-1 border border-gray-300 rounded-md p-2 cursor-pointer", onClick: () => {
                        append({});
                        setEditingIndex(fields.length);
                    } },
                    React.createElement(PlusCircleIcon, { className: "w-4 h-4" }),
                    React.createElement(Label, { className: "text-sm font-semibold" },
                        "Add ",
                        modelName)))));
    }
    return autoRelationshipForm(ShadcnAutoHasManyForm);
};
//# sourceMappingURL=ShadcnAutoHasManyForm.js.map