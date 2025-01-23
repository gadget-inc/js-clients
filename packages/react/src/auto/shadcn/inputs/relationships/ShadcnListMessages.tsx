import React from "react";
import { getErrorMessage } from "../../../../utils.js";
import type { ShadcnElements } from "../../elements.js";

export interface SelectableOptionProps {
  id: string;
  label: React.ReactNode;
  selected?: boolean;
  onSelect?: (id: string) => void;
}

export const makeShadcnListMessages = ({
  CommandList,
  CommandEmpty,
  CommandItem,
}: Pick<ShadcnElements, "CommandList" | "CommandEmpty" | "CommandItem">) => {
  function NoRecordsMessage(props: { message?: string }) {
    const { message = "No records found" } = props;
    return <CommandEmpty>{message}</CommandEmpty>;
  }

  function ShadcnSelectableOption(props: SelectableOptionProps) {
    const { label, id, selected, onSelect } = props;
    const className = selected ? "bg-muted" : "";

    return (
      <CommandItem
        key={id}
        className={className}
        onSelect={() => {
          onSelect?.(id);
        }}
      >
        {label}
      </CommandItem>
    );
  }

  function ListMessage(props: { message: string }) {
    const { message } = props;
    return <CommandEmpty>{message}</CommandEmpty>;
  }

  return {
    ListMessage,
    NoRecordsMessage,
    ShadcnSelectableOption,
    getErrorMessage,
  };
};
