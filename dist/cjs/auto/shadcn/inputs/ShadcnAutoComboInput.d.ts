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
    hideLabel?: boolean;
    allowMultiple?: boolean;
    allowOther?: boolean;
    onAddExtraOption?: (value: string) => void;
    formatOptionText?: (option: string) => React.ReactNode;
    emptyMessage?: string;
    defaultValue?: string;
    onScrolledToBottom?: () => void;
    willLoadMoreOptions?: boolean;
    onChange?: (value: string) => void;
}
export declare const makeShadcnAutoComboInput: ({ Command, CommandInput, Label, CommandItem, CommandList, CommandLoading, CommandEmpty, CommandGroup, Checkbox, ScrollArea, }: Pick<ShadcnElements, "Command" | "CommandInput" | "Label" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "ScrollArea" | "CommandLoading">) => (props: ShadcnComboInputProps) => React.JSX.Element;
export {};
