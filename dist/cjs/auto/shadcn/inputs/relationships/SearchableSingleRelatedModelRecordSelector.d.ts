import { default as React } from "react";
import { type useSingleRelatedRecordRelationshipForm } from "src/useSingleRelatedRecordRelationshipForm.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeSearchableSingleRelatedModelRecordSelector: ({ Command, CommandItem, CommandInput, CommandLoading, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, ScrollArea, }: Pick<ShadcnElements, "Command" | "CommandItem" | "CommandInput" | "CommandLoading" | "Label" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox" | "ScrollArea">) => (props: {
    form: ReturnType<typeof useSingleRelatedRecordRelationshipForm>;
    field: string;
    override?: {
        addNewRecord?: () => void;
    };
}) => React.JSX.Element;
