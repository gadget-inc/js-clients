import { ChevronsUpDown, PlusIcon, X } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useHasManyThroughForm } from "../../../../useHasManyThroughForm.js";
import { debounce } from "../../../../utils.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { RelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { getRecordAsOption } from "../../../hooks/useRelatedModel.js";
import type { AutoRelationshipFormProps, DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnRenderOptionLabel } from "../../utils.js";
import { makeShadcnAutoComboInput } from "../ShadcnAutoComboInput.js";

export const makeShadcnAutoHasManyThroughForm = ({
  Badge,
  Button,
  Label,
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandLoading,
  CommandGroup,
  Checkbox,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
}: Pick<
  ShadcnElements,
  | "Badge"
  | "Button"
  | "Label"
  | "Command"
  | "CommandInput"
  | "CommandItem"
  | "CommandList"
  | "CommandEmpty"
  | "CommandLoading"
  | "CommandGroup"
  | "Checkbox"
  | "ScrollArea"
  | "Popover"
  | "PopoverContent"
  | "PopoverTrigger"
>) => {
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

  const renderOptionLabel = makeShadcnRenderOptionLabel({ Label, Badge, Button });

  const SiblingOption = (props: { option: DisplayedRecordOption; onSelect: (option: DisplayedRecordOption) => void }) => {
    const { option, onSelect } = props;

    return (
      <CommandItem
        onSelect={() => {
          onSelect(option);
        }}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row items-center gap-2">
            {renderOptionLabel(option.primary, "primary")}
            {option.secondary && renderOptionLabel(option.secondary, "secondary")}
          </div>
          <PlusIcon className="w-4 h-4 shrink-0" />
        </div>
      </CommandItem>
    );
  };

  function ShadcnAutoHasManyThroughForm(props: AutoRelationshipFormProps) {
    const [open, setOpen] = useState(false);
    const {
      field,
      append,
      remove,
      joinRecords,
      metadata,
      primaryLabel,
      hasChildForm,
      listboxId,
      pathPrefix,
      metaDataPathPrefix,
      siblingModelName,
      siblingRecordsLoading,
      siblingRecords,
      siblingPagination,
      search,
      joinModelField,
      joinModelApiIdentifier,
      siblingModelOptions,
      inverseRelatedModelField,
      fieldArray,
    } = useHasManyThroughForm(props);

    const handleScrolledToBottom = useCallback(
      debounce(() => {
        if (siblingPagination.hasNextPage && siblingModelOptions.length) {
          siblingPagination.loadNextPage();
        }
      }, 300),
      [siblingPagination, siblingModelOptions.length]
    );

    return (
      <div className="flex flex-col gap-2 ">
        <div className="flex justify-between flex-row">
          <div>{props.label ?? <Label>{siblingModelName}</Label>}</div>
          <div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  aria-controls={listboxId}
                  className="w-[300px] flex flex-row items-center justify-between"
                >
                  <Label className="truncate flex-grow text-left">Add {siblingModelName ?? "related model"}</Label>
                  <ChevronsUpDown className="opacity-50 w-5 h-5 flex-shrink-0" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] bg-white p-0">
                <ShadcnComboInput
                  selectedRecordTag={null}
                  path={""}
                  hideLabel
                  metadata={metadata}
                  field={field}
                  options={siblingModelOptions}
                  onSelect={() => void 0}
                  willLoadMoreOptions={siblingPagination.hasNextPage && siblingModelOptions.length ? true : false}
                  isLoading={siblingRecordsLoading}
                  errorMessage={""}
                  records={siblingRecords}
                  onScrolledToBottom={handleScrolledToBottom}
                  onChange={search.set}
                  renderOption={(option) => (
                    <SiblingOption
                      onSelect={(option) => {
                        const record = siblingRecords?.find((record) => record.id === option.id) ?? { id: option.id };
                        const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
                        inverseRelatedModelField &&
                          append({ [inverseRelatedModelField]: { ...recordWithoutTimestamps, _link: record.id } });
                      }}
                      option={option}
                    />
                  )}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {joinRecords.length > 0 ? (
          <div className="flex flex-col gap-2">
            {joinRecords.map(([fieldKey, idx, record]) => {
              const siblingRecord = inverseRelatedModelField && record[inverseRelatedModelField];

              const siblingOption = getRecordAsOption(siblingRecord, {
                primary: primaryLabel,
                secondary: props.displayRecord?.secondary,
                tertiary: props.displayRecord?.tertiary,
              });

              return (
                <div className="flex items-center w-full border border-gray-300 rounded-md " key={fieldKey}>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex-1 p-2">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            {renderOptionLabel(siblingOption.primary, "primary")}
                            {siblingOption?.tertiary && renderOptionLabel(siblingOption.tertiary, "tertiary")}
                          </div>
                          {siblingOption?.secondary && renderOptionLabel(siblingOption.secondary, "secondary")}
                        </div>
                        <Button
                          id={`deleteButton_${pathPrefix}.${idx}`}
                          className="border ml-auto"
                          variant="outline"
                          type="button"
                          size="icon"
                          onClick={() => remove(idx)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    {hasChildForm && (
                      <div
                        className="flex-1 p-2 border-t border-gray-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                      >
                        <RelationshipContext.Provider
                          value={{
                            transformPath: (path) => `${joinModelField}.${idx}.${path.replace(`${joinModelApiIdentifier}.`, "")}`,
                            transformMetadataPath: (path) => `${metaDataPathPrefix}.${path}`,
                            fieldArray,
                            hasManyThrough: { joinModelApiIdentifier, inverseRelatedModelField },
                          }}
                        >
                          {props.children}
                        </RelationshipContext.Provider>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center border border-gray-300 rounded-md p-2 mt-4">
            <Label className="text-sm text-gray-500">No {siblingModelName} yet</Label>
          </div>
        )}
      </div>
    );
  }

  return autoRelationshipForm(ShadcnAutoHasManyThroughForm);
};
