import React from "react";
import type { FieldMetadata } from "../../../metadata.js";
import type { AutoRelationshipInputProps } from "../../interfaces/AutoRelationshipInputProps.js";
import type { ShadcnElements } from "../elements.js";
import type { RelatedModelOptionsProps } from "./relationships/RelatedModelOption.js";
interface ShadcnComboInputProps extends AutoRelationshipInputProps, RelatedModelOptionsProps {
    selectedRecordTag: React.JSX.Element | null;
    path: string;
    id?: string;
    metadata: FieldMetadata;
    allowMultiple?: boolean;
    allowOther?: boolean;
    onAddExtraOption?: (value: string) => void;
    formatOptionText?: (option: string) => React.ReactNode;
    emptyMessage?: string;
    defaultValue?: string;
}
export declare const makeShadcnAutoComboInput: ({ Command, CommandInput, Label, CommandItem, CommandList, CommandEmpty, CommandGroup, Checkbox, }: Pick<ShadcnElements, "Command" | "CommandInput" | "Label" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "CommandGroup">) => (props: ShadcnComboInputProps) => React.JSX.Element;
export {};
