import { LoaderIcon } from "lucide-react";
import React, { useEffect, useMemo, useRef } from "react";
import type { DisplayedRecordOption } from "../../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../../elements.js";
import { makeShadcnListMessages } from "./ShadcnListMessages.js";

export type RelatedModelOptionsProps = {
  options: DisplayedRecordOption[];
  records?: Record<string, any>[];
  isLoading?: boolean;
  errorMessage?: string;
  checkSelected?: (id: string) => boolean;
  onSelect: (record: Record<string, any>) => void;
  actions?: React.ReactNode[];
  renderOption?: (option: DisplayedRecordOption) => React.ReactNode;
  allowMultiple?: boolean;
  allowOther?: boolean;
  searchValue?: string;
  onAddExtraOption?: (value: string) => void;
  formatOptionText?: (option: string) => React.ReactNode;
  setSearchValue?: (value: string) => void;
  emptyMessage?: string;
  canLoadMore?: boolean;
  onLoadMore?: () => void;
};

export const makeRelatedModelOption = (
  elements: Pick<ShadcnElements, "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "Label">
) => {
  const { CommandList, CommandEmpty, CommandGroup, CommandItem } = elements;

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
              label={option.primary}
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

    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    useDetectScrolledToBottom({ loadMoreRef, onLoadMore: props.onLoadMore });

    return (
      <CommandList className="absolute top-full w-full bg-background border shadow-md rounded-md z-50">
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
        {props.canLoadMore && (
          <CommandItem
            ref={loadMoreRef}
            key="intersection-trigger"
            className="p-1 w-full flex items-center justify-center intersection-trigger"
          >
            <LoaderIcon className="w-4 h-4 animate-spin" />
          </CommandItem>
        )}
      </CommandList>
    );
  }

  RelatedModelOption.displayName = "RelatedModelOption";

  return { RelatedModelOption };
};

const useDetectScrolledToBottom = (props: { loadMoreRef: React.RefObject<HTMLDivElement | null>; onLoadMore?: () => void }) => {
  const { loadMoreRef } = props;
  useEffect(() => {
    if (!loadMoreRef?.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          props.onLoadMore?.();
        }
      },
      {
        root: null, // null to use viewport as root
        threshold: 1,
      }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [props, loadMoreRef, props.onLoadMore]);
};
