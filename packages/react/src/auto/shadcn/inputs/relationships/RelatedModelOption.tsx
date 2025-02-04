import { LoaderIcon } from "lucide-react";
import React, { useMemo } from "react";
import type { Option } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnListMessages } from "./ShadcnListMessages.js";

export type RelatedModelOptionsProps = {
  options: Option[];
  records?: Record<string, any>[];
  isLoading?: boolean;
  errorMessage?: string;
  checkSelected?: (id: string) => boolean;
  onSelect: (record: Record<string, any>) => void;
  actions?: React.ReactNode[];
  renderOption?: (option: Option) => React.ReactNode;
  allowMultiple?: boolean;
  allowOther?: boolean;
  searchValue?: string;
  onAddExtraOption?: (value: string) => void;
  formatOptionText?: (option: string) => React.ReactNode;
  setSearchValue?: (value: string) => void;
  emptyMessage?: string;
  loadMoreRef?: React.RefObject<HTMLDivElement>;
};

export const makeRelatedModelOption = (
  elements: Pick<
    ShadcnElements,
    | "Input"
    | "CommandItem"
    | "CommandList"
    | "CommandEmpty"
    | "ScrollArea"
    | "CommandGroup"
    | "Checkbox"
    | "Label"
    | "CommandLoading"
    | "Popover"
    | "PopoverContent"
    | "PopoverTrigger"
  >
) => {
  const { CommandList, CommandEmpty, CommandGroup, CommandItem, Popover, PopoverContent, PopoverTrigger, ScrollArea, Input } = elements;

  function RelatedModelOption(props: RelatedModelOptionsProps) {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;

    const { NoRecordsMessage, ShadcnSelectableOption, getErrorMessage, AddExtraOption } = makeShadcnListMessages(elements);

    const listBoxOptions = useMemo(
      () => [
        ...(actions ?? []),
        ...options.map((option) => {
          return props.renderOption ? (
            props.renderOption(option)
          ) : (
            <ShadcnSelectableOption
              {...option}
              selected={checkSelected?.(option.id) ?? false}
              allowMultiple={props.allowMultiple}
              onSelect={(id) => {
                const record = records?.find((record) => record.id === id) ?? { id };
                const { createdAt: _createdAt, updatedAt: _updatedAt, ...recordWithoutTimestamps } = record;
                onSelect(recordWithoutTimestamps);
              }}
              key={option.id}
            />
          );
        }),
      ],
      [actions, options, props.renderOption, records, checkSelected, onSelect]
    );

    return (
      <CommandList>
        {isLoading && <CommandEmpty>Loading...</CommandEmpty>}
        {listBoxOptions.length > 0 ? <CommandGroup>{listBoxOptions}</CommandGroup> : null}
        {props.allowOther && props.searchValue && (
          <AddExtraOption
            message={`Add "${props.searchValue}"`}
            onSelect={() => {
              props.onAddExtraOption?.(props.searchValue ?? "");
              props.setSearchValue?.("");
            }}
          />
        )}
        {errorMessage ? (
          <NoRecordsMessage message={getErrorMessage(errorMessage)} />
        ) : (
          !isLoading && <NoRecordsMessage message={props.emptyMessage ?? undefined} />
        )}
        {props.loadMoreRef && (
          <CommandItem
            ref={props.loadMoreRef}
            key="intersection-trigger"
            className="p-1 w-full flex items-center justify-center intersection-trigger"
          >
            <LoaderIcon className="w-4 h-4 animate-spin" />
          </CommandItem>
        )}
      </CommandList>
    );
  }

  const StopPropagation = ({ children }: React.PropsWithChildren<any>) => {
    const stopEventPropagation = (event: React.MouseEvent | React.TouchEvent) => {
      event.stopPropagation();
    };

    return (
      <div onClick={stopEventPropagation} onTouchStart={stopEventPropagation}>
        {children}
      </div>
    );
  };

  function RelatedModelOptionPopover(
    props: RelatedModelOptionsProps & {
      active: boolean;
      activator: React.ReactElement;
      onClose: () => void;
      search?: React.ReactNode;
      onScrolledToBottom?: () => void;
    }
  ) {
    //TODO: Add a scroll area to the popover content
    return (
      <Popover open={props.active} onOpenChange={props.onClose}>
        <PopoverTrigger asChild>{props.activator}</PopoverTrigger>
        <PopoverContent>
          {props.search}
          <ScrollArea>
            <RelatedModelOption
              options={props.options}
              records={props.records}
              onSelect={props.onSelect}
              isLoading={props.isLoading}
              renderOption={props.renderOption}
              actions={props.actions}
            />
          </ScrollArea>
        </PopoverContent>
      </Popover>
    );
  }

  function RelatedModelOptionsSearch(props: {
    modelName: string;
    label?: string;
    placeholder?: string;
    autoComplete?: string;
    value?: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
  }) {
    const { modelName, label, placeholder, autoComplete, value, onChange, onFocus } = props;

    return (
      <div style={{ padding: "12px" }}>
        <StopPropagation>
          <Input
            placeholder={placeholder ?? `Find ${modelName}`}
            autoComplete={autoComplete ?? "off"}
            defaultValue={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => onFocus?.()}
          />
        </StopPropagation>
      </div>
    );
  }

  RelatedModelOption.displayName = "RelatedModelOption";

  return { RelatedModelOption, RelatedModelOptionPopover, RelatedModelOptionsSearch };
};
