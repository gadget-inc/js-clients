import { LoaderIcon } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
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
  listBoxRef?: React.RefObject<HTMLDivElement>;
  onScrolledToBottom?: () => void;
};

export const makeRelatedModelOption = (
  elements: Pick<ShadcnElements, "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "Label" | "CommandLoading">
) => {
  const { CommandList, CommandEmpty, CommandGroup, CommandItem } = elements;

  const IntersectionObserverComponent = ({
    onIntersect,
    listBoxRef,
  }: {
    onIntersect: () => void;
    listBoxRef: React.RefObject<HTMLDivElement>;
  }) => {
    const observerRef = useRef<any>(null);

    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        console.log("intersecting");
        onIntersect();
      }
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 1.0,
        root: listBoxRef.current,
      });

      const element = observerRef.current;
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    }, [handleIntersection]);

    return (
      <CommandItem
        ref={observerRef}
        key="intersection-trigger"
        className="p-1 w-full flex items-center justify-center intersection-trigger"
      >
        <LoaderIcon className="w-4 h-4 animate-spin" />
      </CommandItem>
    );
  };

  function RelatedModelOption(props: RelatedModelOptionsProps) {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;

    const { ListMessage, NoRecordsMessage, ShadcnSelectableOption, getErrorMessage, AddExtraOption } = useMemo(
      () => makeShadcnListMessages(elements),
      [props.onSelect]
    );

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
        {listBoxOptions.length > 0 ? (
          <CommandGroup>
            {listBoxOptions}
            {props.allowOther && props.searchValue && (
              <AddExtraOption
                message={`Add "${props.searchValue}"`}
                onSelect={() => {
                  props.onAddExtraOption?.(props.searchValue ?? "");
                  props.setSearchValue?.("");
                }}
              />
            )}
          </CommandGroup>
        ) : errorMessage ? (
          <ListMessage message={getErrorMessage(errorMessage)} />
        ) : (
          <NoRecordsMessage />
        )}
        {props.listBoxRef && (
          <IntersectionObserverComponent
            onIntersect={() => {
              props.onScrolledToBottom?.();
            }}
            listBoxRef={props.listBoxRef}
          />
        )}
      </CommandList>
    );
  }

  RelatedModelOption.displayName = "RelatedModelOption";

  return RelatedModelOption;
};
