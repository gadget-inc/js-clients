import { PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasManyController } from "../../../hooks/useHasManyController.js";
import { getRecordAsOption, useRecordLabelObjectFromProps } from "../../../hooks/useRelatedModel.js";
import { useRequiredChildComponentsValidator } from "../../../hooks/useRequiredChildComponentsValidator.js";
import { makeShadcnEditableOptionLabelButton } from "./EditableOptionLabelButton.js";
export const makeShadcnAutoHasManyForm = ({ Accordion, AccordionContent, AccordionItem, Badge, Button, Label, }) => {
    const EditableOptionLabelButton = makeShadcnEditableOptionLabelButton({ Badge, Button, Label });
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
            React.createElement("div", { style: { marginBottom: "8px" } }, props.label ?? React.createElement("h2", { className: "text-lg font-medium" }, metadata.name)),
            React.createElement("div", null,
                React.createElement(Accordion, { type: "single", collapsible: true, value: editingIndex !== null ? `${fieldArrayPath}.${editingIndex}` : undefined, className: "w-full" },
                    fields.flatMap((field, idx) => {
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
                        const position = idx === 0 ? "top" : "middle";
                        if (isEditing) {
                            return (React.createElement(AccordionItem, { key: field._fieldArrayKey, value: `${fieldArrayPath}.${idx}`, id: `${pathPrefix}.${idx}` },
                                React.createElement(AccordionContent, { className: `p-3 ${positionalBorder[position]}` },
                                    React.createElement(RelationshipContext.Provider, { value: {
                                            transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                                            transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                                            fieldArray,
                                        } }, props.children),
                                    React.createElement("div", { className: "flex justify-between pt-4" },
                                        React.createElement(Button, { variant: "destructive", id: `deleteButton_${metadataPathPrefix}.${idx}`, onClick: () => remove(idx) }, "Delete"),
                                        React.createElement(Button, { variant: "default", type: "button", id: `confirmButton_${metadataPathPrefix}.${idx}`, onClick: () => setEditingIndex(null) }, "Confirm")))));
                        }
                        return (React.createElement(AccordionItem, { key: field._fieldArrayKey, value: `${fieldArrayPath}.${idx}`, id: `${pathPrefix}.${idx}` },
                            React.createElement(AccordionSection, { position: position, onClick: () => setEditingIndex(idx) },
                                React.createElement(EditableOptionLabelButton, { option: option }))));
                    }),
                    React.createElement(AccordionSection, { position: fields.length === 0 ? "only" : "bottom", onClick: () => {
                            append({});
                            setEditingIndex(fields.length);
                        } },
                        React.createElement(PlusCircleIcon, { className: "w-4 h-4" }),
                        React.createElement(Label, { className: "text-sm font-semibold cursor-pointer" },
                            "Add ",
                            modelName))))));
    }
    function AccordionSection(props) {
        const { position, children, onClick } = props;
        return (React.createElement(Button, { type: "button", variant: "outline", className: `flex w-full h-fit justify-start gap-2 px-4 py-3 cursor-pointer ${position ? `${positionalBorder[position]}` : ""}`, onClick: (e) => {
                onClick?.();
            } }, children));
    }
    return autoRelationshipForm(ShadcnAutoHasManyForm);
};
const positionalBorder = {
    top: "rounded-t-md rounded-b-none border-0 border-x-[1px] border-t-[1px]",
    middle: "rounded-none border-0 border-x-[1px]",
    bottom: "rounded-b-md rounded-t-none border-0 border-x-[1px] border-b-[1px]",
    only: "rounded-md border-0 border-x-[1px] border-y-[1px]",
};
//# sourceMappingURL=ShadcnAutoHasManyForm.js.map