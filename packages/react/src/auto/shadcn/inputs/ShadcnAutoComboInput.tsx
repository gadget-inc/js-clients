import React, { useRef, useState } from "react";
import type { FieldMetadata } from "../../../metadata.js";
import type { AutoRelationshipInputProps } from "../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../elements.js";
import type { RelatedModelOptionsProps} from "./relationships/RelatedModelOption.js";
import { makeRelatedModelOption } from "./relationships/RelatedModelOption.js";

interface ShadcnComboInputProps extends AutoRelationshipInputProps, RelatedModelOptionsProps {
  selectedRecordTag: React.JSX.Element | null;
  path: string;
  metadata: FieldMetadata;
  allowMultiple?: boolean;
}

export const makeShadcnAutoComboInput = ({
  Command,
  CommandInput,
  Label,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
}: Pick<
  ShadcnElements,
  "Command" | "CommandInput" | "Label" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "CommandGroup"
>) => {
  const RelatedModelOption = makeRelatedModelOption({
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandGroup,
    Checkbox,
    Label,
  });

  function ShadcnAutoComboInput(props: ShadcnComboInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const id = `${props.path}-input`;
    const inputLabel = props.label || props.metadata.name;

    return (
      <div>
        <Label htmlFor={id}>{inputLabel}</Label>
        <div className={`relative ${open ? "ring-1 ring-ring rounded-md border" : "border rounded-md"}`}>
          {props.selectedRecordTag && <div className="py-2 px-2 pt-2 pb-1">{props.selectedRecordTag}</div>}
          <Command className="overflow-visible z-50 h-[300px]">
            <CommandInput
              name={props.path}
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder={"Search"}
              className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
            />
            <div className="relative">
              {open && props.options.length > 0 ? (
                <div className="">
                  <RelatedModelOption
                    isLoading={props.isLoading}
                    errorMessage={props.errorMessage}
                    options={props.options}
                    records={props.records}
                    onSelect={props.onSelect}
                    checkSelected={props.checkSelected}
                    allowMultiple={props.allowMultiple}
                  />
                </div>
              ) : null}
            </div>
          </Command>
        </div>
      </div>
    );
  }

  return ShadcnAutoComboInput;
};
