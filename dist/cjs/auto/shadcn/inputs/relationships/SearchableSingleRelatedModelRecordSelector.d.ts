import { default as React } from "react";
import { type useSingleRelatedRecordRelationshipForm } from "src/useSingleRelatedRecordRelationshipForm.js";
import type { ShadcnElements } from "../../elements.js";
export declare const makeSearchableSingleRelatedModelRecordSelector: ({ Command, CommandItem, CommandInput, Label, CommandList, CommandEmpty, CommandGroup, Checkbox, }: Pick<ShadcnElements, "Command" | "CommandItem" | "CommandInput" | "Label" | "CommandList" | "CommandEmpty" | "CommandGroup" | "Checkbox">) => (props: {
    form: ReturnType<typeof useSingleRelatedRecordRelationshipForm>;
    field: string;
    override?: {
        addNewRecord?: () => void;
    };
}) => React.JSX.Element;
