import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  onScrolledToBottom?: () => void;
};

export const makeRelatedModelOption = (
  elements: Pick<ShadcnElements, "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "Label">
) => {
  const { CommandList, CommandEmpty, CommandGroup } = elements;

  const IntersectionObserverComponent = ({
    onIntersect,
    listBoxRef,
  }: {
    onIntersect: () => void;
    listBoxRef: React.RefObject<HTMLDivElement>;
  }) => {
    const [isFetching, setIsFetching] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const handleIntersection = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting && !isFetching) {
          setIsFetching(true);
        }
      },
      [isFetching]
    );

    const handleFetch = useCallback(() => {
      if (isFetching === true) {
        listBoxRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        onIntersect();
        setIsFetching(false);
      }
    }, [isFetching, onIntersect, listBoxRef]);

    useEffect(() => {
      handleFetch();
    }, [handleFetch]);

    useEffect(() => {
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, []);

    if (isFetching) {
      return null;
    }

    return (
      <div
        ref={(el) => {
          if (!el) return;
          observerRef.current = new IntersectionObserver(handleIntersection, { threshold: 1.0 });
          observerRef.current.observe(el);
        }}
        className="h-4"
      />
    );
  };

  function RelatedModelOption(props: RelatedModelOptionsProps) {
    const { checkSelected, onSelect, isLoading, errorMessage, options, records, actions } = props;

    const listBoxRef = useRef<HTMLDivElement>(null);

    const { ListMessage, NoRecordsMessage, ShadcnSelectableOption, getErrorMessage, AddExtraOption } = makeShadcnListMessages(elements);

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

    const handleScrollAndFetch = () => {
      if (listBoxRef.current) {
        props.onScrolledToBottom?.();
      }
    };

    // return (
    //   <div ref={listBoxRef}>
    //     <CommandList>
    //       <CommandGroup>
    //         {listBoxOptions}
    //         {isLoading ? (
    //           <AddExtraOption message="Loading..." />
    //         ) : (
    //           <IntersectionObserverComponent onIntersect={handleScrollAndFetch} listBoxRef={listBoxRef} />
    //         )}
    //       </CommandGroup>
    //     </CommandList>
    //   </div>
    // );

    console.log("listBoxOptions", listBoxOptions, isLoading);

    return (
      <CommandList>
        {isLoading ? (
          <CommandEmpty>Loading...</CommandEmpty>
        ) : props.allowOther ? (
          <ListMessage
            message={`Add "${props.searchValue}"`}
            onSelect={() => {
              props.onAddExtraOption?.(props.searchValue ?? "");
              props.setSearchValue?.("");
            }}
          />
        ) : (
          <NoRecordsMessage message={props.emptyMessage} />
        )}
        {listBoxOptions.length ? (
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
            <IntersectionObserverComponent onIntersect={handleScrollAndFetch} listBoxRef={listBoxRef} />
          </CommandGroup>
        ) : errorMessage ? (
          <ListMessage message={getErrorMessage(errorMessage)} />
        ) : (
          <NoRecordsMessage />
        )}
      </CommandList>
    );
  }

  RelatedModelOption.displayName = "RelatedModelOption";

  return RelatedModelOption;
};
