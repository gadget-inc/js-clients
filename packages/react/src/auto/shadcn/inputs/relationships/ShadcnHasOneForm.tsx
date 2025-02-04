import { CommandSeparator } from "cmdk";
import { EllipsisVerticalIcon, PlusIcon } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { debounce, get } from "../../../../utils.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext, useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasOneController } from "../../../hooks/useHasOneController.js";
import { getRecordAsOption, optionRecordsToLoadCount, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";

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
  DialogTrigger,
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

  const ShadcnComboInput = makeShadcnAutoComboInput({
    Command,
    CommandInput,
    Label,
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandLoading,
    CommandGroup,
    Checkbox,
    ScrollArea,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Input,
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

    const handleScrolledToBottom = useCallback(
      debounce(() => {
        if (pagination.hasNextPage && searchFilterOptions.length >= optionRecordsToLoadCount) {
          pagination.loadNextPage();
        }
      }, 300),
      [pagination, searchFilterOptions.length]
    );

    return (
      <RelationshipContext.Provider value={{ transformPath: (path) => pathPrefix + "." + path }}>
        <div>
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-lg font-medium">{childName}</h2>
            {hasRecord && (
              <DropdownMenu open={actionsOpen} onOpenChange={setActionsOpen}>
                <DropdownMenuTrigger data-testid={`${path}-dropdown-menu-trigger`} asChild>
                  <Button variant="ghost">
                    <EllipsisVerticalIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem
                    value="edit"
                    onSelect={() => {
                      setModalOpen(true);
                      setActionsOpen(false);
                    }}
                  >
                    Edit {childName.toLocaleLowerCase()}
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
                    Remove {childName.toLocaleLowerCase()}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          {hasRecord ? (
            props.renderSelectedRecord ? (
              props.renderSelectedRecord(record)
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between gap-2 mt-2">
                  {renderOptionLabel(recordOption!.label, "primary")}
                  {recordOption!.tertiaryLabel && renderOptionLabel(recordOption!.tertiaryLabel, "tertiary")}
                </div>
                {recordOption!.secondaryLabel && renderOptionLabel(recordOption!.secondaryLabel, "secondary")}
              </div>
            )
          ) : (
            <ShadcnComboInput
              selectedRecordTag={null}
              path={path}
              hideLabel
              metadata={metadata}
              field={field}
              options={searchFilterOptions}
              onSelect={(record) => {
                setValue(path, { ...record, _link: record.id });
              }}
              isLoading={isLoading}
              errorMessage={""}
              actions={[
                <CommandGroup key={"add-record"}>
                  <CommandItem
                    onSelect={() => {
                      setModalOpen(true);
                    }}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <PlusIcon className="w-4 h-4" />
                      Add {childName}
                    </div>
                  </CommandItem>
                  <CommandSeparator />
                </CommandGroup>,
              ]}
              records={records}
              checkSelected={() => false}
              allowMultiple={false}
              willLoadMoreOptions={pagination.hasNextPage && searchFilterOptions.length >= optionRecordsToLoadCount}
              onScrolledToBottom={handleScrolledToBottom}
              onChange={search.set}
              defaultValue={search.value}
            />
          )}
        </div>
        {
          <Dialog open={modalOpen} onOpenChange={() => setModalOpen(!modalOpen)}>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle>Add {childName}</DialogTitle>
              </DialogHeader>
              <div>{props.children}</div>
              <DialogFooter className="">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button
                  type="button"
                  variant="default"
                  onClick={() => {
                    const { _unlink, _link, ...rest } = getValues(path);
                    setValue(path, rest);

                    setModalOpen(false);
                  }}
                >
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      </RelationshipContext.Provider>
    );
  }

  return autoRelationshipForm(ShadcnHasOneForm);
};
