import { CommandSeparator } from "cmdk";
import { EllipsisVerticalIcon, PlusIcon } from "lucide-react";
import React, { useCallback } from "react";
import { useBelongsToForm } from "../../../../useBelongsToForm.js";
import { debounce } from "../../../../utils.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { optionRecordsToLoadCount } from "../../../hooks/useRelatedModel.js";
import type { OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";

export const makeShadcnAutoBelongsToForm = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandInput,
  CommandLoading,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
  ScrollArea,
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
}: Pick<
  ShadcnElements,
  | "Badge"
  | "Button"
  | "Command"
  | "CommandItem"
  | "CommandInput"
  | "CommandLoading"
  | "Label"
  | "CommandList"
  | "CommandEmpty"
  | "CommandGroup"
  | "Checkbox"
  | "DropdownMenu"
  | "DropdownMenuContent"
  | "DropdownMenuItem"
  | "DropdownMenuTrigger"
  | "ScrollArea"
  | "Dialog"
  | "DialogContent"
  | "DialogHeader"
  | "DialogTitle"
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
  });

  function ShadcnAutoBelongsToForm(props: {
    field: string;
    children: React.ReactNode;
    renderSelectedRecord?: (record: Record<string, any>) => React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
  }) {
    const { field } = props;
    const {
      record,
      actionsOpen,
      modalOpen,
      setActionsOpen,
      setModalOpen,
      search,
      searchFilterOptions,
      pagination,
      records,
      isLoading,
      pathPrefix,
      hasRecord,
      recordOption,
      parentName,
      path,
      setValue,
      getValues,
      metadata,
      metaDataPathPrefix,
    } = useBelongsToForm(props);

    const handleScrolledToBottom = useCallback(
      debounce(() => {
        if (pagination.hasNextPage && searchFilterOptions.length >= optionRecordsToLoadCount) {
          pagination.loadNextPage();
        }
      }, 300),
      [pagination, searchFilterOptions.length]
    );

    return (
      <div>
        <div>
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-lg font-medium">{parentName}</h2>
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
                    Edit {parentName.toLocaleLowerCase()}
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
                    Remove {parentName.toLocaleLowerCase()}
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
                      Add {parentName}
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

        <Dialog open={modalOpen} onOpenChange={() => setModalOpen(!modalOpen)}>
          <RelationshipContext.Provider
            value={{ transformPath: (path) => pathPrefix + "." + path, transformMetadataPath: (path) => metaDataPathPrefix + "." + path }}
          >
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle>Add {parentName}</DialogTitle>
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
          </RelationshipContext.Provider>
        </Dialog>
      </div>
    );
  }

  return autoRelationshipForm(ShadcnAutoBelongsToForm);
};
