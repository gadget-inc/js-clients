import { ChevronsUpDown, PlusIcon, X } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useFormContext } from "../../../../useActionForm.js";
import { debounce } from "../../../../utils.js";
import { extractPathsFromChildren } from "../../../AutoForm.js";
import { autoRelationshipForm } from "../../../AutoInput.js";
import { useAutoRelationship, useRelationshipContext } from "../../../hooks/useAutoRelationship.js";
import { useHasManyThroughController } from "../../../hooks/useHasManyThroughController.js";
import { getRecordAsOption, useOptionLabelForField } from "../../../hooks/useRelatedModel.js";
import type { Option, OptionLabel } from "../../../interfaces/AutoRelationshipInputProps.js";
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

  const SiblingOption = (props: { option: Option; onSelect: (option: Option) => void }) => {
    const { option, onSelect } = props;

    return (
      <CommandItem
        onSelect={() => {
          onSelect(option);
        }}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row items-center gap-2">
            {renderOptionLabel(option.label, "primary")}
            {option.secondaryLabel && renderOptionLabel(option.secondaryLabel, "secondary")}
          </div>
          <PlusIcon className="w-4 h-4 shrink-0" />
        </div>
      </CommandItem>
    );
  };

  function ShadcnAutoHasManyThroughForm(props: {
    field: string;
    label?: React.ReactNode;
    children: React.ReactNode;
    primaryLabel?: OptionLabel;
    secondaryLabel?: OptionLabel;
    tertiaryLabel?: OptionLabel;
  }) {
    const { field, children } = props;
    const { metadata } = useAutoRelationship({ field });
    const { setValue } = useFormContext();
    const [open, setOpen] = useState(false);
    const childPaths = children && extractPathsFromChildren(children);
    const hasChildForm = childPaths && childPaths.length > 0;

    const { fieldArrayPath, fieldArray, records, relatedModelOptions, inverseRelatedModelField, joinModelField, joinModelApiIdentifier } =
      useHasManyThroughController(props);

    const { fields, append, remove } = fieldArray;
    const relationshipContext = useRelationshipContext();
    const pathPrefix = relationshipContext?.transformPath ? relationshipContext.transformPath(props.field) : props.field;
    const metaDataPathPrefix = relationshipContext?.transformMetadataPath
      ? relationshipContext.transformMetadataPath(props.field)
      : pathPrefix;

    useEffect(() => {
      for (const [index, field] of fields.entries()) {
        if (
          inverseRelatedModelField &&
          (field as any)[inverseRelatedModelField] &&
          (field as any)[inverseRelatedModelField].id &&
          !("_link" in field)
        ) {
          // use setValue so that we don't trigger a re-render
          setValue(`${fieldArrayPath}.${index}.${inverseRelatedModelField}._link`, (field as any)[inverseRelatedModelField].id);
        }
      }
    }, [setValue, inverseRelatedModelField, fields, fieldArrayPath]);

    const [addingSibling, setAddingSibling] = useState(false);
    const listboxId = `HasManyThroughListboxInPopover-${field}`;

    if (metadata?.configuration.__typename !== "GadgetHasManyThroughConfig") {
      throw new Error("PolarisAutoHasManyThroughForm can only be used for HasManyThrough fields");
    }

    const {
      search,
      searchFilterOptions: siblingModelOptions,
      relatedModel: { fetching: siblingRecordsLoading, records: siblingRecords },
      pagination: siblingPagination,
    } = relatedModelOptions;
    const siblingModelName = metadata.name ?? "Unknown";

    const joinRecords = useMemo(() => {
      return fields.flatMap((field, idx): [string, number, Record<string, any>][] => {
        const record = records[idx];

        if (!record) {
          return [];
        }

        return [[field._fieldArrayKey, idx, record]];
      });
    }, [fields, records]);

    const primaryLabel = useOptionLabelForField(field, props.primaryLabel);

    const handleScrolledToBottom = useCallback(
      debounce(() => {
        if (siblingPagination.hasNextPage && siblingModelOptions.length) {
          siblingPagination.loadNextPage();
        }
      }, 300),
      [siblingPagination, siblingModelOptions.length]
    );

    useEffect(() => {
      if (open) {
        setAddingSibling((prev) => !prev);
      } else {
        setAddingSibling(false);
      }
    }, [open]);

    return (
      <div className="flex flex-col gap-2 ">
        <div className="flex justify-between flex-row">
          <div>{props.label ?? <Label>{siblingModelName}</Label>}</div>
          <div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  // onClick={() => setAddingSibling((prev) => !prev)}
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
                  onSelect={() => {}}
                  willLoadMoreOptions={siblingPagination.hasNextPage && siblingModelOptions.length ? true : false}
                  isLoading={siblingRecordsLoading}
                  errorMessage={""}
                  records={siblingRecords}
                  onScrolledToBottom={handleScrolledToBottom}
                  onChange={search.set}
                  renderOption={(option) => (
                    <SiblingOption
                      onSelect={(option) => {
                        const record = records?.find((record) => record.id === option.id) ?? { id: option.id };
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

              const siblingOption = getRecordAsOption(siblingRecord, primaryLabel, props.secondaryLabel, props.tertiaryLabel);

              return (
                <div className="flex flex-row gap-2 items-center" key={fieldKey}>
                  <div className="flex flex-col gap-2 p-4">
                    <div className="flex flex-row gap-2 justify-between">
                      <div className="flex flex-row gap-2">
                        {renderOptionLabel(siblingOption.label, "primary")}
                        {siblingOption?.tertiaryLabel && renderOptionLabel(siblingOption.tertiaryLabel, "tertiary")}
                      </div>
                      <div className="flex flex-row gap-2">
                        <Button
                          id={`deleteButton_${pathPrefix}.${idx}`}
                          className="border"
                          variant="outline"
                          size="icon"
                          onClick={() => remove(idx)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }

  return autoRelationshipForm(ShadcnAutoHasManyThroughForm);
};
