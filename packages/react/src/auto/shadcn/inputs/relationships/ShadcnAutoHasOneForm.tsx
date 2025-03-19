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
}: Pick<
  ShadcnElements,
  "Badge" | "Button" | "Command" | "CommandItem" | "CommandInput" | "Label" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox"
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
    const { field, label } = props;
    const form = useHasOneForm(props);
    const {
      isEditing,
      metadata,
      setIsEditing,
      pathPrefix,
      metaDataPathPrefix,
      hasRecord,
      recordOption,
      isCreatingRecord,
      confirmEdit,
      removeRecord,
    } = form;

    const clickConfirmEdit = useCallback(() => confirmEdit(), [confirmEdit]);
    const clickRemoveRecord = useCallback(() => removeRecord(), [removeRecord]);

    return (
      <RelationshipContext.Provider
        value={{ transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path }}
      >
        <div>
          <div className="flex flex-row justify-between items-center mb-2">
            {label ?? <h2 className="text-lg font-medium">{metadata.name}</h2>}
          </div>
          {hasRecord || isCreatingRecord ? (
            <>
              {!isEditing ? (
                <>
                  <ButtonWithLabel onClick={() => setIsEditing(true)}>
                    <EditableOptionLabelButton option={recordOption} />
                  </ButtonWithLabel>
                </>
              ) : (
                <>
                  <div className="border rounded-md p-3">
                    {props.children}
                    <div className="flex justify-between pt-4">
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
            </>
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
        <ButtonWithLabel onClick={startCreatingRecord}>
          <PlusCircleIcon className="w-4 h-4" />
          <Label className="text-sm font-semibold cursor-pointer">Add {relatedModelName}</Label>
        </ButtonWithLabel>
      </>
    );
  }

  function ButtonWithLabel(props: { onClick: () => void; children: React.ReactNode }) {
    return (
      <>
        <Button
          type="button"
          variant="outline"
          className={`flex w-full h-fit justify-start gap-2 border rounded-md px-4 py-3 cursor-pointer`}
          onClick={props.onClick}
        >
          {props.children}
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
