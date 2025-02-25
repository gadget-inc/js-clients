import { PlusCircleIcon } from "lucide-react";
import React, { useCallback } from "react";
import { useHasOneForm } from "../../../../useHasOneForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import type { AutoRelationshipFormProps } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnEditableOptionLabelButton } from "./EditableOptionLabelButton.js";
import { makeSearchableSingleRelatedModelRecordSelector } from "./SearchableSingleRelatedModelRecordSelector.js";

export const makeShadcnAutoHasOneForm = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandInput,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionTrigger,
}: Pick<
  ShadcnElements,
  | "Badge"
  | "Button"
  | "Command"
  | "CommandItem"
  | "CommandInput"
  | "Label"
  | "CommandList"
  | "CommandEmpty"
  | "CommandGroup"
  | "Checkbox"
  | "Accordion"
  | "AccordionItem"
  | "AccordionTrigger"
>) => {
  const SearchableSingleRelatedModelRecordSelector = makeSearchableSingleRelatedModelRecordSelector({
    Command,
    CommandItem,
    CommandInput,
    Label,
    CommandList,
    CommandEmpty,
    CommandGroup,
    Checkbox,
  });
  const EditableOptionLabelButton = makeShadcnEditableOptionLabelButton({ Badge, Button, Label });

  function ShadcnHasOneForm(props: Omit<AutoRelationshipFormProps, "recordFilter">) {
    const { field } = props;
    const form = useHasOneForm(props);
    const {
      record,
      isEditing,
      setIsEditing,
      pathPrefix,
      metaDataPathPrefix,
      hasRecord,
      recordOption,
      isCreatingRecord,
      confirmEdit,
      removeRecord,
      relatedModelName,
    } = form;

    const clickConfirmEdit = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        confirmEdit();
      },
      [confirmEdit]
    );

    const clickRemoveRecord = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        removeRecord();
      },
      [removeRecord]
    );

    return (
      <RelationshipContext.Provider
        value={{ transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path }}
      >
        <div>
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-lg font-medium">{relatedModelName}</h2>
          </div>
          {hasRecord || isCreatingRecord ? (
            <Accordion type="single" collapsible className="w-full">
              {!isEditing ? (
                <AccordionItem value={`${pathPrefix}.${record?.id ? `update-${record.id}` : `create`}`}>
                  <AccordionTrigger
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEditing(true);
                    }}
                  >
                    <EditableOptionLabelButton option={recordOption} />
                  </AccordionTrigger>
                </AccordionItem>
              ) : (
                <>
                  <div className="border border-gray-300 rounded-md p-3">
                    {props.children}
                    <div className="flex justify-between p-4">
                      <Button variant="destructive" id={`deleteButton_${metaDataPathPrefix}`} onClick={clickRemoveRecord}>
                        Remove
                      </Button>
                      <Button variant="default" type="button" id={`confirmButton_${metaDataPathPrefix}`} onClick={clickConfirmEdit}>
                        Confirm
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Accordion>
          ) : (
            <>
              <EmptyFormComponent form={form} field={field} />
            </>
          )}
        </div>
      </RelationshipContext.Provider>
    );
  }

  function EmptyFormComponent(props: { field: string; form: ReturnType<typeof useHasOneForm> }) {
    const { field, form } = props;

    if (canSelectExistingRecord) {
      return <SearchableSingleRelatedModelRecordSelector field={field} form={form} override={{ addNewRecord: form.startCreatingRecord }} />;
    }
    return <CreateNewChildButton form={form} />;
  }

  function CreateNewChildButton(props: { form: ReturnType<typeof useHasOneForm> }) {
    const { startCreatingRecord, relatedModelName } = props.form;
    return (
      <>
        <Button
          type="button"
          variant="default"
          className="flex gap-1 border border-gray-300 rounded-md p-2 cursor-pointer"
          onClick={startCreatingRecord}
        >
          <PlusCircleIcon className="w-4 h-4" />
          <Label className="text-sm font-semibold">Add {relatedModelName}</Label>
        </Button>
      </>
    );
  }

  return autoRelationshipForm(ShadcnHasOneForm);
};

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
