import { PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasManyController } from "../../../hooks/useHasManyController.js";
import { getRecordAsOption, useRecordLabelObjectFromProps } from "../../../hooks/useRelatedModel.js";
import { useRequiredChildComponentsValidator } from "../../../hooks/useRequiredChildComponentsValidator.js";
import { type AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnEditableOptionLabelButton } from "./EditableOptionLabelButton.js";

export const makeShadcnAutoHasManyForm = ({
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Label,
}: Pick<ShadcnElements, "Accordion" | "AccordionContent" | "AccordionItem" | "AccordionTrigger" | "Badge" | "Button" | "Label">) => {
  const EditableOptionLabelButton = makeShadcnEditableOptionLabelButton({ Badge, Button, Label });

  function ShadcnAutoHasManyForm(props: Omit<AutoRelationshipFormProps, "recordFilter">) {
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

    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    return (
      <div>
        <div style={{ marginBottom: "8px" }}>{props.label ?? <Label className="text-sm font-semibold">{metadata.name}</Label>}</div>
        <div>
          <Accordion
            type="single"
            collapsible
            value={editingIndex !== null ? `${fieldArrayPath}.${editingIndex}` : undefined}
            className="w-full"
          >
            {fields.flatMap((field, idx) => {
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
                return (
                  <AccordionItem key={field._fieldArrayKey} value={`${fieldArrayPath}.${idx}`} id={`${pathPrefix}.${idx}`}>
                    <AccordionContent className="border border-gray-300 rounded-md p-3">
                      <RelationshipContext.Provider
                        value={{
                          transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                          transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                          fieldArray,
                        }}
                      >
                        {props.children}
                      </RelationshipContext.Provider>
                      <div className="flex justify-between p-4">
                        <Button variant="destructive" id={`deleteButton_${metadataPathPrefix}.${idx}`} onClick={() => remove(idx)}>
                          Delete
                        </Button>
                        <Button
                          variant="default"
                          type="button"
                          id={`confirmButton_${metadataPathPrefix}.${idx}`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditingIndex(null);
                          }}
                        >
                          Confirm
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              }

              return (
                <AccordionItem
                  key={field._fieldArrayKey}
                  value={`${fieldArrayPath}.${idx}`}
                  id={`${pathPrefix}.${idx}`}
                  onClick={() => setEditingIndex(idx)}
                  className=""
                >
                  <AccordionTrigger onClick={(e) => e.preventDefault()}>
                    <EditableOptionLabelButton option={option} />
                  </AccordionTrigger>
                  <AccordionContent className="border border-gray-300 rounded-md p-3">
                    <RelationshipContext.Provider
                      value={{
                        transformPath: (path) => `${pathPrefix}.${idx}.${path}`,
                        transformMetadataPath: (path) => `${metadataPathPrefix}.${path}`,
                        fieldArray,
                      }}
                    >
                      {props.children}
                    </RelationshipContext.Provider>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <Button
            type="button"
            variant="default"
            className="flex gap-1 border border-gray-300 rounded-md p-2 cursor-pointer"
            onClick={() => {
              append({});
              setEditingIndex(fields.length);
            }}
          >
            <PlusCircleIcon className="w-4 h-4" />
            <Label className="text-sm font-semibold">Add {modelName}</Label>
          </Button>
        </div>
      </div>
    );
  }

  return autoRelationshipForm(ShadcnAutoHasManyForm);
};
