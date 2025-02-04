import React, { useEffect, useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { get } from "../../../../utils.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasOneController } from "../../../hooks/useHasOneController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
import { makeRelatedModelOption } from "./RelatedModelOption.js";

export const makeShadcnHasOneForm = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandInput,
  CommandLoading,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
  ScrollArea,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
}: Pick<
  ShadcnElements,
  | "Badge"
  | "Button"
  | "Command"
  | "CommandItem"
  | "CommandInput"
  | "CommandLoading"
  | "Label"
  | "Input"
  | "CommandList"
  | "CommandEmpty"
  | "CommandGroup"
  | "Checkbox"
  | "DropdownMenu"
  | "DropdownMenuContent"
  | "DropdownMenuItem"
  | "DropdownMenuLabel"
  | "DropdownMenuSeparator"
  | "DropdownMenuTrigger"
  | "ScrollArea"
  | "Popover"
  | "PopoverContent"
  | "PopoverTrigger"
  | "Dialog"
  | "DialogContent"
  | "DialogTrigger"
  | "DialogHeader"
  | "DialogTitle"
  | "DialogDescription"
  | "DialogFooter"
  | "DialogClose"
>) => {
  const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });

  const { RelatedModelOptionPopover, RelatedModelOptionsSearch } = makeRelatedModelOption({
    CommandItem,
    CommandList,
    CommandEmpty,
    Input,
    CommandLoading,
    ScrollArea,
    CommandGroup,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Checkbox,
    Label,
  });

  function ShadcnHasOneForm(props: {
    field: string;
    children: React.ReactNode;
    renderSelectedRecord?: (record: Record<string, any>) => React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
  }) {
    const { field } = props;
    const { path, metadata } = useAutoRelationship({ field });
    const {
      setValue,
      getValues,
      formState: { defaultValues, submitCount, isSubmitSuccessful },
    } = useFormContext();

    const { record, relatedModelOptions } = useHasOneController(props);
    const [actionsOpen, setActionsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const {
      search,
      searchFilterOptions,
      pagination,
      relatedModel: { records, fetching: isLoading },
    } = relatedModelOptions;
    const relationshipContext = useRelationshipContext();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;

    const defaultRecordId = get(defaultValues, path)?.id;

    // each time the form is submitted if the child record is created we need to set the id to the default record id
    // that comes from the response to the action mutation
    useEffect(() => {
      if (isSubmitSuccessful && record && !record.id && !("_link" in record) && !("_unlink" in record) && defaultRecordId) {
        setValue(path + ".id", defaultRecordId);
      }
    }, [record, defaultRecordId, path, setValue, submitCount, isSubmitSuccessful]);

    const primaryLabel = useOptionLabelForField(field, props.primaryLabel);
    const hasRecord = !!(record && !("_unlink" in record && record._unlink));
    const recordOption = record ? getRecordAsOption(record, primaryLabel, props.secondaryLabel, props.tertiaryLabel) : null;

    const childName = metadata.name ?? "Unknown";

    return (
      <RelationshipContext.Provider value={{ transformPath: (path) => pathPrefix + "." + path }}>
        <div>
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-lg font-medium">{childName}</h2>
            {hasRecord && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    value="edit"
                    onSelect={() => {
                      setModalOpen(true);
                    }}
                  >
                    Edit ${childName.toLocaleLowerCase()}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    value="remove"
                    onSelect={() => {
                      const { __typename, id: recordId, ...rest } = record;
                      const nulledValues = Object.fromEntries(Object.keys(rest).map((key) => [key, null]));
                      setValue(path, { ...nulledValues, __typename, _unlink: recordId });
                    }}
                    variant="destructive"
                  >
                    Remove ${childName.toLocaleLowerCase()}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          {hasRecord ? (
            props.renderSelectedRecord ? (
              props.renderSelectedRecord(record)
            ) : (
              <div className="flex flex-row justify-between items-center">
                {renderOptionLabel(recordOption!.label, "primary")}
                {recordOption!.secondaryLabel && renderOptionLabel(recordOption!.secondaryLabel, "secondary")}
                {recordOption!.tertiaryLabel && renderOptionLabel(recordOption!.tertiaryLabel, "tertiary")}
              </div>
            )
          ) : (
            <RelatedModelOptionPopover
              options={searchFilterOptions}
              isLoading={isLoading}
              active={searchOpen}
              activator={
                <RelatedModelOptionsSearch
                  modelName={childName}
                  value={search.value}
                  onChange={search.set}
                  onFocus={() => setSearchOpen(true)}
                />
              }
              onClose={() => setSearchOpen(false)}
              onScrolledToBottom={pagination.loadNextPage}
              actions={[
                <Button
                  key="add-new-record"
                  variant="outline"
                  onClick={() => {
                    alert("add new record");
                  }}
                >
                  Add {childName}
                </Button>,
              ]}
              records={records}
              onSelect={(record) => {
                if (record.id === "add-new-record") {
                  setModalOpen(true);
                } else {
                  setValue(path, { ...record, _link: record.id });
                }
              }}
            />
          )}
        </div>
        <Dialog open={modalOpen} onOpenChange={() => setModalOpen(!modalOpen)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add {childName}</DialogTitle>
            </DialogHeader>
            <div>{props.children}</div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </RelationshipContext.Provider>
    );
  }

  return ShadcnHasOneForm;
};
